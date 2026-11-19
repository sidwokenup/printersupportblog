"use client";

import React, { useState, useMemo } from "react";
import { 
  Calculator, 
  TrendingDown, 
  DollarSign, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Printer,
  Zap,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";

interface TechProfile {
  name: string;
  monoCPP: number; // in dollars (e.g. 0.075 = 7.5 cents)
  colorCPP: number;
  initialHardwareCost: number;
  description: string;
}

const TECH_PROFILES: Record<string, TechProfile> = {
  cartridge_inkjet: {
    name: "Standard Cartridge Inkjet",
    monoCPP: 0.078,
    colorCPP: 0.165,
    initialHardwareCost: 89.99,
    description: "Standard starter cartridges with low page yields (150-300 pgs) and frequent ink head purge cycles."
  },
  mono_laser: {
    name: "Monochrome Laser (High-Yield)",
    monoCPP: 0.024,
    colorCPP: 0.024, // mono only
    initialHardwareCost: 149.99,
    description: "Single-function laser using high-yield TN-760/HP 58X toner. Zero ink drying risk."
  },
  color_laser: {
    name: "Workgroup Color Laser",
    monoCPP: 0.029,
    colorCPP: 0.115,
    initialHardwareCost: 329.99,
    description: "Heavy-duty 4-toner laser engine with separate drum units for crisp legal and marketing text."
  },
  supertank: {
    name: "Refillable SuperTank (EcoTank/MegaTank)",
    monoCPP: 0.003,
    colorCPP: 0.008,
    initialHardwareCost: 279.99,
    description: "High-capacity bottled ink reservoirs delivering up to 7,500 pages per included bottle set."
  }
};

const PRESETS = [
  { label: "Light Home (60 pgs/mo)", pages: 60, colorRatio: 20 },
  { label: "Home Office (250 pgs/mo)", pages: 250, colorRatio: 30 },
  { label: "Small Business (850 pgs/mo)", pages: 850, colorRatio: 40 },
  { label: "High Volume (2,500 pgs/mo)", pages: 2500, colorRatio: 25 },
];

export default function TonerSavingsCalculator() {
  const [pagesPerMonth, setPagesPerMonth] = useState<number>(300);
  const [colorRatio, setColorRatio] = useState<number>(30); // percentage color
  const [currentTech, setCurrentTech] = useState<string>("cartridge_inkjet");
  const [targetTech, setTargetTech] = useState<string>("supertank");

  const calc = useMemo(() => {
    const cur = TECH_PROFILES[currentTech];
    const tgt = TECH_PROFILES[targetTech];

    const monoPages = pagesPerMonth * (1 - colorRatio / 100);
    const colorPages = pagesPerMonth * (colorRatio / 100);

    // Monthly Supply Cost
    const curMonthlyCost = (monoPages * cur.monoCPP) + (colorPages * cur.colorCPP);
    const tgtMonthlyCost = (monoPages * tgt.monoCPP) + (colorPages * tgt.colorCPP);

    const monthlySavings = Math.max(0, curMonthlyCost - tgtMonthlyCost);
    const annualSavings = monthlySavings * 12;

    // 1-Year, 3-Year, 5-Year TCO (Hardware + Supplies)
    const cur1YrTCO = cur.initialHardwareCost + (curMonthlyCost * 12);
    const tgt1YrTCO = tgt.initialHardwareCost + (tgtMonthlyCost * 12);

    const cur3YrTCO = cur.initialHardwareCost + (curMonthlyCost * 36);
    const tgt3YrTCO = tgt.initialHardwareCost + (tgtMonthlyCost * 36);
    const savings3Yr = Math.max(0, cur3YrTCO - tgt3YrTCO);

    const cur5YrTCO = cur.initialHardwareCost + (curMonthlyCost * 60);
    const tgt5YrTCO = tgt.initialHardwareCost + (tgtMonthlyCost * 60);
    const savings5Yr = Math.max(0, cur5YrTCO - tgt5YrTCO);

    // Hardware delta payback months
    const hardwareDelta = tgt.initialHardwareCost - cur.initialHardwareCost;
    const paybackMonths = hardwareDelta > 0 && monthlySavings > 0
      ? (hardwareDelta / monthlySavings).toFixed(1)
      : "0";

    return {
      curMonthlyCost: curMonthlyCost.toFixed(2),
      tgtMonthlyCost: tgtMonthlyCost.toFixed(2),
      monthlySavings: monthlySavings.toFixed(2),
      annualSavings: annualSavings.toFixed(2),
      savings3Yr: savings3Yr.toFixed(2),
      savings5Yr: savings5Yr.toFixed(2),
      cur3YrTCO: cur3YrTCO.toFixed(2),
      tgt3YrTCO: tgt3YrTCO.toFixed(2),
      paybackMonths,
      curCPP: ((curMonthlyCost / pagesPerMonth) * 100).toFixed(1),
      tgtCPP: ((tgtMonthlyCost / pagesPerMonth) * 100).toFixed(1),
    };
  }, [pagesPerMonth, colorRatio, currentTech, targetTech]);

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 md:p-8 space-y-8">
      {/* Header */}
      <div className="space-y-2 border-b border-slate-100 pb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold">
          <Calculator className="w-3.5 h-3.5 text-blue-600" />
          Interactive TCO &amp; Supply Cost Simulator
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          Calculate Your Real 3-Year Printer Operating Cost
        </h2>
        <p className="text-slate-600 text-sm">
          Simulate real-world supply consumption using ISO/IEC 19752 continuous yield lab benchmarks.
        </p>
      </div>

      {/* Preset Buttons */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Quick Volume Presets:</span>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setPagesPerMonth(p.pages);
                setColorRatio(p.colorRatio);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                pagesPerMonth === p.pages
                  ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Control Sliders & Selectors */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Inputs */}
        <div className="space-y-6">
          {/* Monthly Pages Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <label htmlFor="pages-slider" className="font-bold text-slate-800">
                Monthly Print Volume
              </label>
              <span className="font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-100">
                {pagesPerMonth.toLocaleString()} pages / mo
              </span>
            </div>
            <input
              id="pages-slider"
              type="range"
              min="20"
              max="3000"
              step="20"
              value={pagesPerMonth}
              onChange={(e) => setPagesPerMonth(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
              <span>20 pgs</span>
              <span>1,500 pgs</span>
              <span>3,000 pgs</span>
            </div>
          </div>

          {/* Color vs Mono Ratio */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <label htmlFor="color-slider" className="font-bold text-slate-800">
                Color Document Ratio
              </label>
              <span className="font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-lg border border-indigo-100">
                {colorRatio}% Color / {100 - colorRatio}% B&amp;W
              </span>
            </div>
            <input
              id="color-slider"
              type="range"
              min="0"
              max="100"
              step="5"
              value={colorRatio}
              onChange={(e) => setColorRatio(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
          </div>

          {/* Technology Dropdowns */}
          <div className="space-y-4 pt-2">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Current Technology in Use
              </label>
              <select
                value={currentTech}
                onChange={(e) => setCurrentTech(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {Object.entries(TECH_PROFILES).map(([k, v]) => (
                  <option key={k} value={k}>
                    {v.name}
                  </option>
                ))}
              </select>
              <p className="text-[11px] text-slate-500 mt-1">
                {TECH_PROFILES[currentTech].description}
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Target Comparison Technology
              </label>
              <select
                value={targetTech}
                onChange={(e) => setTargetTech(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {Object.entries(TECH_PROFILES).map(([k, v]) => (
                  <option key={k} value={k}>
                    {v.name}
                  </option>
                ))}
              </select>
              <p className="text-[11px] text-slate-500 mt-1">
                {TECH_PROFILES[targetTech].description}
              </p>
            </div>
          </div>
        </div>

        {/* Right Output Dashboard */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl p-6 text-white space-y-6 flex flex-col justify-between shadow-lg">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs uppercase tracking-wider text-slate-300 font-bold">
                Projected Savings
              </span>
              <span className="text-xs text-emerald-400 font-mono font-semibold flex items-center gap-1">
                <TrendingDown className="w-3.5 h-3.5" />
                Hardware Break-even: {calc.paybackMonths} mo
              </span>
            </div>

            {/* Big Highlight Number */}
            <div className="space-y-1">
              <div className="text-xs text-slate-400">Estimated 3-Year Total Savings:</div>
              <div className="text-4xl md:text-5xl font-black text-emerald-400 tracking-tight">
                ${calc.savings3Yr}
              </div>
              <div className="text-xs text-slate-300">
                or <span className="text-white font-bold">${calc.annualSavings}/year</span> in recurring supplies.
              </div>
            </div>

            {/* Metric Comparisons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 space-y-1">
                <div className="text-[11px] text-slate-400">Current Cost / Page</div>
                <div className="text-lg font-bold text-rose-300 font-mono">
                  {calc.curCPP}¢ / page
                </div>
                <div className="text-[10px] text-slate-400">${calc.curMonthlyCost}/mo</div>
              </div>

              <div className="bg-white/10 border border-white/15 rounded-xl p-3 space-y-1">
                <div className="text-[11px] text-emerald-300">Target Cost / Page</div>
                <div className="text-lg font-bold text-emerald-400 font-mono">
                  {calc.tgtCPP}¢ / page
                </div>
                <div className="text-[10px] text-slate-300">${calc.tgtMonthlyCost}/mo</div>
              </div>
            </div>

            {/* 5-Year Cumulative */}
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-400/20 text-xs text-emerald-200 flex items-center justify-between">
              <span>5-Year Cumulative Savings:</span>
              <span className="font-bold text-white text-sm font-mono">${calc.savings5Yr}</span>
            </div>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
            <span>Includes ISO/IEC continuous test yields</span>
            <Link
              href="/blog/laser-vs-inkjet-printer-cost-comparison"
              className="text-blue-300 hover:text-white font-semibold flex items-center gap-1"
            >
              Read Lab Methodology &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
