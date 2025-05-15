import { Card, CardContent } from "@/components/ui/card"
import { Heart, Globe, BookOpen, Calendar, DollarSign, Home } from "lucide-react"

export default function CareersBenefits() {
  const benefits = [
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Comprehensive Healthcare",
      description: "Medical, dental, and vision coverage for you and your dependents",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-primary" />,
      title: "Competitive Compensation",
      description: "Competitive salary and equity packages to reward your contributions",
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Flexible PTO",
      description: "Unlimited paid time off to rest, recharge, and pursue personal interests",
    },
    {
      icon: <Home className="h-10 w-10 text-primary" />,
      title: "Remote-Friendly",
      description: "Work from anywhere with flexible remote and hybrid work options",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Learning & Development",
      description: "Professional development budget and continuous learning opportunities",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Global Team Events",
      description: "Regular team retreats and events to connect with colleagues worldwide",
    },
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Benefits & Perks</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We take care of our team with comprehensive benefits and perks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
