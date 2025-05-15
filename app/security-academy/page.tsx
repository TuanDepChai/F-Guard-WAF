import type { Metadata } from "next"
import AcademyHero from "@/components/security-academy/academy-hero"
import AcademyCourses from "@/components/security-academy/academy-courses"
import AcademyResources from "@/components/security-academy/academy-resources"
import AcademyCertification from "@/components/security-academy/academy-certification"
import AcademyCta from "@/components/security-academy/academy-cta"
import { generateSeoMetadata } from "@/components/seo-optimization"

export const metadata: Metadata = generateSeoMetadata({
  title: "Security Academy",
  description: "Learn web application security best practices with FGuard Security Academy",
  keywords: ["security academy", "web security training", "WAF training", "security certification"],
  path: "/security-academy",
})

export default function SecurityAcademyPage() {
  return (
    <div className="flex flex-col">
      <AcademyHero />
      <AcademyCourses />
      <AcademyResources />
      <AcademyCertification />
      <AcademyCta />
    </div>
  )
}
