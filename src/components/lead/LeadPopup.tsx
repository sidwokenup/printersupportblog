"use client"

import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle2, HeadphonesIcon, Loader2 } from "lucide-react"
import { usePathname } from "next/navigation"

import { leadFormSchema, LeadFormValues } from "@/lib/validations/lead"
import { submitLead } from "@/app/actions/leadActions"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  
  const pathname = usePathname()

  const { register, handleSubmit, formState: { errors } } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      honeypot: "",
    }
  })

  useEffect(() => {
    // Check if user has already seen/closed the popup recently
    const lastClosed = localStorage.getItem("hp_lead_popup_closed")
    if (lastClosed) {
      const closedAt = new Date(lastClosed).getTime()
      const now = new Date().getTime()
      // Don't show if closed within the last 24 hours
      if (now - closedAt < 24 * 60 * 60 * 1000) {
        return
      }
    }

    let hasShown = false

    const showPopup = () => {
      if (!hasShown) {
        setIsOpen(true)
        hasShown = true
      }
    }

    const handleOpenEvent = () => setIsOpen(true)
    window.addEventListener("open-lead-popup", handleOpenEvent)

    const timer = setTimeout(showPopup, 15000)

    // Trigger 2: 50% Scroll
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight
      const scrollTop = document.documentElement.scrollTop
      const clientHeight = document.documentElement.clientHeight
      if ((scrollTop + clientHeight) / scrollHeight > 0.5) {
        showPopup()
        window.removeEventListener("scroll", handleScroll)
      }
    }
    window.addEventListener("scroll", handleScroll)

    // Trigger 3: Exit Intent (Desktop)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        showPopup()
        document.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
    document.addEventListener("mouseleave", handleMouseLeave)

    // Clean up
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("open-lead-popup", handleOpenEvent)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem("hp_lead_popup_closed", new Date().toISOString())
  }

  const onSubmit = async (data: LeadFormValues) => {
    setIsSubmitting(true)
    setErrorMsg("")
    
    // Add hidden tracking data
    data.pageUrl = typeof window !== "undefined" ? window.location.href : pathname
    data.source = "Website Popup"

    try {
      const result = await submitLead(data)
      
      if (result.success) {
        setIsSuccess(true)
        // Auto close after 3 seconds of success
        setTimeout(() => {
          handleClose()
        }, 3000)
      } else {
        setErrorMsg(result.error || "Something went wrong. Please try again.")
      }
    } catch (err) {
      console.error(err)
      setErrorMsg("Failed to submit request. Please try again.")
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
            className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed left-1/2 top-1/2 z-[101] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200"
          >
            {/* Header Graphic */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 md:p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white/80 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                  <HeadphonesIcon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Need Help With Your HP Printer?</h2>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 bg-white">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-8"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                  <p className="text-slate-600">
                    Your request has been received. Our team will review your information and contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <>
                  <p className="text-slate-600 mb-6 text-sm md:text-base">
                    Leave your details and we&apos;ll help you resolve your printer issue faster. Our experts are standing by.
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Honeypot Field */}
                    <div className="hidden">
                      <input type="text" {...register("honeypot")} tabIndex={-1} autoComplete="off" />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700">Full Name</label>
                      <Input 
                        {...register("fullName")} 
                        placeholder="John Doe"
                        className={`bg-slate-50 border-slate-200 h-12 rounded-xl focus-visible:ring-primary ${errors.fullName ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      />
                      {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700">Phone Number (US Only)</label>
                      <Input 
                        {...register("phone")} 
                        type="tel"
                        placeholder="(555) 123-4567"
                        className={`bg-slate-50 border-slate-200 h-12 rounded-xl focus-visible:ring-primary ${errors.phone ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700">Email Address</label>
                      <Input 
                        {...register("email")} 
                        type="email"
                        placeholder="john@example.com"
                        className={`bg-slate-50 border-slate-200 h-12 rounded-xl focus-visible:ring-primary ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                    </div>

                    {errorMsg && (
                      <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm text-center border border-red-100">
                        {errorMsg}
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full h-12 text-base font-semibold rounded-xl bg-primary hover:bg-blue-700 shadow-md mt-4"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Get Support Now"
                      )}
                    </Button>
                    <p className="text-xs text-center text-slate-400 mt-4">
                      By submitting this form, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
