import { useState } from "react";
import { MortgageCalculator } from "./components/MortgageCalculator";
import { ResultsDisplay } from "./components/ResultsDisplay";
import { AmortizationTable } from "./components/AmortizationTable";
import { SEOContent } from "./components/SEOContent";
import { FAQSection } from "./components/FAQSection";
import { RelatedTools } from "./components/RelatedTools";
import { Disclaimer } from "./components/Disclaimer";
import { useMortgageCalculation } from "./hooks/useMortgageCalculation";
import { SEOTags } from "./components/SEOTags";
import { AdsterraBanner } from "./components/AdsterraBanner";

export interface MortgageInputs {
  homePrice: number;
  downPaymentAmount: number;
  downPaymentPercent: number;
  loanTermYears: number;
  interestRate: number;
  annualPropertyTax: number;
  annualHomeInsurance: number;
  monthlyHOA: number;
  pmiAmount: number;
}

const defaultInputs: MortgageInputs = {
  homePrice: 400000,
  downPaymentAmount: 80000,
  downPaymentPercent: 20,
  loanTermYears: 30,
  interestRate: 6.5,
  annualPropertyTax: 4800,
  annualHomeInsurance: 1800,
  monthlyHOA: 0,
  pmiAmount: 0,
};

function App() {
  const [inputs, setInputs] = useState<MortgageInputs>(defaultInputs);
  const [showAmortization, setShowAmortization] = useState(false);
  const results = useMortgageCalculation(inputs);

  return (
    <>
      <SEOTags />
      
      <div className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <header className="bg-emerald-700 text-white">
          <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Mortgage Calculator
            </h1>
            <p className="text-emerald-100 text-lg md:text-xl max-w-2xl">
              Estimate your monthly mortgage payment with taxes, insurance, HOA fees, and PMI.
            </p>
            <p className="text-emerald-200 text-sm mt-3 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-emerald-300 rounded-full"></span>
              Free to use, no signup required, and works directly in your browser.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-5xl mx-auto px-4 py-8">
          {/* Calculator Section */}
          <section aria-label="Mortgage Calculator" className="mb-8">
            <div className="grid lg:grid-cols-2 gap-6">
              <MortgageCalculator inputs={inputs} setInputs={setInputs} />
              <ResultsDisplay results={results} />
            </div>
          </section>

          {/* Payment Breakdown Summary */}
          <section className="mb-8 bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Payment Breakdown</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-sm text-slate-500 mb-1">Principal & Interest</p>
                <p className="text-lg font-bold text-slate-800">
                  ${results.monthlyPI.toFixed(2)}/mo
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {((results.monthlyPI / results.totalMonthlyPayment) * 100).toFixed(0)}% of payment
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-sm text-slate-500 mb-1">Property Tax</p>
                <p className="text-lg font-bold text-slate-800">
                  ${results.monthlyPropertyTax.toFixed(2)}/mo
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-sm text-slate-500 mb-1">Home Insurance</p>
                <p className="text-lg font-bold text-slate-800">
                  ${results.monthlyInsurance.toFixed(2)}/mo
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-sm text-slate-500 mb-1">PMI / HOA</p>
                <p className="text-lg font-bold text-slate-800">
                  ${(results.monthlyPMI + results.monthlyHOA).toFixed(2)}/mo
                </p>
              </div>
            </div>
          </section>

          {/* Amortization Table */}
          <section className="mb-8">
            <button
              onClick={() => setShowAmortization(!showAmortization)}
              className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-medium mb-4 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded px-2 py-1"
              aria-expanded={showAmortization}
              aria-controls="amortization-section"
            >
              <svg
                className={`w-4 h-4 transition-transform ${showAmortization ? "rotate-90" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              {showAmortization ? "Hide" : "View"} First-Year Amortization Schedule
            </button>
            <div id="amortization-section" className={showAmortization ? "block" : "hidden"}>
              <AmortizationTable schedule={results.amortizationSchedule} />
            </div>
          </section>

          {/* Adsterra Banner 1 - After Calculator */}
          <AdsterraBanner 
            title="Home Buyer Bonus"
            description="First-time home buyers may qualify for special programs and benefits."
            variant="highlight"
          />

          {/* SEO Content Sections */}
          <SEOContent />

          {/* Adsterra Banner 2 - Mid Content */}
          <AdsterraBanner 
            title="Compare Mortgage Rates"
            description="Find competitive mortgage rates from top lenders in your area."
            variant="subtle"
          />

          {/* FAQ Section */}
          <FAQSection />

          {/* Adsterra Banner 3 - Before Related Tools */}
          <AdsterraBanner 
            title="Exclusive Offer"
            description="Check if you qualify for limited-time home financing benefits."
            variant="card"
          />

          {/* Related Tools */}
          <RelatedTools />

          {/* Disclaimer */}
          <Disclaimer />
        </main>

        {/* Footer */}
        <footer className="bg-slate-800 text-slate-300 mt-12">
          <div className="max-w-5xl mx-auto px-4 py-8">
            <p className="text-center text-sm">
              This calculator is for educational purposes only. Consult with a financial advisor for personalized advice.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;