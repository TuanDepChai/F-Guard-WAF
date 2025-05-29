import Image from "next/image"
import { Shield, Zap, Lock, BarChart, Cloud, Database } from "lucide-react"

const features = [
  {
    name: "DDoS Protection",
    description:
      "Advanced protection against distributed denial-of-service attacks, ensuring your applications remain available even during large-scale attacks.",
    icon: Shield,
    image: "/images/ddos-protection.png",
  },
  {
    name: "Zero-Day Vulnerability Protection",
    description:
      "Proactive defense against unknown vulnerabilities with AI-powered threat detection and virtual patching technology.",
    icon: Zap,
    image: "/images/zero-day.png",
  },
  {
    name: "OWASP Top 10 Coverage",
    description:
      "Comprehensive protection against the most critical web application security risks identified by the Open Web Application Security Project.",
    icon: Lock,
    image: "/images/owasp.jpg",
  },
  {
    name: "API Security",
    description:
      "Dedicated protection for your APIs with schema validation, rate limiting, and anomaly detection to prevent abuse and data exfiltration.",
    icon: Database,
    image: "/images/api-security.jpg",
  },
  {
    name: "Real-time Analytics",
    description:
      "Detailed insights into traffic patterns, attack vectors, and security events with customizable dashboards and alerts.",
    icon: BarChart,
    image: "/images/analytics.png",
  },
  {
    name: "Global CDN Integration",
    description:
      "Seamless integration with leading content delivery networks to provide both security and performance optimization.",
    icon: Cloud,
    image: "/images/cdn.png",
  },
]

export default function FeaturesSection() {
  return (
    <div className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary dark:text-primary-light">Advanced Protection</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl text-gradient-animate">
            Comprehensive Security Features
          </p>
          <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            FGuard provides multi-layered security to protect your web applications from a wide range of threats and
            vulnerabilities.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col p-6 rounded-lg border bg-card shadow-sm card-hover transition-transform duration-200 ease-in-out hover:scale-[1.02]">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <feature.icon className="h-6 w-6 flex-none text-primary dark:text-primary-light glow-effect" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                  <div className="mt-6 rounded-md overflow-hidden shadow-lg border border-border">
                    <Image
                      src={feature.image}
                      alt={feature.name}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
