"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Shield, Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { useI18n } from "@/lib/i18n/i18n-provider"
import LanguageSelector from "@/components/language-selector"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { t } = useI18n()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full backdrop-blur transition-all duration-300 ${
        isScrolled ? "bg-white/90 dark:bg-slate-900/90 border-b shadow-sm" : "bg-transparent border-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">FGuard</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.features")}
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.howItWorks")}
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.pricing")}
          </Link>
          <Link href="#enterprise" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.enterprise")}
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.faq")}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSelector />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hidden md:flex"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="outline" size="sm" className="hidden md:flex">
            {t("nav.login")}
          </Button>
          <Button size="sm" className="hidden md:flex">
            {t("nav.tryForFree")}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)} className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-slate-950 md:hidden">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">FGuard</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="container grid gap-6 py-8">
            <Link
              href="#features"
              className="text-lg font-medium hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.features")}
            </Link>
            <Link
              href="#how-it-works"
              className="text-lg font-medium hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.howItWorks")}
            </Link>
            <Link
              href="#pricing"
              className="text-lg font-medium hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.pricing")}
            </Link>
            <Link
              href="#enterprise"
              className="text-lg font-medium hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.enterprise")}
            </Link>
            <Link
              href="#faq"
              className="text-lg font-medium hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.faq")}
            </Link>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center justify-between">
                <LanguageSelector />
                <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </div>
              <Button variant="outline" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                {t("nav.login")}
              </Button>
              <Button className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                {t("nav.tryForFree")}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </motion.header>
  )
}
