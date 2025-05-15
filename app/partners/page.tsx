import type { Metadata } from "next"
import PartnersHero from "@/components/partners/partners-hero"
import PartnersProgram from "@/components/partners/partners-program"
import PartnersShowcase from "@/components/partners/partners-showcase"
import PartnersIntegrations from "@/components/partners/partners-integrations"
import PartnersJoin from "@/components/partners/partners-join"
import { generateSeoMetadata } from "@/components/seo-optimization"

export const metadata: Metadata = generateSeoMetadata({
  title: "Partner Program",
  description: "Join the FGuard partner ecosystem and grow your business with our industry-leading WAF solution",
  keywords: ["partner program", "reseller program", "technology partners", "security partners", "WAF partners"],
  path: "/partners",
})

export default function PartnersPage() {
  return (
    <div className="flex flex-col">
      <PartnersHero />
      <PartnersProgram />
      <PartnersShowcase />
      <PartnersIntegrations />
      <PartnersJoin />
    </div>
  )
}
