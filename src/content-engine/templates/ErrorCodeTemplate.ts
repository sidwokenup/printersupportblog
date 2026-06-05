import { BaseTemplateData } from './IssueTemplate';

export interface ErrorCodeTemplateData extends BaseTemplateData {
  errorCode: string;
  description: string;
  symptoms: string;
  causes: string;
  quickSolutions: string[];
  advancedFixes: string[];
  preventiveMeasures: string;
  relatedErrors: string[];
  escalationRecs: string;
}

export function generateErrorCodeTemplate(data: ErrorCodeTemplateData): string {
  return `
# How to Fix HP Error ${data.errorCode}

## What Error ${data.errorCode} Means
${data.description}

## Symptoms
When this error occurs on your ${data.modelName}, you will typically see:
${data.symptoms}

## Affected Models
This error is common on:
${data.relatedModels.map(model => `- ${model}`).join('\n')}

## Possible Causes
${data.causes}

## Quick Solutions
${data.quickSolutions.map(sol => `- ${sol}`).join('\n')}

## Advanced Fixes
${data.advancedFixes.map((fix, idx) => `### Step ${idx + 1}\n${fix}`).join('\n\n')}

## Preventive Measures
${data.preventiveMeasures}

## Escalation
${data.escalationRecs}

## FAQs
${data.faqs.map(faq => `### ${faq.question}\n${faq.answer}`).join('\n\n')}

## Related Errors
${data.relatedErrors.map(err => `- [Error ${err}](/error-codes/${err.toLowerCase().replace(/[^a-z0-9]/g, '-')})`).join('\n')}
`;
}
