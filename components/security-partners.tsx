"use client"

import { motion } from "framer-motion"
import { Shield } from "lucide-react"

export default function SecurityPartners() {
  const partners = [
    { name: "Microsoft" },
    { name: "AWS" },
    { name: "Google Cloud" },
    { name: "IBM" },
    { name: "Cisco" },
    { name: "Splunk" },
  ]

  return (
    <section className="py-20 bg-white dark:bg-slate-950">
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
              <span>Strategic Partnerships</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trusted by Industry Leaders</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              We partner with leading technology providers to deliver comprehensive security solutions
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-16 w-full flex items-center justify-center">
                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 w-full h-full flex items-center justify-center">
                  <span className="text-lg font-medium text-slate-600 dark:text-slate-300">{partner.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
