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
  ChevronRight,
  Home,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Best Desktop Document Scanners 2026 | Duplex Sheetfed Reviews | Live Feed Reviews",
  description:
    "Digitize contracts and receipts at up to 60 pages per minute. Specification ratings for ultrasonic double-feed prevention and searchable OCR accuracy.",
  alternates: {
    canonical: "/scanners",
      languages: {
        "en-US": "https://www.livefeedreviews.com/scanners",
        "en-GB": "https://www.livefeedreviews.com/scanners",
        "en-CA": "https://www.livefeedreviews.com/scanners",
        "en-AU": "https://www.livefeedreviews.com/scanners",
        "en-IN": "https://www.livefeedreviews.com/scanners",
        "en-IE": "https://www.livefeedreviews.com/scanners",
        "en-SG": "https://www.livefeedreviews.com/scanners",
        "en-NZ": "https://www.livefeedreviews.com/scanners",
        "en-ZA": "https://www.livefeedreviews.com/scanners",
        "en-PH": "https://www.livefeedreviews.com/scanners",
        "x-default": "https://www.livefeedreviews.com/scanners",
      },
  },
  openGraph: {
    title: "Best Desktop Document Scanners 2026 | Duplex Sheetfed Reviews",
    description:
      "Digitize contracts and receipts at up to 60 pages per minute. Specification ratings for ultrasonic double-feed prevention and searchable OCR accuracy.",
    url: "https://www.livefeedreviews.com/scanners",
    siteName: "Live Feed Reviews",
    type: "website",
  },
};

export default function ScannersLandingPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.livefeedreviews.com/scanners#webpage",
        "url": "https://www.livefeedreviews.com/scanners",
        "name": "Best Desktop Document Scanners (2026)",
        "description": "Duplex sheetfed document scanners and OCR accuracy",
        "isPartOf": {
          "@id": "https://www.livefeedreviews.com/#website"
        }
      }
    ]
  };

  const scannerArticle = blogArticles.find((a) => a.slug === "best-document-scanner-reviews-duplex")!;

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
          <span className="text-slate-800 font-semibold">Document Scanners</span>
        </nav>

        {/* Hero Header */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STAG 3: High-Speed Duplex Document Feeder Benchmarks</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Best Desktop Document Scanners for Office & Home (2026)
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl">
            Single-pass duplex scanning transforms stacks of loose receipts and legal agreements into
            searchable PDFs in seconds. We benchmarked roller endurance, jam frequency, and OCR accuracy.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {scannerArticle.keywords.map((kw, idx) => (
              <span key={idx} className="text-xs font-mono bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">
                &quot;{kw}&quot;
              </span>
            ))}
          </div>
        </div>

        {/* Top Scored Scanner Picks */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Top-Rated Document Scanners</h2>
            <Link href={`/blog/${scannerArticle.slug}`} className="text-xs text-primary font-semibold hover:underline">
              Read 2,600-Word In-Depth Guide &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {scannerArticle.topPicks.map((pick, pIdx) => (
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
                    href="https://www.amazon.com/s?k=desktop+document+scanner"
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

        {/* Scanner Article Link */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-lg font-bold text-slate-900">In-Depth Testing Analysis</h2>
          <div className="text-sm">
            <div className="py-2 flex items-center justify-between">
              <div>
                <Link href={`/blog/${scannerArticle.slug}`} className="font-semibold text-slate-900 hover:text-primary">
                  {scannerArticle.title}
                </Link>
                <div className="text-xs text-slate-500 mt-0.5">{scannerArticle.readTime} • Ultrasonic Jam Prevention</div>
              </div>
              <Link href={`/blog/${scannerArticle.slug}`} className="text-xs text-primary font-semibold">
                Read Full Guide &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
