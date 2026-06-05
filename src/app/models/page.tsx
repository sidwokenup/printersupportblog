import { Metadata } from 'next'
import Link from 'next/link'
import { GlobalSearch } from '@/components/search/GlobalSearch'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Printer, ChevronRight, Search } from 'lucide-react'
import fs from 'fs/promises'
import path from 'path'

export const metadata: Metadata = {
  title: 'HP Printer Models | Manuals, Drivers, and Troubleshooting',
  description: 'Browse all HP printer models to find specific troubleshooting guides, drivers, error codes, and manuals.',
}

export default async function ModelsIndexPage() {
  let models: Record<string, unknown>[] = [];
  try {
    const dataDir = path.join(process.cwd(), 'src', 'data', 'models');
    const fileContents = await fs.readFile(path.join(dataDir, 'all_models.json'), 'utf8');
    models = JSON.parse(fileContents);
  } catch (error) {
    console.warn("Could not load models from data directory", error);
    // Fallback data if JSON doesn't exist
    models = [
      { slug: 'hp-deskjet-2700', name: 'HP DeskJet 2700 Series', series: 'HP DeskJet', type: 'Inkjet' },
      { slug: 'hp-envy-6055', name: 'HP ENVY 6055e', series: 'HP Envy', type: 'Inkjet' },
      { slug: 'hp-officejet-pro-9015', name: 'HP OfficeJet Pro 9015', series: 'HP OfficeJet Pro', type: 'Inkjet' },
    ];
  }

  // Group models by series
  const groupedModels = models.reduce((acc: Record<string, Record<string, unknown>[]>, model: Record<string, unknown>) => {
    const series = String(model.series || 'Other');
    if (!acc[series]) acc[series] = [];
    acc[series].push(model);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Hero Header */}
      <div className="bg-white border-b border-slate-200 pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              HP Printer Models
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10">
              Select your printer series below to find specific drivers, troubleshooting guides, and manuals tailored to your device.
            </p>
            <div className="max-w-2xl mx-auto">
              <GlobalSearch size="lg" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-16">
        <div className="space-y-16 max-w-6xl mx-auto">
          {Object.keys(groupedModels).sort().map((series) => (
            <section key={series} className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-slate-200">
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">{series}</h2>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium">
                  {groupedModels[series].length} models
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {groupedModels[series].map((model: Record<string, unknown>) => {
                  const slug = String(model.slug);
                  const name = String(model.name);
                  return (
                    <Link key={slug} href={`/models/${slug}`} className="group h-full">
                      <Card className="h-full bg-white border-slate-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden flex flex-col justify-between p-6">
                        <div>
                          <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                            <Printer className="h-6 w-6" />
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors">
                            {name}
                          </h3>
                        </div>
                        <div className="mt-6 flex items-center text-sm font-medium text-slate-500 group-hover:text-primary transition-colors">
                          View details <ChevronRight className="h-4 w-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </div>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
