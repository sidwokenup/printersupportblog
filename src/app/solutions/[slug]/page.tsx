import { solutions } from "@/data/solutions";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
  Layers
} from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  
  if (!solution) {
    return {
      title: "Diagnostic Guide Not Found | Live Feed Reviews",
    };
  }

  return {
    title: `${solution.title} | Live Feed Reviews`,
    description: solution.metaDescription,
    alternates: {
      canonical: `/solutions/${solution.slug}`,
      languages: {
        "en-US": `https://www.livefeedreviews.com/solutions/${solution.slug}`,
        "en-GB": `https://www.livefeedreviews.com/solutions/${solution.slug}`,
        "en-CA": `https://www.livefeedreviews.com/solutions/${solution.slug}`,
        "en-AU": `https://www.livefeedreviews.com/solutions/${solution.slug}`,
        "en-IN": `https://www.livefeedreviews.com/solutions/${solution.slug}`,
        "en-IE": `https://www.livefeedreviews.com/solutions/${solution.slug}`,
        "en-SG": `https://www.livefeedreviews.com/solutions/${solution.slug}`,
        "en-NZ": `https://www.livefeedreviews.com/solutions/${solution.slug}`,
        "en-ZA": `https://www.livefeedreviews.com/solutions/${solution.slug}`,
        "en-PH": `https://www.livefeedreviews.com/solutions/${solution.slug}`,
        "x-default": `https://www.livefeedreviews.com/solutions/${solution.slug}`,
      },
    },
    openGraph: {
      title: solution.title,
      description: solution.metaDescription,
      url: `https://www.livefeedreviews.com/solutions/${solution.slug}`,
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
      title: solution.title,
      description: solution.metaDescription,
      images: ["/logo.png"],
    },
  };
}

export async function generateStaticParams() {
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

const getImagesForSlug = (slug: string) => {
  const images = [];
  if (slug === 'printer-offline') images.push('/printeroffilne.jpg');
  if (slug === 'printer-paper-jam') images.push('/paperjam-1.jpg');
  if (slug === 'printer-setup-issue') images.push('/printersetup.jpg');
  if (slug === 'printer-driver') images.push('/download.jpg');
  
  const fallbacks = ['/printer-1.jpg', '/printer-2.jpg', '/printer.jpg', '/images.jpg'];
  
  for (const img of fallbacks) {
    if (!images.includes(img)) {
      images.push(img);
    }
  }
  
  return images;
};

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) {
    notFound();
  }

  const images = getImagesForSlug(slug);
  const featuredImage = images[0];
  const relatedSolutions = solutions.filter((s) => s.slug !== slug).slice(0, 4);

  // Schema.org Structured Data (WebPage with Speakable, HowTo, BreadcrumbList, FAQPage) for AI & Search Engines
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://www.livefeedreviews.com/solutions/${solution.slug}#webpage`,
        "url": `https://www.livefeedreviews.com/solutions/${solution.slug}`,
        "name": solution.content.title,
        "description": solution.metaDescription,
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://www.livefeedreviews.com/#website"
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [
            ".direct-diagnostic-snapshot",
            "h1",
            ".solution-meta-desc"
          ]
        }
      },
      {
        "@type": "HowTo",
        "name": solution.content.title,
        "description": solution.metaDescription,
        "totalTime": "PT10M",
        "inLanguage": "en-US",
        "publisher": {
          "@id": "https://www.livefeedreviews.com/#organization"
        },
        "step": solution.content.sections.map((section, idx) => ({
          "@type": "HowToStep",
          "position": idx + 1,
          "name": section.heading,
          "text": (section.body || "") + (section.list ? " " + section.list.join(". ") : ""),
        })),
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
            "name": solution.title,
            "item": `https://www.livefeedreviews.com/solutions/${solution.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `Why is my printer experiencing: ${solution.title}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": solution.metaDescription,
            },
          },
          {
            "@type": "Question",
            "name": `How do I prevent ${solution.category} errors from happening again?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": solution.content.conclusion,
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-8 pb-20">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8 overflow-x-auto whitespace-nowrap py-1">
          <Link href="/" className="hover:text-blue-600 transition-colors flex items-center gap-1">
            <Home className="h-4 w-4" />
            Home
          </Link>
          <ChevronRight className="h-4 w-4 shrink-0" />
          <Link href="/solutions" className="hover:text-blue-600 transition-colors">
            Printer Troubleshooting Hub
          </Link>
          <ChevronRight className="h-4 w-4 shrink-0" />
          <span className="text-slate-900 font-medium truncate">{solution.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Diagnostic Content */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Header */}
            <header className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5" />
                  {solution.category}
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  {solution.readTime}
                </span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Difficulty: {solution.difficulty}
                </span>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Severity: {solution.severity}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {solution.content.title}
              </h1>

              <p className="solution-meta-desc text-lg text-slate-600 leading-relaxed">
                {solution.metaDescription}
              </p>

              {/* Verified Self-Service Disclaimer Banner */}
              <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-xl p-4 flex items-start gap-3 text-sm text-emerald-900">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-emerald-950">Independent Consumer Self-Service Guide:</span>{" "}
                  This publication provides DIY hardware diagnostics, maintenance procedures, and ISO benchmarks. LiveFeedReviews does not provide phone support, remote access software, or paid third-party repairs. For warranty service, contact your equipment manufacturer directly.
                </div>
              </div>

              {/* Direct Solution Snapshot (Featured Snippet / AI Overview Target) */}
              <div className="direct-diagnostic-snapshot bg-gradient-to-r from-blue-50 to-indigo-50/60 border border-blue-200/80 rounded-xl p-5 space-y-2">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  Direct Diagnostic Snapshot
                </div>
                <p className="text-slate-800 text-sm md:text-base font-medium leading-relaxed">
                  {solution.content.sections[0]?.body || solution.metaDescription}
                </p>
                <div className="text-[11px] text-slate-500 font-mono pt-1">
                  Verified across Windows 11, Windows 10, macOS Sonoma &amp; Sequoia · ISO/IEC Diagnostic Procedure
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                <Image 
                  src={featuredImage} 
                  alt={solution.title} 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </header>

            {/* Diagnostic Steps Article */}
            <article className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-10 space-y-10">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-blue-600" />
                  Step-by-Step Diagnostic &amp; Resolution Steps
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Follow each procedure in sequence to isolate and resolve the underlying issue safely.
                </p>
              </div>

              <div className="space-y-10">
                {solution.content.sections.map((section, index) => (
                  <section key={index} className="scroll-mt-24 space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                        {section.heading.replace(/^[0-9]+\.\s*/, "")}
                      </h3>
                    </div>
                    
                    {section.body && (
                      <p className="text-slate-600 text-base md:text-lg leading-relaxed pl-11">
                        {section.body}
                      </p>
                    )}
                    
                    {section.list && section.list.length > 0 && (
                      <div className="pl-11">
                        <ul className="space-y-2.5 bg-slate-50/70 p-5 rounded-xl border border-slate-200/60">
                          {section.list.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-slate-700 text-sm md:text-base leading-relaxed">
                              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {section.conclusion && (
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed pl-11 italic border-l-2 border-blue-400 pl-4 py-1">
                        {section.conclusion}
                      </p>
                    )}
                  </section>
                ))}
              </div>

              {/* Diagnostic Conclusion Box */}
              <div className="bg-blue-50/80 rounded-xl p-6 md:p-8 border border-blue-100 space-y-3">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  Diagnostic Summary &amp; Prevention Advice
                </h3>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                  {solution.content.conclusion}
                </p>
              </div>

              {/* Hardware Upgrade Recommendation Box */}
              {solution.replacementPicks && solution.replacementPicks.length > 0 && (
                <div className="bg-slate-900 text-white rounded-xl p-6 md:p-8 space-y-4">
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    When Repair Exceeds Value: Recommended Replacements
                  </div>
                  <h4 className="text-xl font-bold">
                    TCO-Optimized Hardware Upgrades (2026 Tested)
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    If this hardware issue stems from a dead printhead, degraded laser fuser, or unrepairable mechanical failure, upgrading to a high-reliability model saves hundreds in lifetime operating costs.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {solution.replacementPicks.map((pick, i) => (
                      <div key={i} className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-2">
                        <div className="font-semibold text-white text-base">{pick.name}</div>
                        <p className="text-xs text-slate-300">{pick.reason}</p>
                        <Link 
                          href={pick.link}
                          className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold pt-1"
                        >
                          Read Verified Review <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </div>

          {/* Right Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-6 sticky top-24">
            
            {/* Official OEM Support Directory Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-blue-600">
                <BookOpen className="w-5 h-5" />
                <h3 className="font-bold text-slate-900 text-base">Authorized OEM Support</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                For in-warranty hardware replacements, genuine driver downloads, and factory repair claims, consult your manufacturer’s official support portals:
              </p>
              <div className="space-y-2 pt-1">
                {(solution.oemLinks || [
                  { name: "HP Customer Support", url: "https://support.hp.com" },
                  { name: "Brother Solutions Center", url: "https://support.brother.com" },
                  { name: "Canon USA Consumer Support", url: "https://usa.canon.com/support" },
                  { name: "Epson Official Support", url: "https://epson.com/support" }
                ]).map((oem, idx) => (
                  <a
                    key={idx}
                    href={oem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all text-xs font-semibold text-slate-700 hover:text-blue-700 group"
                  >
                    <span>{oem.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
                  </a>
                ))}
              </div>
            </div>

            {/* Hardware Buying Guides Links */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white shadow-md space-y-4">
              <div className="flex items-center gap-2 text-emerald-400">
                <Sparkles className="w-5 h-5" />
                <h3 className="font-bold text-white text-base">2026 Hardware Buying Guides</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Compare ISO/IEC 19752 speed benchmarks, cost-per-page testing, and total cost of ownership across our verified reviews:
              </p>
              <div className="space-y-2">
                <Link 
                  href="/printers"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-xs text-slate-200 hover:text-white"
                >
                  <span>Best Wireless Laser Printers</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </Link>
                <Link 
                  href="/all-in-one"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-xs text-slate-200 hover:text-white"
                >
                  <span>Best All-In-One SuperTanks</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </Link>
                <Link 
                  href="/toner-savings"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-xs text-slate-200 hover:text-white"
                >
                  <span>Operating Cost &amp; Toner Calculator</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </Link>
                <Link 
                  href="/shipping-printers"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-xs text-slate-200 hover:text-white"
                >
                  <span>Thermal Shipping Label Printers</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </Link>
              </div>
            </div>

            {/* Related Troubleshooting Guides */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-base">Related Diagnostic Guides</h3>
              <div className="space-y-2.5">
                {relatedSolutions.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/solutions/${rel.slug}`}
                    className="block p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/40 transition-colors group"
                  >
                    <div className="text-xs font-semibold text-slate-800 group-hover:text-blue-600 line-clamp-1">
                      {rel.title}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-2">
                      <span>{rel.category}</span>
                      <span>•</span>
                      <span>{rel.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="pt-2 text-center">
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 font-semibold"
                >
                  View All 13 Diagnostic Guides <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </aside>
        </div>

      </div>
    </div>
  );
}
