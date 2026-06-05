"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { GlobalSearch } from "@/components/search/GlobalSearch"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Printer, 
  AlertTriangle, 
  Download, 
  Wrench, 
  ChevronRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  BookOpen, 
  Users, 
  FileText,
  Settings
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
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
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
                <span>The #1 Unofficial HP Support Resource</span>
              </motion.div>
              
              <motion.h1 variants={FADE_UP} className="text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
                Fix your HP printer <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                  in minutes.
                </span>
              </motion.h1>
              
              <motion.p variants={FADE_UP} className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
                Search our massive database of error codes, troubleshooting guides, drivers, and manuals to instantly find the right solution.
              </motion.p>
              
              <motion.div variants={FADE_UP} className="w-full max-w-xl relative z-20 mb-6">
                <GlobalSearch size="lg" />
              </motion.div>
              
              <motion.div variants={FADE_UP} className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span className="font-medium">Popular:</span>
                <Link href="/models/hp-deskjet-2700" className="px-3 py-1 rounded-full bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all shadow-sm">DeskJet 2700</Link>
                <Link href="/error-codes/hp-error-79" className="px-3 py-1 rounded-full bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all shadow-sm">Error 79</Link>
                <Link href="/troubleshooting?q=offline" className="px-3 py-1 rounded-full bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all shadow-sm">Printer Offline</Link>
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
                {/* Main Graphic Area */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-white rounded-3xl border border-white/50 shadow-2xl flex items-center justify-center">
                  <Printer className="h-48 w-48 text-blue-500/20" />
                  
                  {/* Floating Card 1 */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute top-10 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100/50 flex items-center gap-3"
                  >
                    <div className="bg-green-100 p-2.5 rounded-full text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-slate-900">5,000+</div>
                      <div className="text-xs font-medium text-slate-500">Solutions Found</div>
                    </div>
                  </motion.div>

                  {/* Floating Card 2 */}
                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    className="absolute bottom-10 -right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100/50 flex items-center gap-3"
                  >
                    <div className="bg-blue-100 p-2.5 rounded-full text-blue-600">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-slate-900">1,000+</div>
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
      <section className="py-24 relative z-10 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">Everything you need to fix it.</h2>
            <p className="text-lg text-slate-600">Choose a category below to explore step-by-step guides, downloads, and specific model documentation.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Troubleshooting", desc: "Step-by-step guides for common printing problems, jams, and connectivity issues.", icon: Wrench, color: "text-blue-600", bg: "bg-blue-100", href: "/troubleshooting" },
              { title: "Error Codes", desc: "Look up what your printer's blinking lights or alphanumeric screen codes actually mean.", icon: AlertTriangle, color: "text-rose-600", bg: "bg-rose-100", href: "/error-codes" },
              { title: "Printer Models", desc: "Find specific guides, specs, and manuals tailored exactly to your printer model.", icon: Printer, color: "text-indigo-600", bg: "bg-indigo-100", href: "/models" },
              { title: "Drivers & Software", desc: "Download the latest official drivers, setup utilities, and firmware updates.", icon: Download, color: "text-emerald-600", bg: "bg-emerald-100", href: "/drivers" },
              { title: "Setup Guides", desc: "First-time installation, network configuration, and unboxing walk-throughs.", icon: Settings, color: "text-amber-600", bg: "bg-amber-100", href: "/setup-guides" },
              { title: "Firmware Updates", desc: "Keep your printer secure and functioning with the latest system firmware.", icon: Zap, color: "text-violet-600", bg: "bg-violet-100", href: "/firmware" },
            ].map((cat, i) => (
              <Link key={i} href={cat.href} className="group block">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="h-full p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-${cat.bg.replace('bg-', '')}/30 rounded-bl-full -z-10 transition-transform group-hover:scale-150`} />
                  <div className={`w-14 h-14 ${cat.bg} ${cat.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                    <cat.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{cat.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{cat.desc}</p>
                  <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    Explore <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Models Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">Popular Printer Models</h2>
              <p className="text-lg text-slate-600">Quickly jump to the most searched HP printers to find targeted solutions.</p>
            </div>
            <Link href="/models" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:text-primary transition-colors shadow-sm">
              View All Models <ChevronRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 'hp-deskjet-2700', name: 'HP DeskJet 2700', type: 'Inkjet', status: 'Active' },
              { id: 'hp-envy-6055', name: 'HP ENVY 6055e', type: 'Inkjet', status: 'Active' },
              { id: 'hp-officejet-pro-9015', name: 'HP OfficeJet Pro 9015', type: 'Inkjet', status: 'Active' },
              { id: 'hp-laserjet-pro-m404', name: 'HP LaserJet Pro M404', type: 'Laser', status: 'Active' },
            ].map((model) => (
              <Link key={model.id} href={`/models/${model.id}`} className="group">
                <Card className="h-full border-slate-200 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 rounded-2xl overflow-hidden bg-white">
                  <div className="h-40 bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center border-b border-slate-100 group-hover:bg-blue-50/50 transition-colors">
                    <Printer className="h-20 w-20 text-slate-300 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <CardHeader className="p-6">
                    <CardTitle className="text-lg font-bold text-slate-900 mb-1 line-clamp-1">{model.name}</CardTitle>
                    <CardDescription className="text-slate-500 font-medium flex items-center justify-between">
                      <span>{model.type}</span>
                      <span className="text-primary text-sm flex items-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                        View <ChevronRight className="h-3 w-3 ml-1" />
                      </span>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white border-t border-slate-200">
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
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -z-10" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { value: "1,000+", label: "Printer Models" },
              { value: "5,000+", label: "Troubleshooting Guides" },
              { value: "10k+", label: "Error Codes Indexed" },
              { value: "1M+", label: "Searches Served" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
                  {stat.value}
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
