import dynamic from 'next/dynamic';

import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import StatsSection from "@/components/stats-section"
import HowItWorksSection from "@/components/how-it-works-section"
import PricingSection from "@/components/pricing-section"
import CtaSection from "@/components/cta-section"
import EnterpriseSection from "@/components/enterprise-section"
import FaqSection from "@/components/faq-section"
import SecurityPartners from "@/components/security-partners"
import TestimonialsWrapper from "@/components/testimonials-wrapper"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <HowItWorksSection />
      <TestimonialsWrapper />
      <PricingSection />
      <EnterpriseSection />
      <SecurityPartners />
      <FaqSection />
      <CtaSection />
    </div>
  )
}
