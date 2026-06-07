"use client"

import * as React from "react"
import { Search, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function GlobalSearch({ size = "default" }: { size?: "default" | "lg" }) {
  const [query, setQuery] = React.useState("")
  const [isSearching, setIsSearching] = React.useState(false)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      setIsSearching(true)
      router.push(`/search?q=${encodeURIComponent(query)}`)
      // Reset loading state after a small delay to allow navigation
      setTimeout(() => setIsSearching(false), 500)
    }
  }

  return (
    <form onSubmit={handleSearch} className="relative w-full flex items-center max-w-2xl mx-auto">
      <Search className={`absolute left-3 text-muted-foreground ${size === "lg" ? "h-6 w-6" : "h-4 w-4"}`} />
      <Input
        type="search"
        placeholder="Search for errors or issues..."
        className={`w-full pl-10 pr-24 bg-background shadow-sm ${
          size === "lg" ? "h-14 text-lg rounded-full" : "h-10 rounded-md"
        }`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button 
        type="submit" 
        size={size === "lg" ? "lg" : "sm"} 
        className={`absolute right-1 ${size === "lg" ? "rounded-full px-6" : "rounded"}`}
        disabled={isSearching || !query.trim()}
      >
        {isSearching ? <Loader2 className="h-4 w-4 animate-spin" /> : "Search"}
      </Button>
    </form>
  )
}
