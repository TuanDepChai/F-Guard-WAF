import type { Metadata } from "next"
import RoadmapHero from "@/components/roadmap/roadmap-hero"
import RoadmapTimeline from "@/components/roadmap/roadmap-timeline"
import RoadmapFeatures from "@/components/roadmap/roadmap-features"
import RoadmapFeedback from "@/components/roadmap/roadmap-feedback"
import { generateSeoMetadata } from "@/components/seo-optimization"

export const metadata: Metadata = generateSeoMetadata({
  title: "Product Roadmap",
  description: "FGuard WAF product roadmap, upcoming features, and development plans",
  keywords: ["product roadmap", "upcoming features", "development plans", "feature requests"],
  path: "/roadmap",
})

export default function RoadmapPage() {
  return (
    <div className="flex flex-col">
      <RoadmapHero />
      <RoadmapTimeline />
      <RoadmapFeatures />
      <RoadmapFeedback />
    </div>
  )
}
