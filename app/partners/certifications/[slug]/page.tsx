import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { 
  Clock,
  BookOpen,
  Award,
  ArrowLeft,
  Share2,
  Bookmark,
  Download,
  FileText,
  Video,
  CheckCircle2,
  Users,
  BarChart
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Certification Details | FGuard WAF Partner Certifications",
  description: "Get certified in FGuard WAF and enhance your security expertise.",
}

const modules = [
  {
    title: "Introduction to Web Security",
    duration: "2 hours",
    type: "Video",
    completed: true
  },
  {
    title: "FGuard WAF Architecture",
    duration: "3 hours",
    type: "Video",
    completed: true
  },
  {
    title: "Installation and Configuration",
    duration: "4 hours",
    type: "Hands-on",
    completed: false
  },
  {
    title: "Security Policies",
    duration: "3 hours",
    type: "Video",
    completed: false
  },
  {
    title: "Advanced Features",
    duration: "5 hours",
    type: "Hands-on",
    completed: false
  },
  {
    title: "Troubleshooting",
    duration: "2 hours",
    type: "Video",
    completed: false
  }
]

const resources = [
  {
    title: "Study Guide",
    type: "PDF",
    size: "3.2 MB",
    icon: <FileText className="h-5 w-5" />
  },
  {
    title: "Practice Exam",
    type: "PDF",
    size: "1.5 MB",
    icon: <FileText className="h-5 w-5" />
  },
  {
    title: "Video Course",
    type: "MP4",
    size: "2.8 GB",
    icon: <Video className="h-5 w-5" />
  }
]

const stats = [
  {
    title: "Average Completion Time",
    value: "3 weeks",
    icon: <Clock className="h-5 w-5" />
  },
  {
    title: "Pass Rate",
    value: "85%",
    icon: <Award className="h-5 w-5" />
  },
  {
    title: "Active Students",
    value: "1,234",
    icon: <Users className="h-5 w-5" />
  },
  {
    title: "Success Rate",
    value: "92%",
    icon: <BarChart className="h-5 w-5" />
  }
]

export default function CertificationPage({ params }: { params: { slug: string } }) {
  const certification = {
    title: "FGuard WAF Professional Certification",
    description: "Master the implementation and management of FGuard WAF with our comprehensive certification program. Learn advanced security concepts, best practices, and hands-on skills to protect web applications effectively.",
    level: "Professional",
    duration: "40 hours",
    validity: "2 years",
    image: "/images/certifications/professional.jpg",
    progress: 33,
    nextModule: "Installation and Configuration"
  }

  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/partners/certifications">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Certifications
            </Button>
          </Link>

          <div className="aspect-video relative overflow-hidden rounded-lg mb-8">
            <img
              src={certification.image}
              alt={certification.title}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{certification.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>{certification.level}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Valid for {certification.validity}</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-4">{certification.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            {certification.description}
          </p>

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
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold">Course Progress</h2>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {certification.progress}% Complete
              </div>
            </div>
            <Progress value={certification.progress} className="h-2 mb-4" />
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Next module: {certification.nextModule}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Course Modules</h2>
            <div className="space-y-4">
              {modules.map((module, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg text-primary">
                          {module.completed ? (
                            <CheckCircle2 className="h-5 w-5" />
                          ) : (
                            <BookOpen className="h-5 w-5" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold">{module.title}</h3>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {module.duration} • {module.type}
                          </div>
                        </div>
                      </div>
                      <Button
                        variant={module.completed ? "outline" : "default"}
                        size="sm"
                      >
                        {module.completed ? "Review" : "Start"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Course Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        {resource.icon}
                      </div>
                      <div>
                        <div className="font-semibold">{resource.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {resource.type} • {resource.size}
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="w-full mt-4">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-b py-6 mb-8">
            <Button size="lg" className="group">
              Start Certification
              <ArrowLeft className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 