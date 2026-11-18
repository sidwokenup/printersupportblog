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
  Battery,
  Wifi,
  Briefcase,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Best Portable & Mobile Wireless Printers (2026) | Live Feed Reviews",
  description:
    "Looking for the best portable mobile printer? Read our laboratory benchmarks on battery life, travel weight, and USB-C charging across Canon, Epson, and HP.",
  openGraph: {
    title: "Best Portable & Mobile Wireless Printers (2026) | Live Feed Reviews",
    description:
      "Looking for the best portable mobile printer? Read our laboratory benchmarks on battery life, travel weight, and USB-C charging across Canon, Epson, and HP.",
    url: "https://livefeedreviews.com/portable-printers",
    siteName: "Live Feed Reviews",
    type: "website",
  },
};

export default function PortablePrintersLandingPage() {
  const portableArticle = blogArticles.find((a) => a.slug === "best-portable-mobile-printer-travel-guide")!;

  return (
    <div className="min-h-screen bg-slate-50 py-8">
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
          <span className="text-slate-800 font-semibold">Portable &amp; Mobile Printers</span>
        </nav>

        {/* Hero Header */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STAG 5: Mobile &amp; Travel Wireless Printer Benchmarks</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Best Portable Wireless Printers for Travel &amp; Field Work (2026)
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl">
            Need to print legal contracts, real estate disclosures, or job estimates on the go?
            We benchmarked lightweight mobile printers on battery endurance, airplane carry-on durability,
            and wireless hotspot pairing with iPhones and Android devices.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {portableArticle.keywords.map((kw, idx) => (
              <span key={idx} className="text-xs font-mono bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">
                &quot;{kw}&quot;
              </span>
            ))}
          </div>
        </div>

        {/* Lab ISO Benchmarks Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {portableArticle.isoBenchmarks.map((bench, bIdx) => (
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
            <h2 className="text-xl font-bold text-slate-900">Lab-Tested &amp; Ranked Mobile Printers</h2>
            <Link href={`/blog/${portableArticle.slug}`} className="text-xs text-primary font-semibold hover:underline">
              Read 1,950-Word In-Depth Guide &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {portableArticle.topPicks.map((pick, pIdx) => (
              <div key={pIdx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
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
                    href={`/blog/${portableArticle.slug}`}
                    className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg text-center text-xs transition-colors"
                  >
                    View Review &amp; Specs
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Buying Guide Breakdown */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <h2 className="text-lg font-bold text-slate-900">Road Warrior Checklist: What to Look For</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 leading-relaxed">
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                <Battery className="w-4 h-4 text-emerald-600" />
                <span>Battery Life &amp; USB-C PD</span>
              </div>
              <p>
                Opt for printers that support USB-C Power Delivery. This allows you to ditch heavy AC bricks and charge using your laptop charger or car 12V adapter.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                <Briefcase className="w-4 h-4 text-emerald-600" />
                <span>Standard Bond Paper Feed</span>
              </div>
              <p>
                Avoid mini receipt printers using thermal paper for legal contracts. True mobile inkjet printers handle standard 8.5x11 letter and legal bond paper.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                <Wifi className="w-4 h-4 text-emerald-600" />
                <span>Wi-Fi Direct &amp; AirPrint</span>
              </div>
              <p>
                When meeting clients in remote locations with no guest Wi-Fi, Wi-Fi Direct enables direct peer-to-peer printing from your phone without a router.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-lg font-bold text-slate-900">Frequently Asked Questions</h2>
          <div className="divide-y divide-slate-100 text-xs">
            {portableArticle.faqs.map((faq, fIdx) => (
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
