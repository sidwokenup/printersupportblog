export interface BaseTemplateData {
  modelName: string;
  relatedModels: string[];
  faqs: Array<{question: string, answer: string}>;
}

export interface IssueTemplateData extends BaseTemplateData {
  issueTitle: string;
  symptoms: string;
  causes: string;
  quickFixes: string[];
  advancedFixes: string[];
  preventiveMeasures: string;
  relatedIssues: string[];
  relatedErrorCodes: string[];
}

export function generateIssueTemplate(data: IssueTemplateData): string {
  return `
# How to Fix ${data.issueTitle} on ${data.modelName}

## Problem Overview
Are you experiencing the "${data.issueTitle}" issue with your ${data.modelName}? This is a common problem, but fortunately, it can usually be resolved quickly.

## Symptoms
You might notice:
${data.symptoms}

## Possible Causes
The primary reasons for this issue include:
${data.causes}

## Quick Fix
Try these steps first:
${data.quickFixes.map(fix => `- ${fix}`).join('\n')}

## Step-by-Step Advanced Troubleshooting
If the quick fix didn't work, follow these advanced steps:
${data.advancedFixes.map((fix, idx) => `### Step ${idx + 1}\n${fix}`).join('\n\n')}

## Preventive Measures
To avoid this issue in the future:
${data.preventiveMeasures}

## When To Contact Support
If none of the above steps work, your printer might require hardware service. Contact HP Support.

## FAQs
${data.faqs.map(faq => `### ${faq.question}\n${faq.answer}`).join('\n\n')}

## Related Issues
${data.relatedIssues.map(issue => `- [${issue}](/models/${data.modelName.toLowerCase().replace(/ /g, '-')}/${issue.toLowerCase().replace(/ /g, '-')})`).join('\n')}

## Related Error Codes
${data.relatedErrorCodes.map(code => `- [${code}](/error-codes/${code.toLowerCase().replace(/[^a-z0-9]/g, '-')})`).join('\n')}
`;
}
