"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ComparisonCta() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                  <Shield className="mr-1 h-4 w-4" />
                  <span>Ready to Switch?</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Experience the FGuard Difference</h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a personalized demo and see how FGuard WAF compares to your current solution. Our security
                  experts will provide a detailed analysis and migration plan tailored to your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-blue-700">
                    Schedule Comparison Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    View Migration Guide
                  </Button>
                </div>
              </div>
              <div className="flex-shrink-0 w-full md:w-1/3">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border">
                  <h4 className="font-bold mb-4">Migration Benefits</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Free migration assistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">30-day parallel run period</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Rule conversion assistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Dedicated migration engineer</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
