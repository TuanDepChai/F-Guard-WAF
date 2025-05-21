"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Protect Your Web Applications with{" "}
              <span className="text-primary">F-Guard WAF</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A modern Web Application Firewall solution designed to protect your web applications from cyber attacks.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button size="lg">
                Get Started For Free
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-xl shadow-2xl overflow-hidden">
              <Image
                src="/images/hero-dashboard.png"
                alt="F-Guard WAF Dashboard"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/images/hero-pattern.svg"
          alt="Background Pattern"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.100),theme(colors.background))]" />
      </motion.div>
    </section>
  )
}
