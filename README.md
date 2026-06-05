# HP Printer Support Knowledge Base

This project is the foundation for a large-scale programmatic SEO knowledge base for HP Printer Support, built using Next.js (App Router), TypeScript, Tailwind CSS, and Prisma (PostgreSQL).

## Project Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Copy the example environment file and update it with your actual credentials:
   ```bash
   cp .env.example .env
   ```

3. **Database Setup**
   Ensure you have a PostgreSQL instance running. Update `DATABASE_URL` in your `.env` file.
   Then, push the Prisma schema to your database:
   ```bash
   npx prisma db push
   # or
   npx prisma migrate dev
   ```

## Folder Structure

- `src/app/`: Next.js App Router pages (frontend, currently not built)
- `src/components/`: Reusable React components
- `src/lib/`: Utility functions and shared libraries
- `src/services/`: External API integrations and core services
- `src/database/`: Database connection and Prisma client instance
- `src/scripts/`: Standalone scripts for discovery, validation, and export
- `src/research/`: Web scraping and data collection engine
  - `scrapers/`, `collectors/`, `parsers/`, `validators/`, `exports/`
- `src/seo/`: SEO strategy documents and programmatic SEO generation logic
- `src/types/`: Global TypeScript definitions
- `src/hooks/`: Custom React hooks
- `src/config/`: Configuration files
- `src/data/`: Exported JSON data sets from the research engine

## Research Workflow & Data Collection Process

The `src/research` folder contains the engine required to scrape, discover, and structure HP printer support data.

1. **Model Discovery**: `src/scripts/discoverModels.ts` uses `HPModelCollector` to find all printer families and models.
2. **Issue Discovery**: `src/scripts/discoverIssues.ts` uses `HPIssueCollector` to map specific issues to models.
3. **Error Code Collection**: `src/scripts/discoverErrorCodes.ts` uses `HPErrorCodeCollector`.
4. **Validation**: `src/scripts/validateData.ts` runs integrity checks on collected data.
5. **Export**: `src/scripts/exportData.ts` generates structured JSON files in `src/data/` for future consumption by the frontend or AI content generation scripts.

### Commands

Run the discovery scripts via Node (ensure you have ts-node or run them compiled):
```bash
npx ts-node src/scripts/discoverModels.ts
npx ts-node src/scripts/discoverIssues.ts
npx ts-node src/scripts/discoverErrorCodes.ts
npx ts-node src/scripts/validateData.ts
npx ts-node src/scripts/exportData.ts
```

## Future Content Generation Flow

Once Phase 1 (Data Collection) is completed and validated:
1. AI scripts (using the OpenAI API) will process the JSON exports in `src/data/` to generate rich, readable articles and troubleshooting steps.
2. The Next.js frontend will utilize dynamic routing (`/models/[model-slug]/[issue-slug]`) and ISR (Incremental Static Regeneration) to render over 40,000 unique, SEO-optimized support pages.
