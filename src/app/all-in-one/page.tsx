import type { Metadata } from "next";
import Link from "next/link";
import { blogArticles } from "@/data/blogs";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Check,
  Star,
  Printer,
  ChevronRight,
  Home,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Best All-In-One Inkjet Printers 2026 | Refillable Tank Reviews | Live Feed Reviews",
  description:
    "Compare top multifunction all-in-one printers for remote work and families. In-depth ratings for auto document feeders, borderless photos, and low-cost ink bottles.",
  alternates: {
    canonical: "/all-in-one",
      languages: {
        "en-US": "https://www.livefeedreviews.com/all-in-one",
        "en-GB": "https://www.livefeedreviews.com/all-in-one",
        "en-CA": "https://www.livefeedreviews.com/all-in-one",
        "en-AU": "https://www.livefeedreviews.com/all-in-one",
        "en-IN": "https://www.livefeedreviews.com/all-in-one",
        "en-IE": "https://www.livefeedreviews.com/all-in-one",
        "en-SG": "https://www.livefeedreviews.com/all-in-one",
        "en-NZ": "https://www.livefeedreviews.com/all-in-one",
        "en-ZA": "https://www.livefeedreviews.com/all-in-one",
        "en-PH": "https://www.livefeedreviews.com/all-in-one",
        "x-default": "https://www.livefeedreviews.com/all-in-one",
      },
  },
  openGraph: {
    title: "Best All-In-One Inkjet Printers 2026 | Refillable Tank Reviews",
    description:
      "Compare top multifunction all-in-one printers for remote work and families. In-depth ratings for auto document feeders, borderless photos, and low-cost ink bottles.",
    url: "https://www.livefeedreviews.com/all-in-one",
    siteName: "Live Feed Reviews",
    type: "website",
  },
};

export default function AllInOneLandingPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.livefeedreviews.com/all-in-one#webpage",
        "url": "https://www.livefeedreviews.com/all-in-one",
        "name": "Best All-In-One Inkjet Printers (2026)",
        "description": "Multifunction refillable ink tank printers",
        "isPartOf": {
          "@id": "https://www.livefeedreviews.com/#website"
        }
      }
    ]
  };

  const inkjetArticle = blogArticles.find((a) => a.slug === "best-inkjet-printer-home-office")!;
  const costArticle = blogArticles.find((a) => a.slug === "laser-vs-inkjet-printer-cost-comparison")!;

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
          <span className="text-slate-800 font-semibold">All-In-One Inkjets</span>
        </nav>

        {/* Hero Header */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STAG 2: Multifunction Ink Tank & Cartridge Comparisons</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Best All-In-One Inkjet Printers for Home Office (2026)
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl">
            Save up to 80% on printing costs with refillable ink tanks. We tested ADF document scanning,
            borderless photo reproduction, and long-term printhead reliability across top models.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {inkjetArticle.keywords.map((kw, idx) => (
              <span key={idx} className="text-xs font-mono bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">
                &quot;{kw}&quot;
              </span>
            ))}
          </div>
        </div>

        {/* Top Scored Inkjet Picks */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Top-Rated Inkjet All-In-Ones</h2>
            <Link href={`/blog/${inkjetArticle.slug}`} className="text-xs text-primary font-semibold hover:underline">
              Read Full Buyer's Guide &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {inkjetArticle.topPicks.map((pick, pIdx) => (
              <div key={pIdx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      {pick.badge}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 font-mono">{pick.rating}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{pick.name}</h3>
                  <div className="text-xs font-mono font-bold text-slate-700">{pick.priceEst}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{pick.summary}</p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <a
                    href="https://www.amazon.com/s?k=megatank+printer"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="block w-full py-2 bg-primary hover:bg-blue-700 text-white font-semibold rounded-lg text-center text-xs transition-colors"
                  >
                    Check Pricing ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inkjet Guides List */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-lg font-bold text-slate-900">Featured Inkjet Comparisons</h2>
          <div className="divide-y divide-slate-100 text-sm">
            <div className="py-3 flex items-center justify-between">
              <div>
                <Link href={`/blog/${inkjetArticle.slug}`} className="font-semibold text-slate-900 hover:text-primary">
                  {inkjetArticle.title}
                </Link>
                <div className="text-xs text-slate-500 mt-0.5">{inkjetArticle.readTime} • Refillable Bottles</div>
              </div>
              <Link href={`/blog/${inkjetArticle.slug}`} className="text-xs text-primary font-semibold">
                Read &rarr;
              </Link>
            </div>
            <div className="py-3 flex items-center justify-between">
              <div>
                <Link href={`/blog/${costArticle.slug}`} className="font-semibold text-slate-900 hover:text-primary">
                  {costArticle.title}
                </Link>
                <div className="text-xs text-slate-500 mt-0.5">{costArticle.readTime} • TCO Breakdown</div>
              </div>
              <Link href={`/blog/${costArticle.slug}`} className="text-xs text-primary font-semibold">
                Read &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
