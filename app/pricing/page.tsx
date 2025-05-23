import type { Metadata } from "next"
import PricingContent from "@/components/pricing-content"

export const metadata: Metadata = {
  title: "Pricing | FGuard WAF",
  description: "Explore FGuard's flexible pricing plans for web application security",
}

export default function PricingPage() {
  return <PricingContent />
} 