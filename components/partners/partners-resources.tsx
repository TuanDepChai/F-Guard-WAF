"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { 
  BookOpen, 
  FileText, 
  Video, 
  Users, 
  MessageSquare,
  ArrowRight,
  Download,
  PlayCircle,
  Settings
} from "lucide-react"
import Link from "next/link"

const resources = [
  {
    title: "Documentation",
    description: "Access comprehensive documentation and guides",
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    href: "/partners/docs",
    features: [
      "Technical guides",
      "API documentation",
      "Integration guides",
      "Best practices"
    ]
  },
  {
    title: "Training",
    description: "Enhance your expertise with our training programs",
    icon: <Video className="h-8 w-8 text-primary" />,
    href: "/partners/training",
    features: [
      "Video tutorials",
      "Certification courses",
      "Technical training",
      "Sales enablement"
    ]
  },
  {
    title: "Community",
    description: "Connect with other partners and share experiences",
    icon: <Users className="h-8 w-8 text-primary" />,
    href: "/partners/community",
    features: [
      "Partner forum",
      "Success stories",
      "Regional groups",
      "Events calendar"
    ]
  },
  {
    title: "Support",
    description: "Get help and support when you need it",
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    href: "/partners/support",
    features: [
      "Technical support",
      "Partner success",
      "Sales support",
      "Knowledge base"
    ]
  }
]

const downloads = [
  {
    title: "Partner Program Guide",
    description: "Complete guide to our partner programs",
    icon: <FileText className="h-5 w-5" />,
    href: "/downloads/partner-guide.pdf"
  },
  {
    title: "Sales Playbook",
    description: "Sales enablement materials and guides",
    icon: <Settings className="h-5 w-5" />,
    href: "/downloads/sales-playbook.pdf"
  },
  {
    title: "Technical Documentation",
    description: "Detailed technical documentation",
    icon: <BookOpen className="h-5 w-5" />,
    href: "/downloads/technical-docs.pdf"
  },
  {
    title: "Marketing Materials",
    description: "Marketing resources and templates",
    icon: <Download className="h-5 w-5" />,
    href: "/downloads/marketing-materials.zip"
  }
]

export default function PartnersResources() {
  const quickLinks = [
    {
      icon: <Download className="h-5 w-5" />,
      title: "Download Resources",
      href: "/resources/downloads"
    },
    {
      icon: <PlayCircle className="h-5 w-5" />,
      title: "Watch Tutorials",
      href: "/resources/tutorials"
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "View Documentation",
      href: "/docs"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Join Community",
      href: "/community"
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Partner Resources</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Access all the resources you need to succeed as an FGuard partner
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="mb-6">{resource.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{resource.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {resource.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={resource.href}>
                  <Button className="w-full group">
                    Access Resources
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">Downloads</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloads.map((download, index) => (
              <Link
                key={index}
                href={download.href}
                className="flex items-start gap-4 p-6 rounded-lg bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  {download.icon}
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{download.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{download.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-center">Quick Links</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex items-center gap-2 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  {link.icon}
                  <span className="font-medium">{link.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 