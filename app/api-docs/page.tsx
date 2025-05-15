import type { Metadata } from "next"
import ApiDocsHero from "@/components/api-docs/api-docs-hero"
import ApiDocsNavigation from "@/components/api-docs/api-docs-navigation"
import ApiDocsContent from "@/components/api-docs/api-docs-content"
import ApiDocsExamples from "@/components/api-docs/api-docs-examples"
import ApiDocsSdk from "@/components/api-docs/api-docs-sdk"
import { generateSeoMetadata } from "@/components/seo-optimization"

export const metadata: Metadata = generateSeoMetadata({
  title: "API Documentation",
  description: "Comprehensive documentation for the FGuard WAF API",
  keywords: ["API documentation", "REST API", "WAF API", "security API", "developer docs"],
  path: "/api-docs",
})

export default function ApiDocsPage() {
  return (
    <div className="flex flex-col">
      <ApiDocsHero />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <ApiDocsNavigation />
          </div>
          <div className="lg:w-3/4">
            <ApiDocsContent />
            <ApiDocsExamples />
            <ApiDocsSdk />
          </div>
        </div>
      </div>
    </div>
  )
}
