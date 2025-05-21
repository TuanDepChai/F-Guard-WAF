import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle, Shield, Building, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Enterprise Solution | FGuard",
  description: "Tailored WAF security solutions for large enterprises",
}

export default function EnterpriseSolutionPage() {
  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Enterprise Solution</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive and customized web application security for large organizations.
          </p>
        </div>

        {/* Introduction Section */}
        <section className="py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Designed for Enterprise Needs</h2>
              <p className="text-lg text-muted-foreground mb-4">
                FGuard's Enterprise Solution is built to address the unique security challenges faced by large organizations. With a focus on scalability, advanced threat intelligence, and dedicated support, we provide a robust defense for your mission-critical web applications and APIs.
              </p>
              <p className="text-lg text-muted-foreground">
                Our platform integrates seamlessly into your existing security ecosystem, offering granular control, detailed reporting, and compliance assurance for highly regulated industries.
              </p>
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              {/* Placeholder Image */}
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-muted-foreground">
                Image Placeholder: Enterprise Solution Overview
              </div>
              {/* Replace with actual image: <Image src="/images/enterprise-overview.png" alt="Enterprise Solution Overview" fill className="object-cover" /> */}
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-12 bg-gray-100 dark:bg-gray-800">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <h3 className="text-xl font-semibold">Unmatched Scalability</h3>
              </div>
              <p className="text-muted-foreground">
                Our architecture scales to handle massive traffic volumes and complex application environments.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <h3 className="text-xl font-semibold">Customized Protection</h3>
              </div>
              <p className="text-muted-foreground">
                Tailored security policies and rulesets to meet your organization's unique requirements.
              </p>
            </div>
             <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <h3 className="text-xl font-semibold">24/7 Dedicated Support</h3>
              </div>
              <p className="text-muted-foreground">
                Access to a dedicated team of security experts for ongoing support and guidance.
              </p>
            </div>
             <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <h3 className="text-xl font-semibold">Advanced Reporting & Analytics</h3>
              </div>
              <p className="text-muted-foreground">
                Gain deep visibility into security events and traffic patterns for informed decision-making.
              </p>
            </div>
             <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <h3 className="text-xl font-semibold">Seamless Integration</h3>
              </div>
              <p className="text-muted-foreground">
                Integrate with your existing SIEM, SOAR, and other security tools.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section (Linking to WAF features or similar) */}
         {/* For now, just a placeholder */}
        <section className="py-12 text-center">
           <h2 className="text-3xl font-bold mb-4">Core Security Capabilities</h2>
           <p className="text-xl text-muted-foreground mb-8">Leverage our advanced WAF features as part of your enterprise solution.</p>
           {/* Link to WAF Features section or list key features here */}
             <Link href="/products/waf">
                <Button size="lg" variant="outline">Explore WAF Features <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </Link>
         </section>

        {/* Case Studies Section (Linking to relevant case studies) */}
         {/* For now, just a placeholder */}
        <section className="py-12 text-center bg-gray-100 dark:bg-gray-800">
           <h2 className="text-3xl font-bold mb-4">Enterprise Success Stories</h2>
           <p className="text-xl text-muted-foreground mb-8">See how leading enterprises are protected by FGuard.</p>
            {/* Link to Enterprise Case Studies or list key ones here */}
             <Link href="/case-studies">
                <Button size="lg" variant="outline">View Case Studies <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </Link>
         </section>

      </div>
    </main>
  )
} 