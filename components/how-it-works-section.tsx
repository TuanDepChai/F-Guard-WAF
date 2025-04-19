"use client"

import React from "react"

import { motion } from "framer-motion"
import { Shield, ArrowRight, Filter, AlertTriangle, CheckCircle } from "lucide-react"

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <Filter className="h-6 w-6 text-white" />,
      title: "Traffic Filtering",
      description: "All traffic to your website is routed through FGuard's WAF system for inspection and filtering.",
      color: "bg-blue-600",
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-white" />,
      title: "Threat Detection",
      description: "The system analyzes traffic in real-time to detect attack patterns and abnormal behavior.",
      color: "bg-yellow-600",
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Attack Blocking",
      description:
        "Attacks and malicious traffic are automatically blocked, while legitimate users can still access normally.",
      color: "bg-red-600",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-white" />,
      title: "Continuous Protection",
      description:
        "The system continuously updates security rules to combat the latest threats and protect your website 24/7.",
      color: "bg-green-600",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-slate-50 dark:bg-slate-900">
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
              <span>How It Works</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How FGuard WAF Protects Your Applications
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Our enterprise-grade WAF solution provides comprehensive protection through a sophisticated multi-step
              process
            </p>
          </div>
        </motion.div>

        {/* Process diagram */}
        <motion.div
          className="mb-16 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden bg-slate-800">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center space-x-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className={`${step.color} p-4 rounded-full mb-2`}>{step.icon}</div>
                    <div className="text-white text-sm">{step.title}</div>
                    {index < steps.length - 1 && <ArrowRight className="absolute right-[-30px] top-4 text-white/50" />}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center p-6 max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Enterprise-Grade Protection Process</h3>
                <p className="text-white/90 text-lg">
                  Our WAF solution employs a sophisticated multi-layered approach to identify and neutralize threats
                  before they reach your applications
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-16 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                    <div className="space-y-3">
                      <div className={`inline-flex items-center justify-center rounded-full ${step.color} p-3`}>
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg border">
                      <div className="relative w-full h-[200px] rounded-md overflow-hidden bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                        <div className={`${step.color} p-6 rounded-full`}>
                          {React.cloneElement(step.icon, { className: "h-12 w-12 text-white" })}
                        </div>
                      </div>
                      <div className="text-center p-4">
                        <div className={`inline-flex items-center justify-center rounded-full ${step.color} p-3 mb-3`}>
                          {step.icon}
                        </div>
                        <h4 className="font-medium">
                          Step {index + 1}: {step.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector arrow */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4 hidden md:flex">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
