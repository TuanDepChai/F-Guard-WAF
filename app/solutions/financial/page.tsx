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
  Banknote,
  CreditCard,
  Wallet,
  TrendingUp,
  Lock,
  Key,
  Database,
  FileCheck,
  FileSearch,
  FileText as FileTextIcon,
  Building2,
  Calculator,
  Coins,
  DollarSign,
  Euro,
  PoundSterling,
  Yen,
  Bitcoin,
  LineChart as LineChartIcon,
  BarChart2,
  PieChart as PieChartIcon
} from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Financial Solutions | FGuard WAF",
  description: "PCI DSS-compliant security solutions for financial institutions.",
}

const features = [
  {
    title: "PCI DSS Compliance",
    description: "Full compliance with payment card industry standards",
    icon: <CreditCard className="h-6 w-6" />
  },
  {
    title: "Transaction Security",
    description: "Advanced protection for financial transactions",
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "Fraud Prevention",
    description: "Real-time fraud detection and prevention",
    icon: <AlertTriangle className="h-6 w-6" />
  },
  {
    title: "Compliance Monitoring",
    description: "Continuous monitoring of security controls",
    icon: <Activity className="h-6 w-6" />
  }
]

const benefits = [
  {
    title: "Regulatory Compliance",
    description: "Meet PCI DSS and financial regulations",
    icon: <FileCheck className="h-6 w-6" />
  },
  {
    title: "Secure Transactions",
    description: "Protect financial data and transactions",
    icon: <Lock className="h-6 w-6" />
  },
  {
    title: "Risk Management",
    description: "Reduce security and compliance risks",
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "Business Continuity",
    description: "Ensure uninterrupted financial operations",
    icon: <Building2 className="h-6 w-6" />
  }
]

const solutions = [
  {
    category: "Security",
    items: [
      "PCI DSS Compliance",
      "Transaction Security",
      "Fraud Prevention",
      "Access Control",
      "Security Monitoring",
      "Incident Response"
    ]
  },
  {
    category: "Compliance",
    items: [
      "PCI DSS Documentation",
      "Risk Assessment",
      "Policy Management",
      "Training Programs",
      "Compliance Reporting",
      "Audit Support"
    ]
  },
  {
    category: "Operations",
    items: [
      "Payment Processing",
      "Banking Systems",
      "Trading Platforms",
      "Customer Portal",
      "Staff Access Control",
      "Emergency Access"
    ]
  }
]

const pricing = [
  {
    name: "Basic",
    price: "$399",
    period: "per month",
    features: [
      "PCI DSS Compliance",
      "Basic Security",
      "Transaction Protection",
      "Basic Monitoring",
      "Email Support"
    ]
  },
  {
    name: "Professional",
    price: "$799",
    period: "per month",
    features: [
      "Advanced Security",
      "Full PCI DSS Compliance",
      "Fraud Prevention",
      "Advanced Monitoring",
      "Priority Support",
      "Custom Policies"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    features: [
      "Premium Security",
      "Full Compliance Suite",
      "Custom Solutions",
      "24/7 Support",
      "Dedicated Team",
      "SLA Guarantee"
    ]
  }
]

export default function FinancialPage() {
  return (
    <main className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Financial Solutions</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              PCI DSS-compliant security solutions for financial institutions
            </p>
          </div>

          <section className="py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-muted-foreground">
                <Image
                  src="/images/cdn.png"
                  alt="Financial Services Security Overview"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Secure Your Financial Applications and Data</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  The financial industry faces sophisticated cyber threats targeting sensitive customer data and critical infrastructure. Maintaining compliance with regulations like PCI DSS is also paramount. FGuard provides robust, compliant security solutions tailored for financial institutions.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Our Financial Solutions offer advanced WAF capabilities, fraud prevention, secure transaction processing, and continuous compliance monitoring. We help you protect against data breaches, ensure business continuity, and build trust with your customers in a highly regulated environment.
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
                      Access financial security guides and compliance resources
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
                      Get help from our financial security experts
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
                      See our financial solutions in action
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