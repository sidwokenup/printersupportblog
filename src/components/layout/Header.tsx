"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Printer, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { GlobalSearch } from "@/components/search/GlobalSearch"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Troubleshooting", href: "/troubleshooting" },
  { name: "Models", href: "/models" },
  { name: "Error Codes", href: "/error-codes" },
  { name: "Drivers", href: "/drivers" },
  { name: "Contact", href: "/contact" },
]

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
            <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
              <Printer className="h-6 w-6 text-primary" />
            </div>
            <span className="font-bold text-xl hidden lg:inline-block tracking-tight text-slate-900">
              Live Free Reviews
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => {
            if (item.name === "Contact") {
              return (
                <button
                  key={item.name}
                  onClick={() => window.dispatchEvent(new Event("open-lead-popup"))}
                  className="relative px-3 py-2 text-sm font-medium transition-colors rounded-md text-slate-600 hover:text-primary hover:bg-slate-100"
                >
                  {item.name}
                </button>
              )
            }
            
            const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`)
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-primary",
                  isActive ? "text-primary" : "text-slate-600 hover:bg-slate-100"
                )}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
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
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex items-center gap-2 mb-8">
                <Printer className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg tracking-tight">Live Free Reviews</span>
              </div>
              <div className="relative mb-8">
                <GlobalSearch />
              </div>
              <nav className="grid gap-2">
                {navItems.map((item) => {
                  if (item.name === "Contact") {
                    return (
                      <button
                        key={item.name}
                        onClick={() => window.dispatchEvent(new Event("open-lead-popup"))}
                        className="flex items-center px-4 py-3 text-base font-medium rounded-xl transition-colors hover:bg-slate-100 text-slate-700 text-left"
                      >
                        {item.name}
                      </button>
                    )
                  }
                  const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`)
                  return (
                    <Link 
                      key={item.href} 
                      href={item.href}
                      className={cn(
                        "flex items-center px-4 py-3 text-base font-medium rounded-xl transition-colors",
                        isActive ? "bg-primary/10 text-primary" : "hover:bg-slate-100 text-slate-700"
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
