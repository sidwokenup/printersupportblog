import type { Metadata } from "next";
import Link from "next/link";
import { 
  Wrench, 
  Search, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  BookOpen, 
  ShieldCheck, 
  ArrowRight,
  Printer
} from "lucide-react";
import { EditorialAttribution } from "@/components/article/EditorialAttribution";

export const metadata: Metadata = {
  title: "Printer Troubleshooting & Diagnostic Hub — Step-by-Step Repair Guides | Live Feed Reviews",
  description: "Independent technical documentation to resolve offline states, print spooler hangs, wireless dropouts, and hardware error codes across HP, Canon, Epson, and Brother printers.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://www.livefeedreviews.com/solutions",
  },
};

const diagnosticMatrix = [
  { symptom: "Printer Offline", fix: "Open Printers & Scanners, uncheck 'Use Printer Offline', toggle print queue, and restart the wireless router and printer.", severity: "Moderate", slug: "printer-offline" },
  { symptom: "Printer Not Printing / Blank Pages", fix: "Verify protective shipping seals are peeled from cartridge vents; execute automated nozzle check and printhead purge.", severity: "Moderate", slug: "printer-not-printing" },
  { symptom: "Ghost Paper Jam", fix: "Wipe internal feed rollers and optical sensors with a lint-free cloth; check rear duplexer tray with a flashlight for micro-debris.", severity: "Low", slug: "printer-paper-jam" },
  { symptom: "Job Stuck in Queue / Deleting", fix: "Stop Windows Spooler service via command prompt, clear the spool PRINTERS folder cache, and restart the spooler service.", severity: "Low", slug: "printer-job-stuck-in-queue" },
  { symptom: "Wi-Fi Drops After Router Reboot", fix: "Assign a permanent Static IP address via router DHCP reservation table; split 2.4GHz and 5GHz network SSID bands.", severity: "Moderate", slug: "printer-not-connecting-to-wifi" },
  { symptom: "Streaky / Faded Print", fix: "Execute two printhead deep cleaning cycles from utility software; inspect toner drum surface for scratch marks or powder depletion.", severity: "Low", slug: "faded-streaky-print-quality" },
  { symptom: "Printer Stopped After Windows Update", fix: "Delete generic WSD port device binding; reinstall authentic full driver software and configure dedicated Standard TCP/IP port.", severity: "High", slug: "printer-issue-after-windows-update" },
  { symptom: "Printer In Error State", fix: "Perform complete electrical power discharge (unplug power while running); verify all covers and paper trays click shut.", severity: "High", slug: "printer-in-error-state" },
  { symptom: "Carriage Jam / Ink System Failure", fix: "Power off printer; inspect print carriage track for foreign objects; manually verify carriage glides across rail without resistance.", severity: "Critical", slug: "printer-hardware-replacement-guide" },
  { symptom: "Printer Not Printing Black", fix: "Remove black cartridge and inspect yellow breather vent; run deep nozzle purge cycle; clean copper contact pads with alcohol wipe.", severity: "Moderate", slug: "printer-not-printing" },
];

const diagnosticLibrary = [
  { id: 1, title: "Not Printing Anything", desc: "Resolve printers failing to print documents, photos, or test pages from PC, Mac, or phone.", slug: "printer-not-printing" },
  { id: 2, title: "Printer Offline Status", desc: "Fix printers stuck in offline state across Windows 10, Windows 11, and macOS networks.", slug: "printer-offline" },
  { id: 3, title: "Paper Jams & Ghost Jams", desc: "Clear stuck sheets, roller jams, carriage blocks, and phantom paper jam warnings.", slug: "printer-paper-jam" },
  { id: 4, title: "Wi-Fi & Network Setup", desc: "Troubleshoot wireless disconnects, 2.4GHz router settings, static IPs, and blinking Wi-Fi lights.", slug: "printer-not-connecting-to-wifi" },
  { id: 5, title: "Drivers & Installation", desc: "Resolve driver unavailable errors, corrupted print drivers, USB setup, and installation freezes.", slug: "printer-driver" },
  { id: 6, title: "Print Quality & Streaks", desc: "Correct faded colors, blurry text, missing black lines, printhead clogs, and alignment errors.", slug: "faded-streaky-print-quality" },
  { id: 7, title: "Error Code Directory", desc: "Searchable reference for B200, 0x6100004a, error 50.4, drum warnings, and ink system halts.", slug: "printer-code-errors-and-messages" },
  { id: 8, title: "Print Queue & Spooler", desc: "Purge stuck print jobs, clear deleting queues, and restart frozen Windows Spooler services.", slug: "printer-job-stuck-in-queue" },
  { id: 9, title: "HP Printer Diagnostic", desc: "Specialized guide for HP DeskJet, Envy, LaserJet, and OfficeJet wireless and driver issues.", slug: "printer-troubleshooting" },
  { id: 10, title: "Canon Printer Guide", desc: "Targeted solutions for Canon PIXMA and MAXIFY ink systems, setup, and B200 errors.", slug: "printer-setup-issue" },
  { id: 11, title: "Epson Printer Guide", desc: "Troubleshooting steps for Epson EcoTank and WorkForce ink pads, lines, and wireless connections.", slug: "printer-issue-after-windows-update" },
  { id: 12, title: "Brother Printer Guide", desc: "Step-by-step assistance for Brother laser drum units, toner errors, and wireless connectivity.", slug: "printer-in-error-state" },
];

const faqs = [
  { q: "Why does my printer say offline when it is powered on and connected?", a: "Printers frequently report an offline status due to stale network socket bindings, sleeping Wi-Fi adapters, or Windows setting the queue to 'Use Printer Offline'. To resolve this, open Windows Printers & Scanners, click your printer queue, uncheck 'Use Printer Offline', and restart your wireless router and printer simultaneously." },
  { q: "What causes a printer to print completely blank pages?", a: "Blank pages typically occur when protective shipping tape remains on printhead nozzles, ink cartridges are depleted without reporting an empty sensor state, printhead nozzles are severely clogged with dried pigment, or the transfer roller has lost electrical contact." },
  { q: "How do I fix a ghost paper jam when there is no paper stuck inside?", a: "A ghost paper jam occurs when optical paper sensors are obscured by paper dust, toner powder, or microscopic scraps. Clean the internal feed rollers with a lint-free cloth lightly dampened with distilled water, inspect the duplexer tray with a flashlight, and gently wipe the sensor optical flags." },
  { q: "Why are my print jobs stuck deleting in the Windows print queue?", a: "Jobs get stuck in deleting status when the Windows Print Spooler service crashes while communicating with the printer driver. To clear it, open an administrative command prompt, run 'net stop spooler', delete all files in C:\\Windows\\System32\\spool\\PRINTERS, and restart the service with 'net start spooler'." },
  { q: "What is the difference between 2.4GHz and 5GHz Wi-Fi for printers?", a: "Nearly all consumer wireless printers only feature 2.4GHz Wi-Fi network cards. If your home network uses a single combined SSID for both 2.4GHz and 5GHz, the printer may fail to connect. Separating the network frequencies or enabling guest 2.4GHz Wi-Fi guarantees reliable wireless communication." },
  { q: "What causes the dreaded Canon B200 error code?", a: "The Canon B200 error code signifies a printhead voltage abnormality or thermal overheating. Turn off the printer, unplug the power cord for 30 minutes, remove and reseat all ink cartridges, and inspect the printhead contacts. If the error persists, the printhead assembly has suffered hardware failure." },
];

export default function PrinterHelpLandingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Printer Troubleshooting & Diagnostic Hub — Step-by-Step Repair Guides",
    "description": "Independent technical documentation to resolve offline states, print spooler hangs, wireless dropouts, and hardware error codes across HP, Canon, Epson, and Brother printers.",
    "author": {
      "@type": "Organization",
      "name": "Tellepsis Hardware Research Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Live Feed Reviews",
      "legalName": "Tellepsis Media LLC",
      "url": "https://www.livefeedreviews.com",
      "email": "support@tellepsis.com",
      "telephone": "+1-888-344-2323"
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 mb-4 uppercase tracking-wider">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/solutions" className="hover:underline">Solutions Hub</Link>
            <span>/</span>
            <span className="text-slate-500">Diagnostic Hub</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Printer Troubleshooting &amp; Diagnostic Hub — Step-by-Step Repair Guides
          </h1>

          <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
            Independent technical documentation to resolve offline states, print spooler hangs, wireless dropouts, and hardware error codes across HP, Canon, Epson, and Brother printers.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <a
              href="#diagnostic-matrix"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-sm flex items-center gap-2"
            >
              <span>Browse Diagnostic Guides ↓</span>
            </a>
            <Link
              href="/solutions/error-codes"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-sm flex items-center gap-2"
            >
              <span>Lookup Error Codes &rarr;</span>
            </Link>
            <Link
              href="/solutions"
              className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-all border border-slate-200"
            >
              All 13 DIY Manuals
            </Link>
          </div>

          {/* Key Takeaways Card */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span>⚡</span>
              <span>Key Takeaways: Core Diagnostic Protocol</span>
            </div>
            <p className="text-xs md:text-sm text-emerald-950 leading-relaxed">
              Printer failures predominantly stem from stale network socket bindings, print spooler crashes, or unseated cartridges. Core resolutions: uncheck &apos;Use Printer Offline&apos; in Windows device properties, purge the spooler cache via command prompt, clean clogged nozzles with alcohol wipes, and configure a static 2.4GHz router IP reservation.
            </p>
          </div>

          {/* Editorial Attribution */}
          <EditorialAttribution />
        </div>
      </section>

      {/* Rapid Diagnostic Matrix Table */}
      <section id="diagnostic-matrix" className="py-16 container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-2">
            Rapid Diagnostic Matrix
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Identify your printer failure symptom and jump directly to verified DIY diagnostic resolution steps.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                  <th className="py-3.5 px-4 w-1/4">Symptom</th>
                  <th className="py-3.5 px-4 w-1/2">Step-by-Step Fix</th>
                  <th className="py-3.5 px-4 w-1/8">Severity</th>
                  <th className="py-3.5 px-4 w-1/8 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {diagnosticMatrix.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-900">{item.symptom}</td>
                    <td className="py-4 px-4 text-slate-600 leading-relaxed">{item.fix}</td>
                    <td className="py-4 px-4">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full font-bold text-[11px] ${
                        item.severity === "Critical" ? "bg-red-100 text-red-700" :
                        item.severity === "High" ? "bg-amber-100 text-amber-700" :
                        item.severity === "Moderate" ? "bg-blue-100 text-blue-700" :
                        "bg-slate-100 text-slate-700"
                      }`}>
                        {item.severity}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Link
                        href={`/solutions/${item.slug}`}
                        className="inline-flex items-center font-bold text-blue-600 hover:text-blue-800 hover:underline whitespace-nowrap"
                      >
                        <span>View Fix Guide &rarr;</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Brand Troubleshooting Centers */}
      <section className="py-12 bg-slate-100/70 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-2">
              Brand Troubleshooting Centers
            </h2>
            <p className="text-sm text-slate-600">
              Dedicated independent diagnostic directories covering model-specific error codes, driver setups, and hardware resets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { brand: "HP Printers", note: "Not affiliated with HP.", slug: "printer-troubleshooting", bullets: ["DeskJet & Envy offline fixes", "Print spooler service resets", "LaserJet feed jam solutions"] },
              { brand: "Canon Printers", note: "Not affiliated with Canon.", slug: "printer-setup-issue", bullets: ["PIXMA blank page solutions", "Canon B200 error clearance", "MAXIFY offline recovery"] },
              { brand: "Epson Printers", note: "Not affiliated with Epson.", slug: "printer-issue-after-windows-update", bullets: ["EcoTank not printing black fix", "Paper jam & roller cleaning", "Wi-Fi connection drop fixes"] },
              { brand: "Brother Printers", note: "Not affiliated with Brother.", slug: "printer-in-error-state", bullets: ["Wireless network setup guide", "Replace drum counter reset", "Toner low error override"] },
            ].map((b, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-0.5">{b.brand}</h3>
                  <div className="text-[11px] text-slate-400 mb-3">{b.note}</div>
                  <ul className="text-xs text-slate-600 space-y-1.5 mb-4">
                    {b.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={`/solutions/${b.slug}`}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1 pt-2 border-t border-slate-100"
                >
                  Explore Guide &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Diagnostic Library (12 Cards with Clean Descriptions) */}
      <section className="py-16 container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-2">
            Complete Diagnostic Library
          </h2>
          <p className="text-sm text-slate-600">
            Comprehensive, step-by-step diagnostic manuals. Researched troubleshooting guides — see Methodology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {diagnosticLibrary.map((item) => (
            <div key={item.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono font-bold text-blue-600 mb-1 block">Guide #{item.id}</span>
                <h3 className="font-bold text-slate-900 text-base mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{item.desc}</p>
              </div>
              <Link
                href={`/solutions/${item.slug}`}
                className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1 pt-3 border-t border-slate-100"
              >
                <span>Read Full Guide &rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Official Manufacturer Support Directory */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-2">
              Official Manufacturer Support Directory
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">
              Live Feed Reviews is an independent editorial publication operated by Tellepsis Media LLC. We provide free self-service DIY troubleshooting documentation only and do not offer live telephone or remote technical support. For factory warranty service or official OEM assistance, use the verified manufacturer portals above:
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
                <tr>
                  <th className="py-3 px-4">Manufacturer</th>
                  <th className="py-3 px-4">Official Support Portal</th>
                  <th className="py-3 px-4">Service &amp; Warranty Scope</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 px-4 font-bold">HP (Hewlett-Packard)</td>
                  <td className="py-3 px-4"><a href="https://support.hp.com" target="_blank" rel="nofollow noopener noreferrer" className="text-blue-600 font-bold hover:underline inline-flex items-center gap-1">support.hp.com <ExternalLink className="w-3 h-3" /></a></td>
                  <td className="py-3 px-4 text-slate-600">Official HP Smart setup, WHQL drivers, firmware updates &amp; hardware warranty service.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Canon</td>
                  <td className="py-3 px-4"><a href="https://www.usa.canon.com/support" target="_blank" rel="nofollow noopener noreferrer" className="text-blue-600 font-bold hover:underline inline-flex items-center gap-1">usa.canon.com/support <ExternalLink className="w-3 h-3" /></a></td>
                  <td className="py-3 px-4 text-slate-600">Official PIXMA, imageCLASS &amp; MAXIFY drivers, software utilities &amp; warranty claims.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Epson</td>
                  <td className="py-3 px-4"><a href="https://epson.com/Support" target="_blank" rel="nofollow noopener noreferrer" className="text-blue-600 font-bold hover:underline inline-flex items-center gap-1">epson.com/Support <ExternalLink className="w-3 h-3" /></a></td>
                  <td className="py-3 px-4 text-slate-600">Official EcoTank &amp; WorkForce driver packages, ink pad service &amp; product registration.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Brother</td>
                  <td className="py-3 px-4"><a href="https://www.brother-usa.com/support" target="_blank" rel="nofollow noopener noreferrer" className="text-blue-600 font-bold hover:underline inline-flex items-center gap-1">brother-usa.com/support <ExternalLink className="w-3 h-3" /></a></td>
                  <td className="py-3 px-4 text-slate-600">Official Brother iPrint&amp;Scan utility, drum reset guides &amp; customer care warranty.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600">
            Clear troubleshooting answers for common printer errors and setup questions.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-white border border-slate-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-bold text-sm md:text-base">
                <span>{faq.q}</span>
                <span className="shrink-0 transition duration-300 group-open:-rotate-180 text-slate-400">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Final Support Guidance Notice */}
      <section className="bg-slate-900 text-white py-16 text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            Need Additional Hardware Guidance?
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed mb-6">
            Browse all 13 step-by-step diagnostic manuals or contact our editorial research desk at{" "}
            <a href="mailto:support@tellepsis.com" className="text-blue-400 underline">support@tellepsis.com</a>.
          </p>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-sm"
          >
            <span>Explore All 13 Diagnostic Guides &rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
