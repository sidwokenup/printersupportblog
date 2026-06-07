import { solutions } from "@/data/solutions";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
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
          alt: "Live Free Reviews Logo",
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

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-8 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
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

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            {solution.content.title}
          </h1>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
        </header>

        {/* Article Content */}
        <article className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-10 lg:p-12 prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-700">
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
    </div>
  );
}
