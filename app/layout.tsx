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
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "F-Guard WAF | Enterprise Web Application Firewall",
    template: "%s | F-Guard WAF",
  },
  description: "Enterprise-grade Web Application Firewall solution for protecting your web applications and APIs from cyber threats.",
  keywords: [
    "WAF",
    "Web Application Firewall",
    "Security",
    "Cybersecurity",
    "API Security",
    "DDoS Protection",
  ],
  authors: [
    {
      name: "F-Guard Team",
      url: "https://fguard-waf.com",
    },
  ],
  creator: "F-Guard",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fguard-waf.com",
    title: "F-Guard WAF | Enterprise Web Application Firewall",
    description: "Enterprise-grade Web Application Firewall solution for protecting your web applications and APIs from cyber threats.",
    siteName: "F-Guard WAF",
  },
  twitter: {
    card: "summary_large_image",
    title: "F-Guard WAF | Enterprise Web Application Firewall",
    description: "Enterprise-grade Web Application Firewall solution for protecting your web applications and APIs from cyber threats.",
    creator: "@fguardwaf",
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
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <SkipToContent />
            <Navbar session={session} />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
            <CookieConsent />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
