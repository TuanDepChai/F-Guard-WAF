import type { Metadata } from "next"
import AboutHero from "@/components/about/about-hero"
import AboutMission from "@/components/about/about-mission"
import AboutTeam from "@/components/about/about-team"
import AboutValues from "@/components/about/about-values"
import AboutTimeline from "@/components/about/about-timeline"
import AboutCta from "@/components/about/about-cta"
import { generateSeoMetadata } from "@/components/seo-optimization"

export const metadata: Metadata = generateSeoMetadata({
  title: "About FGuard",
  description: "Learn about FGuard's mission, team, and journey in web application security",
  keywords: ["about FGuard", "security company", "WAF company", "security mission", "security team"],
  path: "/about",
})

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutTeam />
      <AboutTimeline />
      <AboutCta />
    </div>
  )
}
