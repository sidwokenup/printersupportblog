// Programmatic SEO Router for Error Codes

import { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, Share2, ThumbsUp, ThumbsDown, ChevronRight, Hash, Activity, Clock, ServerCrash } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { QuickFixBox, WarningBox, TipBox, StepCard } from "@/components/article/ArticleEnhancements"

export const revalidate = 86400; // ISR cache for 24 hours

interface PageProps {
  params: Promise<{
    errorCode: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const code = resolvedParams.errorCode.toUpperCase().replace('HP-ERROR-', '');
  return {
    title: `Fix HP Error Code ${code}`,
    description: `Learn what HP Error ${code} means and how to fix it with our step-by-step troubleshooting guide.`,
  };
}

export async function generateStaticParams() {
  return [];
}

export default async function ErrorCodePage({ params }: PageProps) {
  const resolvedParams = await params;
  const code = resolvedParams.errorCode.toUpperCase().replace('HP-ERROR-', '');

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      
      {/* Premium Hero Banner */}
      <div className="bg-white border-b border-slate-200 pt-10 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/error-codes">Error Codes</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Error {code}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-100/80 text-rose-700 text-sm font-medium mb-6 w-fit border border-rose-200/50">
              <Hash className="h-4 w-4" />
              <span>Error Code Resolution</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1] flex items-center gap-4">
              <AlertTriangle className="h-12 w-12 text-rose-500 hidden md:block" />
              HP Error Code {code}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mt-8">
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-rose-400" />
                <span className="font-medium text-slate-700">High Severity</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-slate-400" />
                <span className="font-medium text-slate-700">~15 mins to resolve</span>
              </div>
              <button className="flex items-center gap-2 hover:text-primary transition-colors ml-auto md:ml-0">
                <Share2 className="h-5 w-5" /> Share Guide
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-12">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Main Content */}
          <article className="flex-1 max-w-4xl w-full bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-10 lg:p-12">
            
            <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary mb-12">
              <h2 className="text-3xl mt-0 mb-6">What Error {code} Means</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                The <strong>Error {code}</strong> typically indicates a problem with the printer&apos;s internal firmware or a communication breakdown between the printer and the computer. It is commonly associated with a corrupt print job stuck in the queue or outdated firmware.
              </p>
            </div>

            <QuickFixBox title={`Quick Solutions for Error ${code}`}>
              <ol className="space-y-3 m-0 pl-1">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">1</span>
                  <span className="mt-0.5">Cancel all pending print jobs on your computer.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">2</span>
                  <span className="mt-0.5">Turn off the printer.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">3</span>
                  <span className="mt-0.5">Disconnect the printer from your network or USB.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">4</span>
                  <span className="mt-0.5">Turn the printer back on.</span>
                </li>
              </ol>
            </QuickFixBox>

            <WarningBox>
              If your printer displays this error immediately upon powering on, it may indicate a hardware failure on the formatter board.
            </WarningBox>

            <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight mt-16">
              <h2 className="text-3xl mb-8">Advanced Troubleshooting Steps</h2>
              
              <div className="not-prose space-y-4">
                <StepCard stepNumber={1} title="Clear the Print Spooler">
                  <p className="text-lg leading-relaxed text-slate-600">Sometimes a corrupt file in the print queue causes the printer to crash and display this error code. Clearing the spooler removes the corrupt data.</p>
                </StepCard>
                <StepCard stepNumber={2} title="Update the Firmware">
                  <p className="text-lg leading-relaxed text-slate-600">HP regularly releases firmware updates to fix system crashes like this. Check the official driver page for your model.</p>
                </StepCard>
              </div>

              <div className="mt-10">
                <TipBox>
                  <strong className="block mb-1">Expert Tip:</strong>
                  Always download firmware directly from the official HP website for your specific model to avoid bricking your device.
                </TipBox>
              </div>
            </div>

            {/* Feedback Widget */}
            <div className="mt-16 p-8 bg-slate-50 border border-slate-200 rounded-2xl text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Did this resolve the error?</h3>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="lg" className="gap-2 rounded-xl bg-white hover:bg-green-50 hover:text-green-700 hover:border-green-200">
                  <ThumbsUp className="h-5 w-5" /> Yes
                </Button>
                <Button variant="outline" size="lg" className="gap-2 rounded-xl bg-white hover:bg-rose-50 hover:text-rose-700 hover:border-rose-200">
                  <ThumbsDown className="h-5 w-5" /> No
                </Button>
              </div>
            </div>
          </article>

          {/* Sticky Sidebar */}
          <aside className="w-full lg:w-80 space-y-8 lg:sticky lg:top-24">
            <Card className="border-slate-200 shadow-sm rounded-2xl overflow-hidden bg-white">
              <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                <CardTitle className="text-lg">Affected Models</CardTitle>
              </CardHeader>
              <CardContent className="p-6 grid gap-4">
                <Link href={`/models/hp-laserjet-pro-m404`} className="text-sm font-medium text-slate-600 hover:text-primary flex items-center justify-between group">
                  HP LaserJet Pro M404 <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" />
                </Link>
                <Link href={`/models/hp-color-laserjet-pro-mfp-m479`} className="text-sm font-medium text-slate-600 hover:text-primary flex items-center justify-between group">
                  HP Color LaserJet MFP M479 <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" />
                </Link>
                <Link href={`/models/hp-laserjet-enterprise-m507`} className="text-sm font-medium text-slate-600 hover:text-primary flex items-center justify-between group">
                  HP LaserJet Enterprise M507 <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm rounded-2xl overflow-hidden bg-white">
              <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                <CardTitle className="text-lg">Related Errors</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-100">
                  <Link href={`/error-codes/hp-error-49`} className="p-4 hover:bg-rose-50 transition-colors flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <ServerCrash className="h-4 w-4 text-slate-400 group-hover:text-rose-500 transition-colors" />
                      <span className="text-sm font-medium text-slate-700 group-hover:text-rose-600">Error 49</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-rose-500" />
                  </Link>
                  <Link href={`/error-codes/hp-error-59-f0`} className="p-4 hover:bg-rose-50 transition-colors flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <ServerCrash className="h-4 w-4 text-slate-400 group-hover:text-rose-500 transition-colors" />
                      <span className="text-sm font-medium text-slate-700 group-hover:text-rose-600">Error 59.F0</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-rose-500" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </aside>

        </div>
      </div>
    </div>
  )
}
