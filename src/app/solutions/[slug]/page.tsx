import { solutions } from "@/data/solutions";
import { solutionsFaqs } from "@/data/solutionsFaqs";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { EditorialAttribution } from "@/components/article/EditorialAttribution";
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

  const canonicalUrl = `https://www.livefeedreviews.com/solutions/${solution.slug}`;

  return {
    title: `${solution.title} | Live Feed Reviews`,
    description: solution.metaDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-US": canonicalUrl,
        "en-GB": canonicalUrl,
        "en-CA": canonicalUrl,
        "en-AU": canonicalUrl,
        "en-IN": canonicalUrl,
        "en-IE": canonicalUrl,
        "en-SG": canonicalUrl,
        "en-NZ": canonicalUrl,
        "en-ZA": canonicalUrl,
        "en-PH": canonicalUrl,
        "x-default": canonicalUrl,
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

  const pageFaqs = solutionsFaqs[slug] || [];

  // Schema.org Structured Data (WebPage with Speakable, HowTo, BreadcrumbList, FAQPage, TechArticle) for AI & Search Engines
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
        "mainEntity": pageFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
      {
        "@type": "TechArticle",
        "headline": solution.content.title,
        "description": solution.metaDescription,
        "inLanguage": "en-US",
        "mainEntityOfPage": `https://www.livefeedreviews.com/solutions/${solution.slug}`,
        "author": {
          "@type": "Organization",
          "name": "Tellepsis Hardware Research Team"
        },
        "publisher": {
          "@id": "https://www.livefeedreviews.com/#organization"
        }
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
                  <span className="font-semibold text-emerald-950">Independent — Not affiliated with HP, Canon, Epson, Brother, or any manufacturer.</span>{" "}
                  This publication provides DIY hardware diagnostics, maintenance procedures, and ISO benchmarks. LiveFeedReviews does not provide official manufacturer phone lines or warranty claims.
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

                    {/* Mid Diagnostic Guidance Box */}
                    {index === 1 && (
                      <div className="my-6 p-5 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm border border-slate-800">
                        <div className="space-y-1 text-center md:text-left">
                          <div className="font-bold text-sm md:text-base text-white">Still stuck? See Official Support</div>
                          <p className="text-xs text-slate-300">
                            Still stuck? See the Official Manufacturer Support Directory below for warranty / driver help, or explore the full diagnostic library.
                          </p>
                        </div>
                        <div className="flex flex-col items-center sm:items-end gap-1.5 shrink-0">
                          <a href="#oem-directory" className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-sm">
                            View Official Directory &darr;
                          </a>
                          <span className="text-[10px] text-slate-400 text-center sm:text-right">
                            We do not provide manufacturer telephone warranty support.
                          </span>
                        </div>
                      </div>
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
                    Research-Based Hardware Alternatives (2026)
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    If this hardware issue stems from a dead printhead, degraded laser fuser, or unrepairable mechanical failure, upgrading to a high-reliability model may lower lifetime running costs depending on print volume - see cost estimate on Methodology page.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {solution.replacementPicks.map((pick, i) => (
                      <div key={i} className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-3">
                        <div className="font-semibold text-white text-base">{pick.name}</div>
                        <p className="text-xs text-slate-300 leading-relaxed">{pick.reason}</p>
                        <div className="text-[11px] text-slate-400 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 space-y-1">
                          <div><strong>Pros:</strong> Low running expense • Durable paper handling</div>
                          <div><strong>Con:</strong> Higher upfront hardware price</div>
                          <div className="text-amber-400/90 pt-0.5 font-medium">Price checked November 2026 - Check current price on retailer site</div>
                        </div>
                        <Link 
                          href={pick.link}
                          className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold pt-1"
                        >
                          Read Full Research Review <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* End Solution Official Support Guidance Box */}
              <div className="p-6 md:p-8 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 shadow-md">
                <div className="space-y-1 text-center md:text-left">
                  <h4 className="text-xl font-bold">Still stuck? See Official Support</h4>
                  <p className="text-slate-300 text-xs md:text-sm max-w-lg leading-relaxed">
                    Still stuck? See the Official Manufacturer Support Directory below for warranty / driver help, or explore the full diagnostic library.
                  </p>
                </div>
                <div className="flex flex-col items-center md:items-end gap-2 shrink-0">
                  <a 
                    href="#oem-directory" 
                    className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-sm"
                  >
                    View Official Directory &darr;
                  </a>
                  <span className="text-[10px] text-slate-400 text-center md:text-right max-w-xs">
                    We do not provide manufacturer telephone warranty support.
                  </span>
                </div>
              </div>

              {/* In-Article Official OEM Support Directory */}
              <div id="oem-directory" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 text-blue-700">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-bold text-slate-900 text-lg">Official Manufacturer Support Directory</h3>
                </div>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  We do not provide manufacturer telephone warranty support. For official manufacturer warranty claims, certified driver packages, or factory recall service, connect directly with official vendor support channels via the Official Manufacturer Support Directory below:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <a href="https://support.hp.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3.5 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50/30 transition-all text-xs font-bold text-slate-800 hover:text-blue-600">
                    <span>HP Support (support.hp.com)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                  <a href="https://usa.canon.com/support" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3.5 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50/30 transition-all text-xs font-bold text-slate-800 hover:text-blue-600">
                    <span>Canon Support (usa.canon.com/support)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                  <a href="https://epson.com/Support" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3.5 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50/30 transition-all text-xs font-bold text-slate-800 hover:text-blue-600">
                    <span>Epson Support (epson.com/Support)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                  <a href="https://www.brother-usa.com/support" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3.5 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50/30 transition-all text-xs font-bold text-slate-800 hover:text-blue-600">
                    <span>Brother Support (brother-usa.com/support)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Frequently Asked Questions Section */}
              {pageFaqs.length > 0 && (
                <div className="space-y-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                      Frequently Asked Questions
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {pageFaqs.map((faq, i) => (
                      <details
                        key={i}
                        className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-sm transition-all open:bg-white open:border-blue-300"
                      >
                        <summary className="flex items-center justify-between p-4 cursor-pointer font-bold text-slate-900 text-base md:text-lg select-none list-none hover:text-blue-600 transition-colors">
                          <span>{faq.question}</span>
                          <span className="text-blue-600 group-open:rotate-180 transition-transform duration-200 text-sm ml-2 shrink-0">
                            ▼
                          </span>
                        </summary>
                        <div className="p-4 pt-0 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-100 mt-2">
                          <p>{faq.answer}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}
              <EditorialAttribution className="mt-8" />
            </article>
          </div>

          {/* Right Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-6 sticky top-24">
            
            {/* Official OEM Support Directory Card */}
            <div id="oem-directory-sidebar" className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-blue-600">
                <BookOpen className="w-5 h-5" />
                <h3 className="font-bold text-slate-900 text-base">Official Manufacturer Support Directory</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                We do not provide manufacturer telephone warranty support. For official manufacturer warranty claims, certified driver packages, or factory recall service, connect directly with official vendor support channels via the Official Manufacturer Support Directory below:
              </p>
              <div className="space-y-2 pt-1">
                {[
                  { name: "HP Support (support.hp.com)", url: "https://support.hp.com" },
                  { name: "Canon Support (usa.canon.com/support)", url: "https://usa.canon.com/support" },
                  { name: "Epson Support (epson.com/Support)", url: "https://epson.com/Support" },
                  { name: "Brother Support (brother-usa.com/support)", url: "https://www.brother-usa.com/support" }
                ].map((oem, idx) => (
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
                Compare estimated cost-per-page calculations, manufacturer speed specifications, and total cost of ownership across our research reviews:
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
