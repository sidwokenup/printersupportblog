// Programmatic SEO Router for Drivers

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Download, Monitor, CheckCircle2, ChevronRight, Apple } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const revalidate = 86400; // ISR cache for 24 hours

interface PageProps {
  params: Promise<{
    modelSlug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const modelName = resolvedParams.modelSlug.replace(/-/g, ' ').toUpperCase()
  return {
    title: `${modelName} Drivers and Software Download`,
    description: `Download the latest drivers, software, and utilities for the ${modelName} printer.`,
  };
}

export async function generateStaticParams() {
  return [];
}

export default async function DriverPage({ params }: PageProps) {
  const resolvedParams = await params;
  const modelName = resolvedParams.modelSlug.replace(/-/g, ' ').toUpperCase()

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <Breadcrumb className="mb-6">
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
            <BreadcrumbPage>Drivers & Software</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {modelName} Drivers and Software
            </h1>
            <p className="text-lg text-muted-foreground">
              Download the latest official drivers, firmware, and software for your HP printer to keep it running smoothly.
            </p>
          </div>

          <Tabs defaultValue="windows" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="windows" className="flex items-center gap-2">
                <Monitor className="h-4 w-4" /> Windows
              </TabsTrigger>
              <TabsTrigger value="mac" className="flex items-center gap-2">
                <Apple className="h-4 w-4" /> macOS
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="windows" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>HP Universal Print Driver for Windows</CardTitle>
                      <CardDescription className="mt-1">Version: 7.1.0.25570 | Released: Oct 2023</CardDescription>
                    </div>
                    <Badge variant="secondary">Recommended</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">The Universal Print Driver provides a single driver to give you access to a wide range of HP print devices without downloading separate drivers.</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-1 text-green-500" /> Windows 11</span>
                    <span className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-1 text-green-500" /> Windows 10</span>
                  </div>
                  <Button className="w-full sm:w-auto flex items-center gap-2">
                    <Download className="h-4 w-4" /> Download Driver (18.2 MB)
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>HP Easy Start Printer Setup Software</CardTitle>
                  <CardDescription>Version: 15.0.0.0 | Released: Sep 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-6">HP Easy Start provides a guided setup and driver installation process for your printer.</p>
                  <Button variant="outline" className="w-full sm:w-auto flex items-center gap-2">
                    <Download className="h-4 w-4" /> Download Software (9.5 MB)
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="mac" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>HP Easy Start for macOS</CardTitle>
                  <CardDescription>Version: 2.14.0.0 | Released: Aug 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">The easiest way to set up your HP printer on a Mac. This software will automatically find and install the correct drivers.</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-1 text-green-500" /> macOS 14 Sonoma</span>
                    <span className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-1 text-green-500" /> macOS 13 Ventura</span>
                  </div>
                  <Button className="w-full sm:w-auto flex items-center gap-2">
                    <Download className="h-4 w-4" /> Download Software (10.1 MB)
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold">Installation Steps</h2>
            <ol>
              <li>Download the driver file from the links above.</li>
              <li>Locate the downloaded file in your <strong>Downloads</strong> folder.</li>
              <li>Double-click the file to launch the installer.</li>
              <li>Follow the on-screen instructions to complete the setup.</li>
              <li>Connect your printer via USB or WiFi when prompted by the software.</li>
            </ol>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Driver Troubleshooting</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              <Link href={`/models/${resolvedParams.modelSlug}/driver-unavailable`} className="text-sm hover:text-primary hover:underline flex items-center justify-between">
                &quot;Driver is unavailable&quot; error <ChevronRight className="h-4 w-4" />
              </Link>
              <Link href={`/models/${resolvedParams.modelSlug}/installation-failed`} className="text-sm hover:text-primary hover:underline flex items-center justify-between">
                Installation failed <ChevronRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  )
}

