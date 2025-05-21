"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { 
  BarChart3, 
  Users, 
  Globe, 
  Shield, 
  Zap, 
  Award,
  TrendingUp,
  Building2,
  Lightbulb,
  Rocket
} from "lucide-react"

export default function PartnersBenefits() {
  const benefits = [
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Revenue Growth",
      description: "Access to new markets and revenue streams through our partner ecosystem",
      features: [
        "Competitive margins",
        "Deal registration protection",
        "Revenue sharing opportunities",
        "Market expansion support"
      ]
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Technical Excellence",
      description: "Comprehensive technical resources and support to deliver best-in-class solutions",
      features: [
        "Advanced technical training",
        "Certification programs",
        "Technical documentation",
        "Integration support"
      ]
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Global Reach",
      description: "Expand your business globally with our international partner network",
      features: [
        "International market access",
        "Local market expertise",
        "Global partner community",
        "Cross-border opportunities"
      ]
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Security Leadership",
      description: "Stay ahead with cutting-edge security solutions and expertise",
      features: [
        "Early access to new features",
        "Security best practices",
        "Threat intelligence sharing",
        "Security certifications"
      ]
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Innovation Access",
      description: "Be the first to leverage our latest security innovations",
      features: [
        "Beta program access",
        "Product roadmap insights",
        "Innovation workshops",
        "R&D collaboration"
      ]
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Partner Recognition",
      description: "Gain recognition and credibility in the security industry",
      features: [
        "Partner certification badges",
        "Industry awards",
        "Success stories",
        "Public recognition"
      ]
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Business Growth",
      description: "Comprehensive support for your business development",
      features: [
        "Business planning support",
        "Sales enablement",
        "Marketing resources",
        "Growth strategies"
      ]
    },
    {
      icon: <Building2 className="h-10 w-10 text-primary" />,
      title: "Enterprise Solutions",
      description: "Deliver enterprise-grade security solutions to your customers",
      features: [
        "Enterprise architecture",
        "Scalable solutions",
        "High availability",
        "Enterprise support"
      ]
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Knowledge Transfer",
      description: "Access to extensive knowledge base and training resources",
      features: [
        "Training programs",
        "Knowledge base access",
        "Expert webinars",
        "Best practices"
      ]
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "Go-to-Market Support",
      description: "Comprehensive support for your go-to-market strategy",
      features: [
        "Marketing campaigns",
        "Sales tools",
        "Market analysis",
        "Competitive intelligence"
      ]
    }
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Partner Benefits</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Discover the advantages of joining the FGuard partner ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{benefit.description}</p>
                  <ul className="space-y-2">
                    {benefit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-primary">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 