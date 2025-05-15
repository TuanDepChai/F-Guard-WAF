import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RoadmapTimeline() {
  const quarters = [
    {
      id: "q2-2025",
      name: "Q2 2025",
      status: "current",
      features: [
        {
          name: "Advanced Bot Protection",
          description: "Enhanced bot detection and mitigation capabilities using machine learning",
          category: "security",
        },
        {
          name: "Multi-Region Deployment",
          description: "Support for deploying WAF instances across multiple geographic regions",
          category: "infrastructure",
        },
        {
          name: "Custom Rule Builder",
          description: "Visual interface for creating custom WAF rules without coding",
          category: "usability",
        },
        {
          name: "API Schema Validation",
          description: "Automatic validation of API requests against OpenAPI/Swagger schemas",
          category: "api",
        },
      ],
    },
    {
      id: "q3-2025",
      name: "Q3 2025",
      status: "upcoming",
      features: [
        {
          name: "AI-Powered Threat Detection",
          description: "Machine learning models to identify and block zero-day attacks",
          category: "security",
        },
        {
          name: "Advanced Analytics Dashboard",
          description: "Enhanced visualization and reporting of security events",
          category: "analytics",
        },
        {
          name: "Serverless Edge Deployment",
          description: "Deploy WAF functions at the edge for minimal latency",
          category: "infrastructure",
        },
        {
          name: "Automated Compliance Reports",
          description: "Generate compliance reports for PCI DSS, HIPAA, and GDPR",
          category: "compliance",
        },
      ],
    },
    {
      id: "q4-2025",
      name: "Q4 2025",
      status: "upcoming",
      features: [
        {
          name: "Quantum-Resistant Encryption",
          description: "Support for post-quantum cryptographic algorithms",
          category: "security",
        },
        {
          name: "Automated Vulnerability Remediation",
          description: "Automatic patching of common web vulnerabilities",
          category: "security",
        },
        {
          name: "Multi-Cloud Management",
          description: "Unified management across AWS, Azure, GCP, and private clouds",
          category: "infrastructure",
        },
        {
          name: "Advanced Rate Limiting",
          description: "Context-aware rate limiting based on user behavior",
          category: "performance",
        },
      ],
    },
    {
      id: "q1-2026",
      name: "Q1 2026",
      status: "planning",
      features: [
        {
          name: "Decentralized Identity Integration",
          description: "Support for decentralized identity and authentication standards",
          category: "security",
        },
        {
          name: "Global Threat Intelligence Network",
          description: "Shared threat intelligence across all FGuard deployments",
          category: "security",
        },
        {
          name: "IoT Device Protection",
          description: "Specialized protection for IoT devices and APIs",
          category: "security",
        },
        {
          name: "Natural Language Policy Creation",
          description: "Create security policies using natural language instructions",
          category: "usability",
        },
      ],
    },
  ]

  const getCategoryBadge = (category: string) => {
    const colors: Record<string, string> = {
      security: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
      infrastructure: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      usability: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      api: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
      analytics: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      compliance: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
      performance: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    }

    return (
      <Badge className={`${colors[category] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"}`}>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </Badge>
    )
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Development Timeline</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Our planned feature releases and development milestones
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="q2-2025" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              {quarters.map((quarter) => (
                <TabsTrigger key={quarter.id} value={quarter.id} className="relative">
                  {quarter.name}
                  {quarter.status === "current" && (
                    <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-500"></span>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>

            {quarters.map((quarter) => (
              <TabsContent key={quarter.id} value={quarter.id}>
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-2">{quarter.name}</h3>
                      <div className="flex items-center">
                        <span
                          className={`inline-block h-3 w-3 rounded-full mr-2 ${quarter.status === "current" ? "bg-green-500" : quarter.status === "upcoming" ? "bg-yellow-500" : "bg-gray-500"}`}
                        ></span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {quarter.status === "current"
                            ? "In Progress"
                            : quarter.status === "upcoming"
                              ? "Coming Soon"
                              : "Planning Phase"}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {quarter.features.map((feature, index) => (
                        <div
                          key={index}
                          className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg font-semibold">{feature.name}</h4>
                            {getCategoryBadge(feature.category)}
                          </div>
                          <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
