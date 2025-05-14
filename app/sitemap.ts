import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fguard.com"

  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/comparison`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/demo`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/documentation`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ] as const

  // Add blog posts
  const blogPosts = [
    {
      slug: "understanding-ddos-attacks",
      lastModified: new Date("2025-03-15"),
    },
    {
      slug: "sql-injection-silent-threat",
      lastModified: new Date("2025-03-10"),
    },
    {
      slug: "rise-of-api-attacks",
      lastModified: new Date("2025-03-05"),
    },
    {
      slug: "zero-trust-security-guide",
      lastModified: new Date("2025-02-28"),
    },
    {
      slug: "owasp-top-10-2025",
      lastModified: new Date("2025-02-20"),
    },
    {
      slug: "securing-microservices-architecture",
      lastModified: new Date("2025-02-15"),
    },
  ]

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...routes, ...blogRoutes]
}
