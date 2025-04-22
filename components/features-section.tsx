"use client"

import React from "react"
import { motion } from "framer-motion"
import { Shield, Lock, BarChart, AlertTriangle, FileCode, Globe, Database, Layers } from "lucide-react"
import { DynamicBackground } from "@/components/dynamic-background"
import { AnimatedCard } from "@/components/animated-card"

export default function FeaturesSection() {
  // Define features with their icons and text
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Advanced DDoS Protection",
      description:
        "Enterprise-grade protection against volumetric, protocol, and application layer DDoS attacks with automatic traffic profiling and behavioral analysis.",
    },
    {
      icon: <Lock className="h-6 w-6 text-primary" />,
      title: "Zero-Day Attack Prevention",
      description:
        "Proactive protection against unknown vulnerabilities using machine learning and behavioral analysis to identify and block suspicious activities before they cause damage.",
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-primary" />,
      title: "OWASP Top 10 Protection",
      description:
        "Comprehensive protection against all OWASP Top 10 vulnerabilities including injection attacks, broken authentication, sensitive data exposure, and more.",
    },
    {
      icon: <FileCode className="h-6 w-6 text-primary" />,
      title: "API Security",
      description:
        "Specialized protection for REST, SOAP, GraphQL and other API protocols with schema validation, rate limiting, and anomaly detection to prevent API abuse.",
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Data Loss Prevention",
      description:
        "Advanced scanning and filtering to prevent sensitive data leakage with customizable rules for PII, financial data, and intellectual property protection.",
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Global CDN Integration",
      description:
        "Seamless integration with leading CDN providers for optimized content delivery while maintaining robust security across all edge locations.",
    },
    {
      icon: <Layers className="h-6 w-6 text-primary" />,
      title: "Multi-Layer Security",
      description:
        "Defense-in-depth approach with multiple security layers including IP reputation, geo-fencing, rate limiting, and deep packet inspection.",
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "Advanced Analytics",
      description:
        "Comprehensive security analytics with real-time dashboards, detailed attack forensics, and customizable reporting for compliance and security posture management.",
    },
  ]

  return (
    <section id="features" className="py-20 theme-transition">
      <DynamicBackground variant="mesh" className="py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                <Shield className="mr-1 h-4 w-4" />
                <span>Enterprise Security Features</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <span className="gradient-text">Enterprise-Grade WAF Protection</span>
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                FGuard delivers comprehensive web application security with advanced features that rival industry
                leaders like Barracuda WAF
              </p>
            </div>
          </motion.div>

          {/* Featured image section */}
          <motion.div
            className="mt-12 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
              <motion.div
                className="absolute inset-0 bg-grid-slate-700/20"
                animate={{
                  backgroundPosition: ["0px 0px", "100px 100px"],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
                <div className="p-8 md:p-12 max-w-md">
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold text-white mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Next-Generation Web Application Firewall
                  </motion.h3>
                  <motion.p
                    className="text-white/90"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    Our enterprise WAF solution provides comprehensive protection against sophisticated web attacks,
                    ensuring your applications remain secure and compliant.
                  </motion.p>
                </div>
              </div>
              <motion.div
                className="absolute right-8 bottom-8 w-24 h-24"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              >
                <Shield className="w-full h-full text-primary/30" />
              </motion.div>
            </div>
          </motion.div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AnimatedCard variant="glass" className="h-full">
                  <div className="p-6 flex flex-col items-center space-y-4 h-full">
                    <motion.div
                      className="rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 p-6"
                      whileHover={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {React.cloneElement(feature.icon, { className: "h-12 w-12 text-primary" })}
                    </motion.div>
                    <h3 className="text-xl font-bold text-center">{feature.title}</h3>
                    <p className="text-center text-muted-foreground">{feature.description}</p>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </DynamicBackground>
    </section>
  )
}
