import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogArticles } from "@/data/blogs";
import {
  Sparkles,
  ShieldCheck,
  Clock,
  ArrowRight,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  Tag,
  Printer,
  FileText,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Printer Reviews & Hardware Buying Guides (2026) | Live Feed Reviews",
  description:
    "Independent lab benchmarks, ISO cost-per-page testing, and expert buying guides for laser printers, all-in-one inkjets, and document scanners.",
  alternates: {
    canonical: "/blog",
      languages: {
        "en-US": "https://www.livefeedreviews.com/blog",
        "en-GB": "https://www.livefeedreviews.com/blog",
        "en-CA": "https://www.livefeedreviews.com/blog",
        "en-AU": "https://www.livefeedreviews.com/blog",
        "en-IN": "https://www.livefeedreviews.com/blog",
        "en-IE": "https://www.livefeedreviews.com/blog",
        "en-SG": "https://www.livefeedreviews.com/blog",
        "en-NZ": "https://www.livefeedreviews.com/blog",
        "en-ZA": "https://www.livefeedreviews.com/blog",
        "en-PH": "https://www.livefeedreviews.com/blog",
        "x-default": "https://www.livefeedreviews.com/blog",
      },
  },
  openGraph: {
    title: "Printer Reviews & Hardware Buying Guides (2026) | Live Feed Reviews",
    description:
      "Independent lab benchmarks, ISO cost-per-page testing, and expert buying guides for laser printers, all-in-one inkjets, and document scanners.",
    url: "https://www.livefeedreviews.com/blog",
    siteName: "Live Feed Reviews",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "Live Feed Reviews" }],
    type: "website",
  },
};

export default function BlogHubPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.livefeedreviews.com/blog#webpage",
        "url": "https://www.livefeedreviews.com/blog",
        "name": "Printer Reviews & Comprehensive Buying Guides (2026)",
        "description": "Independent lab benchmarks and ISO cost-per-page evaluations for top printers and scanners.",
        "isPartOf": {
          "@id": "https://www.livefeedreviews.com/#website"
        }
      },
      {
        "@type": "ItemList",
        "name": "2026 Hardware Benchmarks & Buying Guides",
        "itemListElement": blogArticles.map((article, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": article.title,
          "url": `https://www.livefeedreviews.com/blog/${article.slug}`
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <div className="container mx-auto px-4 md:px-6 max-w-6xl space-y-10">
        {/* Hero Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2026 Hardware Benchmarks & Review Laboratory</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Printer Reviews & Comprehensive Buying Guides
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            We purchase every model at retail and measure true ISO/IEC 19752 page yields, ppm engine
            velocities, and real toner operating expenses so you never overpay on printing.
          </p>
        </div>

        {/* Highlight Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs text-center">
            <div className="text-xs text-slate-500 font-mono uppercase">Lab Tested Units</div>
            <div className="text-2xl font-bold text-slate-900 mt-1">45+ Models</div>
            <div className="text-[11px] text-emerald-600 mt-0.5">100% Retail Purchased</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs text-center">
            <div className="text-xs text-slate-500 font-mono uppercase">Toner Cost Testing</div>
            <div className="text-2xl font-bold text-slate-900 mt-1">0.9¢ / Page</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Lowest Verified Mono Cost</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs text-center">
            <div className="text-xs text-slate-500 font-mono uppercase">Editorial Integrity</div>
            <div className="text-2xl font-bold text-emerald-600 mt-1">Zero Sponsors</div>
            <div className="text-[11px] text-slate-500 mt-0.5">FTC Compliant Disclosure</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs text-center">
            <div className="text-xs text-slate-500 font-mono uppercase">Duplex Speeds Tested</div>
            <div className="text-2xl font-bold text-slate-900 mt-1">60 PPM</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Single-Pass Dual CIS</div>
          </div>
        </div>

        {/* Featured / Articles Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h2 className="text-lg font-bold text-slate-900">Latest In-Depth Guides & Lab Tests</h2>
            <span className="text-xs text-slate-500 font-mono">{blogArticles.length} Published Articles</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogArticles.map((article, idx) => {
              const isFirst = idx === 0;
              return (
                <article
                  key={article.slug}
                  className={`bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between ${
                    isFirst ? "md:col-span-2 border-indigo-200 ring-1 ring-indigo-50" : ""
                  }`}
                >
                  <div className="p-6 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-primary/10 text-primary">
                          {article.category}
                        </span>
                        {isFirst && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                            ★ Featured Guide
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-400 font-mono flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readTime}</span>
                        <span>•</span>
                        <span>{article.publishedAt}</span>
                      </div>
                    </div>

                    <div>
                      <h3
                        className={`font-bold text-slate-900 hover:text-primary transition-colors tracking-tight ${
                          isFirst ? "text-xl md:text-2xl" : "text-lg"
                        }`}
                      >
                        <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                      </h3>
                      <p className="text-xs md:text-sm text-slate-600 mt-2 leading-relaxed">
                        {article.quickSummary}
                      </p>
                    </div>

                    {/* ISO Benchmarks Chips */}
                    {article.isoBenchmarks && article.isoBenchmarks.length > 0 && (
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5">
                        <div className="text-[11px] font-semibold text-slate-700 flex items-center gap-1">
                          <BarChart3 className="w-3.5 h-3.5 text-primary" />
                          <span>Key Lab Benchmarks:</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                          {article.isoBenchmarks.slice(0, 2).map((bench, bIdx) => (
                            <div key={bIdx} className="bg-white p-2 rounded border border-slate-200/80">
                              <span className="text-[10px] text-slate-500 block">{bench.label}</span>
                              <span className="font-bold text-slate-900">{bench.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Top-running Keywords Referenced */}
                    <div className="space-y-1.5 pt-1">
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                        <Tag className="w-3 h-3 text-slate-400" />
                        <span>Target Keywords:</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {article.keywords.map((kw, kwIdx) => (
                          <span
                            key={kwIdx}
                            className="text-[11px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                          >
                            &quot;{kw}&quot;
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      Top pick: <strong className="text-slate-900">{article.topPicks[0]?.name.split(" ")[0]} {article.topPicks[0]?.name.split(" ")[1]}</strong>
                    </span>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-blue-700"
                    >
                      <span>Read Full Review</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Editorial Standards Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">100% Independent Editorial Testing Policy</h3>
              <p className="text-xs text-slate-600 mt-0.5 max-w-2xl leading-relaxed">
                Live Feed Reviews purchases all test printers and scanners at full retail price through public
                channels. We accept no paid product placements, zero free manufacturer review units, and maintain
                strict separation between our review editorial board and retail affiliate partnerships.
              </p>
            </div>
          </div>
          <Link
            href="/privacy-policy"
            className="text-xs font-semibold text-slate-700 hover:text-slate-900 shrink-0 font-mono"
          >
            Review Disclosures &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
