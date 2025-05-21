import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  GraduationCap,
  Search,
  Filter,
  Play,
  BookOpen,
  Award,
  Star,
  MoreVertical,
  MessageSquare,
  FileText,
  Shield,
  Target,
  Clock,
  Users,
  Calendar
} from "lucide-react"

export const metadata: Metadata = {
  title: "Training Management | FGuard WAF Partner Portal",
  description: "Access training materials and track your team's progress.",
}

const courses = [
  {
    title: "FGuard WAF Fundamentals",
    category: "Technical",
    level: "Beginner",
    duration: "4 hours",
    progress: 100,
    status: "Completed",
    instructor: "John Smith",
    lastAccessed: "March 15, 2024",
    rating: 4.8,
    students: 245
  },
  {
    title: "Advanced Security Configuration",
    category: "Technical",
    level: "Advanced",
    duration: "6 hours",
    progress: 75,
    status: "In Progress",
    instructor: "Sarah Johnson",
    lastAccessed: "March 12, 2024",
    rating: 4.9,
    students: 180
  },
  {
    title: "Sales Enablement Workshop",
    category: "Sales",
    level: "Intermediate",
    duration: "3 hours",
    progress: 50,
    status: "In Progress",
    instructor: "Michael Chen",
    lastAccessed: "March 10, 2024",
    rating: 4.7,
    students: 320
  },
  {
    title: "Partner Program Overview",
    category: "Business",
    level: "Beginner",
    duration: "2 hours",
    progress: 0,
    status: "Not Started",
    instructor: "Lisa Wang",
    lastAccessed: "Not accessed",
    rating: 4.6,
    students: 450
  }
]

const certifications = [
  {
    title: "FGuard WAF Certified Professional",
    level: "Professional",
    requirements: "Complete all technical courses",
    validity: "2 years",
    status: "Active",
    expiryDate: "March 2026"
  },
  {
    title: "FGuard WAF Sales Expert",
    level: "Expert",
    requirements: "Complete sales training",
    validity: "1 year",
    status: "Active",
    expiryDate: "December 2024"
  },
  {
    title: "FGuard WAF Security Specialist",
    level: "Specialist",
    requirements: "Complete security courses",
    validity: "2 years",
    status: "Pending",
    expiryDate: "Not applicable"
  }
]

const upcomingSessions = [
  {
    title: "Live Q&A Session",
    instructor: "John Smith",
    date: "March 20, 2024",
    time: "10:00 AM PST",
    duration: "1 hour",
    participants: 45
  },
  {
    title: "Technical Deep Dive",
    instructor: "Sarah Johnson",
    date: "March 22, 2024",
    time: "2:00 PM PST",
    duration: "2 hours",
    participants: 32
  },
  {
    title: "Sales Best Practices",
    instructor: "Michael Chen",
    date: "March 25, 2024",
    time: "11:00 AM PST",
    duration: "1.5 hours",
    participants: 28
  }
]

export default function TrainingPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Training Management</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Access training materials and track your team's progress
              </p>
            </div>
            <Button>
              <Play className="mr-2 h-4 w-4" />
              Start Learning
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold">{cert.title}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Level: {cert.level}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-medium">Requirements:</span> {cert.requirements}
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Validity:</span> {cert.validity}
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Status:</span> {cert.status}
                    </div>
                    {cert.expiryDate !== "Not applicable" && (
                      <div className="text-sm">
                        <span className="font-medium">Expires:</span> {cert.expiryDate}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Upcoming Training Sessions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingSessions.map((session, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">{session.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          Instructor: {session.instructor}
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <Clock className="h-4 w-4" />
                            <span>{session.date} at {session.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <Clock className="h-4 w-4" />
                            <span>Duration: {session.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <Users className="h-4 w-4" />
                            <span>{session.participants} participants</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search courses..."
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
              {courses.map((course, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg text-primary">
                          <BookOpen className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-semibold mb-1">{course.title}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            {course.category} • {course.level} • {course.duration}
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <Users className="h-4 w-4" />
                              <span>Instructor: {course.instructor}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <Star className="h-4 w-4" />
                              <span>Rating: {course.rating} ({course.students} students)</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <Clock className="h-4 w-4" />
                              <span>Last accessed: {course.lastAccessed}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-4">
                        <div className="text-right">
                          <div className="font-semibold">{course.status}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Progress: {course.progress}%
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Play className="h-4 w-4" />
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
              Contact our training support team if you need help with any courses or have questions.
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