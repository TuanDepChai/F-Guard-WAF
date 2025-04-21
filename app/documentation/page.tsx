import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import DocumentationHero from "@/components/documentation-hero"
import DocumentationNav from "@/components/documentation-nav"
import DocumentationContent from "@/components/documentation-content"

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Navbar />
      <DocumentationHero />
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr] gap-8">
          <DocumentationNav />
          <DocumentationContent />
        </div>
      </div>
      <Footer />
    </div>
  )
}
