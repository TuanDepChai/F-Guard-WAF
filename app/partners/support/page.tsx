import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  HelpCircle,
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
  title: "Support | FGuard WAF Partner Portal",
  description: "Get help and support for your FGuard WAF deployments.",
}

const tickets = [
  {
    id: 1,
    title: "WAF Configuration Issue",
    status: "Open",
    priority: "High",
    category: "Technical",
    customer: "TechCorp Solutions",
    created: "2 hours ago",
    lastUpdated: "1 hour ago",
    assignedTo: "Sarah Johnson"
  },
  {
    id: 2,
    title: "Billing Question",
    status: "In Progress",
    priority: "Medium",
    category: "Billing",
    customer: "SecureNet Systems",
    created: "1 day ago",
    lastUpdated: "12 hours ago",
    assignedTo: "Michael Chen"
  },
  {
    id: 3,
    title: "Feature Request",
    status: "Open",
    priority: "Low",
    category: "Product",
    customer: "CloudGuard Inc",
    created: "3 days ago",
    lastUpdated: "2 days ago",
    assignedTo: "Emily Rodriguez"
  },
  {
    id: 4,
    title: "Deployment Assistance",
    status: "Resolved",
    priority: "High",
    category: "Technical",
    customer: "DataShield Technologies",
    created: "1 week ago",
    lastUpdated: "5 days ago",
    assignedTo: "David Kim"
  },
  {
    id: 5,
    title: "Training Request",
    status: "Open",
    priority: "Medium",
    category: "Training",
    customer: "CyberSafe Solutions",
    created: "2 days ago",
    lastUpdated: "1 day ago",
    assignedTo: "Lisa Wang"
  }
]

const resources = [
  {
    title: "Documentation",
    description: "Access our comprehensive documentation and guides",
    icon: <BookOpen className="h-6 w-6" />,
    link: "/docs"
  },
  {
    title: "Training Videos",
    description: "Watch video tutorials and training sessions",
    icon: <Video className="h-6 w-6" />,
    link: "/training"
  },
  {
    title: "Knowledge Base",
    description: "Browse our knowledge base for common solutions",
    icon: <FileText className="h-6 w-6" />,
    link: "/kb"
  },
  {
    title: "Community Forum",
    description: "Connect with other partners and share experiences",
    icon: <MessageSquare className="h-6 w-6" />,
    link: "/forum"
  }
]

export default function SupportPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Support</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Get help and support for your FGuard WAF deployments
              </p>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Ticket
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {resources.map((resource, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {resource.icon}
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{resource.title}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {resource.description}
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a href={resource.link}>Access Resource</a>
                      </Button>
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
                  placeholder="Search tickets..."
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
            {tickets.map((ticket) => (
              <Card key={ticket.id} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        <HelpCircle className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="font-semibold text-lg">
                            {ticket.title}
                          </div>
                          <div className={`px-2 py-1 text-xs rounded-full ${
                            ticket.status === "Open"
                              ? "bg-yellow-100 text-yellow-800"
                              : ticket.status === "In Progress"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-green-100 text-green-800"
                          }`}>
                            {ticket.status}
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {ticket.category} • {ticket.customer}
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
                        Priority
                      </div>
                      <div className="font-semibold">{ticket.priority}</div>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        Created
                      </div>
                      <div className="font-semibold">{ticket.created}</div>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        Last Updated
                      </div>
                      <div className="font-semibold">{ticket.lastUpdated}</div>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        Assigned To
                      </div>
                      <div className="font-semibold">{ticket.assignedTo}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-6">
                    <Button variant="outline" size="sm">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      Add Note
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