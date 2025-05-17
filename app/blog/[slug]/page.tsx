import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"

// Mock blog post data - in a real app, this would come from a database or CMS
const blogPosts = [
  {
    id: 1,
    title: "Understanding OWASP Top 10 and How FGuard Protects Against Them",
    content: `
      <p>The OWASP Top 10 is a standard awareness document for developers and web application security. It represents a broad consensus about the most critical security risks to web applications.</p>
      
      <h2>1. Injection</h2>
      <p>Injection flaws, such as SQL, NoSQL, OS, and LDAP injection, occur when untrusted data is sent to an interpreter as part of a command or query. The attacker's hostile data can trick the interpreter into executing unintended commands or accessing data without proper authorization.</p>
      
      <h2>2. Broken Authentication</h2>
      <p>Application functions related to authentication and session management are often implemented incorrectly, allowing attackers to compromise passwords, keys, or session tokens, or to exploit other implementation flaws to assume other users' identities temporarily or permanently.</p>
      
      <h2>3. Sensitive Data Exposure</h2>
      <p>Many web applications and APIs do not properly protect sensitive data, such as financial, healthcare, and PII. Attackers may steal or modify such weakly protected data to conduct credit card fraud, identity theft, or other crimes.</p>
      
      <h2>How FGuard Helps</h2>
      <p>FGuard WAF provides comprehensive protection against all OWASP Top 10 vulnerabilities through advanced rule sets, machine learning-based anomaly detection, and real-time monitoring capabilities.</p>
    `,
    date: "May 10, 2023",
    author: "Sarah Johnson",
    category: "Security",
    image: "/images/owasp.jpg",
    slug: "understanding-owasp-top-10",
  },
  {
    id: 2,
    title: "DDoS Attacks in 2023: Trends and Protection Strategies",
    content: `
      <p>Distributed Denial of Service (DDoS) attacks continue to evolve in sophistication and scale. This article explores the latest trends and effective protection strategies.</p>
      
      <h2>Current DDoS Landscape</h2>
      <p>In 2023, we're seeing a significant increase in multi-vector DDoS attacks that combine volumetric, protocol, and application layer attacks simultaneously. These sophisticated attacks are designed to overwhelm traditional defense mechanisms.</p>
      
      <h2>Emerging Trends</h2>
      <p>IoT botnets remain a major source of DDoS attacks, with millions of compromised devices being leveraged to generate massive traffic volumes. Additionally, we're seeing more ransom-driven DDoS attacks where threat actors demand payment to stop or prevent attacks.</p>
      
      <h2>Protection Strategies</h2>
      <p>Effective DDoS protection requires a multi-layered approach including traffic scrubbing, rate limiting, and behavioral analysis. FGuard's DDoS protection service provides automatic detection and mitigation of attacks across all layers.</p>
    `,
    date: "April 22, 2023",
    author: "Michael Chen",
    category: "Threats",
    image: "/images/ddos-protection.jpg",
    slug: "ddos-attacks-trends-protection",
  },
  {
    id: 3,
    title: "Zero-Day Vulnerabilities: Detection and Mitigation",
    content: `
      <p>Zero-day vulnerabilities represent some of the most dangerous threats to organizations as they exploit previously unknown security flaws before patches are available.</p>
      
      <h2>The Challenge of Zero-Days</h2>
      <p>By definition, zero-day vulnerabilities have no existing patches or specific defenses, making them particularly dangerous. Threat actors can exploit these vulnerabilities before security teams are even aware they exist.</p>
      
      <h2>Detection Strategies</h2>
      <p>While traditional signature-based detection is ineffective against zero-days, behavioral analysis and anomaly detection can identify suspicious activities that may indicate exploitation of unknown vulnerabilities.</p>
      
      <h2>FGuard's Approach</h2>
      <p>FGuard employs advanced machine learning algorithms to establish baseline behavior for applications and detect deviations that may indicate zero-day exploitation. Our virtual patching capability provides protection while official patches are being developed.</p>
    `,
    date: "March 15, 2023",
    author: "Elena Rodriguez",
    category: "Research",
    image: "/images/zero-day.jpg",
    slug: "zero-day-vulnerabilities",
  },
  {
    id: 4,
    title: "API Security Best Practices for Modern Applications",
    content: `
      <p>APIs have become the backbone of modern application architecture, but they also introduce unique security challenges that must be addressed.</p>
      
      <h2>API Security Challenges</h2>
      <p>APIs often expose application logic and sensitive data such as PII, making them an attractive target for attackers. Common API vulnerabilities include broken authentication, excessive data exposure, and lack of rate limiting.</p>
      
      <h2>Best Practices</h2>
      <p>Implement strong authentication and authorization for all API endpoints. Use OAuth 2.0 or JWT for token-based authentication. Apply the principle of least privilege to API permissions. Validate and sanitize all input data to prevent injection attacks.</p>
      
      <h2>Monitoring and Testing</h2>
      <p>Regularly test APIs for vulnerabilities using both automated tools and manual penetration testing. Implement continuous monitoring to detect and respond to suspicious API activity in real-time.</p>
    `,
    date: "February 28, 2023",
    author: "David Kim",
    category: "Best Practices",
    image: "/images/api-security.jpg",
    slug: "api-security-best-practices",
  },
]

type Props = {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found | FGuard Blog",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | FGuard Blog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ""),
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="flex items-center text-blue-600 dark:text-blue-400 mb-6 hover:underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all articles
          </Link>

          <Badge variant="outline" className="mb-4">
            {post.category}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex items-center mb-8">
            <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
            <div>
              <p className="font-medium">{post.author}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
            </div>
          </div>

          <div className="relative w-full h-80 mb-8">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8">
            <h3 className="text-xl font-bold mb-4">Share this article</h3>
            <div className="flex space-x-4">
              <button className="p-2 bg-blue-600 text-white rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </button>
              <button className="p-2 bg-blue-800 text-white rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </button>
              <button className="p-2 bg-blue-500 text-white rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
