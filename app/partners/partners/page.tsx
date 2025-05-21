import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Users,
  Search,
  Filter,
  Plus,
  Mail,
  Phone,
  Globe,
  Building,
  Star,
  MoreVertical,
  MessageSquare,
  FileText,
  Shield,
  Award,
  TrendingUp,
  DollarSign,
  Target
} from "lucide-react"

export const metadata: Metadata = {
  title: "Partner Management | FGuard WAF Partner Portal",
  description: "Manage your partner relationships and track their performance.",
}

const partners = [
  {
    name: "SecureTech Solutions",
    type: "Gold Partner",
    status: "Active",
    contact: "David Wilson",
    email: "david@securetech.com",
    phone: "+1 (555) 123-4567",
    website: "www.securetech.com",
    customers: 45,
    revenue: "$850,000",
    performance: "Excellent",
    tier: "Gold",
    joinDate: "January 2023"
  },
  {
    name: "CloudGuard Partners",
    type: "Silver Partner",
    status: "Active",
    contact: "Lisa Chen",
    email: "lisa@cloudguard.com",
    phone: "+1 (555) 234-5678",
    website: "www.cloudguard.com",
    customers: 28,
    revenue: "$520,000",
    performance: "Good",
    tier: "Silver",
    joinDate: "March 2023"
  },
  {
    name: "CyberShield Systems",
    type: "Platinum Partner",
    status: "Active",
    contact: "Robert Johnson",
    email: "robert@cybershield.com",
    phone: "+1 (555) 345-6789",
    website: "www.cybershield.com",
    customers: 62,
    revenue: "$1.2M",
    performance: "Outstanding",
    tier: "Platinum",
    joinDate: "October 2022"
  },
  {
    name: "DataDefense Inc",
    type: "Silver Partner",
    status: "Active",
    contact: "Maria Garcia",
    email: "maria@datadefense.com",
    phone: "+1 (555) 456-7890",
    website: "www.datadefense.com",
    customers: 32,
    revenue: "$480,000",
    performance: "Good",
    tier: "Silver",
    joinDate: "May 2023"
  }
]

const stats = [
  {
    title: "Total Partners",
    value: "156",
    change: "+12%",
    icon: <Users className="h-5 w-5" />
  },
  {
    title: "Total Revenue",
    value: "$12.5M",
    change: "+18%",
    icon: <DollarSign className="h-5 w-5" />
  },
  {
    title: "Average Performance",
    value: "92%",
    change: "+3%",
    icon: <TrendingUp className="h-5 w-5" />
  },
  {
    title: "Partner Satisfaction",
    value: "95%",
    change: "+5%",
    icon: <Star className="h-5 w-5" />
  }
]

const tiers = [
  {
    name: "Platinum",
    requirements: "Annual revenue > $1M",
    benefits: "Highest commission, dedicated support",
    partners: 12
  },
  {
    name: "Gold",
    requirements: "Annual revenue > $500K",
    benefits: "Premium support, advanced training",
    partners: 35
  },
  {
    name: "Silver",
    requirements: "Annual revenue > $250K",
    benefits: "Standard support, basic training",
    partners: 89
  },
  {
    name: "Bronze",
    requirements: "Annual revenue > $100K",
    benefits: "Basic support, self-service",
    partners: 20
  }
]

export default function PartnersPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Partner Management</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Manage your partner relationships and track their performance
              </p>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Partner
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.title}
                      </div>
                      <div className="font-semibold">{stat.value}</div>
                      <div className="text-sm text-green-600">
                        {stat.change}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {tiers.map((tier, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <Target className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold">{tier.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {tier.partners} partners
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-medium">Requirements:</span> {tier.requirements}
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Benefits:</span> {tier.benefits}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search partners..."
                  className="pl-10"
                />
              </div>
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 gap-8">
              {partners.map((partner, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg text-primary">
                          <Building className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-semibold mb-1">{partner.name}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            {partner.type} • {partner.status} • {partner.tier}
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <Users className="h-4 w-4" />
                              <span>{partner.contact}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <Mail className="h-4 w-4" />
                              <span>{partner.email}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <Phone className="h-4 w-4" />
                              <span>{partner.phone}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <Globe className="h-4 w-4" />
                              <span>{partner.website}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-4">
                        <div className="text-right">
                          <div className="font-semibold">{partner.revenue}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {partner.customers} customers
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Performance: {partner.performance}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Joined: {partner.joinDate}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <FileText className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Contact our partner support team if you need help managing your partners or have any questions.
            </p>
            <Button>
              Contact Support
              <MessageSquare className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
} 