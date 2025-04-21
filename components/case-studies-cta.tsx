"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CaseStudiesCta() {
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
                  <span>Success Stories</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Become Our Next Success Story?</h3>
                <p className="text-muted-foreground mb-6">
                  Join hundreds of organizations that have strengthened their security posture with FGuard WAF. Our
                  security experts are ready to help you implement the perfect security solution for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-blue-700">
                    Schedule a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Case Studies
                  </Button>
                </div>
              </div>
              <div className="flex-shrink-0 w-full md:w-1/3">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border">
                  <h4 className="font-bold mb-4">Industry Success Metrics</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">85% average reduction in security incidents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">99.99% uptime maintained across all customers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">40% reduction in security team workload</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">30% average cost savings vs. previous solutions</span>
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
