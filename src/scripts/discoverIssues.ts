import fs from 'fs/promises';
import path from 'path';
import { HPIssueCollector } from '../research/collectors/HPIssueCollector';

async function main() {
  console.log('Starting HP Issue Discovery System...');
  const collector = new HPIssueCollector();
  
  // This would typically read from the discovered models
  const models = ['hp-deskjet-2700', 'hp-envy-6055']; 
  const allIssues = [];

  for (const modelId of models) {
    const issues = await collector.collectIssuesForModel(modelId);
    allIssues.push(...issues);
  }

  const dataDir = path.join(process.cwd(), 'src', 'data', 'issues');
  await fs.mkdir(dataDir, { recursive: true });

  const outputPath = path.join(dataDir, 'all_issues.json');
  await fs.writeFile(outputPath, JSON.stringify(allIssues, null, 2));

  console.log(`Discovered ${allIssues.length} issues. Saved to ${outputPath}`);
}

main().catch(console.error);
