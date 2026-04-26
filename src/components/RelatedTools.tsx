interface Tool {
  name: string;
  description: string;
  href: string;
}

const tools: Tool[] = [
  {
    name: "Mortgage Affordability Calculator",
    description: "Find out how much home you can afford based on your income and expenses.",
    href: "#"
  },
  {
    name: "Refinance Calculator",
    description: "Estimate your savings when refinancing your existing mortgage.",
    href: "#"
  },
  {
    name: "Extra Mortgage Payment Calculator",
    description: "See how extra payments can reduce your loan term and total interest.",
    href: "#"
  },
  {
    name: "Rent vs Buy Calculator",
    description: "Compare the costs of renting versus buying a home.",
    href: "#"
  },
  {
    name: "Home Loan EMI Calculator",
    description: "Calculate your equated monthly installment for home loans.",
    href: "#"
  },
  {
    name: "Property Tax Calculator",
    description: "Estimate annual property taxes for your area.",
    href: "#"
  }
];

export const RelatedTools = () => {
  return (
    <section aria-labelledby="related-tools-heading" className="mb-10">
      <h2 id="related-tools-heading" className="text-2xl font-bold text-slate-800 mb-6">
        Related Mortgage Tools
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool, index) => (
          <a
            key={index}
            href={tool.href}
            className="group block bg-white border border-slate-200 rounded-lg p-5 hover:border-emerald-300 hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <h3 className="font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors mb-2">
              {tool.name}
            </h3>
            <p className="text-sm text-slate-600">{tool.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};
