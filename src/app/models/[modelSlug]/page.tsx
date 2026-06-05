import Link from "next/link"
import { Printer, Download, Wrench, AlertTriangle, Info, BookOpen, ChevronRight, CheckCircle2, Search as SearchIcon, ShieldCheck, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface PageProps {
  params: Promise<{
    modelSlug: string;
  }>;
}

export default async function ModelPage({ params }: PageProps) {
  const resolvedParams = await params;
  const modelName = resolvedParams.modelSlug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Premium Hero Section */}
      <div className="bg-white border-b border-slate-200 pt-10 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/models">Models</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{modelName}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100/80 text-green-700 text-sm font-medium mb-6 w-fit border border-green-200/50">
                <CheckCircle2 className="h-4 w-4" />
                <span>Fully Supported</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                {modelName} Support
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 max-w-xl">
                Find everything you need for your printer: troubleshooting guides, official drivers, firmware updates, and manuals.
              </p>
              
              <div className="bg-white border border-slate-200 shadow-sm p-2 rounded-2xl flex items-center gap-3 max-w-xl focus-within:border-primary/50 focus-within:ring-4 focus-within:ring-primary/10 transition-all">
                <div className="pl-3">
                  <SearchIcon className="h-5 w-5 text-slate-400" />
                </div>
                <input 
                  type="text" 
                  placeholder={`Search issues or error codes for ${modelName}...`} 
                  className="bg-transparent border-none outline-none flex-1 py-2 text-slate-900 placeholder:text-slate-400"
                />
                <button className="bg-primary text-white px-5 py-2.5 rounded-xl font-medium hover:bg-blue-700 transition-colors">
                  Search
                </button>
              </div>
            </div>

            {/* Visual */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-full max-w-[320px] aspect-square bg-gradient-to-tr from-slate-100 to-white rounded-3xl border border-slate-200 shadow-xl flex items-center justify-center">
                <Printer className="h-24 w-24 text-slate-300" />
                <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div className="text-sm font-bold text-slate-900">Verified Guides</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-16">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { title: "Drivers & Software", desc: "Download the latest updates", icon: Download, color: "text-emerald-600", bg: "bg-emerald-100", link: `/models/${resolvedParams.modelSlug}/drivers` },
            { title: "Troubleshooting", desc: "Fix common printer problems", icon: Wrench, color: "text-blue-600", bg: "bg-blue-100", link: "#troubleshooting" },
            { title: "Setup & Manuals", desc: "Installation guides & docs", icon: BookOpen, color: "text-amber-600", bg: "bg-amber-100", link: "#manuals" },
            { title: "Firmware", desc: "Security and system updates", icon: Zap, color: "text-violet-600", bg: "bg-violet-100", link: `/models/${resolvedParams.modelSlug}/firmware` },
          ].map((action, i) => (
            <Link key={i} href={action.link}>
              <Card className="h-full border-slate-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300 rounded-2xl bg-white group cursor-pointer">
                <CardHeader className="p-6">
                  <div className={`w-12 h-12 ${action.bg} ${action.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <action.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg mb-1">{action.title}</CardTitle>
                  <CardDescription className="text-slate-500">{action.desc}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            <section id="troubleshooting">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-blue-100 p-2.5 rounded-xl text-blue-600">
                  <Wrench className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Common Problems</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {['Printer is offline', 'Not printing black ink', 'Paper jam error', 'WiFi connection failed', 'Slow printing speed', 'Scanner not working'].map((issue, i) => {
                  const issueSlug = issue.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                  return (
                    <Link key={i} href={`/models/${resolvedParams.modelSlug}/${issueSlug}`}>
                      <div className="p-5 border border-slate-200 rounded-2xl hover:border-primary/40 hover:shadow-md transition-all flex justify-between items-center bg-white group">
                        <span className="font-semibold text-slate-700 group-hover:text-primary transition-colors">{issue}</span>
                        <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="mt-6">
                <Link href={`/troubleshooting?model=${resolvedParams.modelSlug}`} className="text-primary font-medium hover:underline inline-flex items-center">
                  View all troubleshooting guides <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </section>

            <section id="error-codes">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-rose-100 p-2.5 rounded-xl text-rose-600">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Top Error Codes</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {['Error 79', 'Error 59.F0', 'Error 49', 'Scanner Failure', '0xc19a', 'Supply Memory Error'].map((code, i) => {
                  const codeSlug = `hp-error-${code.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`.replace(/-$/, '');
                  return (
                    <Link key={i} href={`/error-codes/${codeSlug}`}>
                      <div className="p-5 border border-slate-200 rounded-2xl hover:border-rose-300 hover:shadow-md hover:bg-rose-50/30 transition-all flex justify-between items-center bg-white group">
                        <span className="font-semibold text-slate-700 group-hover:text-rose-700 transition-colors">{code}</span>
                        <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-rose-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Card className="border-slate-200 shadow-sm rounded-2xl overflow-hidden bg-white">
              <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                <CardTitle className="text-lg">Product Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <span className="text-slate-500">Status</span>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 shadow-none border-none">Active Support</Badge>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <span className="text-slate-500">Category</span>
                  <span className="font-medium text-slate-900">Printer</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <span className="text-slate-500">Series</span>
                  <span className="font-medium text-slate-900">{modelName.split(' ')[1] || 'Unknown'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Warranty</span>
                  <span className="font-medium text-slate-900">Check online</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm rounded-2xl overflow-hidden bg-white">
              <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                <CardTitle className="text-lg">Related Models</CardTitle>
              </CardHeader>
              <CardContent className="p-6 grid gap-4">
                <Link href={`/models/hp-deskjet-2755e`} className="text-sm font-medium text-slate-600 hover:text-primary flex items-center justify-between group">
                  HP DeskJet 2755e <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" />
                </Link>
                <Link href={`/models/hp-deskjet-2720`} className="text-sm font-medium text-slate-600 hover:text-primary flex items-center justify-between group">
                  HP DeskJet 2720 <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" />
                </Link>
                <Link href={`/models/hp-deskjet-2732`} className="text-sm font-medium text-slate-600 hover:text-primary flex items-center justify-between group">
                  HP DeskJet 2732 <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
