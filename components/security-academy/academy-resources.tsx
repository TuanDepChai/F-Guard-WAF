import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Video, Download, BookOpen } from "lucide-react"
import Link from "next/link"

export default function AcademyResources() {
  const resources = [
    {
      title: "Security Best Practices Guide",
      description: "Comprehensive guide to web application security best practices",
      icon: <FileText className="h-10 w-10 text-primary" />,
      type: "PDF Guide",
      link: "#",
    },
    {
      title: "WAF Implementation Webinar",
      description: "Expert walkthrough of WAF implementation and optimization",
      icon: <Video className="h-10 w-10 text-primary" />,
      type: "Webinar Recording",
      link: "#",
    },
    {
      title: "Security Checklist Templates",
      description: "Ready-to-use security checklists for different application types",
      icon: <Download className="h-10 w-10 text-primary" />,
      type: "Templates",
      link: "#",
    },
    {
      title: "Web Security Glossary",
      description: "Comprehensive glossary of web security terms and concepts",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      type: "Reference",
      link: "#",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Free Learning Resources</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Expand your security knowledge with our collection of free resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {resources.map((resource, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <div className="flex justify-center mb-4">{resource.icon}</div>
                <CardTitle className="text-center">{resource.title}</CardTitle>
                <CardDescription className="text-center">{resource.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-center text-sm text-gray-600 dark:text-gray-400">{resource.type}</div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href={resource.link}>
                  <Button variant="outline">Access Resource</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="#">
            <Button variant="outline">Browse Resource Library</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
