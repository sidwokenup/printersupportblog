"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { GlobalSearch } from "@/components/search/GlobalSearch"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { 
  Printer, 
  AlertTriangle, 
  Wrench, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  BookOpen, 
  Users, 
  FileText,
  Settings,
  Unplug,
  X,
  Minus,
  Check,
  Monitor,
  MessageSquareWarning,
  WifiOff,
  Hourglass,
  MoreHorizontal
} from "lucide-react"

const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const STAGGER = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 overflow-hidden">
      
      {/* Premium Hero Section */}
      <section className="relative pt-8 pb-16 lg:pt-12 lg:pb-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/50 to-blue-100/50 -z-10" />
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-blue-300/10 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial="initial"
              animate="animate"
              variants={STAGGER}
              className="flex flex-col max-w-2xl"
            >
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 text-blue-700 text-sm font-medium mb-6 w-fit border border-blue-200/50 shadow-sm">
                <ShieldCheck className="h-4 w-4" />
                <span>The Ultimate HP Printer Blog & Support Guide</span>
              </motion.div>
              
              <motion.h1 variants={FADE_UP} className="text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
                Expert solutions for your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                  HP Printer.
                </span>
              </motion.h1>
              
              <motion.p variants={FADE_UP} className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
                Read our in-depth blog posts, troubleshooting guides, and expert advice to resolve your home printer issues instantly.
              </motion.p>
              
              <motion.div variants={FADE_UP} className="w-full max-w-xl relative z-20 mb-6">
                <GlobalSearch size="lg" />
              </motion.div>
              
              <motion.div variants={FADE_UP} className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span className="font-medium">Popular:</span>
                <Link href="/solutions/printer-offline" className="px-3 py-1 rounded-full bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all shadow-sm">Printer Offline</Link>
                <Link href="/solutions/printer-not-printing" className="px-3 py-1 rounded-full bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all shadow-sm">Not Printing</Link>
                <Link href="/solutions/printer-paper-jam" className="px-3 py-1 rounded-full bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all shadow-sm">Paper Jam</Link>
              </motion.div>
            </motion.div>

            {/* Right Visuals */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:flex items-center justify-center w-full"
            >
              <div className="relative w-full max-w-[480px] aspect-square">
                {/* Main Graphic Area with Logo */}
                <div className="absolute inset-0 bg-white rounded-3xl border border-slate-200 shadow-2xl flex items-center justify-center">
                  <div className="absolute inset-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)] flex items-center justify-center bg-primary/5 rounded-2xl">
                    <Image 
                      src="/logo.png" 
                      alt="Live Free Reviews" 
                      width={300}
                      height={300}
                      className="object-contain drop-shadow-xl"
                      priority
                    />
                  </div>
                  
                  {/* Floating Card 1 */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100/50 flex items-center gap-3 z-20"
                  >
                    <div className="bg-green-100 p-2.5 rounded-full text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-slate-900">
                        <AnimatedCounter end={5000} suffix="+" />
                      </div>
                      <div className="text-xs font-medium text-slate-500">Solutions Found</div>
                    </div>
                  </motion.div>

                  {/* Floating Card 2 */}
                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100/50 flex items-center gap-3 z-20"
                  >
                    <div className="bg-blue-100 p-2.5 rounded-full text-blue-600">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-slate-900">
                        <AnimatedCounter end={1000} suffix="+" />
                      </div>
                      <div className="text-xs font-medium text-slate-500">Printer Models</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section id="solutions" className="py-16 relative z-10 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Please Select Your Printer Issues!</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              { title: "Printer Offline", badge: Unplug, slug: "printer-offline" },
              { title: "Printer not printing", badge: X, slug: "printer-not-printing" },
              { title: "Printer Paper Jam", badge: Minus, slug: "printer-paper-jam" },
              { title: "Printer Setup Issue", badge: Check, slug: "printer-setup-issue" },
              { title: "Printer Driver", badge: Settings, slug: "printer-driver" },
              { title: "Printer Issue After Windows Update", badge: Monitor, slug: "printer-issue-after-windows-update" },
              { title: "Printer code Errors and Messages", badge: MessageSquareWarning, slug: "printer-code-errors-and-messages" },
              { title: "Printer Troubleshooting", badge: Wrench, slug: "printer-troubleshooting" },
              { title: "Printer not connecting to WIFI", badge: WifiOff, slug: "printer-not-connecting-to-wifi" },
              { title: "Printer Job Stuck In Queue", badge: Hourglass, slug: "printer-job-stuck-in-queue" },
              { title: "Printer in error state", badge: AlertTriangle, slug: "printer-in-error-state" },
              { title: "Others", badge: MoreHorizontal, slug: "others" },
            ].map((cat, i) => (
              <Link key={i} href={`/solutions/${cat.slug}`} className="group block h-full">
                <div 
                  className="h-full px-4 py-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 flex items-center gap-4 group-hover:bg-blue-50/50"
                >
                  <div className="relative flex-shrink-0 flex items-center justify-center text-blue-600">
                    <Printer className="h-10 w-10 stroke-[1.5]" />
                    <div className="absolute -top-1 -right-2 bg-white rounded-full p-0.5 border border-blue-200">
                      <cat.badge className="h-3 w-3 stroke-[2.5]" />
                    </div>
                  </div>
                  <h3 className="text-[15px] font-medium text-slate-800 leading-snug flex-1 text-center group-hover:text-blue-700 transition-colors">{cat.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">Why users trust our guides</h2>
            <p className="text-lg text-slate-600">We provide clear, accurate, and up-to-date information to help you get back to printing faster.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Easy To Follow", desc: "No confusing jargon. Just simple, step-by-step instructions.", icon: FileText },
              { title: "Expert Solutions", desc: "Fixes sourced from official manuals and experienced technicians.", icon: Wrench },
              { title: "Always Updated", desc: "Our database is constantly refreshed with new models and firmware info.", icon: Zap },
              { title: "Trusted Resource", desc: "Used by thousands of individuals and IT professionals daily.", icon: Users },
            ].map((feature, i) => (
              <div key={i} className="text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center mb-6 text-primary shadow-sm">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -z-10" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { value: 1000, suffix: "+", label: "Printer Models" },
              { value: 5000, suffix: "+", label: "Troubleshooting Guides" },
              { value: 10, suffix: "k+", label: "Error Codes Indexed" },
              { value: 1, suffix: "M+", label: "Searches Served" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-blue-200 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
