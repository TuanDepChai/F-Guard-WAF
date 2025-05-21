import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Globe, Zap } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    title: "Reseller Program",
    description: "Become an authorized reseller of FGuard WAF and grow your business with our industry-leading security solution.",
    icon: <Shield className="h-12 w-12 text-primary" />,
    href: "/partners/programs/reseller"
  },
  {
    title: "Technology Partner Program",
    description: "Integrate FGuard WAF with your technology stack and create powerful security solutions for your customers.",
    icon: <Zap className="h-12 w-12 text-primary" />,
    href: "/partners/programs/technology"
  },
  {
    title: "Security Partner Program",
    description: "Partner with FGuard to provide comprehensive security solutions to your customers.",
    icon: <Shield className="h-12 w-12 text-primary" />,
    href: "/partners/programs/security"
  },
  {
    title: "Service Partner Program",
    description: "Deliver FGuard WAF implementation and management services to your customers.",
    icon: <Users className="h-12 w-12 text-primary" />,
    href: "/partners/programs/service"
  }
]

export default function PartnersPrograms() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Partner Programs</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Choose the right partner program to grow your business with FGuard WAF
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="mb-6">{program.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{program.description}</p>
                
                <Link href={program.href}>
                  <Button className="w-full group">
                    Learn More
                    <Globe className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 