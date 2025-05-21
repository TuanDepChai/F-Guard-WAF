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
  LifeBuoy
} from "lucide-react"

export const metadata: Metadata = {
  title: "DDoS Protection | FGuard WAF",
  description: "Advanced DDoS protection for your web applications.",
}

const features = [
  {
    title: "Layer 7 Protection",
    description: "Advanced protection against application layer DDoS attacks",
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "Real-time Monitoring",
    description: "24/7 monitoring and instant attack detection",
    icon: <Activity className="h-6 w-6" />
  },
  {
    title: "Global Network",
    description: "Distributed network of scrubbing centers worldwide",
    icon: <Globe className="h-6 w-6" />
  },
  {
    title: "Auto Mitigation",
    description: "Automatic attack mitigation with zero downtime",
    icon: <Zap className="h-6 w-6" />
  }
]

const benefits = [
  {
    title: "High Performance",
    description: "Minimal latency impact during attack mitigation",
    icon: <BarChart className="h-6 w-6" />
  },
  {
    title: "Cost Effective",
    description: "Pay only for the protection you need",
    icon: <LineChart className="h-6 w-6" />
  },
  {
    title: "Easy Integration",
    description: "Simple setup with existing infrastructure",
    icon: <Server className="h-6 w-6" />
  },
  {
    title: "Detailed Analytics",
    description: "Comprehensive attack reports and insights",
    icon: <PieChart className="h-6 w-6" />
  }
]

const specifications = [
  {
    category: "Protection",
    items: [
      "Layer 7 DDoS Protection",
      "HTTP/HTTPS Flood Protection",
      "SYN Flood Protection",
      "UDP Flood Protection",
      "ICMP Flood Protection",
      "DNS Amplification Protection"
    ]
  },
  {
    category: "Performance",
    items: [
      "Up to 10 Tbps Network Capacity",
      "Global Scrubbing Centers",
      "Anycast Network",
      "Low Latency Routing",
      "Automatic Failover",
      "Zero Downtime Mitigation"
    ]
  },
  {
    category: "Management",
    items: [
      "Real-time Dashboard",
      "Custom Rules Engine",
      "API Integration",
      "Automated Reporting",
      "24/7 Support",
      "SLA Guarantee"
    ]
  }
]

const pricing = [
  {
    name: "Basic",
    price: "$99",
    period: "per month",
    features: [
      "Up to 1 Gbps Protection",
      "Basic DDoS Mitigation",
      "Standard Support",
      "Basic Analytics"
    ]
  },
  {
    name: "Professional",
    price: "$299",
    period: "per month",
    features: [
      "Up to 5 Gbps Protection",
      "Advanced DDoS Mitigation",
      "Priority Support",
      "Advanced Analytics",
      "Custom Rules"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    features: [
      "Up to 10 Gbps Protection",
      "Premium DDoS Mitigation",
      "24/7 Dedicated Support",
      "Enterprise Analytics",
      "Custom Solutions",
      "SLA Guarantee"
    ]
  }
]

export default function DDoSProtectionPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">DDoS Protection</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Advanced protection against DDoS attacks with our global network of scrubbing centers
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
                      Watch a live demo of our DDoS protection
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