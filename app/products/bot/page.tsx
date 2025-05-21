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
  Bot,
  Fingerprint,
  Brain,
  Eye,
  Search,
  Filter,
  AlertOctagon
} from "lucide-react"

export const metadata: Metadata = {
  title: "Bot Protection | FGuard WAF",
  description: "Advanced bot protection and management for your web applications.",
}

const features = [
  {
    title: "Bot Detection",
    description: "Advanced bot detection using behavioral analysis and machine learning",
    icon: <Bot className="h-6 w-6" />
  },
  {
    title: "Behavioral Analysis",
    description: "Analyze user behavior patterns to identify malicious bots",
    icon: <Brain className="h-6 w-6" />
  },
  {
    title: "Fingerprinting",
    description: "Unique device and browser fingerprinting for bot identification",
    icon: <Fingerprint className="h-6 w-6" />
  },
  {
    title: "Real-time Monitoring",
    description: "Monitor bot traffic and activities in real-time",
    icon: <Activity className="h-6 w-6" />
  }
]

const benefits = [
  {
    title: "Enhanced Security",
    description: "Protect against automated attacks and bot abuse",
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "Better Performance",
    description: "Reduce server load by blocking malicious bots",
    icon: <Zap className="h-6 w-6" />
  },
  {
    title: "Easy Integration",
    description: "Simple setup with existing web infrastructure",
    icon: <Server className="h-6 w-6" />
  },
  {
    title: "Detailed Analytics",
    description: "Comprehensive bot traffic reports and insights",
    icon: <PieChart className="h-6 w-6" />
  }
]

const specifications = [
  {
    category: "Detection",
    items: [
      "Behavioral Analysis",
      "Device Fingerprinting",
      "Browser Fingerprinting",
      "IP Reputation",
      "Request Pattern Analysis",
      "Machine Learning Detection"
    ]
  },
  {
    category: "Protection",
    items: [
      "Bot Blocking",
      "Rate Limiting",
      "CAPTCHA Integration",
      "JavaScript Challenge",
      "Cookie Validation",
      "Request Validation"
    ]
  },
  {
    category: "Management",
    items: [
      "Bot Dashboard",
      "Custom Rules",
      "Whitelist/Blacklist",
      "Traffic Analytics",
      "Alert System",
      "API Integration"
    ]
  }
]

const pricing = [
  {
    name: "Basic",
    price: "$199",
    period: "per month",
    features: [
      "Up to 1M Requests",
      "Basic Bot Detection",
      "Standard Protection",
      "Basic Analytics"
    ]
  },
  {
    name: "Professional",
    price: "$499",
    period: "per month",
    features: [
      "Up to 5M Requests",
      "Advanced Bot Detection",
      "Custom Protection Rules",
      "Advanced Analytics",
      "API Access"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    features: [
      "Unlimited Requests",
      "Premium Bot Detection",
      "Custom Solutions",
      "Enterprise Analytics",
      "Dedicated Support",
      "SLA Guarantee"
    ]
  }
]

export default function BotProtectionPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Bot Protection</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Protect your web applications from malicious bots with advanced detection and management
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
                    <div className="font-semibold mb-2">Documentation</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Access our comprehensive documentation and guides
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
                    <div className="font-semibold mb-2">Demo</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      See our bot protection in action
                    </div>
                    <Button variant="outline" size="sm">
                      Watch Demo
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