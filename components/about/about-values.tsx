import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Users, Lock, Lightbulb, Globe } from "lucide-react"

export default function AboutValues() {
  const values = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Security First",
      description:
        "We prioritize security in everything we do, from our product development to our internal operations.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Innovation",
      description: "We continuously innovate to stay ahead of evolving threats and provide cutting-edge protection.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Customer Success",
      description: "We measure our success by the success of our customers in achieving their security goals.",
    },
    {
      icon: <Lock className="h-10 w-10 text-primary" />,
      title: "Trust & Transparency",
      description: "We build trust through transparent practices and honest communication with our customers.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Education",
      description: "We believe in empowering our customers through education and knowledge sharing.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Global Impact",
      description: "We strive to make the internet safer for everyone, regardless of location or resources.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            The core principles that guide our decisions and shape our company culture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
