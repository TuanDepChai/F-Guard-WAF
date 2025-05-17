export const siteConfig = {
  name: "FGuard",
  description: "Enterprise-grade Web Application Firewall service",
  url: "https://fguard.com",
  ogImage: "https://fguard.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/fguardwaf",
    github: "https://github.com/fguard",
    linkedin: "https://linkedin.com/company/fguard",
  },
  contactEmail: "contact@fguard.com",
  supportEmail: "support@fguard.com",
  address: "123 Security Street, Cyber City, 10101",
  phone: "+1 (555) 123-4567",
  copyright: `© ${new Date().getFullYear()} FGuard. All rights reserved.`,
}

export const defaultMetadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "web application firewall",
    "WAF",
    "cybersecurity",
    "DDoS protection",
    "API security",
    "threat detection",
    "enterprise security",
  ],
  authors: [
    {
      name: "FGuard Team",
      url: siteConfig.url,
    },
  ],
  creator: "FGuard Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@fguardwaf",
  },
  robots: {
    index: true,
    follow: true,
  },
}
