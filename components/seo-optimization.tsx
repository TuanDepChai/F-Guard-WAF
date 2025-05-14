import type { Metadata } from "next"
import { siteConfig } from "@/lib/metadata"

interface SeoProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  path?: string
}

export function generateSeoMetadata({ title, description, keywords = [], ogImage, path = "" }: SeoProps): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} - ${siteConfig.description}`
  const metaDescription = description || siteConfig.description
  const url = `${siteConfig.url}${path}`
  const metaImage = ogImage || siteConfig.ogImage

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      "Web Application Firewall",
      "WAF",
      "Cybersecurity",
      "Enterprise Security",
      "DDoS Protection",
      "API Security",
      ...keywords,
    ],
    authors: [
      {
        name: "FGuard",
        url: siteConfig.url,
      },
    ],
    creator: "FGuard",
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title: metaTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: "@fguard",
    },
    alternates: {
      canonical: url,
    },
  }
}
