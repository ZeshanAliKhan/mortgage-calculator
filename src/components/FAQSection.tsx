import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is a mortgage calculator?",
    answer: "A mortgage calculator is a tool that estimates your monthly home loan payment based on the home price, down payment, loan term, interest rate, and other housing costs."
  },
  {
    question: "How do you calculate a monthly mortgage payment?",
    answer: "The monthly principal and interest payment is calculated using the fixed-rate mortgage formula. This calculator then adds taxes, insurance, HOA fees, and PMI to estimate the full monthly payment."
  },
  {
    question: "Does this mortgage calculator include taxes and insurance?",
    answer: "Yes. This calculator includes optional fields for annual property tax and annual homeowners insurance, so you can estimate a more complete monthly payment."
  },
  {
    question: "What is PMI on a mortgage?",
    answer: "PMI means private mortgage insurance. It is usually required on many conventional loans when the down payment is less than 20% of the home price."
  },
  {
    question: "How much house can I afford?",
    answer: "This calculator can help estimate your payment, but affordability also depends on your income, debts, credit score, savings, and lender requirements."
  },
  {
    question: "Is this calculator free?",
    answer: "Yes. This mortgage calculator is free to use and does not require signup."
  },
  {
    question: "Is the mortgage estimate accurate?",
    answer: "The calculator gives an estimate based on the numbers you enter. Your actual payment may vary based on lender fees, taxes, insurance, loan type, and final loan terms."
  },
  {
    question: "Can I use this calculator for refinancing?",
    answer: "Yes, you can use it to estimate a new payment for a refinance by entering the loan amount, interest rate, and loan term you are considering."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section aria-labelledby="faq-heading" className="mb-10">
      <Card className="border-slate-200 shadow-md">
        <CardHeader className="bg-slate-50 border-b border-slate-200">
          <CardTitle id="faq-heading" className="text-xl text-slate-800">
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-slate-200">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-slate-200 last:border-b-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-medium text-slate-800 pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-4 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};