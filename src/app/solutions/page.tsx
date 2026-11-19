import { solutions } from "@/data/solutions";
import Link from "next/link";
import Image from "next/image";
import { 
  Wrench, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  AlertTriangle, 
  ArrowRight, 
  Search, 
  Sparkles,
  ExternalLink,
  BookOpen,
  Wifi,
  FileText,
  Cpu
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Printer Troubleshooting & Self-Service Diagnostic Hub (2026) | Live Feed Reviews",
  description: "Comprehensive DIY troubleshooting guides for offline printers, paper jams, blank pages, Wi-Fi drops, driver errors, and printhead cleaning.",
  alternates: {
    canonical: "/solutions",
      languages: {
        "en-US": "https://www.livefeedreviews.com/solutions",
        "en-GB": "https://www.livefeedreviews.com/solutions",
        "en-CA": "https://www.livefeedreviews.com/solutions",
        "en-AU": "https://www.livefeedreviews.com/solutions",
        "en-IN": "https://www.livefeedreviews.com/solutions",
        "en-IE": "https://www.livefeedreviews.com/solutions",
        "en-SG": "https://www.livefeedreviews.com/solutions",
        "en-NZ": "https://www.livefeedreviews.com/solutions",
        "en-ZA": "https://www.livefeedreviews.com/solutions",
        "en-PH": "https://www.livefeedreviews.com/solutions",
        "x-default": "https://www.livefeedreviews.com/solutions",
      },
  },
  openGraph: {
    title: "Printer Troubleshooting & Self-Service Diagnostic Hub (2026)",
    description: "Step-by-step DIY diagnostic checklists for Windows 11, macOS, and wireless network printers.",
    url: "https://www.livefeedreviews.com/solutions",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "Live Feed Reviews" }],
    type: "website",
  },
};

const quickMatrix = [
  {
    symptom: "Printer shows 'Offline' status in Windows/Mac",
    fastFix: "Uncheck 'Use Printer Offline' in spooler, assign static DHCP reservation in router",
    guideSlug: "printer-offline",
    severity: "Medium",
  },
  {
    symptom: "Paper jam alert with no visible stuck paper (Ghost Jam)",
    fastFix: "Inspect optical sensor flags with flashlight; clean rubber pickup rollers with alcohol",
    guideSlug: "printer-paper-jam",
    severity: "Medium",
  },
  {
    symptom: "Carriage moves but pages come out completely blank",
    fastFix: "Verify ink pull-tabs removed; run 2 nozzle cleanings; check thermal printhead contacts",
    guideSlug: "printer-not-printing",
    severity: "High",
  },
  {
    symptom: "Wireless printer drops off network after router reboot",
    fastFix: "Split mesh router SSID to dedicated 2.4GHz band; disable router 'AP Isolation'",
    guideSlug: "printer-not-connecting-to-wifi",
    severity: "High",
  },
  {
    symptom: "Print job stuck 'Deleting...' or frozen in queue",
    fastFix: "Stop spooler service (net stop spooler) and delete C:\\Windows\\System32\\spool\\PRINTERS",
    guideSlug: "printer-job-stuck-in-queue",
    severity: "Medium",
  },
  {
    symptom: "Streaky, banded, or faded print quality",
    fastFix: "Run printhead alignment; rock laser toner cartridge side-to-side; clean OPC drum",
    guideSlug: "faded-streaky-print-quality",
    severity: "Medium",
  },
  {
    symptom: "Printer stopped communicating after Windows update",
    fastFix: "Set RpcAuthnLevelPrivacyEnabled DWORD to 0 in registry; roll back KB security patch",
    guideSlug: "printer-issue-after-windows-update",
    severity: "High",
  },
];

export default function SolutionsHubPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-8 pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl space-y-16">
        
        {/* Hero Section */}
        <header className="text-center max-w-4xl mx-auto space-y-6 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm font-semibold tracking-wide">
            <Wrench className="w-4 h-4 text-blue-600" />
            Self-Service Maintenance &amp; Diagnostic Hub (2026)
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
            Printer Troubleshooting &amp; Maintenance Guides
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Step-by-step DIY diagnostic procedures, roller maintenance protocols, and OS driver recovery instructions for home and office printers.
          </p>

          {/* Compliance & Self-Help Notice */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-sm text-emerald-950 flex items-start sm:items-center justify-center gap-3 text-left sm:text-center max-w-3xl mx-auto">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              <strong>Independent Self-Help Resource:</strong> All guides are 100% free DIY procedures. LiveFeedReviews does not provide telephone support, remote access troubleshooting, or paid repair services.
            </span>
          </div>
        </header>

        {/* Quick-Resolution Matrix Table */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <div className="text-xs font-bold text-blue-600 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Rapid Diagnostic Matrix
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                Most Common Printer Symptoms &amp; Immediate Checks
              </h2>
            </div>
            <p className="text-sm text-slate-500 max-w-md">
              Identify your hardware symptom below for the immediate 60-second fix or access the full technical guide.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600 border-collapse">
              <thead>
                <tr className="bg-slate-50/80 text-slate-900 font-semibold border-y border-slate-200 text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-4">Observed Symptom</th>
                  <th className="py-3.5 px-4">Immediate DIY Action</th>
                  <th className="py-3.5 px-4 text-center">Severity</th>
                  <th className="py-3.5 px-4 text-right">Step-by-Step Guide</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {quickMatrix.map((item, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                    <td className="py-4 px-4 font-semibold text-slate-900">
                      {item.symptom}
                    </td>
                    <td className="py-4 px-4 text-slate-700">
                      {item.fastFix}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                        item.severity === "High" 
                          ? "bg-amber-100 text-amber-800" 
                          : "bg-blue-100 text-blue-800"
                      }`}>
                        {item.severity}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Link
                        href={`/solutions/${item.guideSlug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors"
                      >
                        Read Guide <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Complete Solutions Directory Grid */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Complete Diagnostic &amp; Issue Resolution Library
            </h2>
            <p className="text-slate-600 text-base">
              Detailed step-by-step maintenance protocols organized by hardware subsystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol) => (
              <div 
                key={sol.slug}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md hover:border-blue-300 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full">
                      {sol.category}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {sol.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    <Link href={`/solutions/${sol.slug}`}>
                      {sol.title}
                    </Link>
                  </h3>

                  <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
                    {sol.metaDescription}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">
                    Difficulty: <strong className="text-slate-700">{sol.difficulty}</strong>
                  </span>
                  <Link
                    href={`/solutions/${sol.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 group-hover:text-blue-700 group-hover:translate-x-0.5 transition-all"
                  >
                    View Steps <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hardware Repair vs. Replacement Advisor */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 md:p-12 border border-slate-800 space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              Hardware Economics &amp; TCO Analysis
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              When Is Repairing an Old Printer No Longer Worth It?
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              If an older cartridge-based printer has a burned-out printhead or worn laser fuser, individual repair parts often exceed \$150. Modern SuperTank printers pay for themselves in ink savings within 12 months.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            <Link
              href="/printers"
              className="bg-slate-800/80 hover:bg-slate-800 p-5 rounded-2xl border border-slate-700 transition-all group"
            >
              <div className="text-emerald-400 font-bold text-sm mb-1">Wireless Laser</div>
              <div className="text-white font-semibold text-base group-hover:text-emerald-300">
                Best Laser Printers 2026
              </div>
              <p className="text-xs text-slate-400 mt-2">Zero printhead clogs, 2400 dpi crisp text, \$0.015/page.</p>
            </Link>

            <Link
              href="/all-in-one"
              className="bg-slate-800/80 hover:bg-slate-800 p-5 rounded-2xl border border-slate-700 transition-all group"
            >
              <div className="text-emerald-400 font-bold text-sm mb-1">Cartridge-Free Tank</div>
              <div className="text-white font-semibold text-base group-hover:text-emerald-300">
                Best All-in-One SuperTanks
              </div>
              <p className="text-xs text-slate-400 mt-2">2 years of ink in the box, 90% savings per color page.</p>
            </Link>

            <Link
              href="/wide-format"
              className="bg-slate-800/80 hover:bg-slate-800 p-5 rounded-2xl border border-slate-700 transition-all group"
            >
              <div className="text-emerald-400 font-bold text-sm mb-1">11x17 Tabloid</div>
              <div className="text-white font-semibold text-base group-hover:text-emerald-300">
                Wide-Format Photo &amp; CAD
              </div>
              <p className="text-xs text-slate-400 mt-2">13x19 borderless archival prints and architectural blueprints.</p>
            </Link>

            <Link
              href="/toner-savings"
              className="bg-slate-800/80 hover:bg-slate-800 p-5 rounded-2xl border border-slate-700 transition-all group"
            >
              <div className="text-emerald-400 font-bold text-sm mb-1">Cost Calculator</div>
              <div className="text-white font-semibold text-base group-hover:text-emerald-300">
                TCO &amp; Toner Savings Guide
              </div>
              <p className="text-xs text-slate-400 mt-2">3-year operating cost comparison across 45 printer models.</p>
            </Link>
          </div>
        </section>

        {/* Authorized OEM Warranty Directory */}
        <section className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-blue-600">
            <BookOpen className="w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-900">
              Official Manufacturer Warranty &amp; Driver Directory
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-2xl">
            For hardware under active manufacturer warranty, firmware binary updates, or official warranty claims, access authorized equipment manufacturer portals directly:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="https://support.hp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 transition-all group"
            >
              <div className="font-bold text-slate-900 group-hover:text-blue-700 flex items-center justify-between">
                <span>HP Customer Support</span>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
              </div>
              <p className="text-xs text-slate-500 mt-2">Serial number warranty check and HP Print and Scan Doctor tool.</p>
            </a>

            <a
              href="https://support.brother.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 transition-all group"
            >
              <div className="font-bold text-slate-900 group-hover:text-blue-700 flex items-center justify-between">
                <span>Brother Solutions Center</span>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
              </div>
              <p className="text-xs text-slate-500 mt-2">Driver downloads, manuals, error code lookups, and firmware.</p>
            </a>

            <a
              href="https://usa.canon.com/support"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 transition-all group"
            >
              <div className="font-bold text-slate-900 group-hover:text-blue-700 flex items-center justify-between">
                <span>Canon USA Support</span>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
              </div>
              <p className="text-xs text-slate-500 mt-2">IJ Printer utility, imageCLASS laser guides, and service centers.</p>
            </a>

            <a
              href="https://epson.com/support"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 transition-all group"
            >
              <div className="font-bold text-slate-900 group-hover:text-blue-700 flex items-center justify-between">
                <span>Epson Support Hub</span>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
              </div>
              <p className="text-xs text-slate-500 mt-2">EcoTank nozzle recovery, software utilities, and parts finder.</p>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
