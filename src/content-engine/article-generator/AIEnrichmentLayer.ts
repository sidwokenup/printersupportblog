import OpenAI from 'openai';

export class AIEnrichmentLayer {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY || 'dummy_key',
    });
  }

  async enrichIssueContent(baseData: Record<string, unknown>): Promise<Record<string, unknown>> {
    if (process.env.OPENAI_API_KEY === 'dummy_key' || !process.env.OPENAI_API_KEY) {
      // Return un-enriched data if no API key is present
      return {
        expandedExplanations: baseData.symptoms,
        additionalTips: baseData.quickFixes,
        userFriendlyGuidance: 'Follow the steps carefully.',
        contextualRecommendations: 'Ensure your printer is on a stable network.',
        preventiveMaintenance: baseData.preventiveMeasures || 'Keep firmware updated.'
      };
    }

    try {
      const prompt = `
        You are an expert HP Printer technician. Enrich the following data for a support article.
        Model: ${baseData.modelName}
        Issue: ${baseData.issueTitle}
        Base Symptoms: ${baseData.symptoms}
        Base Fixes: ${baseData.quickFixes}
        
        Provide expanded, user-friendly explanations, additional troubleshooting tips, and preventive maintenance advice. Keep it factual and avoid generic filler. Format as JSON.
      `;

      const response = await this.openai.chat.completions.create({
        model: 'gpt-4-turbo-preview',
        messages: [{ role: 'user', content: prompt }],
        response_format: { type: 'json_object' }
      });

      return JSON.parse(response.choices[0].message.content || '{}');
    } catch (error) {
      console.error('AI Enrichment failed:', error);
      return baseData;
    }
  }
}
