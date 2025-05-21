import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Live Demo | FGuard WAF",
  description: "Experience FGuard WAF's powerful security features in action.",
}

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 