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
  title: "Best Wireless Laser Printers 2026 | Researched & Ranked | Live Feed Reviews",
  description:
    "Looking for the best wireless laser printer? Read our comprehensive 2026 research guide on speed, estimated toner yield, and duty cycles.",
  alternates: {
    canonical: "/printers",
      languages: {
        "en-US": "https://www.livefeedreviews.com/printers",
        "en-GB": "https://www.livefeedreviews.com/printers",
        "en-CA": "https://www.livefeedreviews.com/printers",
        "en-AU": "https://www.livefeedreviews.com/printers",
        "en-IN": "https://www.livefeedreviews.com/printers",
        "en-IE": "https://www.livefeedreviews.com/printers",
        "en-SG": "https://www.livefeedreviews.com/printers",
        "en-NZ": "https://www.livefeedreviews.com/printers",
        "en-ZA": "https://www.livefeedreviews.com/printers",
        "en-PH": "https://www.livefeedreviews.com/printers",
        "x-default": "https://www.livefeedreviews.com/printers",
      },
  },
  openGraph: {
    title: "Best Wireless Laser Printers 2026 | Researched & Ranked",
    description:
      "Looking for the best wireless laser printer? Read our comprehensive 2026 research guide on speed, estimated toner yield, and duty cycles.",
    url: "https://www.livefeedreviews.com/printers",
    siteName: "Live Feed Reviews",
    type: "website",
  },
};

export default function PrintersLandingPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.livefeedreviews.com/printers#webpage",
        "url": "https://www.livefeedreviews.com/printers",
        "name": "Best Wireless Laser Printers (2026)",
        "description": "Independent benchmarks of wireless laser printers",
        "isPartOf": {
          "@id": "https://www.livefeedreviews.com/#website"
        }
      }
    ]
  };

  const laserArticle = blogArticles.find((a) => a.slug === "best-laser-printer-2026-buyers-guide")!;
  const tonerArticle = blogArticles.find((a) => a.slug === "toner-cartridge-cost-saving-guide")!;

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
          <span className="text-slate-800 font-semibold">Laser Printers</span>
        </nav>

        {/* Hero Header */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STAG 1: Verified Monochrome & Color Laser Reviews</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Best Wireless Laser Printers for Home & Office (2026)
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl">
            We analyzed leading laser printers on rated print speed, manufacturer toner yield estimates,
            and wireless AirPrint/Mopria setup. Discover our top-rated research picks that reduce estimated
            cost-per-page to under 1¢.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {laserArticle.keywords.map((kw, idx) => (
              <span key={idx} className="text-xs font-mono bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">
                &quot;{kw}&quot;
              </span>
            ))}
          </div>
        </div>

        {/* Top Scored Laser Picks */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Top-Rated Laser Printers in our Lab</h2>
            <Link href={`/blog/${laserArticle.slug}`} className="text-xs text-primary font-semibold hover:underline">
              Read 2,450-Word In-Depth Guide &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {laserArticle.topPicks.map((pick, pIdx) => (
              <div key={pIdx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      {pick.badge}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 font-mono">{pick.rating}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{pick.name}</h3>
                  <div className="text-xs font-mono font-bold text-slate-700">{pick.priceEst}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{pick.summary}</p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <a
                    href="https://www.amazon.com/s?k=brother+laser+printer"
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

        {/* Laser Guides List */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-lg font-bold text-slate-900">Featured Laser Guides & Analyses</h2>
          <div className="divide-y divide-slate-100 text-sm">
            <div className="py-3 flex items-center justify-between">
              <div>
                <Link href={`/blog/${laserArticle.slug}`} className="font-semibold text-slate-900 hover:text-primary">
                  {laserArticle.title}
                </Link>
                <div className="text-xs text-slate-500 mt-0.5">{laserArticle.readTime} • Cost: 0.9¢/page</div>
              </div>
              <Link href={`/blog/${laserArticle.slug}`} className="text-xs text-primary font-semibold">
                Read &rarr;
              </Link>
            </div>
            <div className="py-3 flex items-center justify-between">
              <div>
                <Link href={`/blog/${tonerArticle.slug}`} className="font-semibold text-slate-900 hover:text-primary">
                  {tonerArticle.title}
                </Link>
                <div className="text-xs text-slate-500 mt-0.5">{tonerArticle.readTime} • High-Yield Math</div>
              </div>
              <Link href={`/blog/${tonerArticle.slug}`} className="text-xs text-primary font-semibold">
                Read &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
