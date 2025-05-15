"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import Link from "next/link"
import { motion } from "framer-motion"
import BlurImage from "@/components/blur-image"
import { useLanguage } from "@/lib/i18n/language-context"

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const { t } = useLanguage()

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
    <section className="relative py-16 md:py-24 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 z-0"></div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            className="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Shield className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium">Enterprise-grade Web Application Firewall</span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/demo">
              <Button size="lg" className="px-8 w-full sm:w-auto">
                {t("hero.tryDemo")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/documentation">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {t("hero.documentation")}
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="relative w-full max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="aspect-[16/9] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl">
              <BlurImage
                src="/images/waf-dashboard.jpg"
                alt="FGuard WAF Dashboard"
                className="w-full h-full"
                priority={true}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-900 p-2 rounded-lg border border-gray-200 dark:border-gray-800 shadow-lg hidden md:block">
              <div className="flex items-center gap-2 px-3 py-1">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Active Protection</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
