import type { Metadata } from "next"

export const siteConfig = {
  name: "FGuard",
  description: "Enterprise-grade Web Application Firewall",
  url: "https://fguard.com",
  ogImage: "https://fguard.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/fguard",
    github: "https://github.com/fguard",
  },
}

export function generateMetadata({
  title,
  description,
  path = "",
}: {
  title?: string
  description?: string
  path?: string
}): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} - ${siteConfig.description}`
  const metaDescription = description || siteConfig.description
  const url = `${siteConfig.url}${path}`

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [siteConfig.ogImage],
    },
    alternates: {
      canonical: url,
    },
  }
}
