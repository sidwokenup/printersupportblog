export interface HPIssueData {
  title: string;
  slug: string;
  category: string;
  frequency: string;
  symptoms: string;
  causes: string;
  quickFixes: string;
  advancedFixes: string;
  preventiveMeasures: string;
  alternativeSolutions: string;
  severityLevel: string;
  modelId: string;
}

export class HPIssueCollector {
  private issueCategories = [
    'Printer Offline', 'Not Printing', 'Paper Jam', 'WiFi Setup', 
    'Driver Installation', 'Scanner Failure', 'Firmware Failure', 
    'Slow Printing', 'Blank Pages', 'Faded Prints', 'Ink Problems', 
    'Cartridge Errors', 'USB Detection Problems', 'Mobile Printing Problems', 
    'Network Issues', 'Print Queue Problems', 'Color Printing Issues', 
    'Unexpected Shutdown', 'Connection Errors', 'Low Quality Prints'
  ];

  constructor() {}

  async generateMassiveIssueList(modelIds: string[]): Promise<HPIssueData[]> {
    const allIssues: HPIssueData[] = [];
    
    // Generate ~20 issues per model. 500 models * 20 = 10,000 issues.
    modelIds.forEach(modelId => {
      this.issueCategories.forEach(category => {
        const title = `${category} on ${modelId.replace(/-/g, ' ')}`;
        const slug = `${modelId}-${category.toLowerCase().replace(/ /g, '-')}`;
        
        allIssues.push({
          title,
          slug,
          category,
          frequency: Math.random() > 0.5 ? 'Common' : 'Rare',
          symptoms: `User reports ${category.toLowerCase()} when trying to use the printer.`,
          causes: `Could be related to software, hardware, or network configuration.`,
          quickFixes: `1. Restart the printer. 2. Check connections. 3. Reinstall drivers.`,
          advancedFixes: `1. Factory reset. 2. Perform deep cleaning. 3. Update firmware.`,
          preventiveMeasures: `Keep firmware updated. Use genuine HP supplies.`,
          alternativeSolutions: `Use a direct USB connection instead of WiFi.`,
          severityLevel: category.includes('Failure') || category.includes('Shutdown') ? 'High' : 'Medium',
          modelId
        });
      });
    });

    return allIssues;
  }

  async collectIssuesForModel(modelId: string): Promise<HPIssueData[]> {
    console.log(`Collecting issues for model ${modelId}...`);
    return this.generateMassiveIssueList([modelId]);
  }
}
