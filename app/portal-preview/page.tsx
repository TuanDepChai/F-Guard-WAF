import type { Metadata } from "next"
import PortalPreviewHero from "@/components/portal-preview/portal-preview-hero"
import PortalPreviewFeatures from "@/components/portal-preview/portal-preview-features"
import PortalPreviewDashboard from "@/components/portal-preview/portal-preview-dashboard"
import PortalPreviewSecurity from "@/components/portal-preview/portal-preview-security"
import PortalPreviewCta from "@/components/portal-preview/portal-preview-cta"
import { generateSeoMetadata } from "@/components/seo-optimization"

export const metadata: Metadata = generateSeoMetadata({
  title: "Customer Portal Preview",
  description: "Preview the FGuard customer portal and dashboard experience",
  keywords: ["customer portal", "security dashboard", "WAF management", "security monitoring"],
  path: "/portal-preview",
})

export default function PortalPreviewPage() {
  return (
    <div className="flex flex-col">
      <PortalPreviewHero />
      <PortalPreviewFeatures />
      <PortalPreviewDashboard />
      <PortalPreviewSecurity />
      <PortalPreviewCta />
    </div>
  )
}
