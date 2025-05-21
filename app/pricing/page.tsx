import type { Metadata } from "next"
import PricingSection from "@/components/pricing-section"

export const metadata: Metadata = {
  title: "Pricing | FGuard WAF",
  description: "Explore FGuard's flexible pricing plans for web application security",
}

export default function PricingPage() {
  return (
    <main className="flex-1">
      <PricingSection />
       {/* Potentially add more detailed pricing info or a comparison table here */}
    </main>
  )
} 