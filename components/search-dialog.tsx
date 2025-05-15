"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X, FileText, BookOpen, Shield, Server, BarChart, Clock, Trash } from "lucide-react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n/language-context"

type SearchResult = {
  id: string
  title: string
  description: string
  url: string
  category: "documentation" | "blog" | "feature" | "api" | "product"
  icon: React.ReactNode
}

const mockSearchResults: SearchResult[] = [
  {
    id: "doc-1",
    title: "Getting Started with FGuard",
    description: "Learn how to set up and configure FGuard WAF for your applications",
    url: "/documentation",
    category: "documentation",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    id: "doc-2",
    title: "API Documentation",
    description: "Comprehensive API reference for FGuard WAF",
    url: "/api-docs",
    category: "documentation",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    id: "blog-1",
    title: "Understanding DDoS Attacks",
    description: "A comprehensive guide to DDoS attacks and how to prevent them",
    url: "/blog/understanding-ddos-attacks",
    category: "blog",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    id: "feature-1",
    title: "OWASP Top 10 Protection",
    description: "How FGuard protects against OWASP Top 10 vulnerabilities",
    url: "/#features",
    category: "feature",
    icon: <Shield className="h-4 w-4" />,
  },
  {
    id: "api-1",
    title: "Rules API",
    description: "Create and manage security rules via API",
    url: "/api-docs#rules",
    category: "api",
    icon: <Server className="h-4 w-4" />,
  },
  {
    id: "product-1",
    title: "Enterprise Plan",
    description: "Enterprise-grade WAF solution for large organizations",
    url: "/#pricing",
    category: "product",
    icon: <BarChart className="h-4 w-4" />,
  },
]

const categoryColors = {
  documentation: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  blog: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  feature: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  api: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
  product: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
}

const MAX_RECENT_SEARCHES = 5

export function SearchDialog() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [showRecent, setShowRecent] = useState(false)
  const router = useRouter()
  const { t } = useLanguage()

  // Load recent searches from localStorage
  useEffect(() => {
    const savedSearches = localStorage.getItem("recent-searches")
    if (savedSearches) {
      try {
        const parsed = JSON.parse(savedSearches)
        if (Array.isArray(parsed)) {
          setRecentSearches(parsed)
        }
      } catch (error) {
        console.error("Failed to parse recent searches:", error)
      }
    }
  }, [])

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open search dialog with Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Handle search query
  useEffect(() => {
    if (query.trim() === "") {
      setResults([])
      setShowRecent(true)
      return
    }

    setShowRecent(false)

    // In a real app, this would be an API call
    const filteredResults = mockSearchResults.filter(
      (result) =>
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase()),
    )
    setResults(filteredResults)
    setSelectedIndex(0)
  }, [query])

  // Handle keyboard navigation in results
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault()
          if (showRecent) {
            setSelectedIndex((prev) => (prev < recentSearches.length - 1 ? prev + 1 : prev))
          } else {
            setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev))
          }
          break
        case "ArrowUp":
          e.preventDefault()
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev))
          break
        case "Enter":
          e.preventDefault()
          if (showRecent && recentSearches[selectedIndex]) {
            setQuery(recentSearches[selectedIndex])
          } else if (results[selectedIndex]) {
            handleSelect(results[selectedIndex])
          }
          break
        case "Escape":
          e.preventDefault()
          setOpen(false)
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [open, results, selectedIndex, showRecent, recentSearches])

  const handleSelect = (result: SearchResult) => {
    // Add to recent searches
    const newRecentSearches = [
      query,
      ...recentSearches.filter((search) => search !== query).slice(0, MAX_RECENT_SEARCHES - 1),
    ]
    setRecentSearches(newRecentSearches)
    localStorage.setItem("recent-searches", JSON.stringify(newRecentSearches))

    router.push(result.url)
    setOpen(false)
    setQuery("")
  }

  const handleRecentSearchClick = (search: string) => {
    setQuery(search)
  }

  const clearRecentSearches = () => {
    setRecentSearches([])
    localStorage.removeItem("recent-searches")
  }

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
    if (newOpen) {
      setQuery("")
      setShowRecent(true)
    }
  }

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4 xl:mr-2" aria-hidden="true" />
        <span className="hidden xl:inline-flex">{t("common.search")}</span>
        <span className="sr-only">{t("common.search")}</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-[550px] p-0">
          <DialogHeader className="px-4 pt-4 pb-0">
            <DialogTitle className="sr-only">{t("common.search")}</DialogTitle>
            <div className="flex items-center gap-2 border-b pb-4">
              <Search className="h-5 w-5 text-muted-foreground" />
              <Input
                className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 border-0"
                placeholder={t("common.searchPlaceholder")}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                onClick={() => setQuery("")}
                disabled={query.length === 0}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Clear search</span>
              </Button>
            </div>
          </DialogHeader>
          <div className="max-h-[50vh] overflow-y-auto px-4 py-4">
            <AnimatePresence mode="wait">
              {showRecent && recentSearches.length > 0 ? (
                <motion.div
                  key="recent"
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Recent Searches</h3>
                    <Button variant="ghost" size="sm" onClick={clearRecentSearches} className="h-8 px-2">
                      <Trash className="h-4 w-4 mr-1" />
                      Clear
                    </Button>
                  </div>
                  <div className="space-y-1">
                    {recentSearches.map((search, index) => (
                      <motion.div
                        key={search}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={cn(
                          "flex cursor-pointer select-none items-center rounded-md px-3 py-2",
                          selectedIndex === index ? "bg-accent" : "hover:bg-accent",
                        )}
                        onClick={() => handleRecentSearchClick(search)}
                        onMouseEnter={() => setSelectedIndex(index)}
                      >
                        <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-sm">{search}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : results.length > 0 ? (
                <motion.div
                  key="results"
                  className="space-y-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {results.map((result, index) => (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={cn(
                        "flex cursor-pointer select-none items-center rounded-md px-3 py-2",
                        selectedIndex === index ? "bg-accent" : "hover:bg-accent",
                      )}
                      onClick={() => handleSelect(result)}
                      onMouseEnter={() => setSelectedIndex(index)}
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border">
                        {result.icon}
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium leading-none">{result.title}</p>
                          <span
                            className={cn(
                              "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold",
                              categoryColors[result.category],
                            )}
                          >
                            {result.category}
                          </span>
                        </div>
                        <p className="line-clamp-1 text-sm leading-snug text-muted-foreground">{result.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : query.length > 0 ? (
                <motion.div
                  key="no-results"
                  className="flex flex-col items-center justify-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="rounded-full bg-muted p-3">
                    <Search className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <p className="mt-4 text-center text-lg font-medium">No results found</p>
                  <p className="text-center text-sm text-muted-foreground">
                    We couldn't find anything with that term. Try searching for something else.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  className="flex flex-col items-center justify-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="rounded-full bg-muted p-3">
                    <Search className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <p className="mt-4 text-center text-lg font-medium">Search for anything</p>
                  <p className="text-center text-sm text-muted-foreground">
                    Search for documentation, features, API references, and more.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex items-center justify-between border-t p-4 text-xs text-muted-foreground">
            <div className="flex gap-2">
              <span className="flex items-center gap-1">
                <kbd className="rounded border bg-muted px-1 font-mono">↑</kbd>
                <kbd className="rounded border bg-muted px-1 font-mono">↓</kbd> to navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="rounded border bg-muted px-1 font-mono">↵</kbd> to select
              </span>
            </div>
            <span className="flex items-center gap-1">
              <kbd className="rounded border bg-muted px-1 font-mono">ESC</kbd> to close
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
