import { Card, CardContent } from "./ui/card";

export const SEOContent = () => {
  return (
    <div className="space-y-10">
      {/* Section 1: What Is a Mortgage Calculator */}
      <section aria-labelledby="what-is-mortgage-calculator">
        <h2 id="what-is-mortgage-calculator" className="text-2xl font-bold text-slate-800 mb-4">
          What Is a Mortgage Calculator?
        </h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 leading-relaxed">
            A mortgage calculator is a simple tool that helps you estimate your monthly home loan payment before buying a house. It uses details like the home price, down payment, loan term, interest rate, property tax, homeowners insurance, HOA fees, and PMI to calculate an estimated monthly payment.
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            This calculator is useful for home buyers who want to understand how much a house may cost each month. Instead of only looking at the listing price, you can estimate the real monthly cost of owning the home. That makes it easier to compare different homes, loan terms, and down payment options.
          </p>
        </div>
      </section>

      {/* Section 2: How to Use This Mortgage Calculator */}
      <section aria-labelledby="how-to-use">
        <h2 id="how-to-use" className="text-2xl font-bold text-slate-800 mb-4">
          How to Use This Mortgage Calculator
        </h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 leading-relaxed">
            Using this mortgage calculator is simple. Enter the home price first, then add your down payment amount or percentage. Next, choose the loan term and enter the interest rate you expect to receive from a lender.
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            You can also add extra monthly housing costs such as property tax, homeowners insurance, HOA fees, and PMI. These costs can make a big difference in your total monthly payment, so including them gives you a more realistic estimate.
          </p>
          <ul className="mt-4 space-y-2 text-slate-600">
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 mt-1 flex-shrink-0">1.</span>
              <span>Enter the home price.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 mt-1 flex-shrink-0">2.</span>
              <span>Add your down payment.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 mt-1 flex-shrink-0">3.</span>
              <span>Select the loan term.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 mt-1 flex-shrink-0">4.</span>
              <span>Enter the interest rate.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 mt-1 flex-shrink-0">5.</span>
              <span>Add property tax, insurance, HOA, and PMI if needed.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 mt-1 flex-shrink-0">6.</span>
              <span>Review your estimated monthly payment.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 mt-1 flex-shrink-0">7.</span>
              <span>Check the payment breakdown and first-year amortization table.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 3: What Is Included in a Monthly Mortgage Payment */}
      <section aria-labelledby="monthly-payment-breakdown">
        <h2 id="monthly-payment-breakdown" className="text-2xl font-bold text-slate-800 mb-4">
          What Is Included in a Monthly Mortgage Payment?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          A monthly mortgage payment is usually more than just the loan payment. Many homeowners also pay taxes, insurance, HOA fees, and sometimes PMI.
        </p>

        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Principal</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Principal is the amount you borrow from the lender. For example, if the home price is $400,000 and your down payment is $80,000, your loan principal is $320,000.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Interest</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Interest is the cost of borrowing money. A higher interest rate usually means a higher monthly payment and more total interest paid over the life of the loan.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Property Taxes</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Property taxes are usually charged by your local government. They can vary by state, county, city, and property value.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Homeowners Insurance</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Homeowners insurance helps protect your home from certain types of damage or loss. Lenders usually require insurance when you have a mortgage.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">HOA Fees</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              HOA fees may apply if the property is in a homeowners association. These fees can cover shared services, maintenance, amenities, or community expenses.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">PMI</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              PMI stands for private mortgage insurance. It is often required when your down payment is less than 20% of the home price. PMI protects the lender, not the buyer.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Mortgage Payment Formula */}
      <section aria-labelledby="mortgage-formula">
        <h2 id="mortgage-formula" className="text-2xl font-bold text-slate-800 mb-4">
          Mortgage Payment Formula
        </h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 leading-relaxed">
            This calculator uses the standard fixed-rate mortgage payment formula:
          </p>
          <div className="bg-slate-100 rounded-lg p-4 my-4 font-mono text-center text-lg">
            M = P [ r(1+r)<sup>n</sup> ] / [ (1+r)<sup>n</sup> - 1 ]
          </div>
          <p className="text-slate-600 leading-relaxed">In this formula:</p>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-semibold">M</span>
              <span>means the monthly principal and interest payment.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-semibold">P</span>
              <span>means the loan amount.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-semibold">r</span>
              <span>means the monthly interest rate.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-semibold">n</span>
              <span>means the total number of monthly payments.</span>
            </li>
          </ul>
          <p className="text-slate-600 leading-relaxed mt-4">
            For example, a 30-year mortgage has 360 monthly payments. The calculator first estimates the monthly principal and interest payment, then adds taxes, insurance, HOA fees, and PMI to estimate the total monthly housing cost.
          </p>
        </div>
      </section>

      {/* Section 5: Example Mortgage Calculation */}
      <section aria-labelledby="example-calculation">
        <h2 id="example-calculation" className="text-2xl font-bold text-slate-800 mb-4">
          Example Mortgage Calculation
        </h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 leading-relaxed">Here is a simple example:</p>
          <Card className="my-4 border-slate-200">
            <CardContent className="p-5">
              <ul className="space-y-2 text-slate-600">
                <li><strong>Home price:</strong> $400,000</li>
                <li><strong>Down payment:</strong> $80,000</li>
                <li><strong>Loan amount:</strong> $320,000</li>
                <li><strong>Loan term:</strong> 30 years</li>
                <li><strong>Interest rate:</strong> 6.5%</li>
                <li><strong>Annual property tax:</strong> $4,800</li>
                <li><strong>Annual home insurance:</strong> $1,800</li>
                <li><strong>Monthly HOA:</strong> $0</li>
                <li><strong>PMI:</strong> $0</li>
              </ul>
            </CardContent>
          </Card>
          <p className="text-slate-600 leading-relaxed">
            With these values, the calculator estimates the monthly principal and interest payment first. Then it adds monthly property tax and monthly insurance to show the estimated total monthly payment.
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            This example shows why it is important to include taxes and insurance. A home may look affordable based only on principal and interest, but the full monthly cost can be higher after other housing expenses are included.
          </p>
        </div>
      </section>

      {/* Section 6: How Down Payment Affects Your Mortgage */}
      <section aria-labelledby="down-payment-effects">
        <h2 id="down-payment-effects" className="text-2xl font-bold text-slate-800 mb-4">
          How Down Payment Affects Your Mortgage
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Your down payment has a direct effect on your loan amount and monthly payment. A larger down payment reduces the amount you need to borrow, which can lower your monthly payment and reduce the total interest paid over time.
        </p>
        <p className="text-slate-600 leading-relaxed mt-4">
          A down payment of 20% may also help you avoid PMI on many conventional loans. However, some buyers choose a smaller down payment so they can buy a home sooner. The best option depends on your savings, income, credit profile, and long-term plans.
        </p>
      </section>

      {/* Section 7: How Interest Rate Changes Your Monthly Payment */}
      <section aria-labelledby="interest-rate-effects">
        <h2 id="interest-rate-effects" className="text-2xl font-bold text-slate-800 mb-4">
          How Interest Rate Changes Your Monthly Payment
        </h2>
        <p className="text-slate-600 leading-relaxed">
          The interest rate is one of the biggest factors in your mortgage payment. Even a small rate difference can change your monthly payment and total interest cost.
        </p>
        <p className="text-slate-600 leading-relaxed mt-4">
          For example, a lower interest rate can reduce your payment and save money over the life of the loan. That is why many buyers compare mortgage rates from different lenders before choosing a loan.
        </p>
      </section>

      {/* Section 8: Tips to Lower Your Monthly Mortgage Payment */}
      <section aria-labelledby="lower-payment-tips">
        <h2 id="lower-payment-tips" className="text-2xl font-bold text-slate-800 mb-4">
          Tips to Lower Your Monthly Mortgage Payment
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          There are several ways to reduce your estimated monthly mortgage payment:
        </p>
        <ul className="space-y-3 text-slate-600">
          <li className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-3">
            <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">1</span>
            <span>Increase your down payment.</span>
          </li>
          <li className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-3">
            <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">2</span>
            <span>Compare mortgage rates from multiple lenders.</span>
          </li>
          <li className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-3">
            <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">3</span>
            <span>Choose a longer loan term if you need a lower monthly payment.</span>
          </li>
          <li className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-3">
            <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">4</span>
            <span>Improve your credit score before applying.</span>
          </li>
          <li className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-3">
            <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">5</span>
            <span>Avoid PMI when possible.</span>
          </li>
          <li className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-3">
            <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">6</span>
            <span>Look for homes with lower property taxes.</span>
          </li>
          <li className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-3">
            <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">7</span>
            <span>Avoid expensive HOA fees.</span>
          </li>
          <li className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-3">
            <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">8</span>
            <span>Consider buying a less expensive home.</span>
          </li>
        </ul>
        <p className="text-slate-600 leading-relaxed mt-4">
          A lower monthly payment can make homeownership easier to manage, but it is also important to think about the total cost of the loan over time.
        </p>
      </section>

      {/* Section 9: Mortgage Calculator With Taxes, Insurance, HOA, and PMI */}
      <section aria-labelledby="complete-calculator">
        <h2 id="complete-calculator" className="text-2xl font-bold text-slate-800 mb-4">
          Mortgage Calculator With Taxes, Insurance, HOA, and PMI
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Many basic calculators only show principal and interest. This calculator is designed to give a more complete estimate by including property taxes, homeowners insurance, HOA fees, and PMI.
        </p>
        <p className="text-slate-600 leading-relaxed mt-4">
          These extra costs are important because they affect your real monthly housing budget. If you are planning to buy a home, it is better to estimate the full payment instead of only the loan payment.
        </p>
      </section>

      {/* Section 10: Who Can Use This Mortgage Calculator */}
      <section aria-labelledby="who-can-use">
        <h2 id="who-can-use" className="text-2xl font-bold text-slate-800 mb-4">
          Who Can Use This Mortgage Calculator?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          This mortgage calculator can be useful for:
        </p>
        <ul className="grid sm:grid-cols-2 gap-3 text-slate-600">
          <li className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg p-3">
            <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>First-time home buyers</span>
          </li>
          <li className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg p-3">
            <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Homeowners comparing refinance options</span>
          </li>
          <li className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg p-3">
            <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Real estate investors</span>
          </li>
          <li className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg p-3">
            <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>People comparing different home prices</span>
          </li>
          <li className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg p-3">
            <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Buyers checking different down payment amounts</span>
          </li>
          <li className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg p-3">
            <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Anyone planning a monthly housing budget</span>
          </li>
        </ul>
        <p className="text-slate-600 leading-relaxed mt-4">
          The calculator gives an estimate only, but it can help you understand how different numbers affect your payment.
        </p>
      </section>
    </div>
  );
};
