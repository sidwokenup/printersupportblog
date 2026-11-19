"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { 
  PhoneCall, 
  Tag, 
  CheckCircle2, 
  Loader2, 
  Send, 
  Check, 
  Lock, 
  Clock, 
  Sparkles,
  Mail,
  User
} from "lucide-react"

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

export function ContactPageForm() {
  const [activeTab, setActiveTab] = useState<"callback" | "promotions">("callback")
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

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

  const handleTabChange = (tab: "callback" | "promotions") => {
    setActiveTab(tab)
    setValue("leadType", tab)
    setErrorMsg("")
  }

  const onSubmit = async (data: LeadFormValues) => {
    setIsSubmitting(true)
    setErrorMsg("")
    
    data.pageUrl = typeof window !== "undefined" ? window.location.href : "https://www.livefeedreviews.com/contact"
    data.source = activeTab === "callback" ? "Contact Page Callback" : "Contact Page Deals"

    try {
      const result = await submitLead(data)
      
      if (result.success) {
        setIsSuccess(true)
      } else {
        setErrorMsg(result.error || "Unable to submit request. Please check your phone number and try again.")
      }
    } catch (err) {
      console.error(err)
      setErrorMsg("Connection error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 space-y-4 bg-emerald-50/50 rounded-2xl p-8 border border-emerald-200/60">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
          <CheckCircle2 className="h-10 w-10 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">
          {activeTab === "callback" ? "Callback Request Received!" : "Welcome to the VIP Deals Club!"}
        </h3>
        <p className="text-slate-600 text-sm max-w-md leading-relaxed">
          {activeTab === "callback"
            ? "Thank you! Our independent hardware advisory team will call you back during your requested window."
            : "You're now on our priority deals notification list. Watch your phone and email for upcoming promotional codes and price drop alerts."}
        </p>
        <Button
          onClick={() => {
            setIsSuccess(false)
            reset()
          }}
          variant="outline"
          className="mt-4 rounded-xl text-xs"
        >
          Submit Another Inquiry
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Intent Selector Tabs */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl max-w-md">
        <button
          type="button"
          onClick={() => handleTabChange("callback")}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs md:text-sm font-bold transition-all ${
            activeTab === "callback"
              ? "bg-white text-blue-700 shadow-sm"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <PhoneCall className="w-4 h-4 text-blue-600" />
          Request Callback
        </button>

        <button
          type="button"
          onClick={() => handleTabChange("promotions")}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs md:text-sm font-bold transition-all ${
            activeTab === "promotions"
              ? "bg-white text-emerald-700 shadow-sm"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <Tag className="w-4 h-4 text-emerald-600" />
          VIP Deals &amp; Promo
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        
        {/* Full Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Full Name
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <Input
                type="text"
                placeholder="e.g. Sarah Jenkins"
                {...register("fullName")}
                className="pl-10 h-11 bg-slate-50 border-slate-200 rounded-xl text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              US Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <PhoneCall className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <Input
                type="tel"
                placeholder="+1 (555) 234-5678"
                {...register("phone")}
                className={`pl-10 h-11 bg-slate-50 border-slate-200 rounded-xl text-sm ${
                  errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""
                }`}
              />
            </div>
            {errors.phone ? (
              <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
            ) : (
              <p className="text-slate-400 text-[11px] mt-1">For priority callback &amp; instant SMS deal alerts</p>
            )}
          </div>
        </div>

        {/* Email & Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Email Address {activeTab === "promotions" && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <Input
                type="email"
                placeholder="sarah@example.com"
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
              Hardware Interest
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

        {/* Callback Time Slots (Callback mode) */}
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
                      ? "border-blue-600 bg-blue-50 text-blue-700 shadow-sm"
                      : "border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50"
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

        {/* Message / Details */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            {activeTab === "callback" ? "Specific Requirements or Question (Optional)" : "Special Deal Request (Optional)"}
          </label>
          <textarea
            placeholder={activeTab === "callback" ? "e.g., Looking for a wireless color laser printer for 500 pages/month..." : "e.g., Interested in SuperTank models with automatic 2-sided scanning..."}
            {...register("issueFacing")}
            rows={3}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
          />
        </div>

        {/* Honeypot field */}
        <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

        {/* Mandatory TCPA / Marketing Consent Checkbox */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2">
          <label className="flex items-start gap-3 cursor-pointer text-xs text-slate-600 leading-relaxed">
            <input
              type="checkbox"
              {...register("promotionalOptIn")}
              className="mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 h-4 w-4 shrink-0"
            />
            <span>
              <strong>Marketing &amp; Notification Consent:</strong> I agree to receive telephone calls, promotional SMS text messages, and email notifications from Live Feed Reviews regarding hardware deals and buying recommendations. Msg &amp; data rates may apply. Reply STOP to cancel anytime.
            </span>
          </label>
        </div>

        {errorMsg && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 font-medium">
            {errorMsg}
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              256-Bit SSL Encrypted
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              Fast 15-Min Response
            </span>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className={`rounded-xl text-sm font-bold text-white px-8 h-12 shadow-sm flex items-center gap-2 ${
              activeTab === "callback"
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-emerald-600 hover:bg-emerald-700"
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting Request...
              </>
            ) : activeTab === "callback" ? (
              <>
                <PhoneCall className="w-4 h-4" />
                Request Priority Callback
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Join VIP Deals List
              </>
            )}
          </Button>
        </div>

      </form>
    </div>
  )
}
