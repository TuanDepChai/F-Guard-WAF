import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"
import ScrollToTop from "@/components/scroll-to-top"
import SkipToContent from "@/components/skip-to-content"
import { AuthProvider } from "@/context/AuthContext"
import { Toaster } from "sonner"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FGuard - Enterprise Web Application Firewall",
  description: "Advanced WAF solution protecting your applications from cyber threats and attacks.",
  keywords: "WAF, Web Application Firewall, Security, DDoS Protection, OWASP, API Security",
  authors: [{ name: "FGuard Security Team" }],
  creator: "FGuard",
  publisher: "FGuard",
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL("https://fguard.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FGuard - Enterprise Web Application Firewall",
    description: "Advanced WAF solution protecting your applications from cyber threats and attacks.",
    url: "https://fguard.com",
    siteName: "FGuard",
    images: [
      {
        url: "https://fguard.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FGuard - Enterprise Web Application Firewall",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FGuard - Enterprise Web Application Firewall",
    description: "Advanced WAF solution protecting your applications from cyber threats and attacks.",
    images: ["https://fguard.com/twitter-image.jpg"],
    creator: "@fguard",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <div className="flex flex-col min-h-screen">
              <SkipToContent />
              <Navbar key={typeof window !== 'undefined' ? document.cookie : 'server'} />
              <main id="main-content" className="flex-1">
                <Toaster position="top-right" />
                {children}
              </main>
              <Footer />
              <CookieConsent />
              <ScrollToTop />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
