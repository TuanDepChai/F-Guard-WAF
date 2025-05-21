import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Calendar,
  User,
  Clock,
  Tag,
  MessageSquare,
  ThumbsUp,
  Share2,
  ArrowLeft,
  Bookmark
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog Post | FGuard WAF Partner Blog",
  description: "Read the latest insights and updates from FGuard WAF partners.",
}

const relatedPosts = [
  {
    title: "Security Trends 2024",
    excerpt: "Key security trends to watch in 2024",
    image: "/images/blog/trends.jpg",
    date: "March 12, 2024"
  },
  {
    title: "Partner Success Story: SecureNet",
    excerpt: "How SecureNet achieved 150% growth",
    image: "/images/blog/securenet.jpg",
    date: "March 8, 2024"
  },
  {
    title: "WAF Implementation Guide",
    excerpt: "Best practices for WAF implementation",
    image: "/images/blog/implementation.jpg",
    date: "March 3, 2024"
  }
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = {
    title: "New Features in FGuard WAF 2.0",
    content: `
      <p>We're excited to announce the release of FGuard WAF 2.0, packed with new features and improvements to enhance your security posture.</p>
      
      <h2>Enhanced Threat Detection</h2>
      <p>Our new machine learning-based threat detection system can identify and block sophisticated attacks with 99.9% accuracy. The system continuously learns from global threat patterns and adapts to new attack vectors in real-time.</p>
      
      <h2>Improved Performance</h2>
      <p>FGuard WAF 2.0 is 50% faster than the previous version, with optimized resource usage and reduced latency. This means better protection without compromising your application's performance.</p>
      
      <h2>New Dashboard</h2>
      <p>The completely redesigned dashboard provides better visibility into your security posture, with customizable widgets and real-time analytics. You can now track key metrics and respond to threats more effectively.</p>
      
      <h2>API Security</h2>
      <p>We've added comprehensive API security features, including rate limiting, authentication, and request validation. Protect your APIs from common vulnerabilities and ensure secure communication.</p>
      
      <h2>Cloud Integration</h2>
      <p>FGuard WAF 2.0 seamlessly integrates with major cloud providers, including AWS, Azure, and Google Cloud. Deploy and manage your WAF instances directly from your cloud console.</p>
    `,
    author: {
      name: "John Smith",
      role: "Product Manager",
      avatar: "/images/team/john.jpg"
    },
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Product Updates",
    likes: 128,
    comments: 32,
    image: "/images/blog/waf-2.0.jpg"
  }

  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/partners/blog">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Button>
          </Link>

          <article className="mb-16">
            <div className="aspect-video relative overflow-hidden rounded-lg mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4" />
                <span>{post.category}</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-8">{post.title}</h1>

            <div className="flex items-center gap-4 mb-8">
              <Avatar>
                <AvatarImage src={post.author.avatar} />
                <AvatarFallback>{post.author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">{post.author.name}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {post.author.role}
                </div>
              </div>
            </div>

            <div 
              className="prose prose-lg dark:prose-invert max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="flex items-center justify-between border-t border-b py-6 mb-8">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  {post.likes}
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  {post.comments}
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </article>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post, index) => (
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
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {post.date}
                      </div>
                      <h3 className="font-semibold mb-2">{post.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {post.excerpt}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Join the Discussion</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Share your thoughts and experiences with FGuard WAF 2.0. We'd love to hear from you!
            </p>
            <Button size="lg" className="group">
              Leave a Comment
              <MessageSquare className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
} 