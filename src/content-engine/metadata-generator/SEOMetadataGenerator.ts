export class SEOMetadataGenerator {
  
  generateMetadata(type: 'issue' | 'error' | 'driver' | 'firmware', modelName: string, titleStr: string): Record<string, unknown> {
    const baseTitle = `${titleStr} on ${modelName} - Fix Guide & Support`;
    const description = `Learn how to resolve ${titleStr} for your ${modelName}. Follow our step-by-step troubleshooting guide and quick fixes.`;
    
    return {
      title: baseTitle,
      description: description,
      openGraph: {
        title: baseTitle,
        description: description,
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: baseTitle,
        description: description,
      }
    };
  }

  generateCanonicalUrl(path: string): string {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hpsupport.example.com';
    return `${baseUrl}${path}`;
  }
}
