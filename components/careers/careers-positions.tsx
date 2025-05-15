import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function CareersPositions() {
  const positions = [
    {
      title: "Senior Security Engineer",
      department: "Engineering",
      location: "San Francisco, CA (Remote Available)",
      type: "Full-time",
      description: "Design and implement advanced security features for our WAF platform",
      requirements: [
        "5+ years of experience in security engineering",
        "Strong knowledge of web application security",
        "Experience with cloud infrastructure",
        "Programming skills in Go, Python, or similar languages",
      ],
    },
    {
      title: "Product Manager, Security",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      description: "Lead the product strategy for our enterprise security solutions",
      requirements: [
        "3+ years of product management experience",
        "Background in cybersecurity or related field",
        "Experience with enterprise software products",
        "Strong analytical and communication skills",
      ],
    },
    {
      title: "Security Researcher",
      department: "Research",
      location: "Boston, MA (Remote Available)",
      type: "Full-time",
      description: "Research emerging threats and develop detection mechanisms",
      requirements: [
        "Experience in vulnerability research",
        "Knowledge of attack techniques and methodologies",
        "Familiarity with OWASP Top 10 and CWE",
        "Programming skills in Python or similar languages",
      ],
    },
  ]

  return (
    <section id="positions" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Join our team and help build the future of web application security
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {positions.map((position, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <CardTitle className="text-xl">{position.title}</CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {position.department} • {position.location}
                    </p>
                  </div>
                  <Badge variant="outline">{position.type}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{position.description}</p>
                <div>
                  <h4 className="font-medium mb-2">Requirements:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                    {position.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full md:w-auto">Apply Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
