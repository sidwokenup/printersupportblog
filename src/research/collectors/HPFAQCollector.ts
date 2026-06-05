export interface HPFAQData {
  question: string;
  answer: string;
  relatedIssues: string;
  relatedErrorCodes: string;
  modelId: string;
}

export class HPFAQCollector {
  private baseQuestions = [
    "How do I connect my printer to Wi-Fi?",
    "Why is my printer offline?",
    "How to clear a paper jam?",
    "How to reset the printer to factory settings?",
    "Why is my printer not printing black ink?",
    "How to install drivers without a CD?",
    "How to scan a document to my computer?",
    "What to do when cartridges are not recognized?"
  ];

  constructor() {}

  async generateFAQList(modelIds: string[]): Promise<HPFAQData[]> {
    const faqs: HPFAQData[] = [];
    
    // Generates 8 FAQs per model. 500 models * 8 = 4000 FAQs.
    modelIds.forEach(modelId => {
      this.baseQuestions.forEach(q => {
        faqs.push({
          question: q.replace('my printer', `my ${modelId.replace(/-/g, ' ')}`),
          answer: `To resolve this on your ${modelId}, please check the network settings, ensure drivers are updated, and refer to the official HP manual for specific hardware resets.`,
          relatedIssues: `WiFi Setup, Not Printing, Printer Offline`,
          relatedErrorCodes: ``,
          modelId
        });
      });
    });

    return faqs;
  }

  async collectFAQsForModel(modelId: string): Promise<HPFAQData[]> {
    console.log(`Collecting FAQs for model ${modelId}...`);
    return this.generateFAQList([modelId]);
  }
}
