"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Shield, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { DarkModeToggle } from "@/components/dark-mode-toggle"
import { SearchDialog } from "@/components/search-dialog"
import { LanguageSwitcher } from "@/components/language-switcher"
import KeyboardShortcuts from "@/components/keyboard-shortcuts"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/lib/i18n/language-context"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navigationItems = [
    { name: t("common.home"), href: "/" },
    { name: t("common.features"), href: "/#features" },
    { name: t("common.pricing"), href: "/#pricing" },
    {
      name: t("common.solutions"),
      href: "#",
      children: [
        { name: t("common.enterprise"), href: "/#enterprise" },
        { name: t("common.caseStudies"), href: "/case-studies" },
        { name: t("common.comparison"), href: "/comparison" },
        { name: t("common.technicalSpecs"), href: "/technical-specs" },
      ],
    },
    {
      name: t("common.resources"),
      href: "#",
      children: [
        { name: t("common.documentation"), href: "/documentation" },
        { name: t("common.apiDocs"), href: "/api-docs" },
        { name: t("common.securityAcademy"), href: "/security-academy" },
        { name: t("common.blog"), href: "/blog" },
      ],
    },
    {
      name: t("common.company"),
      href: "#",
      children: [
        { name: t("common.aboutUs"), href: "/about" },
        { name: t("common.partners"), href: "/partners" },
        { name: t("common.compliance"), href: "/compliance" },
        { name: t("common.roadmap"), href: "/roadmap" },
        { name: t("common.contact"), href: "/contact" },
      ],
    },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">FGuard</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) =>
              item.children ? (
                <DropdownMenu
                  key={item.name}
                  onOpenChange={(open) => {
                    if (open) setActiveDropdown(item.name)
                    else if (activeDropdown === item.name) setActiveDropdown(null)
                  }}
                >
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "flex items-center gap-1 h-10 px-4",
                        activeDropdown === item.name ? "text-primary" : "text-foreground/80",
                      )}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-48">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild>
                        <Link href={child.href} className={cn("w-full", pathname === child.href ? "text-primary" : "")}>
                          {child.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary px-4 py-2",
                    pathname === item.href ? "text-primary" : "text-foreground/80",
                  )}
                >
                  {item.name}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <SearchDialog />
            <LanguageSwitcher />
            <KeyboardShortcuts />
            <DarkModeToggle />
            <Link href="/login">
              <Button variant="ghost" size="sm">
                {t("common.login")}
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">{t("common.getStarted")}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button and Dark Mode Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <SearchDialog />
            <LanguageSwitcher />
            <KeyboardShortcuts />
            <DarkModeToggle />
            <button
              className="flex items-center text-gray-500 dark:text-gray-400"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-gray-900 border-b dark:border-gray-800"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-1">
                {navigationItems.map((item) =>
                  item.children ? (
                    <div key={item.name} className="py-2">
                      <div className="flex items-center justify-between py-2 px-3 font-medium">{item.name}</div>
                      <div className="pl-4 border-l-2 border-gray-200 dark:border-gray-700 ml-3 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={cn(
                              "block py-2 px-3 text-sm transition-colors hover:text-primary",
                              pathname === child.href ? "text-primary" : "text-foreground/80",
                            )}
                            onClick={closeMenu}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "py-2 px-3 text-sm font-medium transition-colors hover:text-primary",
                        pathname === item.href ? "text-primary" : "text-foreground/80",
                      )}
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  ),
                )}
                <div className="flex flex-col space-y-2 pt-2 border-t dark:border-gray-800 mt-2">
                  <Link href="/login" onClick={closeMenu}>
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      {t("common.login")}
                    </Button>
                  </Link>
                  <Link href="/signup" onClick={closeMenu}>
                    <Button className="w-full" size="sm">
                      {t("common.getStarted")}
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
