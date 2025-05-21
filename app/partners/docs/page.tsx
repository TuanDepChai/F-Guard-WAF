import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Search,
  BookOpen,
  FileText,
  Code2,
  Shield,
  Settings,
  ArrowRight,
  Download,
  ExternalLink
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Partner Documentation | FGuard WAF",
  description: "Access comprehensive documentation and resources for FGuard WAF partners.",
}

const categories = [
  {
    title: "Getting Started",
    description: "Essential guides to help you get started with FGuard WAF",
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    links: [
      { title: "Partner Onboarding Guide", href: "/docs/onboarding" },
      { title: "Quick Start Guide", href: "/docs/quickstart" },
      { title: "Best Practices", href: "/docs/best-practices" },
      { title: "Common Issues", href: "/docs/troubleshooting" }
    ]
  },
  {
    title: "Technical Documentation",
    description: "Detailed technical documentation and API references",
    icon: <Code2 className="h-8 w-8 text-primary" />,
    links: [
      { title: "API Reference", href: "/docs/api" },
      { title: "Integration Guide", href: "/docs/integration" },
      { title: "Configuration Guide", href: "/docs/configuration" },
      { title: "Security Features", href: "/docs/security" }
    ]
  },
  {
    title: "Sales Resources",
    description: "Resources to help you sell FGuard WAF effectively",
    icon: <FileText className="h-8 w-8 text-primary" />,
    links: [
      { title: "Sales Playbook", href: "/docs/sales-playbook" },
      { title: "Product Overview", href: "/docs/product" },
      { title: "Competitive Analysis", href: "/docs/competitive" },
      { title: "Pricing Guide", href: "/docs/pricing" }
    ]
  },
  {
    title: "Security Guidelines",
    description: "Security best practices and guidelines",
    icon: <Shield className="h-8 w-8 text-primary" />,
    links: [
      { title: "Security Best Practices", href: "/docs/security-best-practices" },
      { title: "Compliance Guide", href: "/docs/compliance" },
      { title: "Threat Protection", href: "/docs/threat-protection" },
      { title: "Security Architecture", href: "/docs/security-architecture" }
    ]
  },
  {
    title: "Configuration Guides",
    description: "Detailed configuration and setup guides",
    icon: <Settings className="h-8 w-8 text-primary" />,
    links: [
      { title: "Basic Configuration", href: "/docs/basic-config" },
      { title: "Advanced Settings", href: "/docs/advanced-config" },
      { title: "Performance Tuning", href: "/docs/performance" },
      { title: "Custom Rules", href: "/docs/custom-rules" }
    ]
  }
]

const resources = [
  {
    title: "Partner Portal Guide",
    description: "Learn how to use the partner portal effectively",
    icon: <BookOpen className="h-5 w-5" />,
    href: "/docs/portal-guide"
  },
  {
    title: "API Documentation",
    description: "Complete API reference and examples",
    icon: <Code2 className="h-5 w-5" />,
    href: "/docs/api"
  },
  {
    title: "Integration Examples",
    description: "Real-world integration examples and use cases",
    icon: <Settings className="h-5 w-5" />,
    href: "/docs/integration-examples"
  },
  {
    title: "Security Guidelines",
    description: "Security best practices and guidelines",
    icon: <Shield className="h-5 w-5" />,
    href: "/docs/security-guidelines"
  }
]

export default function DocsPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Partner Documentation</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Access comprehensive documentation and resources to help you succeed as an FGuard partner
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search documentation..."
              className="pl-10 py-6 text-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="mb-6">{category.icon}</div>
                <h2 className="text-xl font-semibold mb-3">{category.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{category.description}</p>
                
                <ul className="space-y-3">
                  {category.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                      >
                        <ArrowRight className="h-4 w-4" />
                        <span>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">Popular Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <Link
                key={index}
                href={resource.href}
                className="flex items-start gap-4 p-6 rounded-lg bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  {resource.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{resource.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{resource.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 