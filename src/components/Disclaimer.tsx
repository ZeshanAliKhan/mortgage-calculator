import { Card, CardContent } from "./ui/card";

export const Disclaimer = () => {
  return (
    <section aria-labelledby="disclaimer-heading" className="mb-8">
      <Card className="border-amber-200 bg-amber-50">
        <CardContent className="p-6">
          <h2 id="disclaimer-heading" className="text-lg font-semibold text-amber-800 mb-3">
            Important Disclaimer
          </h2>
          <p className="text-amber-700 text-sm leading-relaxed">
            This mortgage calculator is for educational and estimation purposes only. It does not provide financial, legal, tax, or lending advice. Your actual mortgage payment may be different depending on your lender, loan type, credit score, taxes, insurance, fees, closing costs, and other details.
          </p>
          <p className="text-amber-700 text-sm leading-relaxed mt-3">
            Always compare loan offers and speak with a qualified mortgage professional before making a final home loan decision.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};