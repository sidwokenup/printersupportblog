"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function Footer() {
  const pathname = usePathname()
  if (pathname === "/printer-tips" || pathname === "/printer-tips.html") {
    return null
  }

  const currentDate = "November 2026"

  return (
    <footer className="relative mt-12 bg-slate-950 text-slate-300 border-t border-slate-800 overflow-hidden">
      {/* Subtle Accent Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500 opacity-60" />

      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-16 space-y-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Brand & Description */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="bg-slate-900 border border-slate-800 p-2 rounded-xl group-hover:border-slate-700 transition-colors flex items-center justify-center">
                <Image src="/logo.png" alt="Live Feed Reviews" width={40} height={40} className="object-contain" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                Live Feed Reviews
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Independent hardware research, specification benchmarking, and step-by-step diagnostic documentation compiled from ISO/IEC yield standards, manufacturer service manuals, and technician-verified troubleshooting protocols.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800/80 pt-3">
              <strong className="text-slate-300">Live Feed Reviews is operated by Tellepsis Media LLC.</strong><br />
              Support: <a href="mailto:support@tellepsis.com" className="text-blue-400 hover:underline">support@tellepsis.com</a> | <a href="tel:+18883442323" className="text-blue-400 hover:underline">+1 (888) 344-2323</a>
            </p>
          </div>

          {/* Research & Buying Guides */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-white text-base">Reviews &amp; Buying Guides</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-300">
              <Link href="/blog" className="hover:text-white transition-colors">
                All 2026 Reviews
              </Link>
              <Link href="/printers" className="hover:text-white transition-colors">
                Wireless Laser Printers
              </Link>
              <Link href="/all-in-one" className="hover:text-white transition-colors">
                All-in-One Inkjets
              </Link>
              <Link href="/scanners" className="hover:text-white transition-colors">
                Duplex Scanners
              </Link>
              <Link href="/wide-format" className="hover:text-white transition-colors">
                Wide-Format 11x17
              </Link>
              <Link href="/shipping-printers" className="hover:text-white transition-colors">
                4x6 Shipping Printers
              </Link>
              <Link href="/toner-savings" className="hover:text-white transition-colors">
                Toner Savings Math
              </Link>
            </div>
          </div>

          {/* Troubleshooting Hub */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-white text-base">Troubleshooting Hub</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-300">
              <Link href="/solutions" className="hover:text-white transition-colors">
                All DIY Diagnostic Guides
              </Link>
              <Link href="/solutions/error-codes" className="hover:text-white transition-colors">
                Error Code Lookup Directory
              </Link>
              <Link href="/solutions/printer-offline" className="hover:text-white transition-colors">
                Fix Printer Offline
              </Link>
              <Link href="/solutions/printer-paper-jam" className="hover:text-white transition-colors">
                Clear Paper Jams
              </Link>
              <Link href="/solutions/printer-not-connecting-to-wifi" className="hover:text-white transition-colors">
                Wi-Fi Connection Issues
              </Link>
              <Link href="/solutions/faded-streaky-print-quality" className="hover:text-white transition-colors">
                Faded Prints &amp; Streaks
              </Link>
            </div>
          </div>

          {/* Legal & Editorial Information */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-white text-base">Editorial &amp; Compliance</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-300">
              <Link href="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/methodology" className="hover:text-white transition-colors">
                Research Methodology
              </Link>
              <Link href="/affiliate-disclosure" className="hover:text-white transition-colors">
                Affiliate Disclosure
              </Link>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Global Legal Links Row (All 6 Links Visible) */}
        <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-300">
          <Link href="/about" className="hover:text-white underline underline-offset-4">
            About
          </Link>
          <span className="text-slate-600">•</span>
          <Link href="/contact" className="hover:text-white underline underline-offset-4">
            Contact
          </Link>
          <span className="text-slate-600">•</span>
          <Link href="/privacy-policy" className="hover:text-white underline underline-offset-4">
            Privacy Policy
          </Link>
          <span className="text-slate-600">•</span>
          <Link href="/terms" className="hover:text-white underline underline-offset-4">
            Terms
          </Link>
          <span className="text-slate-600">•</span>
          <Link href="/affiliate-disclosure" className="hover:text-white underline underline-offset-4">
            Affiliate Disclosure
          </Link>
          <span className="text-slate-600">•</span>
          <Link href="/methodology" className="hover:text-white underline underline-offset-4">
            Methodology
          </Link>
        </div>

        {/* Copyright & Trademark Disclaimer */}
        <div className="space-y-3 text-center text-xs text-slate-400 max-w-4xl mx-auto leading-relaxed">
          <p className="text-slate-300 font-medium">
            Independent Consumer Hardware &amp; Troubleshooting Publication — Not affiliated with, endorsed by, or sponsored by HP, Canon, Epson, Brother, or any manufacturer. Product names and trademarks belong to their respective owners and are used for nominative comparison only.
          </p>
          <p>
            &copy; 2026 Live Feed Reviews. Live Feed Reviews is operated by Tellepsis Media LLC. Support: <a href="mailto:support@tellepsis.com" className="text-blue-400 hover:underline">support@tellepsis.com</a> | <a href="tel:+18883442323" className="text-blue-400 hover:underline">+1 (888) 344-2323</a>. Live diagnostic chat services are provided by Tellepsis Media LLC via our dedicated support portal (care.tellepsis.shop). We do not provide manufacturer telephone warranty support - use the Official Manufacturer Support Directory for warranty claims. Product names and trademarks belong to their respective owners and are used for nominative comparison only.
          </p>
          <p className="text-slate-500">
            Last Updated: {currentDate} | Prices checked: {currentDate} - Prices may change on retailer sites.
          </p>
        </div>
      </div>
    </footer>
  )
}
