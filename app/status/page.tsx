import type { Metadata } from "next"
import StatusHero from "@/components/status/status-hero"
import StatusOverview from "@/components/status/status-overview"
import StatusHistory from "@/components/status/status-history"
import StatusIncidents from "@/components/status/status-incidents"
import StatusSubscribe from "@/components/status/status-subscribe"
import { generateSeoMetadata } from "@/components/seo-optimization"

export const metadata: Metadata = generateSeoMetadata({
  title: "System Status",
  description: "Real-time status and uptime information for FGuard WAF services",
  keywords: ["system status", "uptime", "service health", "incident history"],
  path: "/status",
})

export default function StatusPage() {
  return (
    <div className="flex flex-col">
      <StatusHero />
      <StatusOverview />
      <StatusHistory />
      <StatusIncidents />
      <StatusSubscribe />
    </div>
  )
}
