import type { Metadata } from "next"
import CareersHero from "@/components/careers/careers-hero"
import CareersPositions from "@/components/careers/careers-positions"
import CareersValues from "@/components/careers/careers-values"
import CareersBenefits from "@/components/careers/careers-benefits"
import CareersCta from "@/components/careers/careers-cta"
import { generateSeoMetadata } from "@/components/seo-optimization"

export const metadata: Metadata = generateSeoMetadata({
  title: "Careers at FGuard",
  description: "Join our team and help build the future of web application security",
  keywords: ["careers", "jobs", "security jobs", "cybersecurity careers", "tech jobs"],
  path: "/careers",
})

export default function CareersPage() {
  return (
    <div className="flex flex-col">
      <CareersHero />
      <CareersValues />
      <CareersBenefits />
      <CareersPositions />
      <CareersCta />
    </div>
  )
}
