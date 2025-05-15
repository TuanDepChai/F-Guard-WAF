import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, FileText, Users, Settings, BarChart } from "lucide-react"

export default function ComplianceProcess() {
  const processSteps = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Risk Assessment",
      description:
        "Comprehensive evaluation of security risks and compliance requirements specific to your organization.",
    },
    {
      icon: <Settings className="h-10 w-10 text-primary" />,
      title: "Implementation",
      description: "Deployment of FGuard WAF with configurations tailored to your compliance needs.",
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Documentation",
      description: "Detailed documentation of security controls and compliance measures for audit purposes.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Monitoring",
      description: "Continuous monitoring of security events and compliance status through real-time dashboards.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Validation",
      description: "Regular testing and validation of security controls to ensure ongoing compliance.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Support",
      description: "Expert compliance support from our security team during audits and assessments.",
    },
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Compliance Process</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            How FGuard helps your organization achieve and maintain compliance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <Card key={index} className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
