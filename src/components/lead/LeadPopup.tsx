"use client"

import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle2, ShieldCheck, Mail, MessageSquare, Loader2, Send } from "lucide-react"
import { usePathname } from "next/navigation"

import { leadFormSchema, LeadFormValues } from "@/lib/validations/lead"
import { submitLead } from "@/app/actions/leadActions"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const INQUIRY_TYPES = [
  "Printer Buying Recommendation",
  "ISO Benchmark & Test Methodology",
  "Hardware Review Question",
  "Editorial Inquiry / Partnership",
  "Correction or Lab Feedback",
  "Other"
]

export function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  
  const pathname = usePathname()

  const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      printerSeries: "Printer Buying Recommendation",
      issueFacing: "General Inquiry",
      operatingSystem: "Web",
      email: "",
      phone: "+1 555-019-2834",
      honeypot: "",
    }
  })

  useEffect(() => {
    const handleOpenEvent = () => {
      setIsSuccess(false)
      setErrorMsg("")
      setIsOpen(true)
    }
    window.addEventListener("open-lead-popup", handleOpenEvent)

    return () => {
      window.removeEventListener("open-lead-popup", handleOpenEvent)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  const onSubmit = async (data: LeadFormValues) => {
    setIsSubmitting(true)
    setErrorMsg("")
    
    // Add tracking metadata
    data.pageUrl = typeof window !== "undefined" ? window.location.href : pathname
    data.source = "Editorial Inquiry Modal"

    try {
      const result = await submitLead(data)
      
      if (result.success) {
        setIsSuccess(true)
        setTimeout(() => {
          handleClose()
          reset()
        }, 3500)
      } else {
        setErrorMsg(result.error || "Something went wrong. Please try again.")
      }
    } catch (err) {
      console.error(err)
      setErrorMsg("Failed to submit message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[100] bg-slate-900/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="fixed left-1/2 top-1/2 z-[101] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 md:p-8 text-white relative">
              <button 
                onClick={handleClose}
                className="absolute top-5 right-5 p-2 bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors text-slate-300 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                Live Feed Reviews Editorial Desk
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Editorial Inquiry &amp; Hardware Advisory
              </h2>
              <p className="text-slate-300 text-sm mt-1.5 leading-relaxed">
                Have questions about our ISO benchmarks, need a personalized printer recommendation, or have editorial feedback?
              </p>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-8">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center text-center py-8">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600 text-sm max-w-md">
                    Thank you for reaching out. Our editorial testing team reviews inquiries within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Inquiry Subject
                    </label>
                    <select
                      {...register("printerSeries")}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    >
                      {INQUIRY_TYPES.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <Input
                        type="email"
                        placeholder="you@company.com"
                        {...register("email")}
                        className="pl-10 h-11 bg-slate-50 border-slate-200 rounded-xl text-sm"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Details / Questions
                    </label>
                    <textarea
                      placeholder="Tell us about your print volume, preferred brand, or question about our reviews..."
                      {...register("issueFacing")}
                      rows={3}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Honeypot field for bot protection */}
                  <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

                  {/* Compliance Disclaimer */}
                  <div className="text-[11px] text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200/60 leading-relaxed">
                    <strong>Notice:</strong> LiveFeedReviews is an independent consumer technology review portal. We do not provide telephone technical support, remote repair services, or manufacturer warranty replacements. For warranty claims, contact equipment manufacturers directly.
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 font-medium">
                      {errorMsg}
                    </div>
                  )}

                  <div className="flex items-center justify-end gap-3 pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleClose}
                      className="rounded-xl text-sm"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Inquiry
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
