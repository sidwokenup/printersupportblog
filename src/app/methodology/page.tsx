import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How We Research & Rank | Live Feed Reviews",
  description: "Learn how Live Feed Reviews evaluates printer hardware, calculates estimated cost-per-page, and ranks models using transparent research criteria.",
  alternates: {
    canonical: "/methodology",
  },
  openGraph: {
    title: "How We Research & Rank | Live Feed Reviews",
    description: "Learn how Live Feed Reviews evaluates printer hardware, calculates estimated cost-per-page, and ranks models using transparent research criteria.",
    url: "https://www.livefeedreviews.com/methodology",
    siteName: "Live Feed Reviews",
    type: "website",
  },
};

export default function MethodologyPage() {
  const criteria = [
    { name: "Running Cost (TCO)", weight: "25%", description: "Estimated cost-per-page derived from manufacturer stated yield and current consumable replacement retail pricing." },
    { name: "Reliability & Uptime", weight: "20%", description: "Evaluation of paper feed mechanics, jam frequency, Wi-Fi reconnection stability, and firmware update history." },
    { name: "Print Quality", weight: "20%", description: "Text sharpness, line clarity, contrast density, and color accuracy based on published reviews and spec sheet DPI." },
    { name: "Value for Money", weight: "15%", description: "Hardware purchase price relative to included features, included starter ink/toner volumes, and expected working life." },
    { name: "Features & Connectivity", weight: "10%", description: "Auto duplexing, dual-band 2.4/5GHz Wi-Fi, Ethernet, mobile printing (AirPrint/Mopria), and scanner ADF capability." },
    { name: "Ease of Setup", weight: "10%", description: "Simplicity of driver installation, unboxing packaging, network onboarding, and mobile app pairing." },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-12">
        {/* Header */}
        <header className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            Transparent Evaluation Standards
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            How We Research &amp; Rank
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our honest, research-driven framework for evaluating printers, scanners, and operating expenses without exaggerated claims or fake laboratory testing.
          </p>
        </header>

        {/* Core Methodology Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          {/* Prominent Disclaimer Callout */}
          <div className="p-6 bg-amber-50 rounded-2xl border border-amber-200/80 space-y-2">
            <div className="flex items-center gap-2 text-amber-950 font-bold text-base">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" />
              Important Cost-Per-Page Disclaimer
            </div>
            <p className="text-sm text-amber-950 leading-relaxed">
              <strong>Cost-per-page figures are estimates based on manufacturer stated yields, not lab-measured ISO/IEC 19752 tests, unless a specific test is cited with date and method.</strong> Actual page yields vary substantially depending on images printed, coverage percentage, print settings, temperature, and paper stock.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Our 4-Pillar Research Process</h2>
            <p>
              Rather than claiming certified ISO testing facilities, we rely on a rigorous, transparent data-driven research methodology:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm">1. Compare Manufacturer Specs</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We verify rated engine speeds (ppm), monthly recommended duty cycles, paper tray capacities, dual-band Wi-Fi bands, and auto duplexing capabilities directly against official technical whitepapers.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm">2. Compare Published Reviews &amp; Feedback</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We cross-reference hundreds of verified customer reviews, owner community forums, and long-term durability reports to spot recurrent hardware failure modes and driver incompatibilities.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm">3. Calculate True Running Costs</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We calculate realistic operating costs by comparing OEM standard and high-yield replacement cartridges against stated 5% page yields to project realistic 1-year and 3-year ownership expenses.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm">4. Evaluate Support &amp; Troubleshooting Docs</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We examine OEM support bulletins, firmware release notes, error code diagnostics, and driver update cadence to ensure recommended printers are maintainable long-term.
                </p>
              </div>
            </div>
          </section>

          {/* Ranking Criteria Table */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Evaluation &amp; Scoring Criteria</h2>
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                    <th className="p-3 sm:p-4">Criteria</th>
                    <th className="p-3 sm:p-4 w-24">Weight</th>
                    <th className="p-3 sm:p-4">What We Evaluate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {criteria.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80">
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">{item.name}</td>
                      <td className="p-3 sm:p-4 font-mono font-bold text-blue-700">{item.weight}</td>
                      <td className="p-3 sm:p-4 text-slate-600">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Who Should NOT Buy Section */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-slate-900">The &quot;Who Should NOT Buy&quot; Requirement</h2>
            <p>
              A hallmark of our editorial integrity is that no printer is right for everyone. Every single review published on Live Feed Reviews must explicitly include a <strong>&quot;Who Should NOT Buy&quot;</strong> section highlighting deal-breakers.
            </p>
            <p className="text-sm text-slate-600">
              For example: High-yield monochrome laser printers are outstanding for business documents but completely unsuitable for family photo printing; budget inkjets offer low upfront costs but have high per-page running expenses if used for heavy monthly volumes.
            </p>
          </section>

          <section className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-base">Read our latest researched guides</h3>
              <p className="text-sm text-slate-600">Explore comprehensive 2026 printer and scanner comparisons.</p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm transition-colors shadow-sm"
            >
              <span>Explore All Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
