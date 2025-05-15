import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: [
        "/",
        "/case-studies",
        "/documentation",
        "/comparison",
        "/blog",
        "/contact",
        "/demo",
        "/technical-specs",
        "/status",
        "/compliance",
        "/roadmap",
        "/api-docs",
        "/partners",
        "/portal-preview",
        "/pricing-calculator",
        "/security-academy",
        "/about",
      ],
      disallow: ["/admin", "/dashboard", "/api"],
    },
    sitemap: "https://fguard.com/sitemap.xml",
  }
}
