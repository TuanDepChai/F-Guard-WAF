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
  ShoppingCart,
  CreditCard,
  Package,
  Truck,
  Store,
  TrendingUp,
  Wallet,
  Clock,
  Calendar,
  HelpCircle,
  LifeBuoy,
  Lock,
  Key,
  ShoppingBag,
  Receipt,
  Percent,
  Gift
} from "lucide-react"

export const metadata: Metadata = {
  title: "E-commerce Solutions | FGuard WAF",
  description: "Comprehensive security solutions for e-commerce businesses.",
}

const features = [
  {
    title: "Payment Security",
    description: "Secure payment processing and PCI DSS compliance",
    icon: <CreditCard className="h-6 w-6" />
  },
  {
    title: "Fraud Prevention",
    description: "Advanced fraud detection and prevention systems",
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "High Performance",
    description: "Optimized performance for peak shopping seasons",
    icon: <Zap className="h-6 w-6" />
  },
  {
    title: "Global Reach",
    description: "Worldwide CDN coverage for fast delivery",
    icon: <Globe className="h-6 w-6" />
  }
]

const benefits = [
  {
    title: "Secure Transactions",
    description: "Protect customer data and payment information",
    icon: <Lock className="h-6 w-6" />
  },
  {
    title: "Business Growth",
    description: "Scale your e-commerce business with confidence",
    icon: <TrendingUp className="h-6 w-6" />
  },
  {
    title: "Customer Trust",
    description: "Build customer confidence with robust security",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Revenue Protection",
    description: "Prevent revenue loss from fraud and attacks",
    icon: <Wallet className="h-6 w-6" />
  }
]

const solutions = [
  {
    category: "Security",
    items: [
      "Payment Gateway Protection",
      "Fraud Detection",
      "Account Takeover Prevention",
      "SSL/TLS Encryption",
      "PCI DSS Compliance",
      "Security Monitoring"
    ]
  },
  {
    category: "Performance",
    items: [
      "Global CDN",
      "Load Balancing",
      "Caching",
      "Traffic Optimization",
      "Uptime Monitoring",
      "Performance Analytics"
    ]
  },
  {
    category: "Business",
    items: [
      "Shopping Cart Protection",
      "Inventory Management",
      "Order Processing",
      "Customer Data Protection",
      "Analytics & Reporting",
      "API Security"
    ]
  }
]

const pricing = [
  {
    name: "Starter",
    price: "$99",
    period: "per month",
    features: [
      "Basic WAF Protection",
      "Payment Security",
      "SSL Certificate",
      "Basic Analytics",
      "Email Support"
    ]
  },
  {
    name: "Business",
    price: "$299",
    period: "per month",
    features: [
      "Advanced WAF Protection",
      "Fraud Prevention",
      "Shopping Cart Protection",
      "Advanced Analytics",
      "Priority Support",
      "Custom Rules"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    features: [
      "Premium WAF Protection",
      "Full Fraud Protection",
      "Global CDN",
      "24/7 Support",
      "Custom Solutions",
      "SLA Guarantee"
    ]
  }
]

export default function EcommercePage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">E-commerce Solutions</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive security and performance solutions for your e-commerce business
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
            <h2 className="text-3xl font-bold text-center mb-8">Our Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="font-semibold text-lg mb-4">{solution.category}</div>
                    <div className="space-y-3">
                      {solution.items.map((item, itemIndex) => (
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
                    <div className="font-semibold mb-2">Resources</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Access e-commerce security guides and best practices
                    </div>
                    <Button variant="outline" size="sm">
                      View Resources
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
                      Get help from our e-commerce security experts
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
                      See our e-commerce solutions in action
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