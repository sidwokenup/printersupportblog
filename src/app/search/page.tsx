import { solutions } from "@/data/solutions";
import Link from "next/link";
import { Search } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Search Results | Live Feed Reviews',
  description: 'Search for printer troubleshooting solutions.',
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const resolvedParams = await searchParams;
  const query = resolvedParams.q || '';
  
  const searchResults = query 
    ? solutions.filter(s => 
        s.title.toLowerCase().includes(query.toLowerCase()) || 
        s.metaDescription.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-slate-50 pt-8 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Search className="h-6 w-6 text-blue-600" />
          Search Results for &quot;{query}&quot;
        </h1>

        {searchResults.length > 0 ? (
          <div className="grid gap-4">
            {searchResults.map((solution, i) => (
              <Link key={i} href={`/solutions/${solution.slug}`} className="block">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-xl font-bold text-slate-900 mb-2">{solution.title}</h2>
                  <p className="text-slate-600">{solution.metaDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 rounded-xl border border-slate-200 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">No results found</h2>
            <p className="text-slate-600 mb-6">We couldn&apos;t find any solutions matching your search query.</p>
            <Link href="/#solutions" className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
              Browse All Solutions
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
