import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Shield,
  Zap,
  Activity,
  Network,
  Server,
  Globe,
  BarChart,
  LineChart,
  PieChart,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ArrowRight,
  Download,
  FileText,
  MessageSquare,
  Play,
  BookOpen,
  Award,
  Star,
  Users,
  Globe2,
  ShieldCheck,
  ShieldAlert,
  ShieldX,
  Clock,
  Calendar,
  HelpCircle,
  LifeBuoy,
  Key,
  Lock,
  Code,
  Database,
  Cpu,
  Workflow,
  GitBranch,
  GitCommit,
  GitPullRequest,
  GitMerge,
  GitCompare,
  GitFork
} from "lucide-react"

export const metadata: Metadata = {
  title: "API Protection | FGuard WAF",
  description: "Advanced API security and protection for your applications.",
}

const features = [
  {
    title: "API Authentication",
    description: "Secure API access with multiple authentication methods",
    icon: <Key className="h-6 w-6" />
  },
  {
    title: "Rate Limiting",
    description: "Protect against API abuse with smart rate limiting",
    icon: <Activity className="h-6 w-6" />
  },
  {
    title: "Schema Validation",
    description: "Validate API requests against OpenAPI/Swagger schemas",
    icon: <Code className="h-6 w-6" />
  },
  {
    title: "Real-time Monitoring",
    description: "Monitor API usage and detect anomalies in real-time",
    icon: <BarChart className="h-6 w-6" />
  }
]

const benefits = [
  {
    title: "Enhanced Security",
    description: "Protect your APIs from common vulnerabilities and attacks",
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "Better Performance",
    description: "Optimize API performance with caching and load balancing",
    icon: <Zap className="h-6 w-6" />
  },
  {
    title: "Easy Integration",
    description: "Simple setup with existing API infrastructure",
    icon: <GitBranch className="h-6 w-6" />
  },
  {
    title: "Detailed Analytics",
    description: "Comprehensive API usage reports and insights",
    icon: <PieChart className="h-6 w-6" />
  }
]

const specifications = [
  {
    category: "Security",
    items: [
      "API Key Authentication",
      "OAuth 2.0 / OpenID Connect",
      "JWT Validation",
      "IP Whitelisting",
      "Request Signing",
      "TLS/SSL Encryption"
    ]
  },
  {
    category: "Performance",
    items: [
      "Request Rate Limiting",
      "Response Caching",
      "Load Balancing",
      "Request Throttling",
      "Circuit Breaking",
      "Request Queuing"
    ]
  },
  {
    category: "Management",
    items: [
      "API Documentation",
      "Version Control",
      "Schema Validation",
      "Usage Analytics",
      "Developer Portal",
      "API Lifecycle Management"
    ]
  }
]

const pricing = [
  {
    name: "Basic",
    price: "$149",
    period: "per month",
    features: [
      "Up to 1M API Calls",
      "Basic Authentication",
      "Standard Rate Limiting",
      "Basic Analytics"
    ]
  },
  {
    name: "Professional",
    price: "$399",
    period: "per month",
    features: [
      "Up to 5M API Calls",
      "Advanced Authentication",
      "Custom Rate Limiting",
      "Advanced Analytics",
      "Schema Validation"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    features: [
      "Unlimited API Calls",
      "Premium Authentication",
      "Custom Solutions",
      "Enterprise Analytics",
      "Dedicated Support",
      "SLA Guarantee"
    ]
  }
]

export default function APIProtectionPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">API Protection</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Secure and optimize your APIs with advanced protection and monitoring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <div className="font-semibold mb-2">{feature.title}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        {benefit.icon}
                      </div>
                      <div>
                        <div className="font-semibold mb-2">{benefit.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {benefit.description}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specifications.map((spec, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="font-semibold text-lg mb-4">{spec.category}</div>
                    <div className="space-y-3">
                      {spec.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="font-semibold text-xl mb-2">{plan.name}</div>
                      <div className="text-3xl font-bold mb-1">{plan.price}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {plan.period}
                      </div>
                    </div>
                    <div className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-2">API Documentation</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Access our comprehensive API documentation and guides
                    </div>
                    <Button variant="outline" size="sm">
                      View Docs
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Support</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Get help from our technical support team
                    </div>
                    <Button variant="outline" size="sm">
                      Contact Support
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Play className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-2">API Playground</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Try our API protection features in real-time
                    </div>
                    <Button variant="outline" size="sm">
                      Try Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
} 