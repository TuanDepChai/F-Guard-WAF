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
  Heart,
  Stethoscope,
  Pill,
  Hospital,
  Clipboard,
  Microscope,
  TrendingUp,
  Wallet,
  Clock,
  Calendar,
  HelpCircle,
  LifeBuoy,
  Lock,
  Key,
  Database,
  FileCheck,
  FileSearch,
  FileText as FileTextIcon
} from "lucide-react"

export const metadata: Metadata = {
  title: "Healthcare Solutions | FGuard WAF",
  description: "HIPAA-compliant security solutions for healthcare organizations.",
}

const features = [
  {
    title: "HIPAA Compliance",
    description: "Full compliance with healthcare data protection standards",
    icon: <FileCheck className="h-6 w-6" />
  },
  {
    title: "Data Protection",
    description: "Advanced protection for sensitive patient information",
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "Secure Access",
    description: "Controlled access to medical records and systems",
    icon: <Lock className="h-6 w-6" />
  },
  {
    title: "Audit Trail",
    description: "Comprehensive logging and monitoring of all activities",
    icon: <Activity className="h-6 w-6" />
  }
]

const benefits = [
  {
    title: "Regulatory Compliance",
    description: "Meet HIPAA and other healthcare regulations",
    icon: <FileCheck className="h-6 w-6" />
  },
  {
    title: "Patient Privacy",
    description: "Protect sensitive patient health information",
    icon: <Heart className="h-6 w-6" />
  },
  {
    title: "Secure Operations",
    description: "Ensure secure healthcare operations",
    icon: <Hospital className="h-6 w-6" />
  },
  {
    title: "Risk Management",
    description: "Reduce security and compliance risks",
    icon: <Shield className="h-6 w-6" />
  }
]

const solutions = [
  {
    category: "Security",
    items: [
      "HIPAA Compliance",
      "Data Encryption",
      "Access Control",
      "Audit Logging",
      "Security Monitoring",
      "Incident Response"
    ]
  },
  {
    category: "Compliance",
    items: [
      "HIPAA Documentation",
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
      "EHR Protection",
      "Medical Device Security",
      "Telehealth Security",
      "Patient Portal",
      "Staff Access Control",
      "Emergency Access"
    ]
  }
]

const pricing = [
  {
    name: "Basic",
    price: "$299",
    period: "per month",
    features: [
      "HIPAA Compliance",
      "Basic Security",
      "Data Encryption",
      "Basic Monitoring",
      "Email Support"
    ]
  },
  {
    name: "Professional",
    price: "$599",
    period: "per month",
    features: [
      "Advanced Security",
      "Full HIPAA Compliance",
      "Audit Support",
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

export default function HealthcarePage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Healthcare Solutions</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              HIPAA-compliant security solutions for healthcare organizations
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
                      Access healthcare security guides and compliance resources
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
                      Get help from our healthcare security experts
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
                      See our healthcare solutions in action
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