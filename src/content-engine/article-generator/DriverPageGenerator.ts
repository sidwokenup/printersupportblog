import { DriverTemplateData, generateDriverTemplate } from '../templates/DriverTemplate';

export class DriverPageGenerator {
  constructor() {}

  async generatePage(driverData: Record<string, unknown>, modelData: Record<string, unknown>, relatedData: Record<string, unknown>): Promise<string> {
    const templateData: DriverTemplateData = {
      modelName: modelData.name as string,
      driverName: driverData.name as string,
      version: driverData.version as string,
      os: driverData.os as string,
      windowsVersions: driverData.windowsVersions as string,
      macVersions: driverData.macVersions as string,
      linuxAvailability: driverData.linuxAvailability as boolean,
      releaseDate: driverData.releaseDate as string,
      downloadUrl: driverData.url as string,
      installationSteps: (driverData.installationGuide as string).split('\n').filter(Boolean),
      troubleshooting: driverData.knownIssues as string,
      relatedModels: ((relatedData.models as unknown) as Array<{name: string}>).map(m => m.name),
      faqs: (relatedData.faqs as unknown) as Array<{question: string, answer: string}>
    };

    return generateDriverTemplate(templateData);
  }
}
