import type { Metadata } from "next"
import TechnicalSpecsHero from "@/components/technical-specs/technical-specs-hero"
import TechnicalSpecsDetails from "@/components/technical-specs/technical-specs-details"
import TechnicalSpecsComparison from "@/components/technical-specs/technical-specs-comparison"
import TechnicalSpecsArchitecture from "@/components/technical-specs/technical-specs-architecture"
import TechnicalSpecsCta from "@/components/technical-specs/technical-specs-cta"
import { generateSeoMetadata } from "@/components/seo-optimization"

export const metadata: Metadata = generateSeoMetadata({
  title: "Technical Specifications",
  description: "Detailed technical specifications and architecture of the FGuard WAF solution",
  keywords: ["WAF specifications", "technical details", "security architecture", "WAF deployment"],
  path: "/technical-specs",
})

export default function TechnicalSpecsPage() {
  return (
    <div className="flex flex-col">
      <TechnicalSpecsHero />
      <TechnicalSpecsDetails />
      <TechnicalSpecsArchitecture />
      <TechnicalSpecsComparison />
      <TechnicalSpecsCta />
    </div>
  )
}
