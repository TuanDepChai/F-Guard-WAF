import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import StatsSection from "@/components/stats-section"
import HowItWorksSection from "@/components/how-it-works-section"
import PricingSection from "@/components/pricing-section"
import TestimonialsSection from "@/components/testimonials-section"
import CtaSection from "@/components/cta-section"
import ThemeShowcase from "@/components/theme-showcase"

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ThemeShowcase />
      <PricingSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}
