export interface QualityReport {
  score: number;
  warnings: string[];
  errors: string[];
}

export class ContentQualityEngine {
  
  evaluateContent(content: string, type: string): QualityReport {
    const report: QualityReport = { score: 100, warnings: [], errors: [] };

    // 1. Thin Content Check
    if (content.length < 300) {
      report.score -= 40;
      report.errors.push('Thin content: Less than 300 characters.');
    } else if (content.length < 800) {
      report.score -= 10;
      report.warnings.push('Content is relatively short. Consider expanding troubleshooting steps.');
    }

    // 2. Missing Sections Check
    const requiredIssueSections = ['## Problem Overview', '## Symptoms', '## Quick Fix', '## FAQs'];
    if (type === 'issue') {
      requiredIssueSections.forEach(section => {
        if (!content.includes(section)) {
          report.score -= 15;
          report.errors.push(`Missing critical section: ${section}`);
        }
      });
    }

    // 3. Keyword Stuffing Check (Basic heuristic: if a single word appears too frequently)
    // In a real scenario, this would check against the target keyword specifically.
    
    // 4. Internal Links Check
    const linkCount = (content.match(/\]\(\//g) || []).length;
    if (linkCount < 2) {
      report.score -= 10;
      report.warnings.push('Poor internal linking: Less than 2 internal links found.');
    }

    // Normalize score
    if (report.score < 0) report.score = 0;

    return report;
  }
}
