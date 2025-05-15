import type { Metadata } from "next"
import PricingCalculatorHero from "@/components/pricing-calculator/pricing-calculator-hero"
import PricingCalculatorTool from "@/components/pricing-calculator/pricing-calculator-tool"
import PricingCalculatorFaq from "@/components/pricing-calculator/pricing-calculator-faq"
import PricingCalculatorCta from "@/components/pricing-calculator/pricing-calculator-cta"
import { generateSeoMetadata } from "@/components/seo-optimization"

export const metadata: Metadata = generateSeoMetadata({
  title: "Pricing Calculator",
  description: "Calculate your FGuard WAF pricing based on your specific security needs",
  keywords: ["pricing calculator", "WAF pricing", "security costs", "custom pricing"],
  path: "/pricing-calculator",
})

export default function PricingCalculatorPage() {
  return (
    <div className="flex flex-col">
      <PricingCalculatorHero />
      <PricingCalculatorTool />
      <PricingCalculatorFaq />
      <PricingCalculatorCta />
    </div>
  )
}
