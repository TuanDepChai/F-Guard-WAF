import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Zap, Server, Users, BarChart, Lock } from "lucide-react"

export default function RoadmapFeatures() {
  const categories = [
    {
      id: "security",
      name: "Security Enhancements",
      icon: <Shield className="h-6 w-6 text-primary" />,
      features: [
        "AI-Powered Threat Detection",
        "Quantum-Resistant Encryption",
        "Advanced Bot Protection",
        "Global Threat Intelligence Network",
        "Automated Vulnerability Remediation",
        "Decentralized Identity Integration",
      ],
    },
    {
      id: "performance",
      name: "Performance Optimization",
      icon: <Zap className="h-6 w-6 text-primary" />,
      features: [
        "Edge Computing Integration",
        "Advanced Caching Strategies",
        "Adaptive Rate Limiting",
        "Traffic Optimization Algorithms",
        "Real-time Performance Analytics",
        "Automatic Resource Scaling",
      ],
    },
    {
      id: "infrastructure",
      name: "Infrastructure",
      icon: <Server className="h-6 w-6 text-primary" />,
      features: [
        "Multi-Region Deployment",
        "Serverless Edge Deployment",
        "Multi-Cloud Management",
        "Kubernetes Native Integration",
        "Zero-Trust Network Architecture",
        "Automated Disaster Recovery",
      ],
    },
    {
      id: "usability",
      name: "Usability & Integration",
      icon: <Users className="h-6 w-6 text-primary" />,
      features: [
        "Custom Rule Builder",
        "Natural Language Policy Creation",
        "One-Click Deployment Templates",
        "Enhanced API Management",
        "Integrated DevSecOps Workflows",
        "Customizable Security Dashboards",
      ],
    },
    {
      id: "analytics",
      name: "Analytics & Reporting",
      icon: <BarChart className="h-6 w-6 text-primary" />,
      features: [
        "Advanced Analytics Dashboard",
        "Predictive Threat Analysis",
        "Custom Report Builder",
        "Real-time Security Alerts",
        "Behavioral Analytics",
        "Executive-level Security Reporting",
      ],
    },
    {
      id: "compliance",
      name: "Compliance",
      icon: <Lock className="h-6 w-6 text-primary" />,
      features: [
        "Automated Compliance Reports",
        "Regulatory Update Monitoring",
        "Compliance Policy Templates",
        "Audit Trail Enhancements",
        "Data Sovereignty Controls",
        "Industry-specific Compliance Packages",
      ],
    },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Feature Categories</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Explore our planned features by category to see what's coming to FGuard
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="security" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      {category.icon}
                      <CardTitle>{category.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start p-3 border border-gray-200 dark:border-gray-700 rounded-lg"
                        >
                          <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                            <span className="text-primary text-xs font-bold">{index + 1}</span>
                          </div>
                          <span>{feature}</span>
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
