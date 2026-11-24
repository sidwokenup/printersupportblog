import React from "react";
import Link from "next/link";
import { ShieldCheck, BookOpen, Search, AlertCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Live Feed Reviews",
  description: "Learn about Live Feed Reviews, an independent consumer research and comparison site for printers, scanners, and office supplies.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Live Feed Reviews",
    description: "Learn about Live Feed Reviews, an independent consumer research and comparison site for printers, scanners, and office supplies.",
    url: "https://www.livefeedreviews.com/about",
    siteName: "Live Feed Reviews",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-12">
        {/* Header */}
        <header className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold tracking-wide">
            <BookOpen className="w-3.5 h-3.5" />
            About Our Editorial Mission
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Independent Research &amp; Consumer Guides
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Helping homeowners, students, and businesses choose reliable printing equipment and resolve common troubleshooting errors.
          </p>
        </header>

        {/* Core Content Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12 space-y-8 text-slate-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-slate-900">Who We Are</h2>
            <p>
              <strong>Live Feed Reviews</strong> is an independent research and comparison publication operated by <strong>Tellepsis Media LLC</strong>. We focus on consumer and office printers, high-speed document scanners, and printing supplies. We synthesize complex manufacturer technical specifications, published reviews, and real-world owner experiences into straightforward, accessible buying guides and self-service diagnostic checklists.
            </p>
            <p className="text-xs text-slate-500 pt-1">
              Corporate inquiries: <a href="mailto:support@tellepsis.com" className="text-blue-600 underline">support@tellepsis.com</a> | Telephone: <a href="tel:+18883442323" className="text-blue-600 underline">+1 (888) 344-2323</a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-slate-900">What We Do</h2>
            <p>
              Our editorial mission centers on objective consumer guidance:
            </p>
            <ul className="space-y-2.5 pl-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Hardware Research:</strong> We analyze manufacturer spec sheets, duty cycle ratings, engine velocities, and duplex capabilities across leading printer brands.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Running Cost Calculations:</strong> We calculate cost-per-page estimates by pairing manufacturer stated cartridge yields with current average replacement prices.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Troubleshooting Knowledge:</strong> We curate step-by-step DIY solutions for print spooler lockups, Wi-Fi connectivity drops, and paper jam recovery.</span>
              </li>
            </ul>
          </section>

          <section className="p-6 bg-amber-50 rounded-2xl border border-amber-200/80 space-y-2">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0" />
              What We Do NOT Do
            </div>
            <p className="text-sm text-amber-950 leading-relaxed">
              We do not operate a certified ISO laboratory, nor do we perform destructive hardware stress testing. All speed, yield, and capability numbers cited across our articles are clearly labeled estimates derived from manufacturer documentation, public datasheets, and published consumer benchmarks unless specifically indicated otherwise. For our complete ranking framework, see our <Link href="/methodology" className="underline font-semibold text-amber-900 hover:text-black">Research Methodology</Link>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-slate-900">Editorial Independence &amp; Team</h2>
            <p>
              All articles and buying guides are written and maintained by the <strong>Live Feed Reviews editorial team</strong>. We do not accept sponsored product placements or free equipment in exchange for guaranteed favorable coverage.
            </p>
            <p className="text-sm text-slate-500">
              Last updated: November 2026
            </p>
          </section>

          <section className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-base">Have questions or suggestions?</h3>
              <p className="text-sm text-slate-600">Our editorial desk welcomes feedback and corrections.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm transition-colors shadow-sm"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
