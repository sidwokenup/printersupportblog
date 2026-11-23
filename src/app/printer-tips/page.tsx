"use client";

import React, { useState, useId } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Printer,
  Search,
  Wifi,
  Usb,
  Download,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Sliders,
  ShieldCheck,
  FileText,
  ExternalLink,
  ChevronRight,
  Info,
  X,
  ArrowRight,
  Laptop,
  Smartphone,
  Power,
  RotateCcw,
  Check,
  Building2,
  BookOpen
} from "lucide-react";

// Brand presets
interface BrandPreset {
  name: "HP" | "Brother" | "Canon" | "Epson";
  fullName: string;
  subseries: string;
  portalUrl: string;
  portalLabel: string;
  setupUrl: string;
  description: string;
  wifiTip: string;
  driverNote: string;
}

const BRAND_PRESETS: Record<string, BrandPreset> = {
  hp: {
    name: "HP",
    fullName: "HP (Hewlett-Packard)",
    subseries: "DeskJet, Envy, OfficeJet, LaserJet, Smart Tank",
    portalUrl: "https://123.hp.com",
    portalLabel: "123.hp.com",
    setupUrl: "/lp/hp-printer-help",
    description: "Prepare wireless pairing, seat setup ink cartridges, and configure through the HP Smart or Easy Start utility.",
    wifiTip: "Press and hold the Wireless and Cancel buttons simultaneously for 3 seconds until the Power light blinks to enter Wi-Fi setup mode.",
    driverNote: "Official HP drivers and setup software are available at 123.hp.com or support.hp.com."
  },
  brother: {
    name: "Brother",
    fullName: "Brother International",
    subseries: "HL Laser, MFC Multi-Function, DCP, INKvestment",
    portalUrl: "https://setup.brother.com",
    portalLabel: "setup.brother.com",
    setupUrl: "/lp/brother-printer-help",
    description: "Configure control panel wireless setup wizard, connect via USB for initial provisioning, and initialize toner/drum counters.",
    wifiTip: "Navigate to Menu > Network > WLAN > Setup Wizard on the control panel, select your 2.4 GHz SSID, and enter the network key.",
    driverNote: "Official Brother software and full driver packages are available at setup.brother.com."
  },
  canon: {
    name: "Canon",
    fullName: "Canon Inc.",
    subseries: "PIXMA Inkjet, MAXIFY Business, imageCLASS Laser, MegaTank",
    portalUrl: "https://ij.start.canon",
    portalLabel: "ij.start.canon",
    setupUrl: "/lp/canon-printer-help",
    description: "Prime ink absorption valves, initiate IJ Start web installer, and verify Bonjour/WSD network bindings.",
    wifiTip: "Hold the Wireless Direct or Wi-Fi button on the printer until the alarm lamp flashes, then follow on-screen prompt on your computer.",
    driverNote: "Official Canon setup utilities and MP Drivers are hosted at ij.start.canon."
  },
  epson: {
    name: "Epson",
    fullName: "Epson (Seiko Epson)",
    subseries: "EcoTank SuperTank, WorkForce Pro, Expression Home",
    portalUrl: "https://epson.sn",
    portalLabel: "epson.sn",
    setupUrl: "/lp/epson-printer-help",
    description: "Fill reservoirs with genuine bottled pigment, run the 10-minute initial ink charge cycle, and install Epson Connect.",
    wifiTip: "Use Settings > Network Settings > Wi-Fi Setup Wizard on LCD. For button-only models, hold the Wi-Fi button for 5 seconds until lights cycle.",
    driverNote: "Official Epson drivers and utilities are distributed exclusively through epson.sn or epson.com/support."
  }
};

const SUGGESTIONS = [
  "HP OfficeJet 9015e",
  "Brother HL-L2350DW",
  "Canon PIXMA TS3520",
  "Epson EcoTank ET-2800",
  "HP LaserJet M209dwe",
  "Brother MFC-L2750DW"
];

export default function PrinterTipsPage() {
  const [modelQuery, setModelQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [validationError, setValidationError] = useState("");
  const [detectedBrand, setDetectedBrand] = useState<BrandPreset | null>(null);
  const [activeTab, setActiveTab] = useState<"windows" | "mac" | "mobile">("windows");
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string | null>(null);

  const inputId = useId();
  const liveRegionId = useId();

  const handleLookup = (queryOverride?: string) => {
    const rawQuery = queryOverride !== undefined ? queryOverride : modelQuery;
    const trimmed = rawQuery.trim();

    if (!trimmed) {
      setValidationError("Please enter a printer model number or series name to view setup steps.");
      setSubmittedQuery("");
      setDetectedBrand(null);
      return;
    }

    setValidationError("");
    setSubmittedQuery(trimmed);

    // Detect brand based on keywords
    const lower = trimmed.toLowerCase();
    if (lower.includes("hp") || lower.includes("officejet") || lower.includes("deskjet") || lower.includes("envy") || lower.includes("laserjet")) {
      setDetectedBrand(BRAND_PRESETS.hp);
    } else if (lower.includes("brother") || lower.includes("hl-") || lower.includes("mfc-") || lower.includes("dcp-")) {
      setDetectedBrand(BRAND_PRESETS.brother);
    } else if (lower.includes("canon") || lower.includes("pixma") || lower.includes("maxify") || lower.includes("imageclass") || lower.includes("megatank")) {
      setDetectedBrand(BRAND_PRESETS.canon);
    } else if (lower.includes("epson") || lower.includes("ecotank") || lower.includes("workforce") || lower.includes("expression")) {
      setDetectedBrand(BRAND_PRESETS.epson);
    } else {
      setDetectedBrand(null);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleLookup();
    }
  };

  const handleClear = () => {
    setModelQuery("");
    setSubmittedQuery("");
    setValidationError("");
    setDetectedBrand(null);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setModelQuery(suggestion);
    handleLookup(suggestion);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Sub-Header Notice / Independent Banner */}
      <div className="bg-slate-900 text-white border-b border-slate-800 py-2.5 px-4 text-xs">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Independent Directory
            </span>
            <span className="text-slate-300 hidden sm:inline">
              Not affiliated with HP, Brother, Canon, Epson, or any OEM.
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <Link href="#setup-guide" className="hover:text-emerald-300 transition-colors">
              Setup Steps
            </Link>
            <span className="text-slate-600">&bull;</span>
            <Link href="#brands" className="hover:text-emerald-300 transition-colors">
              Brand Guides
            </Link>
            <span className="text-slate-600">&bull;</span>
            <Link href="#offline-guide" className="hover:text-emerald-300 transition-colors">
              Offline Help
            </Link>
          </div>
        </div>
      </div>

      <main>
        {/* =========================================================================
            HERO SECTION: Model Lookup & Overview
           ========================================================================= */}
        <section className="relative overflow-hidden bg-white border-b border-slate-200 pt-10 pb-16 lg:pt-14 lg:pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumbs" className="mb-6 text-xs text-slate-600 flex items-center gap-1.5">
              <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/solutions" className="hover:text-slate-900 transition-colors">Solutions</Link>
              <span>/</span>
              <span className="text-slate-800 font-semibold" aria-current="page">Printer Setup &amp; Tips</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Headline, Description & Model Lookup */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3.5">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Self-Service Setup Guide</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.18]">
                    Set Up and Connect Your Printer Step by Step
                  </h1>
                  <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                    Follow clear, independent instructions to unpack your hardware, establish Wi-Fi or USB communication, install verified official software, and print your first test page.
                  </p>
                </div>

                {/* Model Lookup Card */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm">
                  <label 
                    htmlFor={inputId} 
                    className="block text-sm font-bold text-slate-900 mb-1.5"
                  >
                    Enter your printer model number
                  </label>
                  <p className="text-xs text-slate-600 mb-3.5">
                    Look on the front panel, top lid, or serial barcode sticker on the back of your printer.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <div className="relative flex-1">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-600">
                        <Search className="w-4 h-4" />
                      </div>
                      <input
                        id={inputId}
                        type="text"
                        value={modelQuery}
                        onChange={(e) => {
                          setModelQuery(e.target.value);
                          if (validationError) setValidationError("");
                        }}
                        onKeyDown={handleKeyDown}
                        placeholder="e.g. OfficeJet 9015, HL-L2350DW, PIXMA G3270..."
                        aria-describedby={validationError ? "model-validation-msg" : undefined}
                        className={`w-full pl-10 pr-9 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border bg-white text-slate-900 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all ${
                          validationError ? "border-rose-400 ring-1 ring-rose-300" : "border-slate-300"
                        }`}
                      />
                      {modelQuery && (
                        <button
                          type="button"
                          onClick={handleClear}
                          aria-label="Clear model input"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-600 hover:text-slate-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleLookup()}
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
                    >
                      <span>Find Setup Steps</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Accessible Live Region */}
                  <div
                    id={liveRegionId}
                    role="status"
                    aria-live="polite"
                    className="mt-2 text-xs"
                  >
                    {validationError && (
                      <p id="model-validation-msg" className="text-rose-600 font-medium flex items-center gap-1.5 mt-2">
                        <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{validationError}</span>
                      </p>
                    )}
                  </div>

                  {/* Popular Suggestions */}
                  <div className="mt-4 pt-3.5 border-t border-slate-200/80 flex flex-wrap items-center gap-1.5 text-xs">
                    <span className="text-slate-600 font-medium mr-1">Popular models:</span>
                    {SUGGESTIONS.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => handleSuggestionClick(item)}
                        className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-900 font-medium transition-colors"
                      >
                        {item}
                      </button>
                    ))}
                  </div>

                  {/* Dynamic Lookup Result Card */}
                  {submittedQuery && (
                    <div className="mt-5 p-4 sm:p-5 rounded-xl bg-white border border-emerald-200 shadow-sm space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                              Setup Checklist Ready
                            </span>
                          </div>
                          <h2 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                            Configuration Guide for: <span className="text-emerald-800">{submittedQuery}</span>
                          </h2>
                        </div>
                        <button
                          type="button"
                          onClick={handleClear}
                          className="text-xs text-slate-600 hover:text-slate-700 underline"
                        >
                          Clear
                        </button>
                      </div>

                      {detectedBrand ? (
                        <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                          <p>
                            Detected Brand: <strong className="text-slate-900">{detectedBrand.fullName}</strong>.
                          </p>
                          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 space-y-1.5">
                            <p className="font-semibold text-slate-800">Verified Official Portal:</p>
                            <p>
                              Always download software directly from the manufacturer&apos;s verified site:{" "}
                              <a
                                href={detectedBrand.portalUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-emerald-700 underline hover:text-emerald-800 inline-flex items-center gap-1"
                              >
                                {detectedBrand.portalLabel}
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </p>
                            <p className="text-[11px] text-slate-600">
                              Never pay for printer drivers or use unverified third-party mirror portals.
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2 pt-1">
                            <a
                              href="#setup-guide"
                              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs transition-colors"
                            >
                              Follow 5-Step Universal Checklist &darr;
                            </a>
                            <Link
                              href={detectedBrand.setupUrl}
                              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs transition-colors"
                            >
                              Explore {detectedBrand.name} Brand Hub &rarr;
                            </Link>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                          <p>
                            We&apos;ve mapped your query <strong className="text-slate-900">&ldquo;{submittedQuery}&rdquo;</strong> to the universal 5-step printer setup protocol below.
                          </p>
                          <p className="text-xs text-slate-600">
                            <strong>Tip:</strong> If you are unsure which brand software to download, check the brand emblem on the front tray or the manufacturer badge on the rear input panel.
                          </p>
                          <a
                            href="#setup-guide"
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs transition-colors mt-1"
                          >
                            Jump to Step-by-Step Instructions &darr;
                          </a>
                        </div>
                      )}
                    </div>
                  )}

                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-600 font-medium pt-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>No unverified downloads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Direct OEM setup portals</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Zero fee or registration</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Restrained Believable Printer Visual */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full max-w-md bg-gradient-to-b from-slate-100 to-slate-200/60 p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-sm">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-slate-200/80">
                    <Image
                      src="/printersetup.jpg"
                      alt="Modern wireless desktop printer prepared for initial unboxing and connection"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
                  </div>

                  <div className="mt-4 bg-white/95 backdrop-blur rounded-xl p-3.5 border border-slate-200/80 shadow-xs space-y-1 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-bold text-slate-900">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Verified Hardware Guide</span>
                    </div>
                    <p className="text-[11.5px] text-slate-600 leading-normal">
                      Tested against Windows 11, Windows 10, macOS Sonoma/Sequoia, iOS AirPrint, and Android Mopria print subsystems.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================================
            BRAND SHORTCUTS: HP, Brother, Canon, Epson (Matching reference flow)
           ========================================================================= */}
        <section id="brands" className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Brand-Specific Assistance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
                Select Your Printer Brand
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Choose your manufacturer to explore verified setup requirements, default pairing protocols, and brand-specific diagnostic guides.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {Object.entries(BRAND_PRESETS).map(([key, brand]) => (
                <div
                  key={key}
                  className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                        {brand.name}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
                        Guide
                      </span>
                    </div>
                    <p className="text-xs font-medium text-slate-600">
                      {brand.subseries}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {brand.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                    <Link
                      href={brand.setupUrl}
                      className="w-full inline-flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-200 border border-transparent transition-all"
                    >
                      <span>Explore {brand.name} Guide</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={brand.portalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1 text-[11px] font-medium text-slate-600 hover:text-slate-800 transition-colors pt-1"
                    >
                      <span>Official portal: {brand.portalLabel}</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Nominative Notice */}
            <div className="mt-8 text-center">
              <p className="text-[11px] text-slate-600 max-w-2xl mx-auto">
                Brand names, trade dress, and model identifiers are referenced under nominative fair use for identification and setup guidance only. LiveFeedReviews maintains no commercial affiliation with any OEM.
              </p>
            </div>

          </div>
        </section>

        {/* =========================================================================
            UNIVERSAL 5-STEP PRINTER SETUP GUIDE
           ========================================================================= */}
        <section id="setup-guide" className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Core Setup Workflow
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                5 Steps to Set Up Any Desktop or Wireless Printer
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600">
                Follow this sequential procedure from unpacking to your first printed page. This workflow applies to inkjet, laser, and tank models.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Step 1 */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-emerald-600">01</span>
                    <span className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700">
                      <Power className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Prepare &amp; Power the Printer
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Unbox the printer on a sturdy, level surface with at least 4 inches of ventilation on all sides. Remove every piece of packing tape, blue transport film, cardboard wedge, and internal carriage locks.
                  </p>
                  <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Plug the power cable directly into a wall socket.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Load 20–30 sheets of Letter/A4 paper into Tray 1.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Insert starter ink/toner and allow calibration.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-emerald-600">02</span>
                    <span className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700">
                      <Wifi className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Connect via Wi-Fi or USB Cable
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Choose your connection method. Wireless is recommended for home and multi-user environments; USB is ideal for dedicated desktop stations.
                  </p>
                  <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Wi-Fi:</strong> Use control panel Wireless Wizard. Select your 2.4 GHz network and enter Wi-Fi password.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>USB:</strong> Do NOT plug the USB cable in yet. Wait until the software installer prompts you to connect it.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-emerald-600">03</span>
                    <span className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700">
                      <Download className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Install Official OEM Software
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Open your browser and navigate strictly to the official setup portal for your brand. This ensures you receive clean, genuine, and virus-free drivers.
                  </p>
                  <div className="text-xs bg-white border border-slate-200 rounded-xl p-3 space-y-1">
                    <div className="font-semibold text-slate-800">Direct Official Web Portals:</div>
                    <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-600">
                      <div>&bull; HP: <strong>123.hp.com</strong></div>
                      <div>&bull; Brother: <strong>setup.brother.com</strong></div>
                      <div>&bull; Canon: <strong>ij.start.canon</strong></div>
                      <div>&bull; Epson: <strong>epson.sn</strong></div>
                    </div>
                  </div>
                  <p className="text-[11px] text-amber-700 bg-amber-50 border border-amber-200 p-2 rounded-lg">
                    <strong>Caution:</strong> Avoid sponsored Google ads or third-party download mirrors asking for credit card details.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-emerald-600">04</span>
                    <span className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700">
                      <Sliders className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Complete Device Configuration
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Follow the on-screen installer prompts. The installer will discover the printer on your subnet, bind the TCP/IP port, and register printing queues.
                  </p>
                  <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>On Windows: Confirm printer is listed under <em>Printers &amp; Scanners</em>.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>On Mac: Confirm AirPrint or manufacturer driver is active.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Set as Default Printer if this is your primary machine.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-emerald-600">05</span>
                    <span className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700">
                      <FileText className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Print a Diagnostic Test Page
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Always conclude your setup by sending an official diagnostic test sheet from your computer to verify printhead alignment and spooler readiness.
                  </p>
                  <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Check that text lines are crisp and straight.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Verify color blocks (Cyan, Magenta, Yellow, Black) show no banding.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Keep the test page with the network IP for future reference.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Help & Troubleshooting Card */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
                <div className="space-y-3">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-400/20 px-2 py-0.5 rounded">
                    Having Trouble?
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Setup Stalled or Printer Unreachable?
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Over 80% of setup failures are caused by dual-band router conflicts (5 GHz vs 2.4 GHz) or stuck Windows print spoolers.
                  </p>
                </div>
                <div className="pt-4 space-y-2">
                  <a
                    href="#offline-guide"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-xs"
                  >
                    <span>Read Offline Troubleshooting Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <Link
                    href="/solutions"
                    className="w-full inline-flex items-center justify-center gap-1 text-xs font-medium text-slate-300 hover:text-white transition-colors pt-1"
                  >
                    <span>View All 13 Diagnostic Guides</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================================
            DEVICE / OPERATING SYSTEM SELECTOR (TABS)
           ========================================================================= */}
        <section id="device-guide" className="py-14 sm:py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-200 px-3 py-1 rounded-full">
                Operating System Guide
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-2.5">
                Choose Your Computer or Mobile Device
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Select your platform to view specific system settings and port verification steps.
              </p>
            </div>

            {/* Tab Controls */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex p-1 bg-slate-200/80 rounded-xl border border-slate-300 gap-1 text-xs sm:text-sm">
                <button
                  type="button"
                  onClick={() => setActiveTab("windows")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${
                    activeTab === "windows"
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Laptop className="w-4 h-4 text-emerald-600" />
                  <span>Windows 11 / 10</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("mac")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${
                    activeTab === "mac"
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Laptop className="w-4 h-4 text-emerald-600" />
                  <span>macOS (Apple Silicon &amp; Intel)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("mobile")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${
                    activeTab === "mobile"
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Smartphone className="w-4 h-4 text-emerald-600" />
                  <span>iOS &amp; Android Mobile</span>
                </button>
              </div>
            </div>

            {/* Tab Content Panes */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              {activeTab === "windows" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                    <Laptop className="w-5 h-5 text-emerald-600" />
                    <h3>Windows 11 &amp; 10 Setup Instructions</h3>
                  </div>
                  <ol className="text-xs sm:text-sm text-slate-600 space-y-2.5 list-decimal list-inside leading-relaxed">
                    <li>Open <strong>Start &gt; Settings &gt; Bluetooth &amp; devices &gt; Printers &amp; scanners</strong>.</li>
                    <li>Click <strong>Add device</strong> and allow Windows 60 seconds to scan your local network.</li>
                    <li>If discovered, click <strong>Add device</strong> to automatically install the driver via Windows Update or vendor package.</li>
                    <li>If Windows shows &ldquo;The printer that I want isn&apos;t listed&rdquo;, choose <em>Add a printer using an IP address or hostname</em> and enter the printer&apos;s local IP.</li>
                    <li>Right-click your printer queue and verify that <em>Use Printer Offline</em> is unchecked under the Printer menu.</li>
                  </ol>
                </div>
              )}

              {activeTab === "mac" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                    <Laptop className="w-5 h-5 text-emerald-600" />
                    <h3>macOS Setup via AirPrint &amp; System Settings</h3>
                  </div>
                  <ol className="text-xs sm:text-sm text-slate-600 space-y-2.5 list-decimal list-inside leading-relaxed">
                    <li>Ensure your Mac and printer are connected to the exact same Wi-Fi SSID.</li>
                    <li>Click the <strong>Apple Menu &gt; System Settings &gt; Printers &amp; Scanners</strong>.</li>
                    <li>Click <strong>Add Printer, Scanner, or Fax...</strong> (the &ldquo;+&rdquo; button).</li>
                    <li>Select your printer from the Bonjour discovery list. Under &ldquo;Use&rdquo;, select <strong>AirPrint</strong> or the installed manufacturer driver.</li>
                    <li>Click <strong>Add</strong>. If prompted, complete optical alignment using the system utility.</li>
                  </ol>
                </div>
              )}

              {activeTab === "mobile" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                    <Smartphone className="w-5 h-5 text-emerald-600" />
                    <h3>Mobile Printing via iOS AirPrint &amp; Android Mopria</h3>
                  </div>
                  <ol className="text-xs sm:text-sm text-slate-600 space-y-2.5 list-decimal list-inside leading-relaxed">
                    <li><strong>iPhone / iPad (AirPrint):</strong> Open any document or photo, tap the <em>Share</em> button, select <em>Print</em>, and tap <em>Select Printer</em> to discover nearby AirPrint units.</li>
                    <li><strong>Android (Mopria / Default Print Service):</strong> Go to <em>Settings &gt; Connected devices &gt; Connection preferences &gt; Printing</em> and turn on Default Print Service or download Mopria Print Service from Google Play.</li>
                    <li><strong>Direct Wi-Fi:</strong> If no router exists, enable <em>Wi-Fi Direct</em> on the printer panel and connect your smartphone directly to the printer&apos;s broadcast SSID.</li>
                  </ol>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* =========================================================================
            OFFLINE TROUBLESHOOTING GUIDE
           ========================================================================= */}
        <section id="offline-guide" className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                Troubleshooting Protocol
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                How to Get Your Printer From Offline to Online
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600">
                When your computer reports &ldquo;Printer Offline&rdquo; even though the printer is powered on, follow these five verified diagnostic checks.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Visual Sidebar on Desktop */}
              <div className="lg:col-span-4 space-y-4">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                  <Image
                    src="/printeroffilne.jpg"
                    alt="Inspecting printer network lights and connectivity status indicators"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 360px"
                  />
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 space-y-2">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    <Info className="w-4 h-4 text-emerald-600" />
                    <span>Why Do Printers Say Offline?</span>
                  </div>
                  <p>
                    Printers transition to offline state when the operating system loses bidirectional network socket communication, usually caused by DHCP router IP renewals or sleep-mode timeout halts.
                  </p>
                </div>
              </div>

              {/* Checks List */}
              <div className="lg:col-span-8 space-y-4">
                
                {/* Check 1 */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-extrabold text-xs flex-shrink-0">
                    1
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900">Check Physical Power &amp; Readiness</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Confirm the power cord is firmly seated in the back of the printer and connected to a working wall outlet. Make sure the screen or ready light is illuminated and not showing error codes (paper jam, cover open, or ink cartridge error).
                    </p>
                  </div>
                </div>

                {/* Check 2 */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-extrabold text-xs flex-shrink-0">
                    2
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900">Verify Network or USB Connection</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <strong>Wireless:</strong> Verify that the printer&apos;s Wi-Fi indicator light is solid blue/green, not blinking. Confirm your computer and printer are both on the same 2.4 GHz SSID. If using USB, disconnect and firmly reseat the cable into an alternative USB port.
                    </p>
                  </div>
                </div>

                {/* Check 3 */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-extrabold text-xs flex-shrink-0">
                    3
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900">Uncheck &ldquo;Use Printer Offline&rdquo; in Windows Settings</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Open <strong>Settings &gt; Bluetooth &amp; devices &gt; Printers &amp; scanners</strong>. Click your printer, select <strong>Open print queue</strong>. Click the <strong>Printer</strong> menu in the top left and ensure both <em>Pause Printing</em> and <em>Use Printer Offline</em> do NOT have a checkmark next to them.
                    </p>
                  </div>
                </div>

                {/* Check 4 */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-extrabold text-xs flex-shrink-0">
                    4
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900">Perform a 60-Second Power Reset &amp; Spooler Restart</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Turn off the printer, unplug the power cord from the wall, and wait a full 60 seconds to completely discharge internal circuit capacitors. While waiting, restart your router and computer. Reconnect power and turn the printer on.
                    </p>
                  </div>
                </div>

                {/* Check 5 */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-extrabold text-xs flex-shrink-0">
                    5
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900">Send a Single-Page Test Print</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Once the printer status transitions back to &ldquo;Ready&rdquo; or &ldquo;Online&rdquo;, send a simple 1-page test document or print the internal printer status sheet from the control panel to confirm bidirectional data flow.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Practical Disclaimer Note */}
            <div className="mt-8 bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 text-center max-w-3xl mx-auto">
              <strong>Notice:</strong> These diagnostic steps resolve typical communication and queue errors. If your hardware display shows persistent mechanical fault codes (e.g. carriage jam, sensor failure, or electrical code), inspect internal paper trays or consult verified hardware repair documentation.
            </div>

          </div>
        </section>

        {/* =========================================================================
            INDEPENDENT TRUST & DIRECTORY DISCLAIMER (Required)
           ========================================================================= */}
        <section className="py-12 sm:py-16 bg-slate-100/80 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-slate-900 font-extrabold text-base sm:text-lg">
                <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <h2>Independent Consumer Notice &amp; Brand Disclaimer</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>LiveFeedReviews</strong> (livefeedreviews.com) is an independent hardware laboratory, consumer review publication, and self-service troubleshooting directory. We are <strong>not affiliated with, sponsored by, authorized by, or endorsed by HP, Brother, Canon, Epson</strong>, or any other printer manufacturer.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All brand names, trademarks, model designations, and logos mentioned across this page are the property of their respective owners and are used strictly under nominative fair use for identification and consumer setup guidance. LiveFeedReviews does not sell printer hardware, host proprietary driver software, or provide official manufacturer warranty support. Official software and driver downloads should always be obtained directly from the respective manufacturer websites.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
                <Link href="/privacy-policy" className="hover:text-emerald-700 underline">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-emerald-700 underline">Terms of Service</Link>
                <Link href="/contact" className="hover:text-emerald-700 underline">Contact Editorial Desk</Link>
                <Link href="/solutions" className="hover:text-emerald-700 underline">Solutions Directory</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
