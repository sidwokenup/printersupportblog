import { Metadata } from 'next'
import Link from 'next/link'
import { GlobalSearch } from '@/components/search/GlobalSearch'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { AlertTriangle, ChevronRight, Hash, Search } from 'lucide-react'
import fs from 'fs/promises'
import path from 'path'

export const metadata: Metadata = {
  title: 'HP Printer Error Codes | Complete Troubleshooting Guide',
  description: 'Search our database of HP printer error codes to find immediate solutions, root causes, and step-by-step fixes.',
}

export default async function ErrorCodesIndexPage() {
  let errorCodes: Record<string, unknown>[] = [];
  try {
    const dataDir = path.join(process.cwd(), 'src', 'data', 'error-codes');
    const fileContents = await fs.readFile(path.join(dataDir, 'all_error_codes.json'), 'utf8');
    // Get unique error codes
    const allErrors = JSON.parse(fileContents);
    const uniqueCodes = new Set();
    errorCodes = allErrors.filter((err: Record<string, unknown>) => {
      if (!uniqueCodes.has(err.code)) {
        uniqueCodes.add(err.code);
        return true;
      }
      return false;
    });
  } catch (error) {
    console.warn("Could not load error codes from data directory", error);
    errorCodes = [
      { code: '59.F0', description: 'Internal hardware failure or mechanical jam.' },
      { code: '79 Error', description: 'Firmware or network communication error.' },
      { code: '49 Error', description: 'Print job formatting error causing crash.' },
      { code: '0xc19a', description: 'Printhead or ink system failure.' },
    ];
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Premium Hero Section */}
      <div className="bg-white border-b border-slate-200 pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/50 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-100/80 text-rose-700 text-sm font-medium mb-6 w-fit border border-rose-200/50">
              <AlertTriangle className="h-4 w-4" />
              <span>Official Error Code Database</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
              HP Printer Error Codes
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10">
              Is your printer blinking or displaying a code? Search our comprehensive database to instantly find what it means and how to fix it.
            </p>
            <div className="max-w-2xl mx-auto">
              <GlobalSearch size="lg" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-rose-100 p-2.5 rounded-xl text-rose-600">
              <Hash className="h-6 w-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Common Error Codes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {errorCodes.slice(0, 24).map((err: Record<string, unknown>) => {
              const code = String(err.code);
              const description = String(err.description);
              const slug = `hp-error-${code.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
              
              return (
                <Link key={code} href={`/error-codes/${slug}`} className="group">
                  <Card className="h-full border-slate-200 shadow-sm hover:shadow-md hover:border-rose-300 transition-all duration-300 rounded-2xl bg-white">
                    <CardHeader className="flex flex-row items-start justify-between p-6 space-y-0 gap-4">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl group-hover:bg-rose-50 group-hover:border-rose-100 transition-colors shrink-0">
                          <AlertTriangle className="h-6 w-6 text-slate-400 group-hover:text-rose-500 transition-colors" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-bold text-slate-900 mb-2 group-hover:text-rose-600 transition-colors">
                            Error {code}
                          </CardTitle>
                          <CardDescription className="text-slate-600 text-base leading-relaxed line-clamp-2">
                            {description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="h-10 w-10 shrink-0 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                        <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-rose-600 transition-colors group-hover:translate-x-0.5" />
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
