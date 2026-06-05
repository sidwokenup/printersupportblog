import { ErrorCodeTemplateData, generateErrorCodeTemplate } from '../templates/ErrorCodeTemplate';

export class ErrorCodePageGenerator {
  constructor() {}

  async generatePage(errorData: Record<string, unknown>, modelData: Record<string, unknown>, relatedData: Record<string, unknown>): Promise<string> {
    const templateData: ErrorCodeTemplateData = {
      modelName: modelData.name as string,
      errorCode: errorData.code as string,
      description: errorData.description as string,
      symptoms: errorData.symptoms as string,
      causes: errorData.rootCause as string,
      quickSolutions: (errorData.fixSteps as string).split('\n').filter(Boolean),
      advancedFixes: (errorData.advancedRepairSteps as string).split('\n').filter(Boolean),
      preventiveMeasures: "Keep firmware up to date and perform regular maintenance.", // Placeholder or pull from DB
      escalationRecs: errorData.escalationRecs as string,
      relatedErrors: (errorData.relatedErrors as string).split(',').map((e: string) => e.trim()),
      relatedModels: ((relatedData.models as unknown) as Array<{name: string}>).map(m => m.name),
      faqs: (relatedData.faqs as unknown) as Array<{question: string, answer: string}>
    };

    return generateErrorCodeTemplate(templateData);
  }
}
