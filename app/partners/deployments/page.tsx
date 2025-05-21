import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Shield,
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
  XCircle,
  Server,
  Network,
  Activity,
  Zap,
  ShieldAlert,
  ShieldX,
  ShieldCheck as ShieldCheckIcon
} from "lucide-react"

export const metadata: Metadata = {
  title: "Deployments | FGuard WAF Partner Portal",
  description: "Manage your WAF deployments and configurations.",
}

const deployments = [
  {
    id: 1,
    name: "TechCorp Production",
    status: "Active",
    customer: "TechCorp Solutions",
    type: "Production",
    lastUpdated: "2 hours ago",
    metrics: {
      requests: "1.2M",
      blocked: "15K",
      latency: "45ms",
      uptime: "99.99%"
    },
    alerts: {
      critical: 0,
      warning: 2,
      info: 5
    }
  },
  {
    id: 2,
    name: "SecureNet Staging",
    status: "Active",
    customer: "SecureNet Systems",
    type: "Staging",
    lastUpdated: "1 day ago",
    metrics: {
      requests: "850K",
      blocked: "8.5K",
      latency: "35ms",
      uptime: "99.95%"
    },
    alerts: {
      critical: 1,
      warning: 3,
      info: 7
    }
  },
  {
    id: 3,
    name: "CloudGuard Production",
    status: "Active",
    customer: "CloudGuard Inc",
    type: "Production",
    lastUpdated: "3 days ago",
    metrics: {
      requests: "2.5M",
      blocked: "25K",
      latency: "50ms",
      uptime: "99.99%"
    },
    alerts: {
      critical: 0,
      warning: 1,
      info: 4
    }
  },
  {
    id: 4,
    name: "DataShield Staging",
    status: "Active",
    customer: "DataShield Technologies",
    type: "Staging",
    lastUpdated: "1 week ago",
    metrics: {
      requests: "1.2M",
      blocked: "12K",
      latency: "40ms",
      uptime: "99.97%"
    },
    alerts: {
      critical: 2,
      warning: 4,
      info: 6
    }
  },
  {
    id: 5,
    name: "CyberSafe Production",
    status: "Active",
    customer: "CyberSafe Solutions",
    type: "Production",
    lastUpdated: "2 days ago",
    metrics: {
      requests: "2M",
      blocked: "20K",
      latency: "48ms",
      uptime: "99.99%"
    },
    alerts: {
      critical: 0,
      warning: 2,
      info: 5
    }
  }
]

const metrics = [
  {
    title: "Total Deployments",
    value: "25",
    change: "+8%",
    trend: "up",
    icon: <Server className="h-6 w-6" />
  },
  {
    title: "Active Deployments",
    value: "23",
    change: "+5%",
    trend: "up",
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "Total Requests",
    value: "7.5M",
    change: "+15%",
    trend: "up",
    icon: <Activity className="h-6 w-6" />
  },
  {
    title: "Blocked Attacks",
    value: "80.5K",
    change: "+20%",
    trend: "up",
    icon: <ShieldAlert className="h-6 w-6" />
  }
]

export default function DeploymentsPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Deployments</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Manage your WAF deployments and configurations
              </p>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Deployment
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
                  placeholder="Search deployments..."
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
            {deployments.map((deployment) => (
              <Card key={deployment.id} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        <Server className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="font-semibold text-lg">
                            {deployment.name}
                          </div>
                          <div className={`px-2 py-1 text-xs rounded-full ${
                            deployment.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}>
                            {deployment.status}
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {deployment.customer} • {deployment.type}
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        Requests
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <Activity className="h-4 w-4" />
                          <span>{deployment.metrics.requests} Total</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <ShieldAlert className="h-4 w-4" />
                          <span>{deployment.metrics.blocked} Blocked</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        Performance
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <Zap className="h-4 w-4" />
                          <span>{deployment.metrics.latency} Latency</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4" />
                          <span>{deployment.metrics.uptime} Uptime</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        Alerts
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <ShieldX className="h-4 w-4 text-red-500" />
                          <span>{deployment.alerts.critical} Critical</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <AlertTriangle className="h-4 w-4 text-yellow-500" />
                          <span>{deployment.alerts.warning} Warnings</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <ShieldCheckIcon className="h-4 w-4 text-green-500" />
                          <span>{deployment.alerts.info} Info</span>
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
                          <span>Last Updated: {deployment.lastUpdated}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4" />
                          <span>Created: Jan 2024</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Network className="h-4 w-4" />
                          <span>Region: US East</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-6">
                    <Button variant="outline" size="sm">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      View Logs
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      Configuration
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