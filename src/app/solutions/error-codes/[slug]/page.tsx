import { curatedErrorCodes, ErrorCodeDetail } from "@/data/curatedErrorCodes";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ChevronRight, 
  Home, 
  ShieldCheck, 
  CheckCircle2, 
  Wrench, 
  Clock, 
  AlertTriangle, 
  ExternalLink, 
  ArrowRight,
  BookOpen,
  Sparkles,
  Cpu,
  Layers,
  HelpCircle
} from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

const REGIONS = ["en-US", "en-GB", "en-CA", "en-AU", "en-IN", "en-IE", "en-SG", "en-NZ", "en-ZA", "en-PH", "x-default"];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const error = curatedErrorCodes.find((e) => e.slug === slug);

  if (!error) {
    return {
      title: "Error Code Not Found | Live Feed Reviews",
    };
  }

  const langMap: Record<string, string> = {};
  for (const r of REGIONS) {
    langMap[r] = `https://www.livefeedreviews.com/solutions/error-codes/${error.slug}`;
  }

  return {
    title: `${error.code} Fix: How to Clear ${error.brand} Error (${error.title}) | Live Feed Reviews`,
    description: error.metaDescription,
    alternates: {
      canonical: `/solutions/error-codes/${error.slug}`,
      languages: langMap,
    },
    openGraph: {
      title: `${error.code} Fix: How to Clear ${error.brand} Error`,
      description: error.metaDescription,
      url: `https://www.livefeedreviews.com/solutions/error-codes/${error.slug}`,
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
      title: `${error.code} Fix: How to Clear ${error.brand} Error`,
      description: error.metaDescription,
      images: ["/logo.png"],
    },
  };
}

export async function generateStaticParams() {
  return curatedErrorCodes.map((error) => ({
    slug: error.slug,
  }));
}

export default async function ErrorCodeDetailPage({ params }: Props) {
  const { slug } = await params;
  const error = curatedErrorCodes.find((e) => e.slug === slug);

  if (!error) {
    notFound();
  }

  const relatedErrors = curatedErrorCodes
    .filter((e) => e.brand === error.brand && e.slug !== error.slug)
    .slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://www.livefeedreviews.com/solutions/error-codes/${error.slug}#webpage`,
        "url": `https://www.livefeedreviews.com/solutions/error-codes/${error.slug}`,
        "name": error.title,
        "description": error.metaDescription,
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://www.livefeedreviews.com/#website"
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [
            ".direct-diagnostic-snapshot",
            "h1",
            ".error-meta-desc"
          ]
        }
      },
      {
        "@type": "HowTo",
        "name": error.title,
        "description": error.metaDescription,
        "totalTime": "PT10M",
        "inLanguage": "en-US",
        "publisher": {
          "@id": "https://www.livefeedreviews.com/#organization"
        },
        "step": error.fixSteps.map((s) => ({
          "@type": "HowToStep",
          "position": s.stepNumber,
          "name": s.title,
          "text": s.instruction + (s.tip ? ` Tip: ${s.tip}` : "")
        }))
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
          {
            "@type": "ListItem",
            "position": 4,
            "name": `${error.brand} ${error.code}`,
            "item": `https://www.livefeedreviews.com/solutions/error-codes/${error.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `What causes ${error.brand} error ${error.code}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": error.rootCause
            }
          },
          {
            "@type": "Question",
            "name": `How do I prevent ${error.brand} ${error.code} from returning?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": error.preventionTips
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-8 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-1.5 text-xs text-slate-500 font-mono overflow-x-auto whitespace-nowrap py-1">
          <Link href="/" className="hover:text-blue-600 transition-colors flex items-center gap-1">
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-400" />
          <Link href="/solutions" className="hover:text-blue-600 transition-colors">
            Solutions Hub
          </Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-400" />
          <Link href="/solutions/error-codes" className="hover:text-blue-600 transition-colors">
            Error Codes
          </Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-400" />
          <span className="text-slate-900 font-semibold truncate">{error.brand} {error.code}</span>
        </nav>

        {/* Header Hero */}
        <header className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
              {error.brand} Hardware Protocol
            </span>
            <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-mono font-bold rounded-full">
              CODE: {error.code}
            </span>
            <span className={`px-3 py-1 text-xs font-semibold rounded-full flex items-center gap-1 ${
              error.severity === "Critical" 
                ? "bg-rose-100 text-rose-700" 
                : error.severity === "High"
                ? "bg-amber-100 text-amber-700"
                : "bg-emerald-100 text-emerald-700"
            }`}>
              <AlertTriangle className="w-3.5 h-3.5" />
              Severity: {error.severity}
            </span>
            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              Est. Fix: {error.timeToFix}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {error.title}
          </h1>

          <p className="error-meta-desc text-slate-600 text-base md:text-lg leading-relaxed">
            {error.metaDescription}
          </p>

          {/* Affected Models List */}
          <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-semibold text-slate-500">Verified Affected Models:</span>
            {error.affectedModels.map((m, idx) => (
              <span key={idx} className="bg-slate-50 text-slate-700 px-2.5 py-0.5 rounded-md border border-slate-200 font-mono">
                {m}
              </span>
            ))}
          </div>
        </header>

        {/* Direct Diagnostic Snapshot Card */}
        <div className="direct-diagnostic-snapshot bg-gradient-to-r from-blue-50 to-indigo-50/60 border border-blue-200/80 rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-blue-600" />
            Direct Diagnostic Snapshot &amp; Root Cause
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-800">
            <div className="space-y-1">
              <div className="font-bold text-slate-900">Observed Symptom:</div>
              <p className="leading-relaxed text-slate-700">{error.symptoms}</p>
            </div>
            <div className="space-y-1">
              <div className="font-bold text-slate-900">Technical Root Cause:</div>
              <p className="leading-relaxed text-slate-700">{error.rootCause}</p>
            </div>
          </div>
        </div>

        {/* Numbered Step-by-Step Fix Protocol */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Wrench className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Step-by-Step DIY Diagnostic Protocol
            </h2>
          </div>

          <div className="space-y-4">
            {error.fixSteps.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2 hover:border-blue-300 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                    {step.stepNumber}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {step.title}
                  </h3>
                </div>

                <p className="text-sm md:text-base text-slate-700 leading-relaxed pl-10">
                  {step.instruction}
                </p>

                {step.tip && (
                  <div className="ml-10 mt-2 p-3 bg-slate-50 border-l-4 border-amber-400 rounded-r-lg text-xs text-slate-600 leading-relaxed">
                    <span className="font-bold text-slate-800">Technician Tip:</span> {step.tip}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Prevention Tips */}
        <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-2xl p-6 space-y-2 text-emerald-950">
          <div className="flex items-center gap-2 font-bold text-sm text-emerald-900">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            Long-Term Prevention Protocol
          </div>
          <p className="text-sm leading-relaxed text-emerald-900">
            {error.preventionTips}
          </p>
        </div>

        {/* Related Error Codes & Navigation */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-lg font-bold text-slate-900">
            Related {error.brand} Diagnostic Codes
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {relatedErrors.map((re, idx) => (
              <Link
                key={idx}
                href={`/solutions/error-codes/${re.slug}`}
                className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/30 transition-all space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    {re.code}
                  </span>
                  <span className="text-xs text-slate-400 group-hover:text-blue-600 transition-colors">&rarr;</span>
                </div>
                <h3 className="text-xs font-bold text-slate-900 line-clamp-2 group-hover:text-blue-700">
                  {re.title}
                </h3>
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
            <Link
              href="/solutions/error-codes"
              className="text-blue-600 font-semibold hover:underline flex items-center gap-1"
            >
              &larr; Browse All Printer Error Codes
            </Link>
            <Link
              href={`/solutions/${error.parentHub}`}
              className="text-slate-600 font-medium hover:text-blue-600 flex items-center gap-1"
            >
              Parent Diagnostic Hub <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
