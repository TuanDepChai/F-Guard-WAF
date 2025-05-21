import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ArrowRight, Shield, Users, Globe, Zap } from "lucide-react"
import Link from "next/link"

const programs = {
  reseller: {
    title: "Reseller Program",
    description: "Become an authorized reseller of FGuard WAF and grow your business with our industry-leading security solution.",
    benefits: [
      "Exclusive reseller pricing",
      "Deal registration protection",
      "Sales and technical training",
      "Marketing support and materials",
      "Dedicated partner manager",
      "Revenue sharing opportunities"
    ],
    requirements: [
      "Established security business",
      "Minimum annual revenue",
      "Technical expertise",
      "Customer support capabilities",
      "Marketing commitment"
    ],
    icon: <Shield className="h-12 w-12 text-primary" />
  },
  technology: {
    title: "Technology Partner Program",
    description: "Integrate FGuard WAF with your technology stack and create powerful security solutions for your customers.",
    benefits: [
      "API access and documentation",
      "Technical integration support",
      "Joint go-to-market opportunities",
      "Product roadmap influence",
      "Technical certification",
      "Co-marketing activities"
    ],
    requirements: [
      "Technology company",
      "Integration capabilities",
      "Security focus",
      "Customer base",
      "Technical resources"
    ],
    icon: <Zap className="h-12 w-12 text-primary" />
  },
  security: {
    title: "Security Partner Program",
    description: "Partner with FGuard to provide comprehensive security solutions to your customers.",
    benefits: [
      "Security expertise sharing",
      "Joint security assessments",
      "Threat intelligence sharing",
      "Security certification",
      "Technical collaboration",
      "Market expansion support"
    ],
    requirements: [
      "Security company",
      "Security expertise",
      "Customer base",
      "Technical capabilities",
      "Security certifications"
    ],
    icon: <Shield className="h-12 w-12 text-primary" />
  },
  service: {
    title: "Service Partner Program",
    description: "Deliver FGuard WAF implementation and management services to your customers.",
    benefits: [
      "Service delivery training",
      "Implementation support",
      "Service certification",
      "Technical resources",
      "Customer success tools",
      "Revenue opportunities"
    ],
    requirements: [
      "Service company",
      "Implementation expertise",
      "Customer support",
      "Technical team",
      "Service commitment"
    ],
    icon: <Users className="h-12 w-12 text-primary" />
  }
}

export async function generateMetadata({ params }: { params: { type: string } }): Promise<Metadata> {
  const program = programs[params.type as keyof typeof programs]
  
  if (!program) {
    return {
      title: "Program Not Found | FGuard WAF",
      description: "The requested partner program could not be found."
    }
  }

  return {
    title: `${program.title} | FGuard WAF Partner Program`,
    description: program.description,
    keywords: ["partner program", "reseller program", "technology partners", "security partners", "WAF partners"]
  }
}

export default function ProgramPage({ params }: { params: { type: string } }) {
  const program = programs[params.type as keyof typeof programs]
  
  if (!program) {
    notFound()
  }

  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
              {program.icon}
            </div>
            <h1 className="text-4xl font-bold mb-4">{program.title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">{program.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6">Program Benefits</h2>
                <ul className="space-y-4">
                  {program.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6">Requirements</h2>
                <ul className="space-y-4">
                  {program.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/partners/join">
              <Button size="lg" className="group">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 