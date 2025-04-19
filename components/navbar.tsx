"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Shield, Menu, X, Moon, Sun, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { motion } from "framer-motion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

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
        <nav className="hidden md:flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                Solutions
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56">
              <DropdownMenuItem>Enterprise WAF</DropdownMenuItem>
              <DropdownMenuItem>API Security</DropdownMenuItem>
              <DropdownMenuItem>Bot Management</DropdownMenuItem>
              <DropdownMenuItem>DDoS Protection</DropdownMenuItem>
              <DropdownMenuItem>Managed WAF Services</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                Resources
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56">
              <DropdownMenuItem>Security Blog</DropdownMenuItem>
              <DropdownMenuItem>Case Studies</DropdownMenuItem>
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Threat Research</DropdownMenuItem>
              <DropdownMenuItem>Security Academy</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="#enterprise" className="text-sm font-medium hover:text-primary transition-colors">
            Enterprise
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
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
            Client Portal
          </Button>
          <Button size="sm" className="hidden md:flex">
            Request Demo
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
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">Solutions</p>
              <Link
                href="#"
                className="block text-lg font-medium hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Enterprise WAF
              </Link>
              <Link
                href="#"
                className="block text-lg font-medium hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                API Security
              </Link>
              <Link
                href="#"
                className="block text-lg font-medium hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Bot Management
              </Link>
              <Link
                href="#"
                className="block text-lg font-medium hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                DDoS Protection
              </Link>
            </div>

            <Link
              href="#features"
              className="text-lg font-medium hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-lg font-medium hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#enterprise"
              className="text-lg font-medium hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Enterprise
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center justify-between" />
            </div>
          </nav>
        </div>
      )}
    </motion.header>
  )
}
