import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ComparisonSection from "@/components/comparison-section"
import CompetitorFeatures from "@/components/competitor-features"
import TestimonialComparison from "@/components/testimonial-comparison"
import ComparisonCta from "@/components/comparison-cta"

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Navbar />
      <main>
        <ComparisonSection />
        <CompetitorFeatures />
        <TestimonialComparison />
        <ComparisonCta />
      </main>
      <Footer />
    </div>
  )
}
