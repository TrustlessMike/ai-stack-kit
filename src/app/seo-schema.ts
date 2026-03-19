// JSON-LD Schema for AI Stack Kit

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "AI Stack Kit",
  "url": "https://stackaikit.com",
  "description": "Expert reviews and comparisons of AI tools for business and content creation",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://stackaikit.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AI Stack Kit",
  "url": "https://stackaikit.com",
  "description": "AI tool reviews and comparisons for business",
  "founder": {
    "@type": "Organization",
    "name": "Stack Labs LLC"
  },
  "dateFounded": "2026",
  "publishingPrinciples": "https://stackaikit.com/legal/terms"
};

export const articleSchema = (title: string, description: string, date: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "datePublished": date,
  "dateModified": date,
  "author": {
    "@type": "Organization",
    "name": "Stack Labs LLC"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AI Stack Kit",
    "url": "https://stackaikit.com"
  }
});

export const productReviewSchema = (productName: string, reviewBody: string, rating: number) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": productName,
  "description": reviewBody,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": rating,
    "bestRating": 5,
    "worstRating": 1
  }
});

export const faqSchema = (questions: Array<{q: string, a: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": questions.map(q => ({
    "@type": "Question",
    "name": q.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": q.a
    }
  }))
});

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});
