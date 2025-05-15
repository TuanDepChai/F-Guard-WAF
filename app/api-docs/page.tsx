import ApiDocsHero from "@/components/api-docs/api-docs-hero"
import ApiDocsNavigation from "@/components/api-docs/api-docs-navigation"
import ApiDocsContent from "@/components/api-docs/api-docs-content"
import ApiDocsExamples from "@/components/api-docs/api-docs-examples"
import ApiDocsSdk from "@/components/api-docs/api-docs-sdk"

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen">
      <ApiDocsHero />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4 lg:sticky lg:top-24 lg:self-start">
            <ApiDocsNavigation />
          </div>
          <div className="lg:w-3/4 space-y-16">
            <ApiDocsContent />
            <ApiDocsExamples />
            <ApiDocsSdk />
          </div>
        </div>
      </div>
    </div>
  )
}
