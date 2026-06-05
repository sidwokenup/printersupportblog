import { Metadata } from 'next'
import Link from 'next/link'
import { GlobalSearch } from '@/components/search/GlobalSearch'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Download, Monitor, Apple, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HP Printer Drivers & Software Download Center',
  description: 'Download the latest official drivers, firmware, and diagnostic software for all HP printer models.',
}

export default function DriversIndexPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Drivers & Software Download</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Enter your printer model below to find the correct drivers for Windows, macOS, or Linux.
        </p>
        <GlobalSearch size="lg" />
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card className="bg-muted/30">
          <CardHeader>
            <Monitor className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Windows Drivers</CardTitle>
            <CardDescription className="text-base mt-2">
              For Windows 10, Windows 11, and older versions. We recommend the HP Smart App or Universal Print Driver for the best experience.
            </CardDescription>
          </CardHeader>
        </Card>
        
        <Card className="bg-muted/30">
          <CardHeader>
            <Apple className="h-8 w-8 text-primary mb-2" />
            <CardTitle>macOS Drivers</CardTitle>
            <CardDescription className="text-base mt-2">
              For macOS Sonoma, Ventura, and Monterey. HP Easy Start is the recommended utility for setting up printers on Mac.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Popular Printer Driver Downloads</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { id: 'hp-deskjet-2700', name: 'HP DeskJet 2700 Series' },
            { id: 'hp-envy-6055', name: 'HP ENVY 6055e' },
            { id: 'hp-officejet-pro-9015', name: 'HP OfficeJet Pro 9015' },
            { id: 'hp-laserjet-pro-m404', name: 'HP LaserJet Pro M404' },
            { id: 'hp-smart-tank-5101', name: 'HP Smart Tank 5101' },
            { id: 'hp-color-laserjet-pro-mfp-m479', name: 'HP Color LaserJet Pro MFP M479' }
          ].map((model) => (
            <Link key={model.id} href={`/models/${model.id}/drivers`}>
              <Card className="hover:border-primary/50 transition-colors h-full flex flex-col justify-center p-4 group">
                <div className="flex items-center gap-3">
                  <Download className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div className="flex-1 font-medium">{model.name} Drivers</div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
