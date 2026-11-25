import type { Metadata } from "next";
import Link from "next/link";
import { blogArticles } from "@/data/blogs";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Printer,
  ChevronRight,
  Home,
  Layers,
  Palette,
  Maximize2,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Best Wide-Format & 11x17 Tabloid Printers (2026) | Live Feed Reviews",
  description:
    "Looking for the best wide-format 11x17 printer? We benchmarked tabloid print speeds, Adobe RGB color gamut, and ink costs across Canon, Epson, and Brother.",
  alternates: {
    canonical: "/wide-format",
      languages: {
        "en-US": "https://www.livefeedreviews.com/wide-format",
        "en-GB": "https://www.livefeedreviews.com/wide-format",
        "en-CA": "https://www.livefeedreviews.com/wide-format",
        "en-AU": "https://www.livefeedreviews.com/wide-format",
        "en-IN": "https://www.livefeedreviews.com/wide-format",
        "en-IE": "https://www.livefeedreviews.com/wide-format",
        "en-SG": "https://www.livefeedreviews.com/wide-format",
        "en-NZ": "https://www.livefeedreviews.com/wide-format",
        "en-ZA": "https://www.livefeedreviews.com/wide-format",
        "en-PH": "https://www.livefeedreviews.com/wide-format",
        "x-default": "https://www.livefeedreviews.com/wide-format",
      },
  },
  openGraph: {
    title: "Best Wide-Format & 11x17 Tabloid Printers (2026) | Live Feed Reviews",
    description:
      "Looking for the best wide-format 11x17 printer? We benchmarked tabloid print speeds, Adobe RGB color gamut, and ink costs across Canon, Epson, and Brother.",
    url: "https://www.livefeedreviews.com/wide-format",
    siteName: "Live Feed Reviews",
    type: "website",
  },
};

export default function WideFormatLandingPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.livefeedreviews.com/wide-format#webpage",
        "url": "https://www.livefeedreviews.com/wide-format",
        "name": "Best Wide-Format & 11x17 Tabloid Printers (2026)",
        "description": "Tabloid engineering prints and photo printers",
        "isPartOf": {
          "@id": "https://www.livefeedreviews.com/#website"
        }
      }
    ]
  };

  const wideArticle = blogArticles.find((a) => a.slug === "best-wide-format-printer-tabloid-reviews")!;

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-8">
        <nav className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
          <Link href="/" className="hover:text-primary flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/blog" className="hover:text-primary">
            Reviews
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold">Wide-Format &amp; 11x17 Printers</span>
        </nav>

        {/* Hero Header */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STAG 4: Wide-Format &amp; Tabloid 11x17 Hardware Benchmarks</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Best Wide-Format &amp; 11x17 Tabloid Printers (2026)
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl">
            For architectural blueprints, financial spreadsheets, and gallery-grade art prints, standard letter printers fall short.
            Our research evaluated tabloid paper transport, Adobe RGB gamut specifications, and long-term estimated ink costs.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {wideArticle.keywords.map((kw, idx) => (
              <span key={idx} className="text-xs font-mono bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">
                &quot;{kw}&quot;
              </span>
            ))}
          </div>
        </div>

        {/* Specification Benchmarks Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {wideArticle.isoBenchmarks.map((bench, bIdx) => (
            <div key={bIdx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs text-center">
              <div className="text-[11px] text-slate-500 font-mono uppercase">{bench.label}</div>
              <div className="text-xl font-bold text-slate-900 mt-1">{bench.value}</div>
              <div className="text-[10px] text-slate-500 mt-0.5">{bench.note}</div>
            </div>
          ))}
        </div>

        {/* Top-Rated Scored Picks */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Top-Rated Wide-Format Models (2026 Research)</h2>
            <Link href={`/blog/${wideArticle.slug}`} className="text-xs text-primary font-semibold hover:underline">
              Read 2,350-Word In-Depth Guide &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {wideArticle.topPicks.map((pick, pIdx) => (
              <div key={pIdx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                      {pick.badge}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 font-mono">{pick.rating}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{pick.name}</h3>
                  <div className="text-xs font-mono font-bold text-slate-700">{pick.priceEst}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{pick.summary}</p>

                  <div className="space-y-1 pt-2">
                    <div className="text-[11px] font-semibold text-slate-700">Best for:</div>
                    <div className="text-xs text-slate-500 leading-snug">{pick.bestFor}</div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <Link
                    href={`/blog/${wideArticle.slug}`}
                    className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-center text-xs transition-colors"
                  >
                    View Review &amp; Specs
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Buying Guide Breakdown */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <h2 className="text-lg font-bold text-slate-900">Wide-Format Decision Matrix: Key Specs Explained</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 leading-relaxed">
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                <Maximize2 className="w-4 h-4 text-blue-600" />
                <span>11x17 vs. 13x19 Media</span>
              </div>
              <p>
                Tabloid (11x17) matches standard CAD schematics and folded engineering packets. 13x19 (Super B) is essential for graphic designers who need full-bleed borderless 11x17 layouts with crop marks.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                <Palette className="w-4 h-4 text-blue-600" />
                <span>Pigment vs. Dye Inks</span>
              </div>
              <p>
                Pigment inks resist water, UV sunlight, and highlighter smearing on job sites. Dye inks soak into glossy photo coatings to produce deeper blacks and smoother gradients for art prints.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>Rear Specialty Feed Paths</span>
              </div>
              <p>
                Thick 300gsm watercolor paper or heavy poster cardstock will jam in tight U-turn rollers. Ensure your printer has a dedicated rear or straight-through horizontal bypass feed.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-lg font-bold text-slate-900">Frequently Asked Questions</h2>
          <div className="divide-y divide-slate-100 text-xs">
            {wideArticle.faqs.map((faq, fIdx) => (
              <div key={fIdx} className="py-3 space-y-1">
                <div className="font-semibold text-slate-900">{faq.question}</div>
                <div className="text-slate-600 leading-relaxed">{faq.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
