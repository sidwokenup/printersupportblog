import Link from "next/link";
import { ShieldCheck, BookOpen } from "lucide-react";

export function EditorialAttribution({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-slate-50 border border-slate-200/80 rounded-xl p-5 md:p-6 shadow-xs text-left ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-blue-600 text-white font-bold text-lg flex items-center justify-center shrink-0 shadow-sm">
          <BookOpen className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-bold text-slate-900 text-base">Tellepsis Hardware Research Team</h3>
            <span className="text-xs bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
              Technical Documentation &amp; Research Group
            </span>
          </div>
          <p className="text-xs md:text-sm text-slate-600">
            Specification benchmarking &amp; ISO/IEC yield evaluations &bull;{" "}
            <Link href="/about" className="text-blue-600 hover:underline font-medium">
              Editorial Standards
            </Link>{" "}
            &bull;{" "}
            <Link href="/methodology" className="text-blue-600 hover:underline font-medium">
              Research Methodology
            </Link>
          </p>
        </div>
      </div>
      <div className="text-xs md:text-sm text-slate-700 leading-relaxed pt-3 border-t border-slate-200 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-900">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Technical Documentation Reviewed by Tellepsis Hardware Research Team • Last Updated: November 24, 2026</span>
        </div>
        <div className="text-xs text-slate-600">
          <strong className="text-slate-900 font-semibold">Testing Methodology Summary:</strong> Independent hardware research, specification benchmarking, and step-by-step diagnostic documentation compiled from ISO/IEC yield standards, manufacturer service manuals, and technician-verified troubleshooting protocols.
        </div>
      </div>
    </div>
  );
}
