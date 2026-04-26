import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { formatCurrency, formatCurrencyPrecise } from "../utils/formatCurrency";

interface ResultsDisplayProps {
  results: {
    loanAmount: number;
    monthlyPI: number;
    monthlyPropertyTax: number;
    monthlyInsurance: number;
    monthlyHOA: number;
    monthlyPMI: number;
    totalMonthlyPayment: number;
    totalInterestPaid: number;
    totalCostOfLoan: number;
  };
}

export const ResultsDisplay = ({ results }: ResultsDisplayProps) => {
  return (
    <Card className="border-emerald-200 bg-emerald-50 shadow-md">
      <CardHeader className="bg-emerald-600 text-white rounded-t-lg">
        <CardTitle className="text-xl">Your Estimated Payment</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <p className="text-sm text-slate-600 mb-1">Monthly Payment</p>
          <p className="text-4xl font-bold text-slate-800">
            {formatCurrencyPrecise(results.totalMonthlyPayment)}
          </p>
          <p className="text-sm text-slate-500 mt-1">per month</p>
        </div>

        <div className="space-y-3 pt-4 border-t border-emerald-200">
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Loan Amount</span>
            <span className="font-semibold text-slate-800">{formatCurrency(results.loanAmount)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Principal & Interest</span>
            <span className="font-semibold text-slate-800">{formatCurrencyPrecise(results.monthlyPI)}/mo</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Property Tax</span>
            <span className="font-semibold text-slate-800">{formatCurrencyPrecise(results.monthlyPropertyTax)}/mo</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Home Insurance</span>
            <span className="font-semibold text-slate-800">{formatCurrencyPrecise(results.monthlyInsurance)}/mo</span>
          </div>
          {results.monthlyHOA > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">HOA Fees</span>
              <span className="font-semibold text-slate-800">{formatCurrencyPrecise(results.monthlyHOA)}/mo</span>
            </div>
          )}
          {results.monthlyPMI > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">PMI</span>
              <span className="font-semibold text-slate-800">{formatCurrencyPrecise(results.monthlyPMI)}/mo</span>
            </div>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-emerald-200 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Total Interest Paid</span>
            <span className="font-semibold text-slate-800">{formatCurrency(results.totalInterestPaid)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Total Cost of Loan</span>
            <span className="font-semibold text-slate-800">{formatCurrency(results.totalCostOfLoan)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};