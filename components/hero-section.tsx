"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import Link from "next/link"

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const { theme, colorTheme } = useTheme()
  const isDark = theme === "dark"

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const calculateTransform = (factor: number) => {
    return `translateY(${scrollY * factor}px)`
  }

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 z-0"></div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm mb-6">
            <Shield className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium">Enterprise-grade Web Application Firewall</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Protect Your Web Applications From <span className="text-primary">Advanced Threats</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
            FGuard provides comprehensive protection against OWASP Top 10, DDoS attacks, and zero-day vulnerabilities
            with our advanced WAF solution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/demo">
              <Button size="lg" className="px-8">
                Try Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/documentation">
              <Button variant="outline" size="lg">
                Documentation
              </Button>
            </Link>
          </div>

          <div className="relative w-full max-w-5xl mx-auto">
            <div className="aspect-[16/9] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl">
              <img src="/images/waf-dashboard.jpg" alt="FGuard WAF Dashboard" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-900 p-2 rounded-lg border border-gray-200 dark:border-gray-800 shadow-lg hidden md:block">
              <div className="flex items-center gap-2 px-3 py-1">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Active Protection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
