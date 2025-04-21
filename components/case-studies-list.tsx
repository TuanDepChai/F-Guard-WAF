"use client"

import { motion } from "framer-motion"
import { Shield, ArrowRight, Building, Users, Lock, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function CaseStudiesList() {
  const caseStudies = [
    {
      title: "Global Financial Institution Strengthens Security Posture",
      industry: "Financial Services",
      logo: <Building className="h-10 w-10 text-primary" />,
      description:
        "Learn how a Fortune 500 financial services company reduced security incidents by 85% and improved compliance with FGuard WAF.",
      results: [
        "85% reduction in security incidents",
        "99.99% uptime maintained",
        "PCI DSS compliance achieved",
        "50% reduction in false positives",
      ],
      tags: ["finance", "enterprise", "compliance"],
    },
    {
      title: "Healthcare Provider Secures Patient Data",
      industry: "Healthcare",
      logo: <Users className="h-10 w-10 text-primary" />,
      description:
        "Discover how a leading healthcare provider protected sensitive patient data and achieved HIPAA compliance with FGuard WAF.",
      results: [
        "Zero data breaches since implementation",
        "HIPAA compliance maintained",
        "API security enhanced",
        "Reduced security team workload by 40%",
      ],
      tags: ["healthcare", "compliance", "api-security"],
    },
    {
      title: "E-commerce Platform Stops Credential Stuffing Attacks",
      industry: "E-commerce",
      logo: <Lock className="h-10 w-10 text-primary" />,
      description:
        "See how a major e-commerce platform prevented account takeovers and protected customer data with FGuard WAF.",
      results: [
        "Blocked 1.2M credential stuffing attempts",
        "Reduced fraud by 60%",
        "Improved customer trust",
        "Maintained performance during peak sales",
      ],
      tags: ["ecommerce", "bot-protection", "fraud-prevention"],
    },
    {
      title: "Government Agency Secures Critical Infrastructure",
      industry: "Government",
      logo: <Shield className="h-10 w-10 text-primary" />,
      description:
        "Learn how a government agency protected critical infrastructure and citizen data with FGuard WAF's advanced security features.",
      results: [
        "Protected against nation-state attacks",
        "Achieved compliance with government standards",
        "Reduced incident response time by 70%",
        "Zero downtime during migration",
      ],
      tags: ["government", "compliance", "critical-infrastructure"],
    },
    {
      title: "SaaS Provider Enhances API Security",
      industry: "Technology",
      logo: <BarChart className="h-10 w-10 text-primary" />,
      description:
        "Discover how a leading SaaS provider secured their APIs and microservices architecture with FGuard WAF.",
      results: [
        "Protected 500+ API endpoints",
        "Detected and blocked sophisticated attacks",
        "Reduced development security overhead",
        "Maintained sub-5ms latency",
      ],
      tags: ["technology", "api-security", "microservices"],
    },
    {
      title: "Global Retailer Protects Multi-Cloud Infrastructure",
      industry: "Retail",
      logo: <Building className="h-10 w-10 text-primary" />,
      description:
        "See how a global retailer secured their multi-cloud infrastructure and protected customer data with FGuard WAF.",
      results: [
        "Unified security across AWS, Azure, and GCP",
        "Simplified compliance reporting",
        "Reduced security costs by 30%",
        "Improved visibility across environments",
      ],
      tags: ["retail", "multi-cloud", "cost-optimization"],
    },
  ]

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="rounded-full bg-primary/10 p-3">{study.logo}</div>
                  <Badge variant="outline">{study.industry}</Badge>
                </div>
                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <p className="text-muted-foreground mb-4">{study.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Shield className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="outline" className="w-full flex items-center justify-center gap-1">
                  Read Full Case Study
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
