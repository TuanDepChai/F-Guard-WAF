import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CaseStudiesHero from "@/components/case-studies-hero"
import CaseStudiesList from "@/components/case-studies-list"
import CaseStudiesFilter from "@/components/case-studies-filter"
import CaseStudiesCta from "@/components/case-studies-cta"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Navbar />
      <main>
        <CaseStudiesHero />
        <CaseStudiesFilter />
        <CaseStudiesList />
        <CaseStudiesCta />
      </main>
      <Footer />
    </div>
  )
}
