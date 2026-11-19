import { blogArticles } from "@/data/blogs";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ChevronRight,
  Home,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  BarChart3,
  TrendingUp,
  Tag,
  Star,
  Check,
  X,
  ArrowRight,
  BookOpen,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Review Article Not Found | Live Feed Reviews",
    };
  }

  return {
    title: `${article.title} | Live Feed Reviews`,
    description: article.metaDescription,
    alternates: {
      canonical: `/blog/${article.slug}`,
      languages: {
        "en-US": `https://www.livefeedreviews.com/blog/${article.slug}`,
        "en-GB": `https://www.livefeedreviews.com/blog/${article.slug}`,
        "en-CA": `https://www.livefeedreviews.com/blog/${article.slug}`,
        "en-AU": `https://www.livefeedreviews.com/blog/${article.slug}`,
        "x-default": `https://www.livefeedreviews.com/blog/${article.slug}`,
      },
    },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: `https://www.livefeedreviews.com/blog/${article.slug}`,
      siteName: "Live Feed Reviews",
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
      title: article.title,
      description: article.metaDescription,
      images: ["/logo.png"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const otherArticles = blogArticles.filter((a) => a.slug !== slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://www.livefeedreviews.com/blog/${article.slug}#webpage`,
        "url": `https://www.livefeedreviews.com/blog/${article.slug}`,
        "name": article.title,
        "description": article.metaDescription,
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://www.livefeedreviews.com/#website"
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [
            ".blog-verdict-summary",
            "h1",
            ".bottom-line-text"
          ]
        }
      },
      {
        "@type": "Article",
        "headline": article.title,
        "description": article.metaDescription,
        "author": {
          "@type": "Organization",
          "name": "Live Feed Reviews Editorial Lab",
          "url": "https://www.livefeedreviews.com",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Live Feed Reviews",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.livefeedreviews.com/logo.png",
          },
        },
        "datePublished": "2026-06-01",
        "dateModified": "2026-11-19",
        "mainEntityOfPage": `https://www.livefeedreviews.com/blog/${article.slug}`,
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
            "name": "Blog & Reviews",
            "item": "https://www.livefeedreviews.com/blog",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": article.title,
            "item": `https://www.livefeedreviews.com/blog/${article.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
          <Link href="/" className="hover:text-primary flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/blog" className="hover:text-primary">
            Blog & Reviews
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 truncate font-semibold">{article.title}</span>
        </nav>

        {/* Article Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary">
              {article.category}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              100% Independent Lab Tested
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {article.h1}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-mono pt-1 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-700">
                DS
              </div>
              <span className="text-slate-800 font-medium font-sans">David Sterling, Hardware Reviewer</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </div>
            <span>•</span>
            <span>Published: {article.publishedAt}</span>
            <span>•</span>
            <span className="text-emerald-600 font-semibold">{article.updatedAt} Verified</span>
          </div>
        </header>

        {/* Quick Summary Card */}
        <div className="blog-verdict-summary bg-white p-5 md:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
          <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 text-primary">
            <Sparkles className="w-4 h-4" />
            <span>The Bottom Line (30-Second Verdict)</span>
          </div>
          <p className="bottom-line-text text-sm md:text-base text-slate-700 leading-relaxed">
            {article.quickSummary}
          </p>
        </div>

        {/* Lab ISO Benchmarks Table */}
        {article.isoBenchmarks && article.isoBenchmarks.length > 0 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-5 md:p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                <h2 className="text-base font-bold text-slate-900">Lab ISO Measurement Matrix</h2>
              </div>
              <span className="text-[11px] font-mono text-slate-400">Standard: ISO/IEC 19752</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400 font-mono uppercase text-[10px]">
                    <th className="pb-2 font-semibold">Specification</th>
                    <th className="pb-2 font-semibold">Measured Value</th>
                    <th className="pb-2 font-semibold">Testing Methodology</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {article.isoBenchmarks.map((bench, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50">
                      <td className="py-2.5 font-medium text-slate-800">{bench.label}</td>
                      <td className="py-2.5 font-bold font-mono text-emerald-600">{bench.value}</td>
                      <td className="py-2.5 text-slate-500 text-[11px]">{bench.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Top Product Recommendations */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Top-Rated Recommendations for 2026</h2>
          <div className="space-y-4">
            {article.topPicks.map((pick, pIdx) => (
              <div
                key={pIdx}
                className="bg-white rounded-2xl border border-slate-200 p-5 md:p-6 shadow-xs hover:border-indigo-300 transition-colors space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary text-white">
                      {pick.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Score: {pick.rating}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400">MSRP Est: </span>
                    <span className="text-base font-bold font-mono text-slate-900">{pick.priceEst}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">{pick.name}</h3>
                  <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">{pick.summary}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
                  <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 space-y-1">
                    <span className="font-semibold text-emerald-900 block text-[11px]">Key Strengths:</span>
                    <ul className="space-y-1 text-emerald-950">
                      {pick.pros.map((pro, prIdx) => (
                        <li key={prIdx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                    <span className="font-semibold text-slate-700 block text-[11px]">Watchouts:</span>
                    <ul className="space-y-1 text-slate-600">
                      {pick.cons.map((con, cnIdx) => (
                        <li key={cnIdx} className="flex items-start gap-1.5">
                          <X className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <span className="text-slate-500">
                    <strong>Best For:</strong> {pick.bestFor}
                  </span>
                  <a
                    href="https://www.amazon.com/s?k=printers"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="px-4 py-2 bg-primary hover:bg-blue-700 text-white font-semibold rounded-lg text-center transition-colors shadow-2xs"
                  >
                    Check Current Retail Price ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full Article Text Sections */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-8">
          {article.sections.map((section, sIdx) => (
            <section key={sIdx} className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-sm md:text-base text-slate-700 leading-relaxed">
                  {p}
                </p>
              ))}
              {section.callout && (
                <div className="p-4 bg-indigo-50/70 border-l-4 border-primary rounded-r-xl text-xs md:text-sm text-slate-800 font-medium">
                  {section.callout}
                </div>
              )}
            </section>
          ))}

          {/* Target Search Keywords Tag Cloud */}
          <div className="pt-6 border-t border-slate-100 space-y-2">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-primary" />
              <span>Related Search Keywords & Topics:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {article.keywords.map((kw, kwIdx) => (
                <span
                  key={kwIdx}
                  className="px-2.5 py-1 bg-slate-100 rounded-full text-xs font-mono text-slate-700 border border-slate-200"
                >
                  #{kw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        {article.faqs && article.faqs.length > 0 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {article.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <h3 className="text-sm font-bold text-slate-900">{faq.question}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Guides Section */}
        <div className="space-y-4 pt-4">
          <h2 className="text-lg font-bold text-slate-900">More Buying Guides & Comparisons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherArticles.map((other) => (
              <Link
                key={other.slug}
                href={`/blog/${other.slug}`}
                className="bg-white p-4 rounded-xl border border-slate-200 hover:border-primary transition-colors flex flex-col justify-between space-y-2 shadow-2xs group"
              >
                <div>
                  <span className="text-[10px] font-semibold text-primary uppercase block">
                    {other.category}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2 mt-1">
                    {other.title}
                  </h4>
                </div>
                <div className="text-[10px] text-slate-400 font-mono flex items-center justify-between pt-2 border-t border-slate-100">
                  <span>{other.readTime}</span>
                  <span className="text-primary font-sans font-semibold group-hover:underline">Read &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* FTC Disclosure */}
        <footer className="text-center text-[11px] text-slate-400 max-w-xl mx-auto leading-relaxed pt-4">
          <p>
            FTC Affiliate Disclosure: Live Feed Reviews is an independent publication supported by our readers.
            When you purchase through links on our site, we may earn an affiliate commission at zero additional
            cost to you.
          </p>
        </footer>
      </div>
    </div>
  );
}
