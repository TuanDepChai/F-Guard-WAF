"use client"

import { motion } from "framer-motion"
import { Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CaseStudiesHero() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
              <Shield className="mr-1 h-4 w-4" />
              <span>Customer Success Stories</span>
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Real-World Security Success Stories
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Discover how organizations across industries have strengthened their security posture and protected
                their critical applications with FGuard WAF
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="gap-1 bg-gradient-to-r from-primary to-blue-700 hover:from-primary/90 hover:to-blue-700/90"
              >
                Schedule Your Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="grid gap-4 md:gap-8">
                <div className="overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800 aspect-[4/3]">
                  <div className="h-full w-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                    <Shield className="h-12 w-12 text-primary/40" />
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800 aspect-[4/3]">
                  <div className="h-full w-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                    <Shield className="h-12 w-12 text-primary/40" />
                  </div>
                </div>
              </div>
              <div className="grid gap-4 md:gap-8">
                <div className="overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800 aspect-[4/3]">
                  <div className="h-full w-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                    <Shield className="h-12 w-12 text-primary/40" />
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800 aspect-[4/3]">
                  <div className="h-full w-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                    <Shield className="h-12 w-12 text-primary/40" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
