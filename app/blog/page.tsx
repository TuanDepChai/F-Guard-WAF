import type { Metadata } from "next"
import { BlogHeader } from "@/components/blog/blog-header"
import { BlogList } from "@/components/blog/blog-list"
import { BlogCategories } from "@/components/blog/blog-categories"
import { BlogNewsletter } from "@/components/blog/blog-newsletter"
import { generateSeoMetadata } from "@/components/seo-optimization"

export const metadata: Metadata = generateSeoMetadata({
  title: "Security Blog",
  description: "Latest insights, news, and guides about web application security and cyber threats",
  keywords: ["security blog", "cybersecurity news", "WAF blog", "security guides"],
  path: "/blog",
})

export default function BlogPage() {
  return (
    <main className="flex-1">
      <BlogHeader />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <BlogList />
          </div>
          <div className="space-y-8">
            <BlogCategories />
            <BlogNewsletter />
          </div>
        </div>
      </div>
    </main>
  )
}
