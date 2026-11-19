import type { Metadata } from "next";
import Link from "next/link";
import { blogArticles } from "@/data/blogs";
import TonerSavingsCalculator from "@/components/TonerSavingsCalculator";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Printer,
  ChevronRight,
  Home,
  Calculator,
  Percent,
  TrendingDown,
  DollarSign,
  AlertCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Printer Operating Cost & Toner Savings Guide (2026) | Live Feed Reviews",
  description:
    "How much does your printer really cost to run? Discover verified ISO/IEC 19752 cost-per-page benchmarks, standard vs high-yield toner math, and TCO calculations.",
  alternates: {
    canonical: "/toner-savings",
      languages: {
        "en-US": "https://www.livefeedreviews.com/toner-savings",
        "en-GB": "https://www.livefeedreviews.com/toner-savings",
        "en-CA": "https://www.livefeedreviews.com/toner-savings",
        "en-AU": "https://www.livefeedreviews.com/toner-savings",
        "en-IN": "https://www.livefeedreviews.com/toner-savings",
        "en-IE": "https://www.livefeedreviews.com/toner-savings",
        "en-SG": "https://www.livefeedreviews.com/toner-savings",
        "en-NZ": "https://www.livefeedreviews.com/toner-savings",
        "en-ZA": "https://www.livefeedreviews.com/toner-savings",
        "en-PH": "https://www.livefeedreviews.com/toner-savings",
        "x-default": "https://www.livefeedreviews.com/toner-savings",
      },
  },
  openGraph: {
    title: "Printer Operating Cost & Toner Savings Guide (2026) | Live Feed Reviews",
    description:
      "How much does your printer really cost to run? Discover verified ISO/IEC 19752 cost-per-page benchmarks, standard vs high-yield toner math, and TCO calculations.",
    url: "https://www.livefeedreviews.com/toner-savings",
    siteName: "Live Feed Reviews",
    type: "website",
  },
};

export default function TonerSavingsLandingPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.livefeedreviews.com/toner-savings#webpage",
        "url": "https://www.livefeedreviews.com/toner-savings",
        "name": "Printer Operating Cost & Toner Savings Guide (2026)",
        "description": "ISO/IEC 19752 cost-per-page benchmarks and TCO calculator",
        "isPartOf": {
          "@id": "https://www.livefeedreviews.com/#website"
        }
      }
    ]
  };

  const tonerArticle = blogArticles.find((a) => a.slug === "toner-cartridge-cost-saving-guide")!;
  const costCompareArticle = blogArticles.find((a) => a.slug === "laser-vs-inkjet-printer-cost-comparison")!;

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
          <span className="text-slate-800 font-semibold">Toner &amp; Operating Cost Guide</span>
        </nav>

        {/* Hero Header */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Operating Cost &amp; TCO Intelligence</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Printer Operating Cost &amp; High-Yield Toner Savings (2026)
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl">
            A printer is a subscription you did not realize you signed up for. Standard starter cartridges empty in weeks,
            while high-yield toner cuts cost-per-page by up to 42%. We ran the math across 45 printer models.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {tonerArticle.keywords.map((kw, idx) => (
              <span key={idx} className="text-xs font-mono bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">
                &quot;{kw}&quot;
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Dynamic TCO & Toner Savings Calculator */}
        <TonerSavingsCalculator />

        {/* 3-Year TCO Comparison Matrix */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">3-Year Total Cost of Ownership Matrix (50 Pages/Week)</h2>
              <p className="text-xs text-slate-500 mt-0.5">Based on 7,800 total printed pages over 36 months.</p>
            </div>
            <span className="text-xs font-mono text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 font-bold">
              ISO/IEC 19752 Tested
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 text-slate-500 font-mono uppercase text-[11px] border-b border-slate-200">
                <tr>
                  <th className="py-3 px-3">Printer Type / Strategy</th>
                  <th className="py-3 px-3">Hardware Cost</th>
                  <th className="py-3 px-3">Cost Per Page</th>
                  <th className="py-3 px-3">3-Yr Consumables</th>
                  <th className="py-3 px-3 font-bold text-slate-900">Total 3-Yr TCO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-3 font-sans font-semibold text-slate-900">
                    Standard Disposable Inkjet
                    <span className="block text-[11px] text-rose-600 font-normal">Standard 300-pg cartridges</span>
                  </td>
                  <td className="py-3 px-3">$79.99</td>
                  <td className="py-3 px-3 text-rose-600 font-bold">7.5¢ / page</td>
                  <td className="py-3 px-3">$585.00</td>
                  <td className="py-3 px-3 text-rose-700 font-bold">$664.99</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-3 font-sans font-semibold text-slate-900">
                    Monochrome Laser (Standard Toner)
                    <span className="block text-[11px] text-slate-500 font-normal">Brother TN-730 (1,200 pgs)</span>
                  </td>
                  <td className="py-3 px-3">$149.99</td>
                  <td className="py-3 px-3 text-slate-700">3.1¢ / page</td>
                  <td className="py-3 px-3">$241.80</td>
                  <td className="py-3 px-3 font-bold text-slate-900">$391.79</td>
                </tr>
                <tr className="bg-emerald-50/30 hover:bg-emerald-50/50">
                  <td className="py-3 px-3 font-sans font-semibold text-slate-900">
                    Monochrome Laser (High-Yield TN-760) ★
                    <span className="block text-[11px] text-emerald-700 font-normal">Brother TN-760 (3,000 pgs)</span>
                  </td>
                  <td className="py-3 px-3">$149.99</td>
                  <td className="py-3 px-3 text-emerald-700 font-bold">1.8¢ / page</td>
                  <td className="py-3 px-3">$140.40</td>
                  <td className="py-3 px-3 text-emerald-800 font-bold">$290.39 (Saves $374)</td>
                </tr>
                <tr className="bg-blue-50/30 hover:bg-blue-50/50">
                  <td className="py-3 px-3 font-sans font-semibold text-slate-900">
                    Refillable MegaTank / EcoTank ★
                    <span className="block text-[11px] text-blue-700 font-normal">Bottled ink reservoirs</span>
                  </td>
                  <td className="py-3 px-3">$279.99</td>
                  <td className="py-3 px-3 text-blue-700 font-bold">0.4¢ / page</td>
                  <td className="py-3 px-3">$31.20</td>
                  <td className="py-3 px-3 text-blue-800 font-bold">$311.19 (Saves $353)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Guides */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                Toner Longevity Analysis
              </span>
              <h3 className="text-base font-bold text-slate-900">{tonerArticle.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{tonerArticle.quickSummary}</p>
            </div>
            <Link
              href={`/blog/${tonerArticle.slug}`}
              className="inline-flex items-center justify-between text-xs font-semibold text-primary hover:text-blue-700 pt-3 border-t border-slate-100"
            >
              <span>Read Full High-Yield Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Laser vs Inkjet TCO
              </span>
              <h3 className="text-base font-bold text-slate-900">{costCompareArticle.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{costCompareArticle.quickSummary}</p>
            </div>
            <Link
              href={`/blog/${costCompareArticle.slug}`}
              className="inline-flex items-center justify-between text-xs font-semibold text-primary hover:text-blue-700 pt-3 border-t border-slate-100"
            >
              <span>Read Full Cost Comparison</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 3 Golden Rules for Slashing Operating Costs */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-lg font-bold text-slate-900">3 Golden Rules for Cutting Printer Operating Expenses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 leading-relaxed">
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                <Percent className="w-4 h-4 text-indigo-600" />
                <span>1. Never Buy Standard Yield</span>
              </div>
              <p>
                Standard starter toner cartridges are filled to 30% capacity. High-yield cartridges (e.g. TN-760, HP 58X) cost only 35% more but deliver 250% more printed pages.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                <Calculator className="w-4 h-4 text-indigo-600" />
                <span>2. Separate Drum Units</span>
              </div>
              <p>
                Printers with combined toner + drum cartridges force you to pay for a new imaging drum every time toner empties. Separate drum printers (Brother) save up to $80 per replacement cycle.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                <AlertCircle className="w-4 h-4 text-indigo-600" />
                <span>3. Beware Inactive Ink Evaporation</span>
              </div>
              <p>
                Infrequently used inkjets consume 30% of their ink on automatic printhead cleaning cycles. If you print fewer than 20 pages per month, laser toner powder never dries out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
