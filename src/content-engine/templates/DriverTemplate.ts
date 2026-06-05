import { BaseTemplateData } from './IssueTemplate';

export interface DriverTemplateData extends BaseTemplateData {
  driverName: string;
  version: string;
  os: string;
  windowsVersions: string;
  macVersions: string;
  linuxAvailability: boolean;
  releaseDate: string;
  downloadUrl: string;
  installationSteps: string[];
  troubleshooting: string;
}

export function generateDriverTemplate(data: DriverTemplateData): string {
  return `
# Download ${data.driverName} for ${data.modelName}

## Driver Overview
Version: ${data.version}
Release Date: ${data.releaseDate}

## Supported Operating Systems
- **Windows**: ${data.windowsVersions || 'Not supported'}
- **macOS**: ${data.macVersions || 'Not supported'}
- **Linux**: ${data.linuxAvailability ? 'Supported' : 'Not supported'}

## Download Information
[Download Driver](${data.downloadUrl})

## Installation Steps
${data.installationSteps.map((step, idx) => `${idx + 1}. ${step}`).join('\n')}

## Troubleshooting Installation Issues
${data.troubleshooting}

## Update Process
To update your existing driver, simply download the new version and run the installer. It will automatically overwrite the old files.

## Uninstall Process
1. Go to Control Panel > Programs and Features (Windows) or Applications (Mac).
2. Locate the HP Driver and click Uninstall.
3. Restart your computer.

## FAQs
${data.faqs.map(faq => `### ${faq.question}\n${faq.answer}`).join('\n\n')}

## Related Models
${data.relatedModels.map(model => `- [${model}](/models/${model.toLowerCase().replace(/ /g, '-')})`).join('\n')}
`;
}
