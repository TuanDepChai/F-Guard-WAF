import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Award,
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
  CheckCircle2,
  AlertTriangle,
  XCircle
} from "lucide-react"

export const metadata: Metadata = {
  title: "Certifications | FGuard WAF Partner Portal",
  description: "Manage your certifications and training progress.",
}

const certifications = [
  {
    id: 1,
    title: "FGuard WAF Professional",
    level: "Professional",
    status: "Active",
    issued: "March 15, 2023",
    expiry: "March 15, 2025",
    progress: 100,
    modules: [
      {
        title: "WAF Fundamentals",
        status: "Completed",
        completed: "March 10, 2023"
      },
      {
        title: "Advanced Security",
        status: "Completed",
        completed: "March 12, 2023"
      },
      {
        title: "Deployment Best Practices",
        status: "Completed",
        completed: "March 14, 2023"
      }
    ]
  },
  {
    id: 2,
    title: "FGuard WAF Sales Expert",
    level: "Expert",
    status: "Active",
    issued: "January 20, 2024",
    expiry: "January 20, 2025",
    progress: 75,
    modules: [
      {
        title: "Product Knowledge",
        status: "Completed",
        completed: "January 15, 2024"
      },
      {
        title: "Sales Techniques",
        status: "Completed",
        completed: "January 18, 2024"
      },
      {
        title: "Customer Success",
        status: "In Progress",
        completed: null
      }
    ]
  },
  {
    id: 3,
    title: "FGuard WAF Implementation Specialist",
    level: "Specialist",
    status: "Expired",
    issued: "June 1, 2022",
    expiry: "June 1, 2023",
    progress: 100,
    modules: [
      {
        title: "Implementation Basics",
        status: "Completed",
        completed: "May 25, 2022"
      },
      {
        title: "Advanced Configuration",
        status: "Completed",
        completed: "May 28, 2022"
      },
      {
        title: "Troubleshooting",
        status: "Completed",
        completed: "May 30, 2022"
      }
    ]
  }
]

export default function CertificationsPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Certifications</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Manage your certifications and training progress
              </p>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Certification
            </Button>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search certifications..."
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
            {certifications.map((certification) => (
              <Card key={certification.id} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        <Award className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="font-semibold text-lg">
                            {certification.title}
                          </div>
                          <div className={`px-2 py-1 text-xs rounded-full ${
                            certification.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}>
                            {certification.status}
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Level: {certification.level}
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        Issued
                      </div>
                      <div className="font-semibold">{certification.issued}</div>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        Expires
                      </div>
                      <div className="font-semibold">{certification.expiry}</div>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        Progress
                      </div>
                      <div className="font-semibold">{certification.progress}%</div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="font-medium mb-4">Training Modules</div>
                    <div className="space-y-4">
                      {certification.modules.map((module, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg"
                        >
                          <div>
                            <div className="font-medium">{module.title}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {module.completed
                                ? `Completed: ${module.completed}`
                                : "In Progress"}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {module.status === "Completed" ? (
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                            ) : module.status === "In Progress" ? (
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                            ) : (
                              <XCircle className="h-4 w-4 text-red-500" />
                            )}
                            <span className="text-sm font-medium">
                              {module.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-6">
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download Certificate
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