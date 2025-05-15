import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function ComplianceCertifications() {
  const certifications = [
    {
      name: "SOC 2 Type II",
      description:
        "Service Organization Control 2 Type II certification for security, availability, and confidentiality.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "ISO 27001",
      description: "International standard for information security management systems (ISMS).",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard compliance for handling cardholder data.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "GDPR Compliant",
      description: "Compliance with the European Union's General Data Protection Regulation.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "HIPAA Compliant",
      description: "Compliance with the Health Insurance Portability and Accountability Act for healthcare data.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "CSA STAR",
      description: "Cloud Security Alliance Security, Trust & Assurance Registry certification.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Certifications</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            FGuard has achieved and maintains compliance with leading security standards and certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative h-20 w-20 mb-4">
                    <Image src={cert.image || "/placeholder.svg"} alt={cert.name} fill className="object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{cert.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
