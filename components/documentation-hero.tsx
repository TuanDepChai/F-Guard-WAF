"use client"

import { motion } from "framer-motion"
import { Shield, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function DocumentationHero() {
  return (
    <section className="py-12 border-b">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
              <Shield className="mr-1 h-4 w-4" />
              <span>Technical Documentation</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">FGuard WAF Documentation</h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto">
              Comprehensive guides, API references, and resources to help you implement and optimize FGuard WAF
            </p>
          </div>
          <div className="w-full max-w-md relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input type="search" placeholder="Search documentation..." className="pl-10 w-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
