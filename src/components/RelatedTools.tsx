interface Tool {
  name: string;
  description: string;
  href: string;
}

const tools: Tool[] = [
  {
    name: "Letters to Words",
    description: "A live browser word tool from the same owned network, useful when you want another lightweight utility page.",
    href: "https://zeshan-letters-to-words.netlify.app/"
  },
  {
    name: "Word Unscrambler",
    description: "A sister utility page focused on solving letter mixes, filters, and grouped word results.",
    href: "https://zeshan-word-unscrambler-876.netlify.app/"
  },
  {
    name: "Unscramble Letters",
    description: "Another quick browser tool in the same network with a different word-solving layout.",
    href: "https://zeshan-unscramble-letters-377.netlify.app/"
  },
  {
    name: "App Icon Generator",
    description: "A separate live utility page for generating icon packs for iOS, Android, PWA, and favicon needs.",
    href: "https://zeshanalikhan.github.io/app-icon-generator-site/"
  },
  {
    name: "Creator App Hub Directory",
    description: "Open the wider link directory for the network of tools, guides, mirrors, and published support pages.",
    href: "https://zeshanalikhan.github.io/creator-app-hub-site/pages/site-directory.html"
  },
  {
    name: "PaintZ App Guide",
    description: "A practical browser-app guide from the same site network for another utility-focused visit.",
    href: "https://zeshanalikhan.github.io/paintz-app-guide-site/"
  }
];

export const RelatedTools = () => {
  return (
    <section aria-labelledby="related-tools-heading" className="mb-10">
      <h2 id="related-tools-heading" className="text-2xl font-bold text-slate-800 mb-6">
        More Live Tools and Utility Pages
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
