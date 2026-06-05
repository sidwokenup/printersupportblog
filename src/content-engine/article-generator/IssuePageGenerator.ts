import { IssueTemplateData, generateIssueTemplate } from '../templates/IssueTemplate';

export class IssuePageGenerator {
  constructor() {}

  async generatePage(issueData: Record<string, unknown>, modelData: Record<string, unknown>, relatedData: Record<string, unknown>): Promise<string> {
    const templateData: IssueTemplateData = {
      modelName: modelData.name as string,
      issueTitle: issueData.title as string,
      symptoms: issueData.symptoms as string,
      causes: issueData.causes as string,
      quickFixes: (issueData.quickFixes as string).split('\n').filter(Boolean),
      advancedFixes: (issueData.advancedFixes as string).split('\n').filter(Boolean),
      preventiveMeasures: issueData.preventiveMeasures as string,
      relatedModels: ((relatedData.models as unknown) as Array<{name: string}>).map(m => m.name),
      relatedIssues: ((relatedData.issues as unknown) as Array<{title: string}>).map(i => i.title),
      relatedErrorCodes: ((relatedData.errorCodes as unknown) as Array<{code: string}>).map(e => e.code),
      faqs: (relatedData.faqs as unknown) as Array<{question: string, answer: string}>
    };

    return generateIssueTemplate(templateData);
  }
}
