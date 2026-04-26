import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import type { MortgageInputs } from "../App";

interface MortgageCalculatorProps {
  inputs: MortgageInputs;
  setInputs: React.Dispatch<React.SetStateAction<MortgageInputs>>;
}

export const MortgageCalculator = ({ inputs, setInputs }: MortgageCalculatorProps) => {
  const [downPaymentMode, setDownPaymentMode] = useState<"amount" | "percent">("amount");

  const handleInputChange = (field: keyof MortgageInputs, value: string) => {
    const numValue = parseFloat(value) || 0;
    setInputs((prev) => ({ ...prev, [field]: numValue }));
  };

  const handleDownPaymentChange = (value: string) => {
    const numValue = parseFloat(value) || 0;
    if (downPaymentMode === "amount") {
      setInputs((prev) => ({
        ...prev,
        downPaymentAmount: numValue,
        downPaymentPercent: inputs.homePrice > 0 ? (numValue / inputs.homePrice) * 100 : 0,
      }));
    } else {
      setInputs((prev) => ({
        ...prev,
        downPaymentPercent: numValue,
        downPaymentAmount: (inputs.homePrice * numValue) / 100,
      }));
    }
  };

  const effectiveDownPayment = downPaymentMode === "amount" 
    ? inputs.downPaymentAmount 
    : (inputs.homePrice * inputs.downPaymentPercent) / 100;

  const downPaymentPercentValue = inputs.homePrice > 0 
    ? (effectiveDownPayment / inputs.homePrice) * 100 
    : 0;

  const showPMIWarning = downPaymentPercentValue < 20;

  return (
    <Card className="border-slate-200 shadow-md">
      <CardHeader className="bg-slate-50 border-b border-slate-200">
        <CardTitle className="text-xl text-slate-800">Enter Your Details</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-5">
        {/* Home Price */}
        <div>
          <Label htmlFor="homePrice" className="mb-2 block">Home Price</Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
            <Input
              id="homePrice"
              type="number"
              value={inputs.homePrice || ""}
              onChange={(e) => handleInputChange("homePrice", e.target.value)}
              className="pl-7"
              min="0"
              aria-describedby="homePriceHelp"
            />
          </div>
        </div>

        {/* Down Payment */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <Label htmlFor="downPayment">Down Payment</Label>
            <div className="flex rounded-md overflow-hidden border border-slate-300">
              <button
                type="button"
                onClick={() => setDownPaymentMode("amount")}
                className={`px-3 py-1 text-sm ${
                  downPaymentMode === "amount"
                    ? "bg-emerald-600 text-white"
                    : "bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                $
              </button>
              <button
                type="button"
                onClick={() => setDownPaymentMode("percent")}
                className={`px-3 py-1 text-sm ${
                  downPaymentMode === "percent"
                    ? "bg-emerald-600 text-white"
                    : "bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                %
              </button>
            </div>
          </div>
          <div className="relative">
            {downPaymentMode === "amount" && (
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
            )}
            <Input
              id="downPayment"
              type="number"
              value={downPaymentMode === "amount" ? inputs.downPaymentAmount || "" : inputs.downPaymentPercent || ""}
              onChange={(e) => handleDownPaymentChange(e.target.value)}
              className={downPaymentMode === "amount" ? "pl-7" : ""}
              min="0"
            />
            {downPaymentMode === "percent" && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">%</span>
            )}
          </div>
          {showPMIWarning && (
            <p className="text-amber-600 text-sm mt-2 flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Down payment under 20% may require PMI
            </p>
          )}
        </div>

        {/* Loan Term */}
        <div>
          <Label htmlFor="loanTerm" className="mb-2 block">Loan Term (Years)</Label>
          <select
            id="loanTerm"
            value={inputs.loanTermYears}
            onChange={(e) => handleInputChange("loanTermYears", e.target.value)}
            className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <option value="10">10 years</option>
            <option value="15">15 years</option>
            <option value="20">20 years</option>
            <option value="25">25 years</option>
            <option value="30">30 years</option>
          </select>
        </div>

        {/* Interest Rate */}
        <div>
          <Label htmlFor="interestRate" className="mb-2 block">Interest Rate (%)</Label>
          <div className="relative">
            <Input
              id="interestRate"
              type="number"
              step="0.125"
              value={inputs.interestRate || ""}
              onChange={(e) => handleInputChange("interestRate", e.target.value)}
              className="pr-8"
              min="0"
              max="30"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">%</span>
          </div>
        </div>

        {/* Property Tax */}
        <div>
          <Label htmlFor="propertyTax" className="mb-2 block">Annual Property Tax</Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
            <Input
              id="propertyTax"
              type="number"
              value={inputs.annualPropertyTax || ""}
              onChange={(e) => handleInputChange("annualPropertyTax", e.target.value)}
              className="pl-7"
              min="0"
            />
          </div>
        </div>

        {/* Home Insurance */}
        <div>
          <Label htmlFor="homeInsurance" className="mb-2 block">Annual Home Insurance</Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
            <Input
              id="homeInsurance"
              type="number"
              value={inputs.annualHomeInsurance || ""}
              onChange={(e) => handleInputChange("annualHomeInsurance", e.target.value)}
              className="pl-7"
              min="0"
            />
          </div>
        </div>

        {/* HOA Fees */}
        <div>
          <Label htmlFor="hoa" className="mb-2 block">Monthly HOA Fees</Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
            <Input
              id="hoa"
              type="number"
              value={inputs.monthlyHOA || ""}
              onChange={(e) => handleInputChange("monthlyHOA", e.target.value)}
              className="pl-7"
              min="0"
            />
          </div>
        </div>

        {/* PMI */}
        <div>
          <Label htmlFor="pmi" className="mb-2 block">Monthly PMI</Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
            <Input
              id="pmi"
              type="number"
              value={inputs.pmiAmount || ""}
              onChange={(e) => handleInputChange("pmiAmount", e.target.value)}
              className="pl-7"
              min="0"
              disabled={!showPMIWarning}
            />
          </div>
          {!showPMIWarning && (
            <p className="text-emerald-600 text-sm mt-1">PMI not required (20%+ down payment)</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};