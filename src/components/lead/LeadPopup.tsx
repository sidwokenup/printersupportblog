"use client"

import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import { 
  X, 
  CheckCircle2, 
  PhoneCall, 
  Tag, 
  ShieldCheck, 
  Clock, 
  Lock, 
  Loader2, 
  Send, 
  Sparkles,
  ArrowRight,
  Headphones,
  Check
} from "lucide-react"
import { usePathname } from "next/navigation"

import { leadFormSchema, LeadFormValues } from "@/lib/validations/lead"
import { submitLead } from "@/app/actions/leadActions"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const CATEGORIES = [
  "Wireless Laser Printers",
  "All-in-One SuperTanks",
  "11x17 Wide-Format Printers",
  "4x6 Thermal Shipping Printers",
  "High-Yield Toner & Cartridges",
  "General Advice / Bulk Quote"
]

const CALLBACK_WINDOWS = [
  "As soon as possible",
  "Morning (9:00 AM – 12:00 PM EST)",
  "Afternoon (12:00 PM – 5:00 PM EST)",
  "Evening (5:00 PM – 8:00 PM EST)"
]

export function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"callback" | "promotions">("callback")
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const pathname = usePathname()

  if (pathname === "/printer-tips" || pathname === "/printer-tips.html" || pathname?.startsWith("/lp")) {
    return null
  }

  const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema) as any,
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      leadType: "callback",
      printerSeries: "Wireless Laser Printers",
      interestCategory: "Wireless Laser Printers",
      issueFacing: "",
      preferredTime: "As soon as possible",
      promotionalOptIn: true,
      operatingSystem: "Web",
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

  const handleTabChange = (tab: "callback" | "promotions") => {
    setActiveTab(tab)
    setValue("leadType", tab)
    setErrorMsg("")
  }

  const onSubmit = async (data: LeadFormValues) => {
    setIsSubmitting(true)
    setErrorMsg("")
    
    // Add page attribution metadata
    data.pageUrl = typeof window !== "undefined" ? window.location.href : pathname
    data.source = activeTab === "callback" ? "VIP Callback Modal" : "VIP Promotional Deals Modal"

    try {
      const result = await submitLead(data)
      
      if (result.success) {
        setIsSuccess(true)
        setTimeout(() => {
          handleClose()
          reset()
        }, 4000)
      } else {
        setErrorMsg(result.error || "Unable to submit request. Please verify your phone number and try again.")
      }
    } catch (err) {
      console.error(err)
      setErrorMsg("Connection error. Please try again.")
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
            className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="fixed left-1/2 top-1/2 z-[101] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[92vh] overflow-y-auto"
          >
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-6 md:p-8 text-white relative shrink-0">
              <button 
                onClick={handleClose}
                className="absolute top-5 right-5 p-2 bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors text-slate-300 hover:text-white"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                Live Feed Reviews — Consumer Hardware Advisory
              </div>

              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                {activeTab === "callback" ? "Request a Free Advisor Callback" : "Join VIP Hardware Deals & Alerts"}
              </h2>

              <p className="text-slate-300 text-xs md:text-sm mt-1.5 leading-relaxed max-w-lg">
                {activeTab === "callback" 
                  ? "Connect with an independent printer specialist for hardware recommendations, TCO calculations, or business quotes."
                  : "Receive instant SMS notifications on manufacturer price drops, exclusive rebate codes, and holiday deals."}
              </p>

              {/* Mode Toggle Tabs */}
              <div className="flex items-center gap-2 mt-6 p-1 bg-slate-800/80 rounded-2xl border border-slate-700/80 max-w-md">
                <button
                  type="button"
                  onClick={() => handleTabChange("callback")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                    activeTab === "callback"
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                  }`}
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  Priority Callback
                </button>

                <button
                  type="button"
                  onClick={() => handleTabChange("promotions")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                    activeTab === "promotions"
                      ? "bg-emerald-600 text-white shadow-md"
                      : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                  }`}
                >
                  <Tag className="w-3.5 h-3.5" />
                  Deals &amp; Promo Alerts
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 flex-1">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center text-center py-10 space-y-4">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {activeTab === "callback" ? "Callback Request Confirmed!" : "You're on the VIP Deals List!"}
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md leading-relaxed">
                    {activeTab === "callback"
                      ? "Thank you! Our independent hardware team will call you back during your preferred window."
                      : "Look out for exclusive price drop alerts, manufacturer rebates, and discount codes sent directly to your phone and email."}
                  </p>
                  <div className="pt-2 text-xs text-slate-500 font-mono">
                    Reference ID: #{Math.floor(100000 + Math.random() * 900000)}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  
                  {/* Name & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name
                      </label>
                      <Input
                        type="text"
                        placeholder="e.g. Michael Scott"
                        {...register("fullName")}
                        className="h-11 bg-slate-50 border-slate-200 rounded-xl text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        US Phone Number <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        {...register("phone")}
                        className={`h-11 bg-slate-50 border-slate-200 rounded-xl text-sm ${
                          errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""
                        }`}
                      />
                      {errors.phone ? (
                        <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                      ) : (
                        <p className="text-slate-400 text-[11px] mt-1">For priority callback &amp; SMS deal alerts</p>
                      )}
                    </div>
                  </div>

                  {/* Email & Category Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address {activeTab === "promotions" && <span className="text-red-500">*</span>}
                      </label>
                      <Input
                        type="email"
                        placeholder="you@company.com"
                        {...register("email")}
                        className="h-11 bg-slate-50 border-slate-200 rounded-xl text-sm"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Interested Hardware Category
                      </label>
                      <select
                        {...register("printerSeries")}
                        className="w-full h-11 px-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      >
                        {CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Callback Window (Only in Callback mode) */}
                  {activeTab === "callback" && (
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Preferred Callback Window
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {CALLBACK_WINDOWS.map((win) => (
                          <button
                            key={win}
                            type="button"
                            onClick={() => setValue("preferredTime", win)}
                            className={`p-2.5 text-xs font-semibold rounded-xl border text-left flex items-center justify-between transition-all ${
                              watch("preferredTime") === win
                                ? "border-blue-600 bg-blue-50 text-blue-700"
                                : "border-slate-200 hover:border-slate-300 text-slate-700"
                            }`}
                          >
                            <span>{win}</span>
                            {watch("preferredTime") === win && (
                              <Check className="w-3.5 h-3.5 text-blue-600" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Notes / Questions */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {activeTab === "callback" ? "Specific Model or Requirements (Optional)" : "Special Requests (Optional)"}
                    </label>
                    <textarea
                      placeholder={activeTab === "callback" ? "e.g., Looking for a laser printer under $300 with auto-duplex..." : "e.g., Notify me when Epson EcoTank goes on sale..."}
                      {...register("issueFacing")}
                      rows={2}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    />
                  </div>

                  {/* Honeypot field for spam prevention */}
                  <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

                  {/* Mandatory TCPA / Marketing Consent Checkbox */}
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 space-y-2">
                    <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600 leading-relaxed">
                      <input
                        type="checkbox"
                        {...register("promotionalOptIn")}
                        className="mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 h-4 w-4 shrink-0"
                      />
                      <span>
                        <strong>Consent for Communications:</strong> I consent to receive phone calls, promotional SMS text messages, and email deal notifications from Live Feed Reviews at the contact details provided. Message &amp; data rates may apply. Reply STOP anytime to unsubscribe.
                      </span>
                    </label>
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 font-medium">
                      {errorMsg}
                    </div>
                  )}

                  {/* Trust Footer & Submit Action */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-100">
                    <div className="flex items-center gap-4 text-[11px] text-slate-500">
                      <span className="flex items-center gap-1">
                        <Lock className="w-3.5 h-3.5 text-slate-400" />
                        256-Bit SSL Encrypted
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        Fast Response
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={handleClose}
                        className="rounded-xl text-xs text-slate-500"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className={`rounded-xl text-sm font-bold text-white px-6 shadow-sm flex items-center gap-2 ${
                          activeTab === "callback"
                            ? "bg-blue-600 hover:bg-blue-700"
                            : "bg-emerald-600 hover:bg-emerald-700"
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Submitting...
                          </>
                        ) : activeTab === "callback" ? (
                          <>
                            <PhoneCall className="w-4 h-4" />
                            Request Free Callback
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4" />
                            Get VIP Deals
                          </>
                        )}
                      </Button>
                    </div>
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
