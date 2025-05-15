import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Lightbulb, Zap } from "lucide-react"

export default function CareersValues() {
  const values = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Security First",
      description:
        "We prioritize security in everything we do, from our product development to our internal operations.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Collaborative Culture",
      description:
        "We believe in the power of teamwork and foster an environment where diverse perspectives are valued.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Continuous Learning",
      description: "We encourage continuous learning and provide resources for professional development and growth.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Innovation",
      description: "We embrace innovation and creative thinking to solve complex security challenges.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Culture</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            What it's like to work at FGuard and the values that drive our team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
