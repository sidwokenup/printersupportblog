import { Metadata } from 'next'
import Link from 'next/link'
import { GlobalSearch } from '@/components/search/GlobalSearch'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Wrench, Wifi, Printer, Search, Download, AlertTriangle, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HP Printer Troubleshooting Hub | Find Solutions Fast',
  description: 'Browse all HP printer troubleshooting guides by category. Fix offline issues, paper jams, scanner errors, and more.',
}

export default async function TroubleshootingHub({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string }>
}) {
  const resolvedParams = await searchParams;
  const query = resolvedParams.q || ''
  const selectedCategory = resolvedParams.category || ''

  const categories = [
    { title: 'Offline Issues', icon: Wifi, desc: 'Printer is offline, not connecting to WiFi, or losing connection.' },
    { title: 'Printing Problems', icon: Printer, desc: 'Not printing, blank pages, faded ink, or slow printing.' },
    { title: 'Error Codes', icon: AlertTriangle, desc: 'Blinking lights, screen errors, and specific error codes.' },
    { title: 'Paper Jams', icon: FileText, desc: 'Paper jam errors, rollers not feeding paper.' },
    { title: 'Driver & Software', icon: Download, desc: 'Driver unavailable, installation failed, or scanner not found.' },
    { title: 'Hardware Setup', icon: Wrench, desc: 'Initial setup, cartridge alignment, and hardware maintenance.' },
  ]

  // Mock data for search/category results. In a real app, this would be a DB query.
  const allMockResults = [
    { title: 'How to fix Printer Offline on HP DeskJet 2700', url: '/models/hp-deskjet-2700/offline', category: 'offline-issues' },
    { title: 'How to fix Printer Offline on HP ENVY 6055', url: '/models/hp-envy-6055/offline', category: 'offline-issues' },
    { title: 'Resolving Paper Jam Errors on HP OfficeJet Pro 9015', url: '/models/hp-officejet-pro-9015/paper-jam', category: 'paper-jams' },
    { title: 'HP Error 79 Fix Guide', url: '/error-codes/hp-error-79', category: 'error-codes' },
    { title: 'Driver Installation Failed on Windows 11', url: '/models/hp-deskjet-2700/driver-unavailable', category: 'driver-&-software' },
    { title: 'Not printing black ink on HP ENVY 6055', url: '/models/hp-envy-6055/not-printing', category: 'printing-problems' }
  ];

  let displayResults: Array<{title: string, url: string, category: string}> = [];
  
  if (query) {
    displayResults = allMockResults.filter(r => r.title.toLowerCase().includes(query.toLowerCase()));
  } else if (selectedCategory) {
    displayResults = allMockResults.filter(r => r.category === selectedCategory);
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Troubleshooting Hub</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Find step-by-step guides to resolve any issue with your HP printer.
        </p>
        <GlobalSearch size="lg" />
        {query && (
          <p className="mt-4 text-sm text-muted-foreground">
            Showing search results for: <span className="font-semibold text-foreground">&quot;{query}&quot;</span>
          </p>
        )}
        {selectedCategory && !query && (
          <p className="mt-4 text-sm text-muted-foreground">
            Showing category: <span className="font-semibold text-foreground">{selectedCategory.replace(/-/g, ' ')}</span>
            <Link href="/troubleshooting" className="ml-2 text-primary hover:underline">(Clear filter)</Link>
          </p>
        )}
      </div>

      {!query && !selectedCategory ? (
        <>
          <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <Link key={i} href={`/troubleshooting?category=${cat.title.toLowerCase().replace(/ /g, '-')}`}>
                <Card className="h-full hover:border-primary/50 transition-colors group">
                  <CardHeader>
                    <cat.icon className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-lg">{cat.title}</CardTitle>
                    <CardDescription>{cat.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Results</h2>
          {displayResults.length > 0 ? (
            <div className="space-y-4">
              {displayResults.map((result, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <Link href={result.url} className="hover:underline">
                      <CardTitle className="text-lg text-primary">{result.title}</CardTitle>
                    </Link>
                    <CardDescription>
                      Click to view the step-by-step troubleshooting guide for this issue.
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : (
             <Card className="text-center py-12">
               <CardTitle className="text-muted-foreground">No results found.</CardTitle>
               <CardDescription className="mt-2">Try adjusting your search query or browsing a different category.</CardDescription>
             </Card>
          )}
        </div>
      )}
    </div>
  )
}
