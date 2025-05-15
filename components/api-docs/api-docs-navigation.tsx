"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function ApiDocsNavigation() {
  const [activeSection, setActiveSection] = useState("introduction")
  const [searchQuery, setSearchQuery] = useState("")

  const sections = [
    { id: "introduction", name: "Introduction" },
    { id: "authentication", name: "Authentication" },
    { id: "rate-limits", name: "Rate Limits" },
    { id: "endpoints", name: "API Endpoints" },
    { id: "rules", name: "Rules Management" },
    { id: "analytics", name: "Analytics" },
    { id: "events", name: "Security Events" },
    { id: "configurations", name: "Configurations" },
    { id: "examples", name: "Code Examples" },
    { id: "sdk", name: "SDK & Libraries" },
  ]

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="sticky top-20">
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            type="search"
            placeholder="Search documentation..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
        <h3 className="font-medium mb-3">Documentation</h3>
        <nav className="space-y-1">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant="ghost"
              className={`w-full justify-start ${activeSection === section.id ? "bg-primary/10 text-primary" : ""}`}
              onClick={() => handleSectionClick(section.id)}
            >
              {section.name}
            </Button>
          ))}
        </nav>
      </div>
    </div>
  )
}
