import React from "react"
import { AlertCircle, CheckCircle2, Lightbulb, Info } from "lucide-react"

export function QuickFixBox({ children, title = "Quick Fix" }: { children: React.ReactNode, title?: string }) {
  return (
    <div className="my-8 relative overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 rounded-bl-full -z-10" />
      <h3 className="flex items-center text-lg font-bold text-emerald-800 mb-3">
        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600" />
        {title}
      </h3>
      <div className="prose prose-slate max-w-none text-slate-700">
        {children}
      </div>
    </div>
  )
}

export function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-2xl border border-rose-200 bg-rose-50/50 p-5 flex gap-4 shadow-sm">
      <div className="bg-rose-100 p-2 rounded-full h-fit shrink-0">
        <AlertCircle className="h-5 w-5 text-rose-600" />
      </div>
      <div className="text-slate-800 leading-relaxed">
        {children}
      </div>
    </div>
  )
}

export function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-2xl border border-amber-200 bg-amber-50/50 p-5 flex gap-4 shadow-sm">
      <div className="bg-amber-100 p-2 rounded-full h-fit shrink-0">
        <Lightbulb className="h-5 w-5 text-amber-600" />
      </div>
      <div className="text-slate-800 leading-relaxed">
        {children}
      </div>
    </div>
  )
}

export function NoteBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-2xl border border-blue-200 bg-blue-50/50 p-5 flex gap-4 shadow-sm">
      <div className="bg-blue-100 p-2 rounded-full h-fit shrink-0">
        <Info className="h-5 w-5 text-blue-600" />
      </div>
      <div className="text-slate-800 leading-relaxed">
        {children}
      </div>
    </div>
  )
}

export function StepCard({ stepNumber, title, children }: { stepNumber: number, title?: string, children: React.ReactNode }) {
  return (
    <div className="relative pl-12 py-4 border-l-2 border-slate-200 last:border-transparent">
      <div className="absolute left-[-17px] top-4 w-8 h-8 rounded-full bg-white border-2 border-primary text-primary font-bold flex items-center justify-center shadow-sm">
        {stepNumber}
      </div>
      {title && <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>}
      <div className="prose prose-slate max-w-none text-slate-700">
        {children}
      </div>
    </div>
  )
}
