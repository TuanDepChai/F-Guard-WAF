"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CaseStudiesFilter() {
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const filters = [
    { id: "all", label: "All Industries" },
    { id: "finance", label: "Financial Services" },
    { id: "healthcare", label: "Healthcare" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "government", label: "Government" },
    { id: "technology", label: "Technology" },
  ]

  return (
    <section className="py-8 border-b">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-wrap gap-2 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.id)}
              className={activeFilter === filter.id ? "bg-primary" : ""}
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
