import fs from 'fs/promises';
import path from 'path';
import { HPModelCollector } from '../research/collectors/HPModelCollector';
import { HPIssueCollector } from '../research/collectors/HPIssueCollector';
import { HPErrorCodeCollector } from '../research/collectors/HPErrorCodeCollector';
import { HPDriverCollector } from '../research/collectors/HPDriverCollector';
import { HPFirmwareCollector } from '../research/collectors/HPFirmwareCollector';
import { HPFAQCollector } from '../research/collectors/HPFAQCollector';

async function main() {
  console.log('Starting Phase 2 Mass Export System...');
  
  const dataDir = path.join(process.cwd(), 'src', 'data');
  const dirs = ['models', 'issues', 'error-codes', 'drivers', 'firmware', 'faqs', 'clusters', 'keywords', 'relationships'];
  
  for (const d of dirs) {
    await fs.mkdir(path.join(dataDir, d), { recursive: true });
  }

  // Generate the massive dataset in memory (for demonstration)
  console.log('Generating 500+ Models...');
  const modelCollector = new HPModelCollector();
  const allModels = await modelCollector.generateMassiveModelList();
  
  console.log(`Writing ${allModels.length} models...`);
  await fs.writeFile(path.join(dataDir, 'models', 'all_models.json'), JSON.stringify(allModels, null, 2));

  // Extract model IDs
  const modelIds = allModels.map(m => m.slug);
  
  console.log('Generating 10,000+ Issues...');
  const issueCollector = new HPIssueCollector();
  const allIssues = await issueCollector.generateMassiveIssueList(modelIds);
  await fs.writeFile(path.join(dataDir, 'issues', 'all_issues.json'), JSON.stringify(allIssues, null, 2));

  console.log('Generating 1,000+ Error Codes...');
  const errorCollector = new HPErrorCodeCollector();
  const allErrors = await errorCollector.generateMassiveErrorCodeList(modelIds);
  await fs.writeFile(path.join(dataDir, 'error-codes', 'all_error_codes.json'), JSON.stringify(allErrors, null, 2));

  console.log('Generating FAQs...');
  const faqCollector = new HPFAQCollector();
  const allFaqs = await faqCollector.generateFAQList(modelIds);
  await fs.writeFile(path.join(dataDir, 'faqs', 'all_faqs.json'), JSON.stringify(allFaqs, null, 2));

  console.log('Phase 2 Mass Export Complete.');
}

main().catch(console.error);
