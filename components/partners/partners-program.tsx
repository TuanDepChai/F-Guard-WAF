"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { 
  Building2, 
  Code2, 
  Shield, 
  Users,
  ArrowRight,
  CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PartnersProgram() {
  const programs = [
    {
      icon: <Building2 className="h-8 w-8 text-primary" />,
      title: "Reseller Program",
      description: "Resell FGuard WAF solutions to your customers with competitive margins and comprehensive support",
      features: [
        "Competitive pricing and margins",
        "Deal registration protection",
        "Sales and technical training",
        "Marketing support and resources",
        "Dedicated partner portal",
        "Revenue sharing opportunities"
      ],
      cta: "Become a Reseller",
      href: "/partners/reseller"
    },
    {
      icon: <Code2 className="h-8 w-8 text-primary" />,
      title: "Technology Partners",
      description: "Integrate FGuard WAF with your technology stack and create powerful security solutions",
      features: [
        "API access and documentation",
        "Integration support",
        "Technical certification",
        "Joint solution development",
        "Co-marketing opportunities",
        "Technical workshops"
      ],
      cta: "Join as Tech Partner",
      href: "/partners/technology"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Security Partners",
      description: "Enhance your security offerings with FGuard's advanced WAF capabilities",
      features: [
        "Advanced security features",
        "Threat intelligence sharing",
        "Security certifications",
        "Joint security assessments",
        "Incident response support",
        "Security best practices"
      ],
      cta: "Partner with Us",
      href: "/partners/security"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Service Partners",
      description: "Deliver managed WAF services and professional services to your customers",
      features: [
        "Managed service capabilities",
        "Professional services training",
        "Service delivery support",
        "Customer success resources",
        "Service level agreements",
        "24/7 support access"
      ],
      cta: "Start Services",
      href: "/partners/services"
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Partner Programs</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Choose the right partnership program that aligns with your business goals and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="mb-6">{program.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3">{program.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{program.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={program.href}>
                    <Button className="w-full group">
                      {program.cta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Not sure which program is right for you? Let us help you choose.
          </p>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Contact Partner Team
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
