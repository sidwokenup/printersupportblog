"use client"

import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle2, HeadphonesIcon, Loader2, ChevronRight, ChevronLeft } from "lucide-react"
import { usePathname } from "next/navigation"

import { leadFormSchema, LeadFormValues } from "@/lib/validations/lead"
import { submitLead } from "@/app/actions/leadActions"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const PRINTER_SERIES = [
  "HP Envy", "HP Deskjet", "HP Laserjet", "HP Designjet", 
  "HP SmartTank", "HP PhotoSmart", "HP Tango", "HP Latex", 
  "HP Indigo", "HP Sprocket", "Others"
]

const ISSUES = [
  "Printer Offline", "Printer not printing", "Printer Paper Jam", 
  "Printer Setup Issue", "Printer Driver", "Printer Issue After Windows Update", 
  "Printer code Errors and Messages", "Printer Troubleshooting", 
  "Printer not connecting to WIFI", "Printer Job Stuck In Queue", 
  "Printer in error state", "Others"
]

const OS_OPTIONS = [
  "Windows", "macOS", "Linux", "ChromeOS", "iOS", "Android", "Other"
]

export function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [step, setStep] = useState(0)
  
  const pathname = usePathname()

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      printerSeries: "",
      issueFacing: "",
      operatingSystem: "",
      email: "",
      phone: "+1 ",
      honeypot: "",
    }
  })

  useEffect(() => {
    const handleOpenEvent = () => {
      setStep(0)
      setIsSuccess(false)
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

  const nextStep = () => setStep((s) => Math.min(s + 1, 3))
  const prevStep = () => setStep((s) => Math.max(s - 1, 0))

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
        }, 4000)
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

  // Animation variants for sliding content
  const variants = {
    enter: { x: 50, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 }
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
            className="fixed left-1/2 top-1/2 z-[101] w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 bg-slate-50 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col md:flex-row"
          >
            {/* Sidebar / Header Graphic */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 md:p-8 text-white relative overflow-hidden md:w-1/3 flex flex-col justify-between shrink-0">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />
              
              <div className="relative z-10 mb-8 md:mb-0">
                <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm w-fit mb-6 hidden md:block">
                  <HeadphonesIcon className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Let us help you with your printer issue.</h2>
                <p className="text-blue-100 text-sm md:text-base">Fill in the details or answer a few questions to get started.</p>
              </div>

              {!isSuccess && (
                <div className="hidden md:block relative z-10">
                  <div className="text-xs font-semibold text-blue-200 uppercase tracking-wider mb-3">Steps:</div>
                  <div className="flex flex-col gap-4">
                    {["Printer Brand & Series", "Issue Facing", "Operating System", "Contact Details"].map((label, i) => (
                      <div key={i} className={`flex items-center gap-3 ${step === i ? "opacity-100" : "opacity-40"}`}>
                        <div className={`w-2.5 h-2.5 rounded-full ${step >= i ? "bg-white" : "bg-blue-300"}`} />
                        <span className="text-sm font-medium">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-8 bg-white md:w-2/3 flex flex-col relative min-h-[400px]">
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors text-slate-500 hover:text-slate-700 z-50"
              >
                <X className="h-5 w-5" />
              </button>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 flex-1"
                >
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Your ticket is raised!</h3>
                  <p className="text-slate-600 text-lg">
                    We will connect with you immediately.
                  </p>
                </motion.div>
              ) : (
                <div className="flex flex-col h-full flex-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.2 }}
                      className="flex-1 flex flex-col"
                    >
                      {step === 0 && (
                        <>
                          <h3 className="text-xl font-bold text-slate-900 mb-6 mt-4">Q1. Help us with your printer series</h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 overflow-y-auto pr-2 pb-4 max-h-[300px]">
                            {PRINTER_SERIES.map((series) => (
                              <button
                                key={series}
                                type="button"
                                onClick={() => {
                                  setValue("printerSeries", series)
                                  nextStep()
                                }}
                                className={`p-3 md:p-4 text-sm font-medium border rounded-xl transition-all text-center ${watch("printerSeries") === series ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"}`}
                              >
                                {series}
                              </button>
                            ))}
                          </div>
                        </>
                      )}

                      {step === 1 && (
                        <>
                          <h3 className="text-xl font-bold text-slate-900 mb-6 mt-4">Q2. Issue facing</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 overflow-y-auto pr-2 pb-4 max-h-[300px]">
                            {ISSUES.map((issue) => (
                              <button
                                key={issue}
                                type="button"
                                onClick={() => {
                                  setValue("issueFacing", issue)
                                  nextStep()
                                }}
                                className={`p-3 text-sm font-medium border rounded-xl transition-all text-left ${watch("issueFacing") === issue ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"}`}
                              >
                                {issue}
                              </button>
                            ))}
                          </div>
                        </>
                      )}

                      {step === 2 && (
                        <>
                          <h3 className="text-xl font-bold text-slate-900 mb-6 mt-4">Q3. What is your operating system?</h3>
                          <div className="grid grid-cols-2 gap-3">
                            {OS_OPTIONS.map((os) => (
                              <button
                                key={os}
                                type="button"
                                onClick={() => {
                                  setValue("operatingSystem", os)
                                  nextStep()
                                }}
                                className={`p-3 text-sm font-medium border rounded-xl transition-all text-center ${watch("operatingSystem") === os ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"}`}
                              >
                                {os}
                              </button>
                            ))}
                          </div>
                        </>
                      )}

                      {step === 3 && (
                        <div className="flex flex-col flex-1 mt-4">
                          <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Details</h3>
                          
                          <form id="lead-form" onSubmit={handleSubmit(onSubmit)} className="space-y-5 flex-1">
                            <div className="hidden">
                              <input type="text" {...register("honeypot")} tabIndex={-1} autoComplete="off" />
                            </div>

                            <div className="space-y-1.5">
                              <label className="text-sm font-medium text-slate-700">Q4. Your Email Address (Optional)</label>
                              <Input 
                                {...register("email")} 
                                type="email"
                                placeholder="john@example.com"
                                className={`bg-slate-50 border-slate-200 h-12 rounded-xl focus-visible:ring-primary ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                              />
                              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                            </div>

                            <div className="space-y-1.5">
                              <label className="text-sm font-medium text-slate-700">Q5. Your Contact No. <span className="text-red-500">*</span></label>
                              <Input 
                                {...register("phone")} 
                                type="tel"
                                placeholder="+1 (555) 123-4567"
                                className={`bg-slate-50 border-slate-200 h-12 rounded-xl focus-visible:ring-primary ${errors.phone ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                              />
                              <p className="text-xs text-slate-500 mt-1">US numbers only</p>
                              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                            </div>

                            {errorMsg && (
                              <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm text-center border border-red-100">
                                {errorMsg}
                              </div>
                            )}
                          </form>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Footer */}
                  <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-100">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={prevStep}
                      disabled={step === 0 || isSubmitting}
                      className={`text-slate-500 hover:text-slate-900 ${step === 0 ? 'invisible' : ''}`}
                    >
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>

                    {step < 3 ? (
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-6"
                      >
                        Next
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button 
                        type="submit" 
                        form="lead-form"
                        disabled={isSubmitting}
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Submit"
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
