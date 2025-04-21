"use client"

import { motion } from "framer-motion"
import { Shield, Check, AlertTriangle } from "lucide-react"

export default function CompetitorFeatures() {
  const competitorComparisons = [
    {
      name: "Barracuda WAF",
      fguardAdvantages: [
        "Lower total cost of ownership with subscription model vs. upfront appliance costs",
        "Superior machine learning-based threat detection",
        "More flexible deployment options across cloud and on-premises",
        "Better performance with lower latency",
        "Included virtual patching without additional fees",
      ],
      barracudaAdvantages: [
        "Longer market presence",
        "More hardware appliance options",
        "Slightly more granular rule customization",
      ],
    },
    {
      name: "Cloudflare WAF",
      fguardAdvantages: [
        "On-premises deployment option not available with Cloudflare",
        "More customizable security policies",
        "Dedicated security engineering team included",
        "No traffic-based pricing surprises",
        "Better support for legacy applications",
      ],
      cloudflareAdvantages: ["Larger global network", "Integrated CDN capabilities", "More consumer-focused features"],
    },
    {
      name: "AWS WAF",
      fguardAdvantages: [
        "Platform-agnostic deployment (not limited to AWS)",
        "More comprehensive protection out-of-the-box",
        "Simpler pricing model without per-rule charges",
        "Included DDoS protection without additional services",
        "Superior technical support without premium support plans",
      ],
      awsAdvantages: [
        "Tighter integration with AWS services",
        "AWS-specific optimizations",
        "Part of broader AWS ecosystem",
      ],
    },
  ]

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
              <Shield className="mr-1 h-4 w-4" />
              <span>Detailed Comparison</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">FGuard vs. The Competition</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              See how FGuard WAF stacks up against leading competitors in the enterprise WAF market
            </p>
          </div>
        </motion.div>

        <div className="space-y-16">
          {competitorComparisons.map((competitor, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-6 border-b">
                <h3 className="text-2xl font-bold">FGuard WAF vs. {competitor.name}</h3>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="text-lg font-medium">FGuard Advantages</h4>
                  </div>
                  <ul className="space-y-3">
                    {competitor.fguardAdvantages.map((advantage, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="rounded-full bg-slate-200 dark:bg-slate-700 p-2">
                      <AlertTriangle className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                    </div>
                    <h4 className="text-lg font-medium">{competitor.name} Advantages</h4>
                  </div>
                  <ul className="space-y-3">
                    {competitor.barracudaAdvantages.map((advantage, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-slate-500 mt-0.5 flex-shrink-0" />
                        <span>{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
