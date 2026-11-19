import React from "react";
import Link from "next/link";
import { 
  PhoneCall, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Tag, 
  CheckCircle2, 
  Lock, 
  HelpCircle,
  Building,
  ArrowRight
} from "lucide-react";
import { ContactPageForm } from "@/components/lead/ContactPageForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Hardware Advisory Desk & VIP Deals | Live Feed Reviews",
  description: "Connect with independent printer hardware advisors for buying recommendations, business quotes, and exclusive promotional price-drop alerts.",
  openGraph: {
    title: "Contact Hardware Advisory Desk & VIP Deals | Live Feed Reviews",
    description: "Request a priority callback or join our VIP deals list for verified discounts on top-rated printers.",
    url: "https://www.livefeedreviews.com/contact",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "Live Feed Reviews" }],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-8 pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl space-y-16">
        
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-blue-600" />
            Live Feed Reviews Consumer Desk
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Hardware Consultation &amp; VIP Deals Desk
          </h1>

          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Need personalized printer recommendations, volume pricing quotes, or want to receive instant alerts on manufacturer rebates? Connect with our team below.
          </p>
        </header>

        {/* Main Grid: Form + Info Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Form Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Send an Inquiry or Request a Callback
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Fill in your details below. We respond as quickly as possible.
              </p>
            </div>

            <ContactPageForm />
          </div>

          {/* Right Info Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Contact Info Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 space-y-6 shadow-md border border-slate-800">
              <div className="space-y-2">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  Independent Advisory Desk
                </div>
                <h3 className="text-xl font-bold">Contact Coordinates</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our lab editors and hardware advisors are available Monday through Friday.
                </p>
              </div>

              <div className="space-y-4 pt-2 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-xs uppercase font-semibold">Editorial &amp; Advisory Email</strong>
                    <a href="mailto:advisory@livefeedreviews.com" className="text-blue-300 hover:text-blue-200 text-sm">
                      advisory@livefeedreviews.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-xs uppercase font-semibold">Callback Hours</strong>
                    <span>Monday – Friday: 9:00 AM – 8:00 PM EST</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-xs uppercase font-semibold">Security &amp; Privacy</strong>
                    <span className="text-xs text-slate-300">256-Bit SSL encryption. We never sell or share your contact info.</span>
                  </div>
                </div>
              </div>

              {/* Policy Disclaimer */}
              <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                <strong>Compliance Notice:</strong> LiveFeedReviews is an independent consumer technology review portal and deal discovery network. We do not provide telephone technical support, remote repair services, or warranty service. For equipment under warranty, consult official manufacturers directly.
              </div>
            </div>

            {/* Why Consult Us Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-base">What You Get:</h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Zero Brand Bias:</strong> Tested on real retail units with ISO/IEC 19752 speed benchmarks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>TCO Analysis:</strong> Calculate 3-year operating and toner costs before spending a dollar.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>VIP Flash Alerts:</strong> First access to holiday flash discounts and rebate codes.</span>
                </li>
              </ul>
            </div>

            {/* Explore Reviews Banner */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/60 rounded-3xl p-6 border border-blue-200/60 space-y-3">
              <h4 className="font-bold text-slate-900 text-sm">Need immediate answers?</h4>
              <p className="text-xs text-slate-600">
                Browse our verified 2026 buying guides or self-service troubleshooting library:
              </p>
              <div className="flex flex-col gap-2 pt-1 text-xs">
                <Link href="/printers" className="text-blue-700 hover:text-blue-800 font-semibold inline-flex items-center gap-1">
                  Best Wireless Laser Printers <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link href="/solutions" className="text-blue-700 hover:text-blue-800 font-semibold inline-flex items-center gap-1">
                  Printer Troubleshooting Hub (13 Guides) <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
