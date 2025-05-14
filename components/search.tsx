"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { SearchIcon, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useTranslation } from "@/lib/i18n"
import Link from "next/link"

type SearchResult = {
  title: string
  description: string
  url: string
  category: string
}

export function Search() {
  const { t } = useTranslation()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Mock search results - in a real app, this would come from an API
  const mockSearch = (query: string): SearchResult[] => {
    if (!query.trim()) return []

    const allResults: SearchResult[] = [
      {
        title: "DDoS Protection",
        description: "Learn how FGuard protects your website from DDoS attacks",
        url: "/features/ddos-protection",
        category: "Features",
      },
      {
        title: "SQL Injection Protection",
        description: "Protect your database from SQL injection attacks",
        url: "/features/sql-injection",
        category: "Features",
      },
      {
        title: "API Security",
        description: "Secure your APIs with FGuard's advanced protection",
        url: "/features/api-security",
        category: "Features",
      },
      {
        title: "Enterprise Solutions",
        description: "Custom security solutions for enterprise businesses",
        url: "/enterprise",
        category: "Solutions",
      },
      {
        title: "Pricing Plans",
        description: "Find the right security plan for your business",
        url: "/pricing",
        category: "Pricing",
      },
      {
        title: "Documentation",
        description: "Technical documentation and guides",
        url: "/documentation",
        category: "Support",
      },
      {
        title: "Case Studies",
        description: "See how other businesses use FGuard",
        url: "/case-studies",
        category: "Resources",
      },
      {
        title: "Blog",
        description: "Latest security news and updates",
        url: "/blog",
        category: "Resources",
      },
    ]

    return allResults.filter(
      (result) =>
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase()),
    )
  }

  const handleSearch = () => {
    setIsLoading(true)
    // Simulate API call delay
    setTimeout(() => {
      setResults(mockSearch(query))
      setIsLoading(false)
    }, 300)
  }

  useEffect(() => {
    if (query.length > 2) {
      handleSearch()
    } else {
      setResults([])
    }
  }, [query])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false)
    }
  }

  const toggleSearch = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setQuery("")
      setResults([])
    }
  }

  const groupedResults = results.reduce(
    (acc, result) => {
      if (!acc[result.category]) {
        acc[result.category] = []
      }
      acc[result.category].push(result)
      return acc
    },
    {} as Record<string, SearchResult[]>,
  )

  return (
    <div ref={searchRef} className="relative">
      <Button variant="ghost" size="icon" onClick={toggleSearch} aria-label={t("search.open")} className="relative">
        <SearchIcon className="h-5 w-5" />
      </Button>

      {isOpen && <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" aria-hidden="true" />}

      {isOpen && (
        <div className="fixed inset-x-0 top-0 z-50 p-4 pt-16 sm:p-6 sm:pt-20 md:p-8 md:pt-24">
          <div className="mx-auto max-w-2xl rounded-xl bg-white dark:bg-gray-900 shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800">
            <div className="flex items-center border-b px-4 py-3">
              <SearchIcon className="h-5 w-5 text-muted-foreground mr-3" />
              <Input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t("search.placeholder")}
                className="flex-1 border-0 bg-transparent p-0 focus-visible:ring-0 text-base"
              />
              <Button variant="ghost" size="icon" onClick={toggleSearch} className="ml-2">
                <X className="h-5 w-5" />
                <span className="sr-only">{t("search.close")}</span>
              </Button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-4">
              {isLoading ? (
                <div className="flex justify-center py-8">
                  <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-primary" />
                </div>
              ) : results.length > 0 ? (
                <div className="space-y-6">
                  {Object.entries(groupedResults).map(([category, categoryResults]) => (
                    <div key={category}>
                      <h3 className="mb-2 text-sm font-medium text-muted-foreground">{category}</h3>
                      <ul className="space-y-2">
                        {categoryResults.map((result, index) => (
                          <li key={index}>
                            <Link
                              href={result.url}
                              onClick={() => setIsOpen(false)}
                              className="block rounded-lg border p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <h4 className="font-medium">{result.title}</h4>
                                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                              </div>
                              <p className="mt-1 text-sm text-muted-foreground">{result.description}</p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : query.length > 0 ? (
                <div className="py-8 text-center">
                  <p className="text-muted-foreground">{t("search.noResults")}</p>
                </div>
              ) : (
                <div className="py-8 text-center">
                  <p className="text-muted-foreground">{t("search.startTyping")}</p>
                </div>
              )}
            </div>

            {results.length > 0 && (
              <div className="border-t p-4 text-center text-sm text-muted-foreground">
                <p>{t("search.pressEnter")}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
