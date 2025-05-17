import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, LineChart, Lock } from "lucide-react"

export function DemoFeatures() {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Real-Time Protection",
      description:
        "FGuard WAF analyzes and blocks malicious traffic in real-time, with response times typically under 200ms.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Advanced Threat Detection",
      description:
        "Our machine learning algorithms continuously adapt to new attack patterns and zero-day vulnerabilities.",
    },
    {
      icon: <LineChart className="h-8 w-8 text-primary" />,
      title: "Detailed Analytics",
      description:
        "Get comprehensive insights into attack patterns, sources, and trends with our advanced analytics dashboard.",
    },
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: "Customizable Rules",
      description:
        "Create and fine-tune security rules to match your specific application requirements and security policies.",
    },
  ]

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Key Protection Features</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          FGuard WAF provides comprehensive protection against a wide range of web application threats
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="border border-gray-200 dark:border-gray-800">
            <CardHeader className="pb-2">
              <div className="mb-2">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
