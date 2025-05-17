import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const blogPosts = [
  {
    id: 1,
    title: "Understanding OWASP Top 10 and How FGuard Protects Against Them",
    excerpt:
      "Learn about the most critical web application security risks and how FGuard WAF helps mitigate them effectively.",
    date: "May 10, 2023",
    author: "Sarah Johnson",
    category: "Security",
    image: "/images/owasp.jpg",
    slug: "understanding-owasp-top-10",
  },
  {
    id: 2,
    title: "DDoS Attacks in 2023: Trends and Protection Strategies",
    excerpt:
      "An in-depth look at the evolving landscape of DDoS attacks and how to build robust protection mechanisms.",
    date: "April 22, 2023",
    author: "Michael Chen",
    category: "Threats",
    image: "/images/ddos-protection.jpg",
    slug: "ddos-attacks-trends-protection",
  },
  {
    id: 3,
    title: "Zero-Day Vulnerabilities: Detection and Mitigation",
    excerpt: "Strategies for identifying and protecting against unknown vulnerabilities before they can be exploited.",
    date: "March 15, 2023",
    author: "Elena Rodriguez",
    category: "Research",
    image: "/images/zero-day.jpg",
    slug: "zero-day-vulnerabilities",
  },
  {
    id: 4,
    title: "API Security Best Practices for Modern Applications",
    excerpt: "Essential guidelines for securing APIs in today's interconnected application ecosystem.",
    date: "February 28, 2023",
    author: "David Kim",
    category: "Best Practices",
    image: "/images/api-security.jpg",
    slug: "api-security-best-practices",
  },
]

export function BlogList() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>

      {blogPosts.map((post) => (
        <Card key={post.id} className="overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3 relative h-48 md:h-auto">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <CardContent className="md:w-2/3 p-6">
              <div className="flex items-center mb-2">
                <Badge variant="outline" className="mr-2">
                  {post.category}
                </Badge>
                <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
              </div>
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              </Link>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                <span className="text-sm">{post.author}</span>
              </div>
            </CardContent>
          </div>
        </Card>
      ))}

      <div className="flex justify-center mt-8">
        <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800">
          Load More Articles
        </button>
      </div>
    </div>
  )
}
