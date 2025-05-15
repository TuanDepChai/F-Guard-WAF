import { Card, CardContent } from "@/components/ui/card"
import { Shield, BarChart, Settings, Bell, Users, Database } from "lucide-react"

export default function PortalPreviewFeatures() {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Security Dashboard",
      description: "Real-time visibility into threats, attacks, and security events across your web applications",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Analytics & Reporting",
      description: "Comprehensive analytics and customizable reports to track security metrics and compliance",
    },
    {
      icon: <Settings className="h-10 w-10 text-primary" />,
      title: "Rule Management",
      description: "Create, test, and deploy custom security rules with an intuitive visual interface",
    },
    {
      icon: <Bell className="h-10 w-10 text-primary" />,
      title: "Alert Management",
      description: "Configure and manage security alerts with custom thresholds and notification channels",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "User Management",
      description: "Manage user access with role-based permissions and multi-factor authentication",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "API Access",
      description: "Programmatic access to all FGuard features through our comprehensive REST API",
    },
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Portal Features</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Powerful tools to manage and monitor your web application security
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
