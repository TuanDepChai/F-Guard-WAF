import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function AboutTeam() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      bio: "Former CISO with 15+ years of experience in cybersecurity leadership",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      bio: "Security researcher and engineer with expertise in WAF technology",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "David Rodriguez",
      role: "VP of Engineering",
      bio: "Led engineering teams at major security companies for over a decade",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Aisha Patel",
      role: "VP of Product",
      bio: "Product strategist with a background in enterprise security solutions",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
    },
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Meet the experienced team leading FGuard's mission to secure the web
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-square relative">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{member.bio}</p>
                <div className="flex space-x-2">
                  <Link href={member.linkedin} className="text-gray-500 hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href={member.twitter} className="text-gray-500 hover:text-primary">
                    <Twitter className="h-5 w-5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
