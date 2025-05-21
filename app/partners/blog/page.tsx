import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Search,
  Calendar,
  User,
  Tag,
  ArrowRight,
  MessageSquare,
  ThumbsUp,
  Share2
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Partner Blog | FGuard WAF",
  description: "Latest news, updates, and insights for FGuard WAF partners.",
}

const posts = [
  {
    title: "New Features in FGuard WAF 2.0",
    excerpt: "Discover the latest features and improvements in our newest release.",
    author: "John Smith",
    date: "March 15, 2024",
    category: "Product Updates",
    readTime: "5 min read",
    likes: 128,
    comments: 32,
    image: "/images/blog/waf-2.0.jpg"
  },
  {
    title: "Partner Success Story: TechSecure",
    excerpt: "How TechSecure grew their business by 200% with FGuard WAF.",
    author: "Sarah Johnson",
    date: "March 10, 2024",
    category: "Success Stories",
    readTime: "8 min read",
    likes: 156,
    comments: 45,
    image: "/images/blog/techsecure.jpg"
  },
  {
    title: "Security Best Practices 2024",
    excerpt: "Essential security practices for protecting web applications.",
    author: "Michael Chen",
    date: "March 5, 2024",
    category: "Security",
    readTime: "10 min read",
    likes: 98,
    comments: 24,
    image: "/images/blog/security.jpg"
  },
  {
    title: "Partner Program Updates",
    excerpt: "New benefits and opportunities in our partner program.",
    author: "Emily Brown",
    date: "March 1, 2024",
    category: "Partner Program",
    readTime: "6 min read",
    likes: 87,
    comments: 19,
    image: "/images/blog/partner.jpg"
  }
]

const categories = [
  "All Posts",
  "Product Updates",
  "Success Stories",
  "Security",
  "Partner Program",
  "Technical",
  "Marketing"
]

export default function BlogPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Partner Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Latest news, updates, and insights for FGuard WAF partners
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-10 py-6 text-lg"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <MessageSquare className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <Link href={`/partners/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button className="w-full group">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16 text-center">
          <Button variant="outline" size="lg" className="group">
            Load More
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </main>
  )
} 