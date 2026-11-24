"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Clock, ShieldCheck, CheckCircle2, Send, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "General Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-12">
        {/* Header */}
        <header className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold tracking-wide">
            <Mail className="w-3.5 h-3.5" />
            Contact Live Feed Reviews
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Get in Touch With Our Editorial Team
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about our printer reviews, methodology, or troubleshooting guides? We typically reply in 1-3 business days.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Send a Message</h2>
              <p className="text-sm text-slate-500 mt-1">
                We typically reply in 1-3 business days.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold text-slate-900">Thank you for your message!</h3>
                <p className="text-sm text-slate-600">
                  Our editorial team will review your inquiry and respond within 1-3 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Your Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label htmlFor="topic" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Topic
                  </label>
                  <select
                    id="topic"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Review Feedback & Correction">Review Feedback &amp; Correction</option>
                    <option value="Troubleshooting Question">Troubleshooting Question</option>
                    <option value="Affiliate Disclosure Inquiry">Affiliate Disclosure Inquiry</option>
                    <option value="Privacy / Data Request">Privacy / Data Request</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we assist you?"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 space-y-6 shadow-sm border border-slate-800">
              <div className="space-y-2">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  Editorial Desk
                </div>
                <h3 className="text-xl font-bold">Contact Coordinates</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We welcome questions, editorial corrections, and partnership inquiries.
                </p>
              </div>

              <div className="space-y-4 pt-2 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-xs uppercase font-semibold">Editorial &amp; Corrections</strong>
                    <a
                      href="mailto:contact@livefeedreviews.com"
                      className="text-blue-300 hover:text-white transition-colors text-sm font-medium"
                    >
                      contact@livefeedreviews.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-xs uppercase font-semibold">Corporate Operator Support</strong>
                    <div className="text-sm font-medium text-white">Tellepsis Media LLC</div>
                    <a
                      href="mailto:support@tellepsis.com"
                      className="text-blue-300 hover:text-white transition-colors text-xs font-medium block"
                    >
                      support@tellepsis.com
                    </a>
                    <a
                      href="tel:+18883442323"
                      className="text-emerald-400 hover:text-emerald-300 transition-colors text-xs font-semibold block mt-0.5"
                    >
                      +1 (888) 344-2323
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-xs uppercase font-semibold">Response Window</strong>
                    <span className="text-xs text-slate-300">We typically reply in 1-3 business days.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                <strong>Notice:</strong> Live Feed Reviews is an independent consumer technology publication operated by Tellepsis Media LLC. We do not provide phone support, repair warranty service, or represent printer manufacturers. For warranty claims, contact the device manufacturer directly.
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
              <h4 className="font-bold text-slate-900 text-sm">Helpful Resources</h4>
              <ul className="space-y-2 text-xs text-blue-700">
                <li>
                  <Link href="/about" className="hover:underline">About Live Feed Reviews</Link>
                </li>
                <li>
                  <Link href="/methodology" className="hover:underline">How We Research &amp; Rank</Link>
                </li>
                <li>
                  <Link href="/affiliate-disclosure" className="hover:underline">Affiliate Disclosure</Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:underline">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
