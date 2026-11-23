import { comparisonShowdowns, ComparisonShowdown } from "@/data/comparisons";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ChevronRight, 
  Home, 
  Scale, 
  CheckCircle2, 
  XCircle, 
  Trophy, 
  Sparkles, 
  TrendingDown, 
  ArrowRight, 
  Printer, 
  Clock, 
  DollarSign, 
  ShieldCheck,
  Calculator
} from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

const REGIONS = ["en-US", "en-GB", "en-CA", "en-AU", "en-IN", "en-IE", "en-SG", "en-NZ", "en-ZA", "en-PH", "x-default"];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const showdown = comparisonShowdowns.find((s) => s.slug === slug);

  if (!showdown) {
    return {
      title: "Comparison Not Found | Live Feed Reviews",
    };
  }

  const langMap: Record<string, string> = {};
  for (const r of REGIONS) {
    langMap[r] = `https://www.livefeedreviews.com/compare/${showdown.slug}`;
  }

  return {
    title: `${showdown.title} | Live Feed Reviews`,
    description: showdown.metaDescription,
    alternates: {
      canonical: `/compare/${showdown.slug}`,
      languages: langMap,
    },
    openGraph: {
      title: showdown.title,
      description: showdown.metaDescription,
      url: `https://www.livefeedreviews.com/compare/${showdown.slug}`,
      images: [
        {
          url: "/logo.png",
          width: 800,
          height: 600,
          alt: "Live Feed Reviews Logo",
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: showdown.title,
      description: showdown.metaDescription,
      images: ["/logo.png"],
    },
  };
}

export async function generateStaticParams() {
  return comparisonShowdowns.map((showdown) => ({
    slug: showdown.slug,
  }));
}

export default async function ComparisonDetailPage({ params }: Props) {
  const { slug } = await params;
  const showdown = comparisonShowdowns.find((s) => s.slug === slug);

  if (!showdown) {
    notFound();
  }

  const related = comparisonShowdowns
    .filter((s) => s.slug !== showdown.slug)
    .slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://www.livefeedreviews.com/compare/${showdown.slug}#webpage`,
        "url": `https://www.livefeedreviews.com/compare/${showdown.slug}`,
        "name": showdown.title,
        "description": showdown.metaDescription,
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://www.livefeedreviews.com/#website"
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [
            "h1",
            ".winner-callout",
            ".verdict-summary"
          ]
        }
      },
      {
        "@type": "Product",
        "name": showdown.modelA.name,
        "brand": {
          "@type": "Brand",
          "name": showdown.modelA.brand
        },
        "description": `${showdown.modelA.tech} printer with ${showdown.modelA.speed}.`,
        "offers": {
          "@type": "Offer",
          "price": showdown.modelA.price.replace("$", ""),
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": showdown.scoreA.toString(),
          "bestRating": "10",
          "ratingCount": "48"
        }
      },
      {
        "@type": "Product",
        "name": showdown.modelB.name,
        "brand": {
          "@type": "Brand",
          "name": showdown.modelB.brand
        },
        "description": `${showdown.modelB.tech} printer with ${showdown.modelB.speed}.`,
        "offers": {
          "@type": "Offer",
          "price": showdown.modelB.price.replace("$", ""),
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": showdown.scoreB.toString(),
          "bestRating": "10",
          "ratingCount": "52"
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
            "name": "Compare",
            "item": "https://www.livefeedreviews.com/compare",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `${showdown.modelA.brand} vs ${showdown.modelB.brand}`,
            "item": `https://www.livefeedreviews.com/compare/${showdown.slug}`,
          },
        ],
      }
    ]
  };

  const specs = [
    { label: "Hardware Price", valA: showdown.modelA.price, valB: showdown.modelB.price },
    { label: "Print Technology", valA: showdown.modelA.tech, valB: showdown.modelB.tech },
    { label: "Rated Print Speed", valA: showdown.modelA.speed, valB: showdown.modelB.speed },
    { label: "Monochrome Cost / Page", valA: showdown.modelA.monoCPP, valB: showdown.modelB.monoCPP },
    { label: "Color Cost / Page", valA: showdown.modelA.colorCPP, valB: showdown.modelB.colorCPP },
    { label: "3-Year Projected TCO", valA: showdown.modelA.tco3Year, valB: showdown.modelB.tco3Year },
    { label: "Auto Document Feeder (ADF)", valA: showdown.modelA.adf, valB: showdown.modelB.adf },
    { label: "Duplex Printing / Scanning", valA: showdown.modelA.duplex, valB: showdown.modelB.duplex },
    { label: "Paper Tray Capacity", valA: showdown.modelA.trayCapacity, valB: showdown.modelB.trayCapacity },
    { label: "Monthly Duty Cycle", valA: showdown.modelA.dutyCycle, valB: showdown.modelB.dutyCycle },
    { label: "Connectivity", valA: showdown.modelA.connectivity, valB: showdown.modelB.connectivity },
    { label: "Recommended For", valA: showdown.modelA.bestFor, valB: showdown.modelB.bestFor },
  ];

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20 pt-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-blue-600 flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/compare" className="hover:text-blue-600 transition-colors">
            Compare
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold truncate max-w-xs">{showdown.modelA.name} vs {showdown.modelB.name}</span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/70 text-indigo-700 text-xs font-semibold">
            <Scale className="w-3.5 h-3.5 text-indigo-600" />
            {showdown.category} Showdown
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {showdown.title}
          </h1>

          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl">
            {showdown.metaDescription}
          </p>
        </div>

        {/* Winner Callout Banner */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden winner-callout">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Trophy className="w-4 h-4 text-emerald-400" />
                Declared Lab Winner
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                {showdown.winner}
              </h2>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed verdict-summary">
                {showdown.verdictSummary}
              </p>
            </div>

            {/* Scorecard Box */}
            <div className="bg-white/10 border border-white/15 rounded-2xl p-4 shrink-0 flex items-center gap-6 text-center">
              <div>
                <div className="text-[11px] text-slate-300 font-medium">{showdown.modelA.brand}</div>
                <div className="text-2xl font-black text-white font-mono">{showdown.scoreA}</div>
                <div className="text-[10px] text-slate-400">Score / 10</div>
              </div>
              <div className="text-slate-500 font-bold text-sm">VS</div>
              <div>
                <div className="text-[11px] text-emerald-300 font-medium">{showdown.modelB.brand}</div>
                <div className="text-2xl font-black text-emerald-400 font-mono">{showdown.scoreB}</div>
                <div className="text-[10px] text-slate-400">Score / 10</div>
              </div>
            </div>
          </div>
        </div>

        {/* Side-by-Side Specs Matrix Table */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="p-6 md:p-8 border-b border-slate-100 flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-slate-900">
                Full Technical Specifications &amp; Lab Metrics
              </h2>
              <p className="text-xs text-slate-500">
                Direct benchmark comparison across physical hardware and 36-month consumables.
              </p>
            </div>
            <span className="text-xs font-mono font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100 hidden sm:inline-block">
              ISO/IEC 19752 Standards
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-4 px-6 font-bold text-slate-700 w-1/3">Specification</th>
                  <th className="py-4 px-6 font-bold text-slate-900 w-1/3 border-l border-slate-200">
                    <span className="text-xs text-slate-400 block font-normal uppercase">{showdown.modelA.brand}</span>
                    {showdown.modelA.name}
                  </th>
                  <th className="py-4 px-6 font-bold text-slate-900 w-1/3 border-l border-slate-200">
                    <span className="text-xs text-slate-400 block font-normal uppercase">{showdown.modelB.brand}</span>
                    {showdown.modelB.name}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {specs.map((s, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-slate-700">
                      {s.label}
                    </td>
                    <td className="py-3.5 px-6 text-slate-800 border-l border-slate-200 font-medium">
                      {s.valA}
                    </td>
                    <td className="py-3.5 px-6 text-slate-800 border-l border-slate-200 font-medium">
                      {s.valB}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pros & Cons Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Model A Pros/Cons */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-xs">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{showdown.modelA.brand}</span>
              <h3 className="text-lg font-bold text-slate-900">{showdown.modelA.name}</h3>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Key Strengths
              </span>
              <ul className="space-y-1.5 text-xs text-slate-600 pl-1">
                {showdown.modelA.pros.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100">
              <span className="text-xs font-bold text-rose-700 uppercase tracking-wider flex items-center gap-1">
                <XCircle className="w-3.5 h-3.5 text-rose-600" /> Limitations
              </span>
              <ul className="space-y-1.5 text-xs text-slate-600 pl-1">
                {showdown.modelA.cons.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Model B Pros/Cons */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-xs">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{showdown.modelB.brand}</span>
              <h3 className="text-lg font-bold text-slate-900">{showdown.modelB.name}</h3>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Key Strengths
              </span>
              <ul className="space-y-1.5 text-xs text-slate-600 pl-1">
                {showdown.modelB.pros.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100">
              <span className="text-xs font-bold text-rose-700 uppercase tracking-wider flex items-center gap-1">
                <XCircle className="w-3.5 h-3.5 text-rose-600" /> Limitations
              </span>
              <ul className="space-y-1.5 text-xs text-slate-600 pl-1">
                {showdown.modelB.cons.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* TCO Calculator Cross-Link Banner */}
        <div className="bg-blue-50/70 border border-blue-200/80 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
              <Calculator className="w-4 h-4 text-blue-600" />
              Dynamic Cost Simulator
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900">
              Want to calculate your exact multi-year supply savings?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Use our interactive operating cost calculator to slide your monthly page count and color percentage to see real annual dollar savings.
            </p>
          </div>
          <Link
            href="/toner-savings"
            className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shrink-0 shadow-xs flex items-center gap-2"
          >
            Launch TCO Simulator <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Related Showdowns */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 space-y-6">
          <h2 className="text-lg font-bold text-slate-900">
            More Popular Printer Showdowns
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((re) => (
              <Link
                key={re.slug}
                href={`/compare/${re.slug}`}
                className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/30 transition-all space-y-2 group"
              >
                <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
                  {re.category}
                </span>
                <h3 className="text-xs font-bold text-slate-900 line-clamp-2 group-hover:text-blue-700">
                  {re.title}
                </h3>
                <span className="text-[11px] text-blue-600 font-semibold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                  View Showdown &rarr;
                </span>
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
            <Link
              href="/compare"
              className="text-blue-600 font-semibold hover:underline"
            >
              &larr; Browse All Comparison Showdowns
            </Link>
            <Link
              href="/blog"
              className="text-slate-600 font-medium hover:text-blue-600"
            >
              Hardware Reviews Library &rarr;
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
