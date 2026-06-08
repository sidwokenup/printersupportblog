"use client"

import Link from "next/link"
import Image from "next/image"

// Simple SVG icons for social media since lucide-react doesn't have brand icons
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
)

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
)

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
)

export function Footer() {
  return (
    <footer className="relative mt-12 bg-white border-t border-slate-200 overflow-hidden">
      {/* Premium Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand & Description */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="bg-primary/10 p-2.5 rounded-xl group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                <Image src="/logo.png" alt="Live Feed Reviews" width={48} height={48} className="object-contain" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-slate-900">
                Live Feed Reviews
              </span>
            </Link>
            <p className="text-base text-slate-600 leading-relaxed max-w-sm">
              The ultimate programmatic knowledge base for HP Printer support, troubleshooting, driver downloads, and error codes. We make fixing printers simple.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <Link href="#" className="p-2 bg-slate-50 text-slate-500 hover:text-primary hover:bg-blue-50 rounded-full transition-all">
                <FacebookIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-slate-50 text-slate-500 hover:text-primary hover:bg-blue-50 rounded-full transition-all">
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-slate-50 text-slate-500 hover:text-primary hover:bg-blue-50 rounded-full transition-all">
                <InstagramIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-slate-50 text-slate-500 hover:text-primary hover:bg-blue-50 rounded-full transition-all">
                <YoutubeIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-slate-900 text-base">Legal & Support</h3>
            <div className="flex flex-col gap-3 mt-2">
              <button 
                onClick={() => window.dispatchEvent(new Event("open-lead-popup"))}
                className="text-slate-600 hover:text-primary transition-colors text-left"
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p suppressHydrationWarning={true}>© {new Date().getFullYear()} Live Feed Reviews. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
