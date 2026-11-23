"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export function DisclosureBar() {
  const [isVisible, setIsVisible] = useState(true)

  return isVisible ? (
    <div
      role="region"
      aria-label="Affiliate Disclosure"
      style={{ backgroundColor: "#FFF8E1" }}
      className="text-slate-900 text-sm py-2 px-4 border-b border-amber-200/70 relative z-50 flex items-center justify-between gap-3 text-xs sm:text-sm"
    >
      <div className="container mx-auto flex items-center justify-center text-center pr-6 sm:pr-0">
        <span>
          <strong>Affiliate Disclosure:</strong> As an Amazon Associate and affiliate partner, we may earn a commission if you buy through links on this page, at no extra cost to you. We are not affiliated with Brother, Canon, Epson, HP, or Amazon.{" "}
          <Link
            href="/affiliate-disclosure"
            className="underline font-semibold text-slate-950 hover:text-amber-900 inline"
          >
            Learn more
          </Link>
        </span>
      </div>
      <button
        type="button"
        onClick={() => setIsVisible(false)}
        aria-label="Dismiss affiliate disclosure"
        className="p-1 hover:bg-amber-200/60 rounded text-slate-700 hover:text-slate-950 transition-colors shrink-0 cursor-pointer"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  ) : null
}
