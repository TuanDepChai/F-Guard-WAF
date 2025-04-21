"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CtaSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-700 animate-gradient-xy">
        <div className="absolute inset-0 bg-grid-white/5"></div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-dot-white/10"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="rounded-full bg-white/10 p-3 text-white relative"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <Shield className="h-6 w-6" />
            <motion.div
              className="absolute -top-1 -right-1"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="h-4 w-4 text-yellow-300" />
            </motion.div>
          </motion.div>
          <div className="space-y-2">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white glow-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Secure Your Enterprise Applications
            </motion.h2>
            <motion.p
              className="max-w-[600px] text-white/80 md:text-xl/relaxed mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Schedule a personalized security assessment with our WAF experts and receive a customized protection
              strategy for your organization
            </motion.p>
          </div>
          <motion.div
            className="w-full max-w-md space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <Input
                type="email"
                placeholder="Your business email"
                className="max-w-lg flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white"
              />
              <Button
                className="gap-1 bg-white text-primary hover:bg-white/90 hover:shadow-lg hover:shadow-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                as={motion.button}
              >
                Request Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-white/80">
              Enterprise-grade security solutions for organizations of all sizes. Our security experts will contact you
              within 24 hours.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
