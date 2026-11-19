import { curatedErrorCodes, ErrorCodeDetail } from "@/data/curatedErrorCodes";
import Link from "next/link";
import { 
  AlertTriangle, 
  ChevronRight, 
  Home, 
  Wrench, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  HelpCircle,
  Search,
  CheckCircle2
} from "lucide-react";
import type { Metadata } from "next";

const REGIONS = ["en-US", "en-GB", "en-CA", "en-AU", "en-IN", "en-IE", "en-SG", "en-NZ", "en-ZA", "en-PH", "x-default"];

export const metadata: Metadata = {
  title: "Printer Error Code Lookup & Diagnostic Index (HP, Canon, Epson, Brother) | Live Feed Reviews",
  description: "Search and resolve alphanumeric printer error codes for HP, Canon, Epson, and Brother printers. Verified DIY reset procedures, carriage unjamming, and printhead diagnostics.",
  alternates: {
    canonical: "/solutions/error-codes",
    languages: Object.fromEntries(
      REGIONS.map((r) => [r, "https://www.livefeedreviews.com/solutions/error-codes"])
    ),
  },
  openGraph: {
    title: "Printer Error Code Diagnostic Directory (HP, Canon, Epson, Brother)",
    description: "Alphanumeric error code recovery guides for consumer and commercial printers.",
    url: "https://www.livefeedreviews.com/solutions/error-codes",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "Live Feed Reviews" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Printer Error Code Diagnostic Directory",
    description: "Step-by-step alphanumeric error code fixes for HP, Canon, Epson, and Brother printers.",
    images: ["/logo.png"],
  },
};

export default function ErrorCodesHubPage() {
  const brands: ("HP" | "Canon" | "Epson" | "Brother")[] = ["HP", "Canon", "Epson", "Brother"];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.livefeedreviews.com/solutions/error-codes#webpage",
        "url": "https://www.livefeedreviews.com/solutions/error-codes",
        "name": "Printer Error Code Lookup & Diagnostic Index",
        "description": "Comprehensive index of alphanumeric error codes for HP, Canon, Epson, and Brother printers.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://www.livefeedreviews.com/#website"
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [
            "h1",
            ".error-hub-description"
          ]
        },
        "mainEntity": {
          "@type": "ItemList",
          "numberOfItems": curatedErrorCodes.length,
          "itemListElement": curatedErrorCodes.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": `${item.brand} ${item.code}: ${item.title}`,
            "url": `https://www.livefeedreviews.com/solutions/error-codes/${item.slug}`
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
            "name": "Solutions",
            "item": "https://www.livefeedreviews.com/solutions",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Error Codes",
            "item": "https://www.livefeedreviews.com/solutions/error-codes",
          },
        ],
      }
    ]
  };

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
          <Link href="/solutions" className="hover:text-blue-600 transition-colors">
            Solutions
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold">Error Codes</span>
        </nav>

        {/* Hero Banner */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Programmatic Diagnostic Knowledge Base
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Printer Error Code Directory &amp; DIY Fixes
            </h1>
            
            <p className="text-slate-300 text-sm md:text-base leading-relaxed error-hub-description">
              Lookup alphanumeric fault codes across HP, Canon, Epson, and Brother printers. Access verified mechanical resets, optical sensor cleaning procedures, and printhead diagnostics without costly technician dispatch.
            </p>

            {/* Quick Filter Jump Anchors */}
            <div className="pt-4 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-400 font-medium">Quick Jump by Brand:</span>
              {brands.map((b) => (
                <a
                  key={b}
                  href={`#brand-${b.toLowerCase()}`}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-semibold text-white transition-colors"
                >
                  {b} ({curatedErrorCodes.filter((c) => c.brand === b).length})
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Diagnostic Snapshot Box */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs grid md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Alphanumeric Lookups</div>
              <p className="text-xs text-slate-600 mt-1">Cross-referenced hex codes (0x...), support codes, and engine errors.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Hardware Bench Tested</div>
              <p className="text-xs text-slate-600 mt-1">Protocols verified against physical service stations and optical flags.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">OEM Safety Compliant</div>
              <p className="text-xs text-slate-600 mt-1">Hard capacitor discharge instructions preventing power board damage.</p>
            </div>
          </div>
        </div>

        {/* Brand Grouped Sections */}
        <div className="space-y-12">
          {brands.map((brand) => {
            const list = curatedErrorCodes.filter((c) => c.brand === brand);
            if (list.length === 0) return null;

            return (
              <section key={brand} id={`brand-${brand.toLowerCase()}`} className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-blue-600" />
                    <h2 className="text-2xl font-bold text-slate-900">
                      {brand} Printer Error Codes
                    </h2>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold">
                      {list.length} Guides
                    </span>
                  </div>
                  <Link
                    href={`/solutions`}
                    className="text-xs text-blue-600 hover:underline font-medium"
                  >
                    View All {brand} Solutions &rarr;
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {list.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/solutions/error-codes/${item.slug}`}
                      className="group bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                            {item.code}
                          </span>
                          <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                            item.severity === "Critical" 
                              ? "bg-rose-50 text-rose-700 border border-rose-200" 
                              : item.severity === "High"
                              ? "bg-amber-50 text-amber-700 border border-amber-200"
                              : "bg-blue-50 text-blue-700 border border-blue-200"
                          }`}>
                            {item.severity}
                          </span>
                        </div>

                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                          {item.title}
                        </h3>

                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {item.symptoms}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                        <span className="flex items-center gap-1 font-medium">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {item.timeToFix}
                        </span>
                        <span className="text-blue-600 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                          Fix Guide <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Deep Knowledge Cross-Links */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold text-white">
              Can&apos;t find your specific alphanumeric error code?
            </h3>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
              Explore our root-cause diagnostic pillars for universal printer jams, offline network drops, blank pages, and printhead clogs across all brands.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/solutions"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors"
            >
              General Solutions Hub
            </Link>
            <Link
              href="/toner-savings"
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
            >
              Toner Savings Guide
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
