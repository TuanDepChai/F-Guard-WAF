'use client';

import { Book, Code, Shield, Settings, AlertTriangle, Zap } from "lucide-react"
import { motion } from "framer-motion"
import Link from 'next/link';

const sections = [
  {
    icon: Book,
    title: "Getting Started",
    description: "Learn the basics of F-Guard WAF and how to set up your first protection rules.",
    link: "/docs/getting-started",
  },
  {
    icon: Shield,
    title: "Security Rules",
    description: "Understand how to configure and customize security rules for your applications.",
    link: "/docs/security-rules",
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Detailed documentation of our REST API for programmatic configuration.",
    link: "/docs/api-reference",
  },
  {
    icon: Settings,
    title: "Configuration",
    description: "Learn about advanced configuration options and best practices.",
    link: "/docs/configuration",
  },
  {
    icon: AlertTriangle,
    title: "Troubleshooting",
    description: "Common issues and their solutions to help you resolve problems quickly.",
    link: "/docs/troubleshooting",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Tips and tricks to optimize your WAF performance and reduce latency.",
    link: "/docs/performance",
  },
]

export default function DocsContent() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Documentation</h1>
        <p className="text-xl text-muted-foreground">
          Everything you need to know about using F-Guard WAF
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {sections.map((section, index) => (
          <motion.a
            key={index}
            href={section.link}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="block p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
          >
            <section.icon className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
            <p className="text-muted-foreground">{section.description}</p>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16 text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
        <p className="text-muted-foreground mb-8">
          Our support team is here to help you with any questions or issues
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Contact Support
          </Link>
          <a
            href="https://github.com/your-repo/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-secondary px-8 py-3 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90"
          >
            Report an Issue
          </a>
        </div>
      </motion.div>
    </div>
  )
} 