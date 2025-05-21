import type { Metadata } from "next"
import Image from "next/image"
import { Shield, Zap, Lock, BarChart, Cloud, Database, CheckCircle, LucideProps } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import React from "react";

interface Feature {
  name: string;
  description: string;
  icon: React.ElementType<LucideProps>;
  image: string;
}

export const metadata: Metadata = {
  title: "WAF Solution | FGuard",
  description: "Learn about FGuard's Web Application Firewall solution",
}

const features: Feature[] = [
  {
    name: "Advanced DDoS Protection",
    description:
      "Ensure your applications remain available even during large-scale attacks with intelligent traffic analysis and mitigation.",
    icon: Shield,
    image: "/images/ddos-protection.png", // Placeholder - replace with actual image
  },
  {
    name: "Zero-Day Threat Prevention",
    description:
      "Proactive defense against unknown vulnerabilities with AI-powered threat detection and virtual patching.",
    icon: Zap,
    image: "/images/zero-day.png", // Placeholder - replace with actual image
  },
  {
    name: "Comprehensive OWASP Top 10 Coverage",
    description:
      "Protect against the most critical web application security risks with regularly updated rulesets.",
    icon: Lock,
    image: "/images/owasp.jpg", // Placeholder - replace with actual image
  },
  {
    name: "Robust API Security",
    description:
      "Secure your APIs with schema validation, rate limiting, and anomaly detection to prevent abuse.",
    icon: Database,
    image: "/images/api-security.jpg", // Placeholder - replace with actual image
  },
  {
    name: "Real-time Security Analytics",
    description:
      "Gain deep insights into traffic patterns, attack vectors, and security events with customizable dashboards.",
    icon: BarChart,
    image: "/images/analytics.png", // Placeholder - replace with actual image
  },
  {
    name: "Seamless CDN Integration",
    description:
      "Integrate with leading CDNs for combined security and performance optimization.",
    icon: Cloud,
    image: "/images/cdn.png", // Placeholder - replace with actual image
  },
]

export default function WafProductPage() {
  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Web Application Firewall (WAF)</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Protect your web applications from a wide range of cyber threats with our advanced WAF.
          </p>
        </div>

        {/* Overview Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Overview</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-4">
                FGuard's Web Application Firewall provides a robust layer of defense for your web applications and APIs.
                It sits between your users and your servers, inspecting all incoming and outgoing traffic to identify and
                block malicious requests. Our WAF is designed to protect against the OWASP Top 10 vulnerabilities, zero-day
                threats, bot attacks, and DDoS attacks, ensuring your applications remain secure, available, and compliant.
              </p>
              <p className="text-lg text-muted-foreground">
                Built on a scalable and high-performance architecture, FGuard WAF offers granular control over security
                policies, real-time monitoring, and detailed analytics. Whether you're hosting a single application or
                managing a complex microservices environment, FGuard provides the protection you need without compromising
                performance.
              </p>
            </div>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
               {/* Placeholder Image */}
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-muted-foreground">
                Image Placeholder: WAF Overview Diagram
              </div>
              {/* Replace with actual image: <Image src="/images/waf-overview.png" alt="WAF Overview Diagram" fill className="object-cover" /> */}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-primary/10 p-2"><feature.icon className="h-6 w-6 text-primary" /></div>
                  <h3 className="text-xl font-semibold">{feature.name}</h3>
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
                 {/* Placeholder Image */}
                <div className="relative h-48 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-muted-foreground text-sm">
                   Image Placeholder: {feature.name}
                </div>
                {/* Replace with actual image: <div className="relative h-48 rounded-md overflow-hidden shadow-md"><Image src={feature.image} alt={feature.name} fill className="object-cover" /></div> */}
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <h3 className="text-xl font-semibold">Enhanced Security Posture</h3>
              </div>
              <p className="text-muted-foreground">
                Proactively defend against a wide range of web application threats, reducing your attack surface.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <h3 className="text-xl font-semibold">Improved Compliance</h3>
              </div>
              <p className="text-muted-foreground">
                Simplify compliance efforts with built-in controls, logging, and reporting for standards like PCI DSS and GDPR.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <h3 className="text-xl font-semibold">Reduced Risk & Cost</h3>
              </div>
              <p className="text-muted-foreground">
                Prevent data breaches, service disruptions, and reputational damage, significantly lowering potential costs.
              </p>
            </div>
             <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <h3 className="text-xl font-semibold">Optimized Performance</h3>
              </div>
              <p className="text-muted-foreground">
                Leverage our global network and optimization features to ensure fast and reliable application delivery.
              </p>
            </div>
             <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <h3 className="text-xl font-semibold">Simplified Management</h3>
              </div>
              <p className="text-muted-foreground">
                Manage security policies and monitor traffic through an intuitive dashboard with centralized control.
              </p>
            </div>
          </div>
        </section>

         {/* CTA Section (Reusing existing component or similar) */}
        {/* For now, just a placeholder */}
         <section className="py-12 text-center">
           <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Applications?</h2>
           <p className="text-xl text-muted-foreground mb-8">Schedule a demo or contact our sales team to learn more.</p>
           <div className="flex justify-center gap-4">
              <Link href="/demo">
                <Button size="lg">Request a Demo</Button>
              </Link>
               <Link href="/contact">
                <Button size="lg" variant="outline">Contact Sales</Button>
              </Link>
           </div>
         </section>

      </div>
    </main>
  )
} 