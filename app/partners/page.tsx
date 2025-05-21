import type { Metadata } from "next"
import PartnersHero from "@/components/partners/partners-hero"
import PartnersPrograms from "@/components/partners/partners-programs"
import PartnersShowcase from "@/components/partners/partners-showcase"
import PartnersJoin from "@/components/partners/partners-join"
import PartnersStats from "@/components/partners/partners-stats"
import PartnersResources from "@/components/partners/partners-resources"
import { generateSeoMetadata } from "@/components/seo-optimization"

export const metadata: Metadata = generateSeoMetadata({
  title: "Partner Program | FGuard WAF",
  description: "Join our partner program and grow your business with FGuard WAF's industry-leading security solutions.",
  keywords: ["partner program", "reseller program", "technology partners", "security partners", "WAF partners"],
  path: "/partners",
})

export default function PartnersPage() {
  return (
    <main>
      <PartnersHero />
      <PartnersStats />
      <PartnersPrograms />
      <PartnersShowcase />
      <PartnersResources />
      <PartnersJoin />
    </main>
  )
}
