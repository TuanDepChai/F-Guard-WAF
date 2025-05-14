import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BlogNewsletter } from "@/components/blog/blog-newsletter"
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from "lucide-react"
import { generateSeoMetadata } from "@/components/seo-optimization"

// Mock blog posts data - in a real app, this would come from a CMS or database
const mockPosts = [
  {
    id: 1,
    title: "Understanding DDoS Attacks and How to Prevent Them",
    excerpt:
      "Learn about the different types of DDoS attacks and how FGuard's protection mechanisms work to prevent them.",
    content: `
      <p>Distributed Denial of Service (DDoS) attacks remain one of the most prevalent and disruptive threats to online businesses and services. In this comprehensive guide, we'll explore the nature of these attacks, their evolution, and most importantly, how FGuard's advanced protection mechanisms can help safeguard your digital assets.</p>
      
      <h2>What is a DDoS Attack?</h2>
      
      <p>A DDoS attack occurs when multiple compromised systems flood the bandwidth or resources of a targeted system, usually one or more web servers. Unlike a simple DoS (Denial of Service) attack that uses a single computer and internet connection, DDoS attacks leverage multiple compromised systems—often distributed globally in what is known as a botnet—to generate massive traffic volumes.</p>
      
      <p>The goal is simple yet devastating: to overwhelm the target's resources, causing performance degradation or complete system failure, thereby denying service to legitimate users.</p>
      
      <h2>Common Types of DDoS Attacks</h2>
      
      <h3>1. Volume-Based Attacks</h3>
      
      <p>These attacks aim to saturate the bandwidth of the target site. Examples include:</p>
      <ul>
        <li><strong>UDP Floods</strong>: Sending large numbers of UDP packets to random ports</li>
        <li><strong>ICMP Floods</strong>: Overwhelming the target with ICMP echo request packets</li>
        <li><strong>Amplification Attacks</strong>: Exploiting DNS, NTP, or SSDP servers to multiply traffic volume</li>
      </ul>
      
      <h3>2. Protocol Attacks</h3>
      
      <p>These attacks consume server resources or intermediate communication equipment like firewalls. Examples include:</p>
      <ul>
        <li><strong>SYN Floods</strong>: Exploiting the TCP handshake process</li>
        <li><strong>Fragmented Packet Attacks</strong>: Sending malformed or fragmented packets</li>
      </ul>
      
      <h3>3. Application Layer Attacks</h3>
      
      <p>These sophisticated attacks target specific applications or services. Examples include:</p>
      <ul>
        <li><strong>HTTP Floods</strong>: Overwhelming web servers with seemingly legitimate HTTP requests</li>
        <li><strong>Slowloris</strong>: Keeping many connections open to the target server by sending partial HTTP requests</li>
        <li><strong>Layer 7 Attacks</strong>: Targeting specific applications rather than network infrastructure</li>
      </ul>
      
      <h2>How FGuard Protects Against DDoS Attacks</h2>
      
      <p>FGuard employs a multi-layered approach to DDoS protection, combining several advanced technologies:</p>
      
      <h3>1. Traffic Analysis and Filtering</h3>
      
      <p>Our system continuously monitors incoming traffic patterns, using machine learning algorithms to distinguish between legitimate users and attack traffic. This allows us to filter out malicious requests before they reach your servers.</p>
      
      <h3>2. Global Network Distribution</h3>
      
      <p>FGuard leverages a globally distributed network of data centers, allowing us to absorb and mitigate large-scale attacks close to their source, preventing them from ever reaching your infrastructure.</p>
      
      <h3>3. Rate Limiting and Traffic Shaping</h3>
      
      <p>We implement intelligent rate limiting that restricts the number of requests a single IP can make within a given timeframe, preventing resource exhaustion without affecting legitimate users.</p>
      
      <h3>4. Protocol Validation</h3>
      
      <p>Our system enforces strict protocol compliance, dropping malformed packets and preventing protocol-based attacks from reaching your servers.</p>
      
      <h3>5. Application-Layer Protection</h3>
      
      <p>FGuard includes specialized defenses against application-layer attacks, using behavioral analysis to identify and block suspicious request patterns that target specific web applications.</p>
      
      <h2>Real-Time Monitoring and Response</h2>
      
      <p>Beyond preventative measures, FGuard provides comprehensive real-time monitoring and automated response capabilities:</p>
      
      <ul>
        <li>Detailed attack analytics and visualization</li>
        <li>Automated attack mitigation with customizable rules</li>
        <li>Instant alerts and notifications</li>
        <li>Post-attack forensic analysis</li>
      </ul>
      
      <h2>Case Study: E-commerce Platform Protection</h2>
      
      <p>One of our clients, a major e-commerce platform, experienced a sophisticated multi-vector DDoS attack during their busiest sales period. Thanks to FGuard's protection:</p>
      
      <ul>
        <li>The attack was identified and mitigated within seconds</li>
        <li>Website performance remained stable throughout the attack</li>
        <li>No revenue loss or customer experience degradation occurred</li>
        <li>Detailed attack analytics helped strengthen their security posture</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>As DDoS attacks continue to grow in size, frequency, and sophistication, having robust protection is no longer optional—it's essential. FGuard's comprehensive DDoS protection solution provides the security, reliability, and peace of mind that modern businesses need to thrive in an increasingly hostile digital environment.</p>
      
      <p>Contact our security experts today to learn how FGuard can protect your specific infrastructure and applications from the ever-evolving threat of DDoS attacks.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    category: "Security Threats",
    author: "John Smith",
    authorTitle: "Chief Security Officer at FGuard",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "2025-03-15",
    readTime: "8 min read",
    slug: "understanding-ddos-attacks",
    tags: ["DDoS", "Security", "Protection", "Cyber Threats"],
  },
  // Other blog posts would be defined here
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = mockPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return generateSeoMetadata({
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found",
      path: `/blog/${params.slug}`,
    })
  }

  return generateSeoMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: [...post.tags, "security blog", "cybersecurity"],
    path: `/blog/${post.slug}`,
    ogImage: post.image,
  })
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = mockPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date)
  }

  return (
    <main className="flex-1">
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to all articles
            </Link>

            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          </div>

          <div
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <Separator className="my-8" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center">
              <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
              </div>
              <div>
                <p className="font-medium">{post.author}</p>
                <p className="text-sm text-muted-foreground">{post.authorTitle}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags.map((tag, index) => (
              <Link key={index} href={`/blog/tag/${tag.toLowerCase()}`}>
                <Badge variant="outline">#{tag}</Badge>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Subscribe to our newsletter</h2>
            <BlogNewsletter />
          </div>
        </div>
      </article>
    </main>
  )
}
