import fs from 'fs/promises';
import path from 'path';
import { HPModelCollector } from '../research/collectors/HPModelCollector';

async function main() {
  console.log('Starting HP Model Discovery System...');
  const collector = new HPModelCollector();
  const families = await collector.discoverFamilies();

  const allModels = [];

  for (const family of families) {
    const models = await collector.collectModelsForFamily(family);
    allModels.push(...models);
  }

  // Ensure data directory exists
  const dataDir = path.join(process.cwd(), 'src', 'data', 'models');
  await fs.mkdir(dataDir, { recursive: true });

  // Example: Write an empty array to indicate structure
  const outputPath = path.join(dataDir, 'all_models.json');
  await fs.writeFile(outputPath, JSON.stringify(allModels, null, 2));

  console.log(`Discovered ${allModels.length} models. Saved to ${outputPath}`);
}

main().catch(console.error);
