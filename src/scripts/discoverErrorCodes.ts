import fs from 'fs/promises';
import path from 'path';
import { HPErrorCodeCollector } from '../research/collectors/HPErrorCodeCollector';

async function main() {
  console.log('Starting HP Error Code Discovery System...');
  const collector = new HPErrorCodeCollector();
  
  // In Phase 2 we generate mass data instead of just collecting
  // For script compatibility, we will just generate for a dummy model array
  const errorCodes = await collector.generateMassiveErrorCodeList(['hp-deskjet-2700', 'hp-envy-6055']);

  const dataDir = path.join(process.cwd(), 'src', 'data', 'error-codes');
  await fs.mkdir(dataDir, { recursive: true });

  const outputPath = path.join(dataDir, 'all_error_codes.json');
  await fs.writeFile(outputPath, JSON.stringify(errorCodes, null, 2));

  console.log(`Discovered ${errorCodes.length} error codes. Saved to ${outputPath}`);
}

main().catch(console.error);
