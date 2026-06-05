import { BaseTemplateData } from './IssueTemplate';

export interface FirmwareTemplateData extends BaseTemplateData {
  firmwareName: string;
  version: string;
  releaseDate: string;
  bugFixes: string;
  securityUpdates: string;
  installationProcess: string[];
  firmwareRecovery: string;
  commonErrors: string;
}

export function generateFirmwareTemplate(data: FirmwareTemplateData): string {
  return `
# ${data.modelName} Firmware Update (${data.version})

## Firmware Overview
Name: ${data.firmwareName}
Version: ${data.version}
Release Date: ${data.releaseDate}

## Update Benefits
### Bug Fixes
${data.bugFixes}

### Security Updates
${data.securityUpdates}

## Supported Models
${data.relatedModels.map(model => `- ${model}`).join('\n')}

## Installation Process
${data.installationProcess.map((step, idx) => `${idx + 1}. ${step}`).join('\n')}

## Firmware Recovery
If the update fails, follow these recovery steps:
${data.firmwareRecovery}

## Common Update Errors
${data.commonErrors}

## FAQs
${data.faqs.map(faq => `### ${faq.question}\n${faq.answer}`).join('\n\n')}
`;
}
