import { FirmwareTemplateData, generateFirmwareTemplate } from '../templates/FirmwareTemplate';

export class FirmwarePageGenerator {
  constructor() {}

  async generatePage(firmwareData: Record<string, unknown>, modelData: Record<string, unknown>, relatedData: Record<string, unknown>): Promise<string> {
    const templateData: FirmwareTemplateData = {
      modelName: modelData.name as string,
      firmwareName: firmwareData.name as string,
      version: firmwareData.version as string,
      releaseDate: firmwareData.releaseDate as string,
      bugFixes: firmwareData.bugFixes as string,
      securityUpdates: firmwareData.securityUpdates as string,
      installationProcess: (firmwareData.installationInstructions as string).split('\n').filter(Boolean),
      firmwareRecovery: firmwareData.recoveryProcedures as string,
      commonErrors: firmwareData.knownProblems as string,
      relatedModels: ((relatedData.models as unknown) as Array<{name: string}>).map(m => m.name),
      faqs: (relatedData.faqs as unknown) as Array<{question: string, answer: string}>
    };

    return generateFirmwareTemplate(templateData);
  }
}
