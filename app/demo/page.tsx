import type { Metadata } from "next"
import { DemoHeader } from "@/components/demo/demo-header"
import { DemoSimulator } from "@/components/demo/demo-simulator"
import { DemoFeatures } from "@/components/demo/demo-features"
import { DemoCta } from "@/components/demo/demo-cta"

export const metadata: Metadata = {
  title: "Interactive WAF Demo | FGuard",
  description: "Experience FGuard's Web Application Firewall in action with our interactive demo",
  keywords: ["WAF demo", "security demo", "interactive demo", "attack simulation"],
}

export default function DemoPage() {
  return (
    <main className="flex-1">
      <DemoHeader />
      <div className="container mx-auto px-4 py-12">
        <DemoSimulator />
        <DemoFeatures />
        <DemoCta />
      </div>
    </main>
  )
}
