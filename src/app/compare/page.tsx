import { comparisonShowdowns, ComparisonShowdown } from "@/data/comparisons";
import Link from "next/link";
import { 
  Scale, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Printer, 
  TrendingDown, 
  ChevronRight, 
  Home,
  Clock,
  Layers
} from "lucide-react";
import type { Metadata } from "next";

const REGIONS = ["en-US", "en-GB", "en-CA", "en-AU", "en-IN", "en-IE", "en-SG", "en-NZ", "en-ZA", "en-PH", "x-default"];

export const metadata: Metadata = {
  title: "Printer Comparison Engine: Lab-Tested Head-to-Head Showdowns (2026) | Live Feed Reviews",
  description: "Compare top printers head-to-head. Empirical 3-year TCO calculations, ISO cost-per-page benchmarks, duplex ADF scanning tests, and verified lab verdicts.",
  alternates: {
    canonical: "/compare",
    languages: Object.fromEntries(
      REGIONS.map((r) => [r, "https://www.livefeedreviews.com/compare"])
    ),
  },
  openGraph: {
    title: "Printer Comparison Engine: Head-to-Head Lab Showdowns (2026)",
    description: "Side-by-side printer hardware evaluations, 3-year operating cost comparisons, and independent buying advice.",
    url: "https://www.livefeedreviews.com/compare",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "Live Feed Reviews" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Printer Comparison Engine: Head-to-Head Showdowns",
    description: "Compare running costs, print speeds, and reliability across HP, Epson, Brother, Canon, and Rollo.",
    images: ["/logo.png"],
  },
};

export default function CompareHubPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.livefeedreviews.com/compare#webpage",
        "url": "https://www.livefeedreviews.com/compare",
        "name": "Printer Comparison Engine: Head-to-Head Showdowns",
        "description": "Comprehensive index of independent head-to-head printer hardware showdowns.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://www.livefeedreviews.com/#website"
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [
            "h1",
            ".compare-hub-description"
          ]
        },
        "mainEntity": {
          "@type": "ItemList",
          "numberOfItems": comparisonShowdowns.length,
          "itemListElement": comparisonShowdowns.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.title,
            "url": `https://www.livefeedreviews.com/compare/${item.slug}`
          }))
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.livefeedreviews.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Printer Comparisons",
            "item": "https://www.livefeedreviews.com/compare",
          },
        ],
      }
    ]
  };

  const categories = [
    "All Showdowns",
    "Supertank vs Inkjet",
    "Monochrome Laser",
    "Small Office All-in-One",
    "Color Laser",
    "Shipping Label",
    "Wide-Format Tabloid"
  ];

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20 pt-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-blue-600 flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold">Printer Comparisons</span>
        </nav>

        {/* Hero Header */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold tracking-wide uppercase">
              <Scale className="w-3.5 h-3.5" />
              Independent Hardware Showdowns
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Head-to-Head Printer Comparison Engine
            </h1>
            
            <p className="text-slate-300 text-sm md:text-base leading-relaxed compare-hub-description">
              Stop guessing which printer fits your workflow. We pit top competing models against each other in real-world benchmarks: 3-year Total Cost of Ownership (TCO), cost-per-page, continuous duplex print speeds, and scanner auto-feeder durability.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-400 font-medium">Popular Categories:</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10 text-white font-medium border border-white/10">Supertank vs Cartridge</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10 text-white font-medium border border-white/10">Budget Laser</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10 text-white font-medium border border-white/10">Thermal Labels</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10 text-white font-medium border border-white/10">11x17 Tabloid</span>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
              <TrendingDown className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">3-Year TCO Analysis</div>
              <p className="text-xs text-slate-600 mt-1">Calculates hardware price plus 36 months of real toner/ink replacement costs.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Clear Winner Verdicts</div>
              <p className="text-xs text-slate-600 mt-1">No diplomatic tie answers: we declare exact winners based on cost and workflow.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Zero Brand Bias</div>
              <p className="text-xs text-slate-600 mt-1">100% self-funded laboratory testing using ISO/IEC 19752 continuous yield standards.</p>
            </div>
          </div>
        </div>

        {/* Comparison Showdown Cards */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h2 className="text-2xl font-bold text-slate-900">
              Active Head-to-Head Showdowns ({comparisonShowdowns.length})
            </h2>
            <Link
              href="/toner-savings"
              className="text-xs text-blue-600 hover:underline font-semibold flex items-center gap-1"
            >
              Open Interactive TCO Calculator <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comparisonShowdowns.map((showdown) => (
              <div
                key={showdown.slug}
                className="bg-white rounded-3xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all p-6 md:p-7 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  {/* Category Pill & Winner Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                      {showdown.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      ★ {showdown.winner.split(" ")[0]} Wins
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    <Link href={`/compare/${showdown.slug}`}>
                      {showdown.title}
                    </Link>
                  </h3>

                  {/* Model A vs Model B Comparison Cards */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    {/* Model A */}
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{showdown.modelA.brand}</div>
                      <div className="text-xs font-extrabold text-slate-900 line-clamp-1">{showdown.modelA.name}</div>
                      <div className="text-xs font-bold text-blue-600">{showdown.modelA.price}</div>
                      <div className="text-[11px] text-slate-600 pt-1 font-mono">
                        CPP: {showdown.modelA.monoCPP}
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        3-Yr TCO: {showdown.modelA.tco3Year}
                      </div>
                    </div>

                    {/* Model B */}
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{showdown.modelB.brand}</div>
                      <div className="text-xs font-extrabold text-slate-900 line-clamp-1">{showdown.modelB.name}</div>
                      <div className="text-xs font-bold text-blue-600">{showdown.modelB.price}</div>
                      <div className="text-[11px] text-slate-600 pt-1 font-mono">
                        CPP: {showdown.modelB.monoCPP}
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        3-Yr TCO: {showdown.modelB.tco3Year}
                      </div>
                    </div>
                  </div>

                  {/* Savings Callout */}
                  <p className="text-xs text-slate-600 leading-relaxed bg-blue-50/40 p-3 rounded-xl border border-blue-100">
                    <span className="font-bold text-slate-900">Lab Key Finding:</span> {showdown.tcoSavingsNote}
                  </p>
                </div>

                {/* Footer CTA */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    Scores: {showdown.scoreA}/10 vs {showdown.scoreB}/10
                  </span>
                  <Link
                    href={`/compare/${showdown.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-xs"
                  >
                    Read Full Lab Showdown <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold text-white">
              Need custom operating cost math for your office?
            </h3>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
              Use our live interactive TCO simulator to calculate precise supply expenses based on your exact monthly page volume and color ratios.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/toner-savings"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
            >
              Open Interactive Calculator
            </Link>
            <Link
              href="/blog"
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
            >
              Browse All Reviews
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
