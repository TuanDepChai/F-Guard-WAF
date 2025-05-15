import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function PartnersShowcase() {
  const featuredPartners = [
    {
      name: "Microsoft",
      logo: "/images/partner-microsoft.png",
      description: "Joint solution for Azure-hosted applications with integrated threat intelligence",
      type: "Technology Partner",
    },
    {
      name: "AWS",
      logo: "/images/partner-aws.png",
      description: "Seamless integration with AWS WAF and Shield for comprehensive protection",
      type: "Technology Partner",
    },
    {
      name: "Google Cloud",
      logo: "/images/partner-google.png",
      description: "Enhanced security for Google Cloud Platform workloads with advanced analytics",
      type: "Technology Partner",
    },
    {
      name: "IBM",
      logo: "/images/partner-ibm.png",
      description: "Integrated security solution with IBM Security QRadar for threat detection",
      type: "Technology Partner",
    },
    {
      name: "Cisco",
      logo: "/images/partner-cisco.png",
      description: "Combined network and application security with Cisco SecureX integration",
      type: "Technology Partner",
    },
    {
      name: "Splunk",
      logo: "/images/partner-splunk.png",
      description: "Advanced security analytics and visualization through Splunk integration",
      type: "Technology Partner",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Partners</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We collaborate with industry leaders to deliver comprehensive security solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredPartners.map((partner, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-white dark:bg-gray-900 flex items-center justify-center p-6">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  width={160}
                  height={80}
                  className="max-h-24 w-auto object-contain"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{partner.name}</h3>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{partner.type}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
