import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  FileText,
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
  XCircle,
  BarChart,
  LineChart,
  PieChart,
  TrendingUp,
  TrendingDown,
  ArrowUp,
  ArrowDown,
  DollarSign,
  Users,
  ShieldAlert,
  Activity
} from "lucide-react"

export const metadata: Metadata = {
  title: "Reports | FGuard WAF Partner Portal",
  description: "View and generate reports for your WAF deployments.",
}

const reports = [
  {
    id: 1,
    name: "Monthly Security Report",
    type: "Security",
    format: "PDF",
    size: "2.5 MB",
    generated: "March 1, 2024",
    period: "February 2024",
    metrics: {
      attacks: "150K",
      blocked: "145K",
      success: "96.7%",
      revenue: "$25K"
    }
  },
  {
    id: 2,
    name: "Performance Analysis",
    type: "Performance",
    format: "PDF",
    size: "1.8 MB",
    generated: "March 1, 2024",
    period: "February 2024",
    metrics: {
      requests: "1.2M",
      latency: "45ms",
      uptime: "99.99%",
      revenue: "$15K"
    }
  },
  {
    id: 3,
    name: "Customer Usage Report",
    type: "Usage",
    format: "PDF",
    size: "3.2 MB",
    generated: "March 1, 2024",
    period: "February 2024",
    metrics: {
      customers: "25",
      deployments: "85",
      growth: "+12%",
      revenue: "$50K"
    }
  },
  {
    id: 4,
    name: "Revenue Analysis",
    type: "Financial",
    format: "PDF",
    size: "1.5 MB",
    generated: "March 1, 2024",
    period: "February 2024",
    metrics: {
      revenue: "$90K",
      growth: "+15%",
      mrr: "$30K",
      arr: "$360K"
    }
  },
  {
    id: 5,
    name: "Compliance Report",
    type: "Compliance",
    format: "PDF",
    size: "2.1 MB",
    generated: "March 1, 2024",
    period: "February 2024",
    metrics: {
      standards: "5",
      compliance: "100%",
      audits: "2",
      revenue: "$20K"
    }
  }
]

const metrics = [
  {
    title: "Total Revenue",
    value: "$90K",
    change: "+15%",
    trend: "up",
    icon: <DollarSign className="h-6 w-6" />
  },
  {
    title: "Active Customers",
    value: "25",
    change: "+12%",
    trend: "up",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Blocked Attacks",
    value: "145K",
    change: "+20%",
    trend: "up",
    icon: <ShieldAlert className="h-6 w-6" />
  },
  {
    title: "Total Requests",
    value: "1.2M",
    change: "+18%",
    trend: "up",
    icon: <Activity className="h-6 w-6" />
  }
]

export default function ReportsPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Reports</h1>
              <p className="text-gray-600 dark:text-gray-400">
                View and generate reports for your WAF deployments
              </p>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Generate Report
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
                  placeholder="Search reports..."
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
            {reports.map((report) => (
              <Card key={report.id} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">
                          {report.name}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {report.type} • {report.format} • {report.size}
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
                        Period
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4" />
                          <span>{report.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4" />
                          <span>Generated: {report.generated}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        Key Metrics
                      </div>
                      <div className="space-y-1">
                        {Object.entries(report.metrics).map(([key, value], index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            {key === "revenue" ? (
                              <DollarSign className="h-4 w-4" />
                            ) : key === "attacks" ? (
                              <ShieldAlert className="h-4 w-4" />
                            ) : key === "blocked" ? (
                              <Shield className="h-4 w-4" />
                            ) : key === "success" ? (
                              <CheckCircle2 className="h-4 w-4" />
                            ) : key === "requests" ? (
                              <Activity className="h-4 w-4" />
                            ) : key === "latency" ? (
                              <Clock className="h-4 w-4" />
                            ) : key === "uptime" ? (
                              <TrendingUp className="h-4 w-4" />
                            ) : key === "customers" ? (
                              <Users className="h-4 w-4" />
                            ) : key === "deployments" ? (
                              <Shield className="h-4 w-4" />
                            ) : key === "growth" ? (
                              <TrendingUp className="h-4 w-4" />
                            ) : key === "standards" ? (
                              <CheckCircle2 className="h-4 w-4" />
                            ) : key === "compliance" ? (
                              <ShieldCheck className="h-4 w-4" />
                            ) : key === "audits" ? (
                              <FileText className="h-4 w-4" />
                            ) : key === "mrr" ? (
                              <DollarSign className="h-4 w-4" />
                            ) : key === "arr" ? (
                              <DollarSign className="h-4 w-4" />
                            ) : null}
                            <span>{key.charAt(0).toUpperCase() + key.slice(1)}: {value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        Visualizations
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <BarChart className="h-4 w-4" />
                          <span>Bar Chart</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <LineChart className="h-4 w-4" />
                          <span>Line Chart</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <PieChart className="h-4 w-4" />
                          <span>Pie Chart</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        Actions
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <Download className="h-4 w-4" />
                          <span>Download</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Share2 className="h-4 w-4" />
                          <span>Share</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <FileText className="h-4 w-4" />
                          <span>View Details</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-6">
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      View Details
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