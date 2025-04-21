"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DocumentationNav() {
  const [activeSection, setActiveSection] = useState<string>("getting-started")
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    "getting-started": true,
    deployment: false,
    configuration: false,
    "security-rules": false,
    "api-reference": false,
    troubleshooting: false,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const sections = [
    {
      id: "getting-started",
      title: "Getting Started",
      items: [
        { id: "overview", title: "Overview" },
        { id: "quick-start", title: "Quick Start Guide" },
        { id: "architecture", title: "Architecture" },
        { id: "requirements", title: "System Requirements" },
      ],
    },
    {
      id: "deployment",
      title: "Deployment",
      items: [
        { id: "cloud-deployment", title: "Cloud Deployment" },
        { id: "on-premises", title: "On-Premises Deployment" },
        { id: "hybrid", title: "Hybrid Deployment" },
        { id: "multi-cloud", title: "Multi-Cloud Deployment" },
      ],
    },
    {
      id: "configuration",
      title: "Configuration",
      items: [
        { id: "basic-config", title: "Basic Configuration" },
        { id: "advanced-config", title: "Advanced Configuration" },
        { id: "ssl-tls", title: "SSL/TLS Settings" },
        { id: "logging", title: "Logging & Monitoring" },
      ],
    },
    {
      id: "security-rules",
      title: "Security Rules",
      items: [
        { id: "rule-basics", title: "Rule Basics" },
        { id: "custom-rules", title: "Custom Rules" },
        { id: "rule-groups", title: "Rule Groups" },
        { id: "virtual-patching", title: "Virtual Patching" },
      ],
    },
    {
      id: "api-reference",
      title: "API Reference",
      items: [
        { id: "api-overview", title: "API Overview" },
        { id: "authentication", title: "Authentication" },
        { id: "endpoints", title: "Endpoints" },
        { id: "examples", title: "Examples" },
      ],
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting",
      items: [
        { id: "common-issues", title: "Common Issues" },
        { id: "logs", title: "Log Analysis" },
        { id: "performance", title: "Performance Tuning" },
        { id: "support", title: "Getting Support" },
      ],
    },
  ]

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="sticky top-20">
        <div className="space-y-1">
          {sections.map((section) => (
            <div key={section.id} className="space-y-1">
              <Button variant="ghost" className="w-full justify-between" onClick={() => toggleSection(section.id)}>
                <span>{section.title}</span>
                {expandedSections[section.id] ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </Button>
              {expandedSections[section.id] && (
                <div className="ml-4 border-l pl-4 space-y-1">
                  {section.items.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      size="sm"
                      className={`w-full justify-start ${
                        activeSection === item.id ? "bg-primary/10 text-primary" : ""
                      }`}
                      onClick={() => setActiveSection(item.id)}
                    >
                      {item.title}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
