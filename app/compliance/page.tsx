import type { Metadata } from "next"
import ComplianceHero from "@/components/compliance/compliance-hero"
import ComplianceCertifications from "@/components/compliance/compliance-certifications"
import ComplianceFrameworks from "@/components/compliance/compliance-frameworks"
import ComplianceProcess from "@/components/compliance/compliance-process"
import ComplianceFaq from "@/components/compliance/compliance-faq"
import ComplianceCta from "@/components/compliance/compliance-cta"
import { generateSeoMetadata } from "@/components/seo-optimization"

export const metadata: Metadata = generateSeoMetadata({
  title: "Compliance & Security Certifications",
  description: "FGuard's security compliance certifications, standards, and regulatory frameworks",
  keywords: ["security compliance", "GDPR", "PCI DSS", "HIPAA", "SOC 2", "ISO 27001"],
  path: "/compliance",
})

export default function CompliancePage() {
  return (
    <div className="flex flex-col">
      <ComplianceHero />
      <ComplianceCertifications />
      <ComplianceFrameworks />
      <ComplianceProcess />
      <ComplianceFaq />
      <ComplianceCta />
    </div>
  )
}
