"use client"

import { Shield, Zap, Lock, BarChart, Cloud, Database } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "OWASP Top 10 Protection",
      description:
        "Comprehensive protection against all OWASP Top 10 vulnerabilities including injections, XSS, and CSRF attacks.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "DDoS Mitigation",
      description:
        "Advanced DDoS protection with automatic traffic filtering and rate limiting to keep your applications online.",
    },
    {
      icon: <Lock className="h-10 w-10 text-primary" />,
      title: "Zero-Day Protection",
      description:
        "AI-powered anomaly detection to identify and block zero-day attacks before they can impact your systems.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Real-time Analytics",
      description:
        "Comprehensive dashboards with real-time insights into traffic patterns, threats, and security events.",
    },
    {
      icon: <Cloud className="h-10 w-10 text-primary" />,
      title: "Global CDN Integration",
      description:
        "Seamlessly integrates with leading CDN providers to enhance performance while maintaining security.",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "API Security",
      description: "Specialized protection for API endpoints with schema validation and abnormal behavior detection.",
    },
  ]

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Web Application Security</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
            Our WAF solution provides multi-layered protection to secure your applications against evolving threats.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-md"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mb-5 relative">
                <div className="absolute -inset-1 bg-primary/10 rounded-full blur-md"></div>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
