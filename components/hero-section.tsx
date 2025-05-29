"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 flex items-center justify-center">
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
              <span className="text-gradient-animate">F-Guard WAF</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              A modern Web Application Firewall solution designed to protect your web applications from cyber attacks.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button size="lg" className="button-effect">
                Get Started For Free
              </Button>
              <Button variant="outline" size="lg" className="button-effect">
                Learn More
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative rounded-xl shadow-2xl overflow-hidden w-full max-w-lg transform-3d card-hover">
              <Image
                src="/images/hero-dashboard.png"
                alt="F-Guard WAF Dashboard"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 bg-pattern">
         {/* Optional: Add more SVG illustrations here */}
      </div>
       {/* Glow effect behind the content */}
       <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 glow-effect rounded-full bg-primary/20 blur-[100px] opacity-30" />
       </div>
    </section>
  )
}
