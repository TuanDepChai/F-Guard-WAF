import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Building, Briefcase, ShoppingCart, HeartPulse, Banknote } from "lucide-react"

export const metadata: Metadata = {
  title: "Solutions | FGuard WAF",
  description: "Find the right FGuard WAF solution for your industry and business size",
}

const solutions = [
  {
    name: "Enterprise",
    description: "Tailored security solutions for large organizations with complex needs.",
    href: "/solutions/enterprise",
    icon: Building,
  },
  {
    name: "Small Business",
    description: "Affordable and effective WAF protection for small to medium businesses.",
    href: "/solutions/small-business",
    icon: Briefcase,
  },
  {
    name: "E-commerce",
    description: "Secure your online store and customer data from common web threats.",
    href: "/solutions/ecommerce",
    icon: ShoppingCart,
  },
  {
    name: "Healthcare",
    description: "Protect sensitive patient data and comply with HIPAA regulations.",
    href: "/solutions/healthcare",
    icon: HeartPulse,
  },
  {
    name: "Financial Services",
    description: "Ensure the security and compliance of financial applications and data.",
    href: "/solutions/financial",
    icon: Banknote,
  },
]

export default function SolutionsPage() {
  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Solutions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect WAF solution tailored to your industry and business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <Link key={index} href={solution.href} className="block group">
              <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="mb-4">
                  <solution.icon className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{solution.name}</h2>
                <p className="text-muted-foreground flex-1">{solution.description}</p>
                <div className="mt-4 flex items-center text-primary group-hover:underline">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
} 