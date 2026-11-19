"use client";

import React, { useState, useMemo } from "react";
import { rawErrorFamilies, RawErrorFamily } from "@/data/rawErrorCodeSummary";
import { 
  Search, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Wrench, 
  Printer, 
  Cpu, 
  Layers, 
  ShieldAlert 
} from "lucide-react";
import Link from "next/link";

export default function ErrorCodeSearchMatrix() {
  const [searchTerm, setSearchTerm] = useState("");
  const [severityFilter, setSeverityFilter] = useState<string>("ALL");
  const [expandedCode, setExpandedCode] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return rawErrorFamilies.filter((item) => {
      const matchesSearch =
        searchTerm === "" ||
        item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.symptoms.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.rootCause.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.sampleModels.some((m) => m.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesSeverity =
        severityFilter === "ALL" || item.severity === severityFilter;

      return matchesSearch && matchesSeverity;
    });
  }, [searchTerm, severityFilter]);

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div className="space-y-1 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-xs font-semibold border border-amber-200/70">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>2,240 Raw Fault Code Engine</span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Model-Specific Error Code Search
          </h2>
          <p className="text-xs md:text-sm text-slate-600">
            Query 2,240 documented fault codes across 560 consumer and workgroup printers. Find exact root-cause diagnostics and NVRAM reset protocols.
          </p>
        </div>

        {/* Total Codes Stat */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shrink-0 text-center md:text-right">
          <div className="text-2xl font-black text-slate-900 font-mono">2,240</div>
          <div className="text-[11px] text-slate-500 font-medium">Mapped Fault Records</div>
        </div>
      </div>

      {/* Search Input & Severity Filter Chips */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by code (e.g. 59.F0, B812389, 49 Error, E3), model (DeskJet, LaserJet), or symptom..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-inner"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-700 bg-slate-200/60 px-2 py-1 rounded"
            >
              Clear
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-600 uppercase tracking-wider mr-1">
            Severity:
          </span>
          {["ALL", "Critical", "High", "Medium"].map((sev) => (
            <button
              key={sev}
              type="button"
              onClick={() => setSeverityFilter(sev)}
              className={`px-3 py-1 rounded-xl text-xs font-semibold border transition-all ${
                severityFilter === sev
                  ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              {sev === "ALL" ? "All Severities (15)" : sev}
            </button>
          ))}
          <span className="text-xs text-slate-400 ml-auto font-mono">
            Showing {filtered.length} fault families
          </span>
        </div>
      </div>

      {/* Results List */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="text-center py-10 bg-slate-50 rounded-2xl border border-dashed border-slate-300 space-y-2">
            <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto" />
            <div className="text-sm font-bold text-slate-800">No matching error codes found</div>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try searching by universal hex prefixes (0x...), numeric codes (49, 79, 59), or broader series names (LaserJet, OfficeJet).
            </p>
          </div>
        ) : (
          filtered.map((item) => {
            const isExpanded = expandedCode === item.code;
            return (
              <div
                key={item.code}
                className="bg-white rounded-2xl border border-slate-200 hover:border-blue-300 transition-all overflow-hidden"
              >
                <div
                  onClick={() => setExpandedCode(isExpanded ? null : item.code)}
                  className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                        {item.code}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          item.severity === "Critical"
                            ? "bg-rose-50 text-rose-700 border border-rose-200"
                            : item.severity === "High"
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-blue-50 text-blue-700 border border-blue-200"
                        }`}
                      >
                        {item.severity}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">
                        {item.totalModelsAffected} models affected
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-1">
                      <span className="font-semibold text-slate-700">Root Cause:</span> {item.rootCause}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"
                    >
                      {isExpanded ? "Collapse Protocol" : "View Fix Protocol"}
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Expanded Details Drawer */}
                {isExpanded && (
                  <div className="p-6 bg-slate-50/80 border-t border-slate-200 space-y-5 text-xs text-slate-700">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                        <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                          <ShieldAlert className="w-4 h-4 text-amber-600" />
                          Observed Symptoms
                        </div>
                        <p className="leading-relaxed text-slate-600">{item.symptoms}</p>
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                        <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                          <Cpu className="w-4 h-4 text-blue-600" />
                          Engineering Diagnostic Cause
                        </div>
                        <p className="leading-relaxed text-slate-600">{item.rootCause}</p>
                      </div>
                    </div>

                    {/* Step-by-Step Fix Protocol */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
                      <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                        <Wrench className="w-4 h-4 text-emerald-600" />
                        Standard DIY Recovery Sequence
                      </div>
                      <p className="text-xs leading-relaxed text-slate-800 bg-emerald-50/60 p-3 rounded-lg border border-emerald-100">
                        {item.fixSummary}
                      </p>

                      {item.advancedSteps && (
                        <div className="pt-2">
                          <div className="font-bold text-slate-900 mb-1">
                            Advanced Bench Technician Protocol:
                          </div>
                          <p className="text-slate-600 leading-relaxed">
                            {item.advancedSteps}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Sample Models Compatible */}
                    <div className="space-y-2">
                      <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                        <Printer className="w-4 h-4 text-slate-500" />
                        Verified Model Compatibility ({item.totalModelsAffected} models):
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.sampleModels.map((m, idx) => (
                          <span
                            key={idx}
                            className="bg-white border border-slate-200 px-2 py-0.5 rounded text-[11px] font-mono text-slate-700"
                          >
                            {m}
                          </span>
                        ))}
                        {item.totalModelsAffected > item.sampleModels.length && (
                          <span className="text-[11px] text-slate-500 self-center pl-1 font-mono">
                            +{item.totalModelsAffected - item.sampleModels.length} more models
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
