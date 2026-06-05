export class InternalLinkGenerator {
  
  generateLinksForIssuePage(modelSlug: string, issueSlug: string, relatedData: Record<string, unknown>): string[] {
    const links: string[] = [];
    
    // Link back to model hub
    links.push(`/models/${modelSlug}`);
    
    // Links to drivers & firmware
    links.push(`/models/${modelSlug}/drivers`);
    links.push(`/models/${modelSlug}/firmware`);
    
    // Links to related issues
    if (relatedData.issues && Array.isArray(relatedData.issues)) {
      relatedData.issues.forEach((issue: string) => {
        links.push(`/models/${modelSlug}/${issue}`);
      });
    }

    // Links to related error codes
    if (relatedData.errorCodes && Array.isArray(relatedData.errorCodes)) {
      relatedData.errorCodes.forEach((err: string) => {
        links.push(`/models/${modelSlug}/error-${err}`);
      });
    }

    return links;
  }

  generateLinksForModelHub(modelSlug: string, clusters: string[]): string[] {
    return clusters.map(c => `/models/${modelSlug}/${c.toLowerCase().replace(/ /g, '-')}`);
  }
}
