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
  FileSpreadsheet
} from "lucide-react"

export const metadata: Metadata = {
  title: "Documents | FGuard WAF Partner Portal",
  description: "Manage your documents and resources.",
}

const documents = [
  {
    id: 1,
    name: "Partner Agreement",
    type: "PDF",
    size: "2.5 MB",
    category: "Legal",
    lastModified: "March 1, 2024",
    status: "Active",
    icon: <FileText className="h-6 w-6" />
  },
  {
    id: 2,
    name: "Marketing Guidelines",
    type: "PDF",
    size: "1.8 MB",
    category: "Marketing",
    lastModified: "February 15, 2024",
    status: "Active",
    icon: <FileText className="h-6 w-6" />
  },
  {
    id: 3,
    name: "Technical Documentation",
    type: "PDF",
    size: "3.2 MB",
    category: "Technical",
    lastModified: "February 1, 2024",
    status: "Active",
    icon: <FileText className="h-6 w-6" />
  },
  {
    id: 4,
    name: "Product Roadmap",
    type: "PDF",
    size: "1.5 MB",
    category: "Product",
    lastModified: "January 20, 2024",
    status: "Active",
    icon: <FileText className="h-6 w-6" />
  },
  {
    id: 5,
    name: "Sales Playbook",
    type: "PDF",
    size: "2.1 MB",
    category: "Sales",
    lastModified: "January 15, 2024",
    status: "Active",
    icon: <FileText className="h-6 w-6" />
  }
]

const categories = [
  {
    name: "All Documents",
    count: 25,
    icon: <Folder className="h-5 w-5" />
  },
  {
    name: "Legal",
    count: 5,
    icon: <FileText className="h-5 w-5" />
  },
  {
    name: "Marketing",
    count: 8,
    icon: <FileImage className="h-5 w-5" />
  },
  {
    name: "Technical",
    count: 7,
    icon: <FileCode className="h-5 w-5" />
  },
  {
    name: "Sales",
    count: 5,
    icon: <FileSpreadsheet className="h-5 w-5" />
  }
]

export default function DocumentsPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Documents</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Manage your documents and resources
              </p>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Upload Document
            </Button>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search documents..."
                  className="pl-10"
                />
              </div>
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="font-semibold mb-4">Categories</div>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className="w-full justify-start"
                      >
                        <div className="flex items-center gap-3">
                          {category.icon}
                          <span>{category.name}</span>
                          <span className="ml-auto text-sm text-gray-500">
                            {category.count}
                          </span>
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-3">
              <div className="grid grid-cols-1 gap-6">
                {documents.map((document) => (
                  <Card key={document.id} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg text-primary">
                            {document.icon}
                          </div>
                          <div>
                            <div className="font-semibold text-lg">
                              {document.name}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              {document.category} • {document.type} • {document.size}
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
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
                          View
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 