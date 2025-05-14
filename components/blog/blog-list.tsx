"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"
import { Calendar, Clock, User } from "lucide-react"

// Mock blog posts data
const mockPosts = [
  {
    id: 1,
    title: "Understanding DDoS Attacks and How to Prevent Them",
    excerpt:
      "Learn about the different types of DDoS attacks and how FGuard's protection mechanisms work to prevent them.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Security Threats",
    author: "John Smith",
    date: "2025-03-15",
    readTime: "8 min read",
    slug: "understanding-ddos-attacks",
  },
  {
    id: 2,
    title: "SQL Injection: The Silent Threat to Your Database",
    excerpt:
      "SQL injection remains one of the most dangerous web application vulnerabilities. Learn how to protect your systems.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Web Security",
    author: "Sarah Johnson",
    date: "2025-03-10",
    readTime: "6 min read",
    slug: "sql-injection-silent-threat",
  },
  {
    id: 3,
    title: "The Rise of API Attacks and How to Secure Your Endpoints",
    excerpt:
      "As businesses rely more on APIs, they've become a prime target for attackers. Here's how to secure your API endpoints.",
    image: "/placeholder.svg?height=400&width=600",
    category: "API Security",
    author: "Michael Chen",
    date: "2025-03-05",
    readTime: "7 min read",
    slug: "rise-of-api-attacks",
  },
  {
    id: 4,
    title: "Zero Trust Security: Implementation Guide for Web Applications",
    excerpt:
      "Implementing a zero trust security model can significantly improve your web application's security posture.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Best Practices",
    author: "Emily Davis",
    date: "2025-02-28",
    readTime: "10 min read",
    slug: "zero-trust-security-guide",
  },
  {
    id: 5,
    title: "OWASP Top 10: What's New in 2025",
    excerpt:
      "The latest OWASP Top 10 list has been released. Learn about the most critical web application security risks.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Industry News",
    author: "David Wilson",
    date: "2025-02-20",
    readTime: "9 min read",
    slug: "owasp-top-10-2025",
  },
  {
    id: 6,
    title: "Securing Microservices Architecture: Challenges and Solutions",
    excerpt:
      "Microservices offer many benefits, but they also introduce unique security challenges. Here's how to address them.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Architecture",
    author: "Lisa Wang",
    date: "2025-02-15",
    readTime: "8 min read",
    slug: "securing-microservices-architecture",
  },
]

export function BlogList() {
  const { t } = useTranslation()
  const [posts] = useState(mockPosts)
  const [page] = useState(1)
  const postsPerPage = 6

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date)
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.slice((page - 1) * postsPerPage, page * postsPerPage).map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden border border-gray-200 dark:border-gray-800 h-full flex flex-col"
          >
            <div className="relative h-48 w-full">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <CardContent className="flex-1 p-6">
              <div className="mb-4">
                <Badge variant="secondary" className="mb-2">
                  {post.category}
                </Badge>
                <h2 className="text-xl font-bold mb-2 line-clamp-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </div>
            </CardContent>
            <CardFooter className="border-t p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <User className="h-4 w-4 mr-1" />
                <span className="mr-4">{post.author}</span>
                <Calendar className="h-4 w-4 mr-1" />
                <span className="mr-4">{formatDate(post.date)}</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/blog/${post.slug}`}>{t("blog.readMore") || "Read More"}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button variant="outline">{t("blog.loadMore") || "Load More Articles"}</Button>
      </div>
    </div>
  )
}
