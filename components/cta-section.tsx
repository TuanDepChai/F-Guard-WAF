"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CtaSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-700 opacity-90"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="rounded-full bg-white/10 p-3 text-white">
            <Shield className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Secure Your Enterprise Applications
            </h2>
            <p className="max-w-[600px] text-white/80 md:text-xl/relaxed mx-auto">
              Schedule a personalized security assessment with our WAF experts and receive a customized protection
              strategy for your organization
            </p>
          </div>
          <div className="w-full max-w-md space-y-2">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <Input
                type="email"
                placeholder="Your business email"
                className="max-w-lg flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white"
              />
              <Button className="gap-1 bg-white text-primary hover:bg-white/90">
                Request Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-white/80">
              Enterprise-grade security solutions for organizations of all sizes. Our security experts will contact you
              within 24 hours.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
