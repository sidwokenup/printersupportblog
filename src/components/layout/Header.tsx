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

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
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
            href="/#solutions"
            className={cn(
              "relative px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-primary",
              pathname?.startsWith("/solutions") ? "text-primary" : "text-slate-600 hover:bg-slate-100"
            )}
          >
            Knowledgebase & Blog
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
                <Link href="/" className="px-4 py-3 text-base font-medium rounded-xl hover:bg-slate-100 text-slate-700">Home</Link>
                <Link href="/#solutions" className="px-4 py-3 text-base font-medium rounded-xl hover:bg-slate-100 text-slate-700">Knowledgebase & Blog</Link>
                <Link href="/privacy-policy" className="px-4 py-3 text-base font-medium rounded-xl hover:bg-slate-100 text-slate-700">Privacy Policy</Link>
                <button
                  onClick={() => window.dispatchEvent(new Event("open-lead-popup"))}
                  className="mt-4 px-4 py-3 text-base font-semibold rounded-xl bg-primary text-white text-center hover:bg-blue-700"
                >
                  Contact Us
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
