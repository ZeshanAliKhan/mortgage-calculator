export const SEOTags = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a mortgage calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A mortgage calculator is a tool that estimates your monthly home loan payment based on the home price, down payment, loan term, interest rate, and other housing costs."
        }
      },
      {
        "@type": "Question",
        "name": "How do you calculate a monthly mortgage payment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The monthly principal and interest payment is calculated using the fixed-rate mortgage formula. This calculator then adds taxes, insurance, HOA fees, and PMI to estimate the full monthly payment."
        }
      },
      {
        "@type": "Question",
        "name": "Does this mortgage calculator include taxes and insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. This calculator includes optional fields for annual property tax and annual homeowners insurance, so you can estimate a more complete monthly payment."
        }
      },
      {
        "@type": "Question",
        "name": "What is PMI on a mortgage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PMI means private mortgage insurance. It is usually required on many conventional loans when the down payment is less than 20% of the home price."
        }
      },
      {
        "@type": "Question",
        "name": "How much house can I afford?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This calculator can help estimate your payment, but affordability also depends on your income, debts, credit score, savings, and lender requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Is this calculator free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. This mortgage calculator is free to use and does not require signup."
        }
      },
      {
        "@type": "Question",
        "name": "Is the mortgage estimate accurate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The calculator gives an estimate based on the numbers you enter. Your actual payment may vary based on lender fees, taxes, insurance, loan type, and final loan terms."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use this calculator for refinancing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can use it to estimate a new payment for a refinance by entering the loan amount, interest rate, and loan term you are considering."
        }
      }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Mortgage Calculator",
    "description": "Free mortgage calculator to estimate monthly home loan payments including taxes, insurance, HOA fees, and PMI.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://yoursite.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Mortgage Calculator",
        "item": "https://yoursite.com/mortgage-calculator"
      }
    ]
  };

  return (
    <>
      {/* Primary Meta Tags */}
      <title>Mortgage Calculator - Estimate Monthly Home Loan Payments</title>
      <meta name="description" content="Use this free mortgage calculator to estimate your monthly mortgage payment, including principal, interest, property taxes, home insurance, HOA fees, and PMI." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://yoursite.com/mortgage-calculator" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Mortgage Calculator - Estimate Monthly Home Loan Payments" />
      <meta property="og:description" content="Use this free mortgage calculator to estimate your monthly mortgage payment, including principal, interest, property taxes, home insurance, HOA fees, and PMI." />
      <meta property="og:url" content="https://yoursite.com/mortgage-calculator" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Mortgage Calculator - Estimate Monthly Home Loan Payments" />
      <meta name="twitter:description" content="Use this free mortgage calculator to estimate your monthly mortgage payment, including principal, interest, property taxes, home insurance, HOA fees, and PMI." />

      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
};