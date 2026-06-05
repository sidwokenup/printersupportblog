// This file serves as the programmatic SEO router for Printer Issues.
// It uses Next.js App Router dynamic segments and ISR to generate pages on-demand and cache them.

import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Share2, ThumbsUp, ThumbsDown, UserCircle2, Calendar, FileText } from 'lucide-react';
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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import fs from 'fs/promises';
import path from 'path';
import { AIEnrichmentLayer } from '@/content-engine/article-generator/AIEnrichmentLayer';

export const revalidate = 86400;

interface PageProps {
  params: Promise<{
    modelSlug: string;
    issueSlug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: `Fix ${resolvedParams.issueSlug.replace(/-/g, ' ')} on ${resolvedParams.modelSlug.replace(/-/g, ' ')}`,
    description: `Step-by-step troubleshooting guide for ${resolvedParams.issueSlug.replace(/-/g, ' ')} on the ${resolvedParams.modelSlug.replace(/-/g, ' ')} printer.`,
  };
}

export async function generateStaticParams() {
  return [];
}

export default async function IssuePage({ params }: PageProps) {
  const resolvedParams = await params;
  const modelName = resolvedParams.modelSlug.replace(/-/g, ' ').toUpperCase();
  const issueName = resolvedParams.issueSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  // 1. Fetch data
  let issueData: Record<string, unknown> | null = null;
  try {
    const dataDir = path.join(process.cwd(), 'src', 'data', 'issues');
    const fileContents = await fs.readFile(path.join(dataDir, 'all_issues.json'), 'utf8');
    const allIssues = JSON.parse(fileContents);
    issueData = allIssues.find((i: Record<string, unknown>) => {
      const s = String(i.slug || '');
      const t = String(i.title || '').toLowerCase();
      return s.includes(resolvedParams.issueSlug) || t.includes(issueName.toLowerCase());
    }) || null;
  } catch (error) {
    console.warn("Could not load issues from data directory");
  }

  // Fallback if not found
  if (!issueData) {
    issueData = {
      title: issueName,
      symptoms: `User reports ${issueName.toLowerCase()} when trying to use the printer.`,
      causes: `Could be related to software, hardware, or network configuration.`,
      quickFixes: `1. Restart the printer.\n2. Check connections.\n3. Reinstall drivers.`,
      advancedFixes: `1. Factory reset.\n2. Perform deep cleaning.\n3. Update firmware.`,
      preventiveMeasures: `Keep firmware updated. Use genuine HP supplies.`
    };
  }

  // 2. AI Enrichment
  const enricher = new AIEnrichmentLayer();
  const enrichedData = await enricher.enrichIssueContent(issueData as Record<string, unknown>);

  const quickFixesArray = String(issueData.quickFixes || '').split('\n').filter(Boolean);
  const advancedFixesArray = String(issueData.advancedFixes || '').split('\n').filter(Boolean);

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      
      {/* Premium Hero Banner */}
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
                <BreadcrumbLink href={`/models/${resolvedParams.modelSlug}`}>{modelName}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{issueName}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 text-blue-700 text-sm font-medium mb-6 w-fit border border-blue-200/50">
              <FileText className="h-4 w-4" />
              <span>Troubleshooting Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
              How to Fix {issueName} on {modelName}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mt-8">
              <div className="flex items-center gap-2">
                <UserCircle2 className="h-5 w-5 text-slate-400" />
                <span className="font-medium text-slate-700">Live Free Reviews Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-slate-400" />
                <span suppressHydrationWarning>Updated on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
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
          
          {/* Main Article Content */}
          <article className="flex-1 max-w-4xl w-full bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-10 lg:p-12">
            
            {/* Quick Fixes */}
            <QuickFixBox title="TL;DR - Quick Fixes">
              <ul className="space-y-3 m-0 pl-1">
                {quickFixesArray.map((fix: string, idx: number) => (
                  <li key={idx} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </span>
                    <span className="mt-0.5">{fix.replace(/^\d+\.\s*/, '')}</span>
                  </li>
                ))}
              </ul>
            </QuickFixBox>

            <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary">
              <h2 id="overview" className="text-3xl mt-12 mb-6">Problem Overview</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                The <strong>{issueName}</strong> error is a common problem reported by users of the {modelName}. 
                {String(enrichedData.expandedExplanations || issueData.symptoms)}
              </p>

              <WarningBox>
                Do not force any mechanical parts (like paper trays or ink carriages) while troubleshooting, as this may void your warranty.
              </WarningBox>

              <h2 id="causes" className="text-3xl mt-12 mb-6">Possible Causes</h2>
              <p className="text-slate-600 leading-relaxed text-lg">{String(issueData.causes)}</p>

              <h2 id="advanced-solution" className="text-3xl mt-16 mb-8">Step-by-Step Advanced Solution</h2>
              
              <div className="not-prose space-y-2 mt-8">
                {advancedFixesArray.map((fix: string, idx: number) => (
                  <StepCard key={idx} stepNumber={idx + 1}>
                    <p className="text-lg leading-relaxed">{fix.replace(/^\d+\.\s*/, '')}</p>
                  </StepCard>
                ))}
              </div>
              
              <div className="mt-12">
                <TipBox>
                  <strong className="block mb-1">Preventive Maintenance:</strong>
                  {String(enrichedData.preventiveMaintenance || issueData.preventiveMeasures)}
                </TipBox>
              </div>

              <h2 id="faqs" className="text-3xl mt-16 mb-8">Frequently Asked Questions</h2>
            </div>
            
            {/* FAQs Accordion */}
            <div className="w-full mt-8">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border border-slate-200 rounded-xl px-4 bg-slate-50/50 data-[state=open]:bg-white transition-colors">
                  <AccordionTrigger className="hover:no-underline text-lg font-semibold py-4">Why does this issue keep happening?</AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed pb-4">
                    {String(issueData.causes)} This can also be caused by network instability or a corrupted driver installation on your PC.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border border-slate-200 rounded-xl px-4 bg-slate-50/50 data-[state=open]:bg-white transition-colors">
                  <AccordionTrigger className="hover:no-underline text-lg font-semibold py-4">Will a factory reset help?</AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed pb-4">
                    Yes, a factory reset clears out incorrect configurations, but you will need to reconnect to WiFi afterward.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Feedback Widget */}
            <div className="mt-16 p-8 bg-slate-50 border border-slate-200 rounded-2xl text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Did this guide resolve your issue?</h3>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="lg" className="gap-2 rounded-xl bg-white hover:bg-green-50 hover:text-green-700 hover:border-green-200">
                  <ThumbsUp className="h-5 w-5" /> Yes, it worked
                </Button>
                <Button variant="outline" size="lg" className="gap-2 rounded-xl bg-white hover:bg-rose-50 hover:text-rose-700 hover:border-rose-200">
                  <ThumbsDown className="h-5 w-5" /> No, I need more help
                </Button>
              </div>
            </div>
          </article>

          {/* Sticky Sidebar */}
          <aside className="w-full lg:w-80 space-y-8 lg:sticky lg:top-24">
            
            {/* Table of Contents */}
            <Card className="border-slate-200 shadow-sm rounded-2xl overflow-hidden bg-white hidden lg:block">
              <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                <CardTitle className="text-lg">On this page</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <nav className="flex flex-col gap-3 text-sm font-medium">
                  <a href="#overview" className="text-slate-600 hover:text-primary transition-colors">Problem Overview</a>
                  <a href="#causes" className="text-slate-600 hover:text-primary transition-colors">Possible Causes</a>
                  <a href="#advanced-solution" className="text-slate-600 hover:text-primary transition-colors">Advanced Solution</a>
                  <a href="#faqs" className="text-slate-600 hover:text-primary transition-colors">FAQs</a>
                </nav>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm rounded-2xl overflow-hidden bg-white">
              <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                <CardTitle className="text-lg">Related Issues</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-100">
                  <Link href={`/models/${resolvedParams.modelSlug}/printer-offline`} className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between group">
                    <span className="text-sm font-medium text-slate-700 group-hover:text-primary">Printer Offline</span>
                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-primary" />
                  </Link>
                  <Link href={`/models/${resolvedParams.modelSlug}/driver-unavailable`} className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between group">
                    <span className="text-sm font-medium text-slate-700 group-hover:text-primary">Driver Unavailable</span>
                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-primary" />
                  </Link>
                  <Link href={`/models/${resolvedParams.modelSlug}/scanner-error`} className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between group">
                    <span className="text-sm font-medium text-slate-700 group-hover:text-primary">Scanner Error</span>
                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-primary" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-sm rounded-2xl overflow-hidden bg-blue-50/50">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg text-slate-900 mb-2">Need Live Help?</h3>
                <p className="text-sm text-slate-600 mb-6">
                  If these steps didn&apos;t resolve your issue, contact official HP Support or a certified technician.
                </p>
                <Button className="w-full rounded-xl bg-primary hover:bg-blue-700 shadow-sm">Contact Support</Button>
              </CardContent>
            </Card>
          </aside>

        </div>
      </div>
    </div>
  )
}
