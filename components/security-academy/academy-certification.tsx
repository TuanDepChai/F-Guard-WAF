import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AcademyCertification() {
  const certifications = [
    {
      title: "FGuard Certified Security Specialist",
      description: "Foundation-level certification for web application security professionals",
      level: "Foundation",
      price: "$199",
      benefits: [
        "Validate your web security knowledge",
        "Learn WAF implementation best practices",
        "Understand OWASP Top 10 vulnerabilities",
        "Digital badge and certificate",
        "Access to exclusive community",
      ],
    },
    {
      title: "FGuard Certified Security Professional",
      description: "Advanced certification for experienced security practitioners",
      level: "Professional",
      price: "$399",
      benefits: [
        "Advanced WAF configuration techniques",
        "Security incident response training",
        "API security implementation",
        "Digital badge and certificate",
        "Priority access to security webinars",
      ],
    },
    {
      title: "FGuard Certified Security Architect",
      description: "Expert-level certification for security architects and leaders",
      level: "Expert",
      price: "$599",
      benefits: [
        "Security architecture design principles",
        "Advanced threat modeling techniques",
        "Enterprise security strategy development",
        "Digital badge and certificate",
        "Invitation to annual security summit",
      ],
    },
  ]

  return (
    <section id="certification" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Professional Certifications</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Validate your security expertise with industry-recognized certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-center">{cert.title}</CardTitle>
                <CardDescription className="text-center">{cert.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4 text-center">
                  <span className="text-2xl font-bold">{cert.price}</span>
                </div>
                <div className="space-y-2">
                  {cert.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="#">
                  <Button>Get Certified</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">Certification Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-primary">1</span>
              </div>
              <h4 className="font-medium mb-2">Prepare</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Complete recommended courses and study materials
              </p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-primary">2</span>
              </div>
              <h4 className="font-medium mb-2">Take Exam</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Complete the proctored online certification exam
              </p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-primary">3</span>
              </div>
              <h4 className="font-medium mb-2">Get Certified</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Receive your digital badge and official certificate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
