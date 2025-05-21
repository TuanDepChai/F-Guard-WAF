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
  Clock,
  Calendar,
  HelpCircle,
  LifeBuoy,
  BookOpen,
  Video,
  Bell,
  Lock,
  User,
  CreditCard,
  Globe2,
  Palette,
  BellRing,
  ShieldCheck,
  Key,
  LogOut,
  Download,
  Share2,
  Folder,
  File,
  FileType,
  FileImage,
  FileVideo,
  FileAudio,
  FileArchive,
  FileCode,
  FileSpreadsheet,
  CheckCircle2,
  AlertTriangle,
  XCircle
} from "lucide-react"

export const metadata: Metadata = {
  title: "Customers | FGuard WAF Partner Portal",
  description: "Manage your customers and their WAF deployments.",
}

const customers = [
  {
    id: 1,
    name: "TechCorp Solutions",
    status: "Active",
    plan: "Enterprise",
    deployments: 5,
    lastActive: "2 hours ago",
    contact: {
      name: "John Smith",
      email: "john@techcorp.com",
      phone: "+1 (555) 123-4567"
    },
    metrics: {
      protectedSites: 12,
      blockedAttacks: 15000,
      uptime: "99.99%"
    }
  },
  {
    id: 2,
    name: "SecureNet Systems",
    status: "Active",
    plan: "Professional",
    deployments: 3,
    lastActive: "1 day ago",
    contact: {
      name: "Sarah Johnson",
      email: "sarah@securenetsys.com",
      phone: "+1 (555) 234-5678"
    },
    metrics: {
      protectedSites: 8,
      blockedAttacks: 8500,
      uptime: "99.95%"
    }
  },
  {
    id: 3,
    name: "CloudGuard Inc",
    status: "Active",
    plan: "Enterprise",
    deployments: 7,
    lastActive: "3 days ago",
    contact: {
      name: "Michael Chen",
      email: "michael@cloudguard.com",
      phone: "+1 (555) 345-6789"
    },
    metrics: {
      protectedSites: 15,
      blockedAttacks: 25000,
      uptime: "99.99%"
    }
  },
  {
    id: 4,
    name: "DataShield Technologies",
    status: "Active",
    plan: "Professional",
    deployments: 4,
    lastActive: "1 week ago",
    contact: {
      name: "Emily Rodriguez",
      email: "emily@datashield.com",
      phone: "+1 (555) 456-7890"
    },
    metrics: {
      protectedSites: 10,
      blockedAttacks: 12000,
      uptime: "99.97%"
    }
  },
  {
    id: 5,
    name: "CyberSafe Solutions",
    status: "Active",
    plan: "Enterprise",
    deployments: 6,
    lastActive: "2 days ago",
    contact: {
      name: "David Kim",
      email: "david@cybersafe.com",
      phone: "+1 (555) 567-8901"
    },
    metrics: {
      protectedSites: 14,
      blockedAttacks: 20000,
      uptime: "99.99%"
    }
  }
]

const metrics = [
  {
    title: "Total Customers",
    value: "25",
    change: "+12%",
    trend: "up",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Active Deployments",
    value: "85",
    change: "+8%",
    trend: "up",
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "Protected Sites",
    value: "150",
    change: "+15%",
    trend: "up",
    icon: <Globe className="h-6 w-6" />
  },
  {
    title: "Blocked Attacks",
    value: "1.2M",
    change: "+20%",
    trend: "up",
    icon: <ShieldCheck className="h-6 w-6" />
  }
]

export default function CustomersPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Customers</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Manage your customers and their WAF deployments
              </p>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Customer
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        {metric.title}
                      </div>
                      <div className="text-2xl font-semibold mb-1">
                        {metric.value}
                      </div>
                      <div className={`text-sm ${
                        metric.trend === "up"
                          ? "text-green-600 dark:text-green-400"
                          : "text-red-600 dark:text-red-400"
                      }`}>
                        {metric.change} from last month
                      </div>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {metric.icon}
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
                  placeholder="Search customers..."
                  className="pl-10"
                />
              </div>
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {customers.map((customer) => (
              <Card key={customer.id} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        <Building className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="font-semibold text-lg">
                            {customer.name}
                          </div>
                          <div className={`px-2 py-1 text-xs rounded-full ${
                            customer.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}>
                            {customer.status}
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {customer.plan} Plan • {customer.deployments} Deployments
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        Contact
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <User className="h-4 w-4" />
                          <span>{customer.contact.name}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="h-4 w-4" />
                          <span>{customer.contact.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4" />
                          <span>{customer.contact.phone}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        Metrics
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <Globe className="h-4 w-4" />
                          <span>{customer.metrics.protectedSites} Protected Sites</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Shield className="h-4 w-4" />
                          <span>{customer.metrics.blockedAttacks.toLocaleString()} Blocked Attacks</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4" />
                          <span>{customer.metrics.uptime} Uptime</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        Activity
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4" />
                          <span>Last Active: {customer.lastActive}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4" />
                          <span>Joined: Jan 2024</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Star className="h-4 w-4" />
                          <span>Customer Since: 1 year</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-6">
                    <Button variant="outline" size="sm">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Contact
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 