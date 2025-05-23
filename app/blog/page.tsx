'use client';

import type { Metadata } from "next"
import { BlogHeader } from "@/components/blog/blog-header"
import { BlogList } from "@/components/blog/blog-list"
import { BlogCategories } from "@/components/blog/blog-categories"
import { BlogNewsletter } from "@/components/blog/blog-newsletter"
import { Calendar, Clock, User, Tag, Search, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"


export default function BlogPage() {
  const posts = [
    {
      title: "Understanding Web Application Firewalls",
      excerpt: "Learn how WAFs protect your applications from common web vulnerabilities and attacks.",
      author: "John Doe",
      date: "Mar 15, 2024",
      readTime: "5 min read",
      category: "Security",
      image: "/blog/waf-basics.jpg",
    },
    {
      title: "Best Practices for WAF Configuration",
      excerpt: "Essential tips and best practices for configuring your WAF for optimal protection.",
      author: "Jane Smith",
      date: "Mar 12, 2024",
      readTime: "8 min read",
      category: "Configuration",
      image: "/blog/waf-config.jpg",
    },
    {
      title: "Detecting and Preventing SQL Injection",
      excerpt: "A comprehensive guide to understanding and preventing SQL injection attacks.",
      author: "Mike Johnson",
      date: "Mar 10, 2024",
      readTime: "6 min read",
      category: "Security",
      image: "/blog/sql-injection.jpg",
    },
    {
      title: "WAF Performance Optimization",
      excerpt: "Learn how to optimize your WAF for better performance without compromising security.",
      author: "Sarah Wilson",
      date: "Mar 8, 2024",
      readTime: "7 min read",
      category: "Performance",
      image: "/blog/waf-performance.jpg",
    },
  ]

  const categories = [
    "All",
    "Security",
    "Configuration",
    "Performance",
    "Updates",
    "Case Studies",
  ]

  return (
    <main className="flex-1">
      <BlogHeader />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Latest insights and updates from the FGuard team
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 rounded-md border bg-background"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm bg-accent hover:bg-accent/80"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-lg border overflow-hidden"
            >
              <div className="aspect-video bg-muted relative">
                {/* Add actual images here */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </span>
                  <span className="flex items-center">
                    <Tag className="h-4 w-4 mr-1" />
                    {post.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  <a
                    href="#"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    Read More
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
            Load More Posts
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-card rounded-lg border p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-6">
            Get the latest security insights and updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border bg-background"
            />
            <button className="px-6 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
