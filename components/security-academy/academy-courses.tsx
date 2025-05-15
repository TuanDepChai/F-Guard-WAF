import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, BookOpen, Award } from "lucide-react"
import Link from "next/link"

export default function AcademyCourses() {
  const beginnerCourses = [
    {
      title: "Web Security Fundamentals",
      description: "Learn the basics of web application security and common vulnerabilities",
      duration: "4 hours",
      modules: 6,
      level: "Beginner",
      free: true,
    },
    {
      title: "Introduction to WAF Technology",
      description: "Understand how web application firewalls work and their role in security",
      duration: "3 hours",
      modules: 5,
      level: "Beginner",
      free: true,
    },
    {
      title: "OWASP Top 10 Explained",
      description: "Detailed overview of the OWASP Top 10 web application security risks",
      duration: "6 hours",
      modules: 10,
      level: "Beginner",
      free: false,
    },
  ]

  const intermediateCourses = [
    {
      title: "Advanced WAF Configuration",
      description: "Learn how to configure and optimize WAF rules for your applications",
      duration: "8 hours",
      modules: 12,
      level: "Intermediate",
      free: false,
    },
    {
      title: "Security Incident Response",
      description: "Develop skills to effectively respond to and mitigate security incidents",
      duration: "6 hours",
      modules: 8,
      level: "Intermediate",
      free: false,
    },
    {
      title: "API Security Best Practices",
      description: "Learn how to secure APIs against common attacks and vulnerabilities",
      duration: "5 hours",
      modules: 7,
      level: "Intermediate",
      free: false,
    },
  ]

  const advancedCourses = [
    {
      title: "Advanced Threat Hunting",
      description: "Master techniques for identifying and neutralizing sophisticated threats",
      duration: "10 hours",
      modules: 14,
      level: "Advanced",
      free: false,
    },
    {
      title: "Security Architecture Design",
      description: "Learn to design secure web application architectures and defense in depth",
      duration: "12 hours",
      modules: 15,
      level: "Advanced",
      free: false,
    },
    {
      title: "Cloud Security Mastery",
      description: "Advanced security techniques for cloud-native applications and infrastructure",
      duration: "9 hours",
      modules: 12,
      level: "Advanced",
      free: false,
    },
  ]

  const renderCourseCards = (courses: any[]) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{course.title}</CardTitle>
                {course.free ? (
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Free</Badge>
                ) : (
                  <Badge variant="outline">Premium</Badge>
                )}
              </div>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                <Clock className="h-4 w-4 mr-2" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                <BookOpen className="h-4 w-4 mr-2" />
                <span>{course.modules} modules</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Award className="h-4 w-4 mr-2" />
                <span>{course.level}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant={course.free ? "default" : "outline"} className="w-full">
                {course.free ? "Start Learning" : "Enroll Now"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <section id="courses" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Security Courses</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Comprehensive courses designed by security experts to build your web security skills
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="beginner" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="beginner">Beginner</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>

            <TabsContent value="beginner" className="mt-6">
              {renderCourseCards(beginnerCourses)}
            </TabsContent>

            <TabsContent value="intermediate" className="mt-6">
              {renderCourseCards(intermediateCourses)}
            </TabsContent>

            <TabsContent value="advanced" className="mt-6">
              {renderCourseCards(advancedCourses)}
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <Link href="#">
              <Button variant="outline">View All Courses</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
