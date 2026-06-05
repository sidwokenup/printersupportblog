export class SchemaGenerator {

  generateArticleSchema(title: string, description: string, url: string, datePublished: string): string {
    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": title,
      "description": description,
      "url": url,
      "datePublished": datePublished,
      "author": {
        "@type": "Organization",
        "name": "HP Printer Support Knowledge Base"
      }
    });
  }

  generateFAQSchema(faqs: Array<{question: string, answer: string}>): string {
    const mainEntity = faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }));

    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": mainEntity
    });
  }

  generateHowToSchema(title: string, steps: string[]): string {
    const stepEntities = steps.map((step, idx) => ({
      "@type": "HowToStep",
      "position": idx + 1,
      "text": step
    }));

    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": title,
      "step": stepEntities
    });
  }

  generateBreadcrumbSchema(crumbs: Array<{name: string, item: string}>): string {
    const itemListElement = crumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": crumb.name,
      "item": crumb.item
    }));

    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": itemListElement
    });
  }
}
