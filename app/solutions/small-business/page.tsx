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
  Building2,
  Briefcase,
  Target,
  TrendingUp,
  Wallet,
  Clock,
  Calendar,
  HelpCircle,
  LifeBuoy
} from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Small Business Solutions | FGuard WAF",
  description: "Affordable and effective security solutions for small businesses.",
}

const features = [
  {
    title: "Easy Setup",
    description: "Quick and simple deployment with minimal technical expertise",
    icon: <Zap className="h-6 w-6" />
  },
  {
    title: "Cost Effective",
    description: "Affordable pricing plans designed for small businesses",
    icon: <Wallet className="h-6 w-6" />
  },
  {
    title: "24/7 Protection",
    description: "Round-the-clock security monitoring and protection",
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "Business Growth",
    description: "Scalable solutions that grow with your business",
    icon: <TrendingUp className="h-6 w-6" />
  }
]

const benefits = [
  {
    title: "Enhanced Security",
    description: "Protect your business from cyber threats and attacks",
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "Cost Savings",
    description: "Reduce security costs with our affordable solutions",
    icon: <Wallet className="h-6 w-6" />
  },
  {
    title: "Easy Management",
    description: "Simple dashboard for monitoring and management",
    icon: <Activity className="h-6 w-6" />
  },
  {
    title: "Business Focus",
    description: "Focus on your business while we handle security",
    icon: <Target className="h-6 w-6" />
  }
]

const solutions = [
  {
    category: "Security",
    items: [
      "Web Application Firewall",
      "DDoS Protection",
      "Bot Protection",
      "SSL/TLS Encryption",
      "Vulnerability Scanning",
      "Security Monitoring"
    ]
  },
  {
    category: "Performance",
    items: [
      "CDN Integration",
      "Load Balancing",
      "Caching",
      "Traffic Optimization",
      "Uptime Monitoring",
      "Performance Analytics"
    ]
  },
  {
    category: "Support",
    items: [
      "24/7 Technical Support",
      "Security Updates",
      "Regular Backups",
      "Disaster Recovery",
      "Security Training",
      "Compliance Support"
    ]
  }
]

const pricing = [
  {
    name: "Starter",
    price: "$49",
    period: "per month",
    features: [
      "Basic WAF Protection",
      "DDoS Mitigation",
      "SSL Certificate",
      "Basic Analytics",
      "Email Support"
    ]
  },
  {
    name: "Business",
    price: "$99",
    period: "per month",
    features: [
      "Advanced WAF Protection",
      "Enhanced DDoS Protection",
      "Bot Protection",
      "Advanced Analytics",
      "Priority Support",
      "Custom Rules"
    ]
  },
  {
    name: "Professional",
    price: "$199",
    period: "per month",
    features: [
      "Premium WAF Protection",
      "Full DDoS Protection",
      "Advanced Bot Protection",
      "CDN Integration",
      "24/7 Support",
      "Custom Solutions"
    ]
  }
]

export default function SmallBusinessPage() {
  return (
    <main className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Small Business Solutions</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Affordable and effective security solutions designed for small businesses
            </p>
          </div>

          <section className="py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-muted-foreground">
                <Image
                  src="/images/microsoft-80658_1280.png"
                  alt="Small Business Security Overview"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Essential Security for Growing Businesses</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  Small businesses are increasingly targeted by cyber attacks, but often lack the resources for complex security solutions. FGuard offers affordable and easy-to-use security tailored for small businesses, providing essential protection without the overhead.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Our Small Business Solutions include core WAF protection, DDoS mitigation, and simple management tools. We help you secure your online presence, protect customer data, and ensure your website remains available, allowing you to focus on growing your business.
                </p>
              </div>
            </div>
          </section>

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
                      Access guides and resources for small businesses
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
                      Get help from our dedicated support team
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
                      See our solutions in action
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