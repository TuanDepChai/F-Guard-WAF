import type { Metadata } from "next"
import { generateSeoMetadata } from "@/components/seo-optimization"

export const metadata: Metadata = generateSeoMetadata({
  title: "Log In - FGuard",
  description: "Log in to your FGuard account to manage your web application security",
  keywords: ["login", "sign in", "account access", "WAF login"],
  path: "/login",
})

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 