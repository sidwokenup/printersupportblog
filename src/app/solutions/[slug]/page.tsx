import { solutions } from "@/data/solutions";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Home, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SidebarContactButton } from "@/components/lead/SidebarContactButton";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  
  if (!solution) {
    return {
      title: "Solution Not Found",
    };
  }

  return {
    title: solution.title,
    description: solution.metaDescription,
    openGraph: {
      title: solution.title,
      description: solution.metaDescription,
      images: [
        {
          url: "/logo.png",
          width: 800,
          height: 600,
          alt: "Live Feed Reviews Logo",
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: solution.title,
      description: solution.metaDescription,
      images: ["/logo.png"],
    },
  };
}

export async function generateStaticParams() {
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

const getImagesForSlug = (slug: string) => {
  const images = [];
  if (slug === 'printer-offline') images.push('/printeroffilne.jpg');
  if (slug === 'printer-paper-jam') images.push('/paperjam-1.jpg');
  if (slug === 'printer-setup-issue') images.push('/printersetup.jpg');
  if (slug === 'printer-driver') images.push('/download.jpg');
  
  // Fill the rest with general high-quality printer images
  const fallbacks = ['/printer-1.jpg', '/printer-2.jpg', '/printer.jpg', '/images.jpg'];
  
  for (const img of fallbacks) {
    if (!images.includes(img)) {
      images.push(img);
    }
  }
  
  return images;
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) {
    notFound();
  }

  const images = getImagesForSlug(slug);
  const featuredImage = images[0];
  const sidebarImages = images.slice(1, 3);

  return (
    <div className="min-h-screen bg-slate-50 pt-8 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-blue-600 transition-colors flex items-center gap-1">
            <Home className="h-4 w-4" />
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-slate-900 font-medium">Solutions</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-slate-900 font-medium truncate">{solution.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Content Column */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Article Header */}
            <header>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                {solution.content.title}
              </h1>
              <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-8"></div>
              
              {/* Featured Image */}
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-md border border-slate-200">
                <Image 
                  src={featuredImage} 
                  alt={solution.title} 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </header>

            {/* Article Content */}
            <article className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-10 prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-700">
              <div className="space-y-12">
                {solution.content.sections.map((section, index) => (
                  <section key={index} className="scroll-mt-24">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">{section.heading}</h2>
                    
                    {section.body && (
                      <p className="text-slate-600 text-lg leading-relaxed mb-4">
                        {section.body}
                      </p>
                    )}
                    
                    {section.list && section.list.length > 0 && (
                      <ul className="list-disc pl-6 space-y-3 text-slate-600 text-lg marker:text-blue-500">
                        {section.list.map((item, i) => (
                          <li key={i} className="pl-2">{item}</li>
                        ))}
                      </ul>
                    )}
                    
                    {/* Inject an image inside the content occasionally to make it feel rich */}
                    {index === 1 && sidebarImages[1] && (
                      <div className="my-8 relative w-full aspect-video rounded-xl overflow-hidden shadow-sm border border-slate-100 hidden md:block">
                        <Image 
                          src={sidebarImages[1]} 
                          alt="Troubleshooting step" 
                          fill 
                          className="object-cover"
                        />
                      </div>
                    )}

                    {section.conclusion && (
                      <p className="text-slate-600 text-lg leading-relaxed mt-4 italic border-l-4 border-blue-200 pl-4 py-1">
                        {section.conclusion}
                      </p>
                    )}
                  </section>
                ))}
              </div>

              <hr className="my-12 border-slate-200" />

              <div className="bg-blue-50 rounded-xl p-6 md:p-8 border border-blue-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3 mt-0">Summary</h3>
                <p className="text-slate-700 text-lg leading-relaxed mb-0">
                  {solution.content.conclusion}
                </p>
              </div>
            </article>
          </div>

          {/* Right Sidebar Column */}
          <aside className="lg:col-span-4 flex flex-col gap-8 sticky top-24">
            
            {/* Need Help Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />
              <ShieldCheck className="h-10 w-10 text-blue-200 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Still facing issues?</h3>
              <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                Our certified printer technicians can resolve complex software and hardware issues remotely within minutes.
              </p>
              <SidebarContactButton />
            </div>

            {/* Sidebar Images to make it look fulfilled */}
            {sidebarImages[0] && (
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-sm border border-slate-200 hidden lg:block group">
                <Image 
                  src={sidebarImages[0]} 
                  alt="Printer maintenance" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span>Verified Solutions</span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Quick Links or Tags */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hidden lg:block">
              <h3 className="font-bold text-slate-900 mb-4">Popular Topics</h3>
              <div className="flex flex-wrap gap-2">
                <Link href="/solutions/printer-offline" className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-sm text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-colors">Offline Fixes</Link>
                <Link href="/solutions/printer-paper-jam" className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-sm text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-colors">Paper Jam</Link>
                <Link href="/solutions/printer-driver" className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-sm text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-colors">Driver Updates</Link>
                <Link href="/solutions/printer-not-printing" className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-sm text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-colors">Blank Pages</Link>
              </div>
            </div>

          </aside>
        </div>

      </div>
    </div>
  );
}
