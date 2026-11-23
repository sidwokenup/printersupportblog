"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Printer, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { GlobalSearch } from "@/components/search/GlobalSearch"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()
  const isPrinterTips = pathname === "/printer-tips" || pathname === "/printer-tips.html"

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Sticky Notification Bar */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 text-center font-medium border-b border-slate-800 relative z-50">
        <span>Need Printer Help?</span>{" "}
        <Link href="/lp/printer-help" className="underline font-bold text-emerald-400 hover:text-emerald-300 ml-1 inline-flex items-center gap-1">
          Chat Now &rarr; /lp/printer-help
        </Link>
      </div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b",
          isScrolled 
            ? "bg-white/80 backdrop-blur-md border-border/50 shadow-sm py-2" 
            : "bg-white/50 backdrop-blur-sm border-transparent py-4"
        )}
      >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2 lg:mr-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors flex items-center justify-center">
              <Image src="/logo.png" alt="Live Feed Reviews" width={40} height={40} className="object-contain" />
            </div>
            <span className="font-bold text-xl hidden lg:inline-block tracking-tight text-slate-900">
              Live Feed Reviews
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1">
          {isPrinterTips ? (
            <>
              <Link 
                href="#setup-guide"
                className="relative px-3 py-2 text-sm font-medium transition-colors rounded-md text-slate-600 hover:text-primary hover:bg-slate-100"
              >
                Setup Guide
              </Link>

              <Link 
                href="#brands"
                className="relative px-3 py-2 text-sm font-medium transition-colors rounded-md text-slate-600 hover:text-primary hover:bg-slate-100"
              >
                Brand Guides
              </Link>

              <Link 
                href="#offline-guide"
                className="relative px-3 py-2 text-sm font-medium transition-colors rounded-md text-slate-600 hover:text-primary hover:bg-slate-100"
              >
                Offline Fix
              </Link>

              <Link 
                href="#device-guide"
                className="relative px-3 py-2 text-sm font-medium transition-colors rounded-md text-slate-600 hover:text-primary hover:bg-slate-100"
              >
                OS Checklist
              </Link>

              <Link 
                href="/lp/printer-help"
                className="relative px-3 py-2 text-sm font-bold transition-colors rounded-md text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200"
              >
                Live Assistance ⚡
              </Link>

              <Link 
                href="/contact"
                className="relative px-3 py-2 text-sm font-medium transition-colors rounded-md text-slate-600 hover:text-primary hover:bg-slate-100"
              >
                Contact
              </Link>

              <Link
                href="/lp/printer-help"
                className="relative ml-2 px-4 py-2 text-sm font-semibold transition-colors rounded-full bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm"
              >
                Live Chat
              </Link>
            </>
          ) : (
            <>
              <Link 
                href="/"
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-primary",
                  pathname === "/" ? "text-primary" : "text-slate-600 hover:bg-slate-100"
                )}
              >
                Home
              </Link>

              <Link 
                href="/blog"
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-primary",
                  pathname?.startsWith("/blog") || 
                  pathname === "/printers" || 
                  pathname === "/all-in-one" || 
                  pathname === "/scanners" ||
                  pathname === "/wide-format" ||
                  pathname === "/portable-printers" ||
                  pathname === "/shipping-printers" ||
                  pathname === "/toner-savings"
                    ? "text-primary font-semibold"
                    : "text-slate-600 hover:bg-slate-100"
                )}
              >
                Reviews &amp; Buying Guides
              </Link>

              <Link 
                href="/compare"
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-primary",
                  pathname?.startsWith("/compare") ? "text-primary font-semibold" : "text-slate-600 hover:bg-slate-100"
                )}
              >
                Compare
              </Link>

              <Link 
                href="/solutions"
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-primary",
                  pathname?.startsWith("/solutions") ? "text-primary font-semibold" : "text-slate-600 hover:bg-slate-100"
                )}
              >
                Troubleshooting Hub
              </Link>

              <Link 
                href="/lp/printer-help"
                className={cn(
                  "relative px-3 py-2 text-sm font-bold transition-colors rounded-md text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200",
                  pathname?.startsWith("/lp") ? "text-emerald-800 bg-emerald-100" : ""
                )}
              >
                Printer Help ⚡
              </Link>

              <Link 
                href="/contact"
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-primary",
                  pathname === "/contact" ? "text-primary font-semibold" : "text-slate-600 hover:bg-slate-100"
                )}
              >
                Advisory &amp; Deals
              </Link>

              <Link 
                href="/privacy-policy"
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-primary",
                  pathname === "/privacy-policy" ? "text-primary" : "text-slate-600 hover:bg-slate-100"
                )}
              >
                Privacy Policy
              </Link>

              <button
                onClick={() => window.dispatchEvent(new Event("open-lead-popup"))}
                className="relative ml-2 px-4 py-2 text-sm font-semibold transition-colors rounded-full bg-primary text-white hover:bg-blue-700 shadow-sm"
              >
                Contact Us
              </button>
            </>
          )}
        </nav>

        <div className="flex items-center justify-end gap-4 flex-1 xl:flex-none">
          {/* Desktop Search Placeholder */}
          <div className="hidden md:flex items-center w-full max-w-sm relative">
            <GlobalSearch />
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="xl:hidden rounded-full border-slate-200">
                <Menu className="h-5 w-5 text-slate-700" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex items-center gap-3 mb-8">
                <Image src="/logo.png" alt="Live Feed Reviews" width={36} height={36} className="object-contain" />
                <span className="font-bold text-lg tracking-tight">Live Feed Reviews</span>
              </div>
              <div className="relative mb-8">
                <GlobalSearch />
              </div>
              <nav className="flex flex-col gap-1">
                {isPrinterTips ? (
                  <>
                    <Link href="#setup-guide" className="px-4 py-3 text-base font-medium rounded-xl hover:bg-slate-100 text-slate-700">Setup Guide</Link>
                    <Link href="#brands" className="px-4 py-3 text-base font-medium rounded-xl hover:bg-slate-100 text-slate-700">Brand Guides</Link>
                    <Link href="#offline-guide" className="px-4 py-3 text-base font-medium rounded-xl hover:bg-slate-100 text-slate-700">Offline Fix</Link>
                    <Link href="#device-guide" className="px-4 py-3 text-base font-medium rounded-xl hover:bg-slate-100 text-slate-700">OS Checklist</Link>
                    <Link href="/lp/printer-help" className="px-4 py-3 text-base font-bold rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100">Live Assistance ⚡</Link>
                    <Link href="/contact" className="px-4 py-3 text-base font-medium rounded-xl hover:bg-slate-100 text-slate-700">Contact</Link>
                    <Link
                      href="/lp/printer-help"
                      className="mt-4 px-4 py-3 text-base font-semibold rounded-xl bg-emerald-600 text-white text-center hover:bg-emerald-700"
                    >
                      Start Live Chat
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/" className="px-4 py-3 text-base font-medium rounded-xl hover:bg-slate-100 text-slate-700">Home</Link>
                    <Link href="/blog" className="px-4 py-3 text-base font-medium rounded-xl hover:bg-slate-100 text-slate-700 font-semibold text-primary">Reviews & Buying Guides</Link>
                    <Link href="/compare" className="px-4 py-3 text-base font-medium rounded-xl hover:bg-slate-100 text-slate-700 font-semibold text-primary">Head-to-Head Compare</Link>
                    <Link href="/solutions" className="px-4 py-3 text-base font-medium rounded-xl hover:bg-slate-100 text-slate-700">Troubleshooting Hub</Link>
                    <Link href="/lp/printer-help" className="px-4 py-3 text-base font-bold rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100">Printer Help ⚡</Link>
                    <Link href="/privacy-policy" className="px-4 py-3 text-base font-medium rounded-xl hover:bg-slate-100 text-slate-700">Privacy Policy</Link>
                    <Link href="/contact" className="px-4 py-3 text-base font-medium rounded-xl hover:bg-slate-100 text-slate-700 font-semibold text-blue-600">Advisory &amp; VIP Deals</Link>
                    <button
                      onClick={() => window.dispatchEvent(new Event("open-lead-popup"))}
                      className="mt-4 px-4 py-3 text-base font-semibold rounded-xl bg-primary text-white text-center hover:bg-blue-700"
                    >
                      Contact Us
                    </button>
                  </>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
    </>
  )
}
