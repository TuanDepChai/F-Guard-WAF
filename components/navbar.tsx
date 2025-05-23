"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import Image from "next/image"
import { Session } from "next-auth"
import { UserNav } from "@/components/user-nav"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Products",
    href: "#",
    children: [
      { name: "WAF Solution", href: "/products/waf" },
      { name: "DDoS Protection", href: "/products/ddos" },
      { name: "API Security", href: "/products/api" },
      { name: "Bot Management", href: "/products/bot" },
    ],
  },
  {
    name: "Solutions",
    href: "#",
    children: [
      { name: "Enterprise", href: "/solutions/enterprise" },
      { name: "Small Business", href: "/solutions/small-business" },
      { name: "E-commerce", href: "/solutions/ecommerce" },
      { name: "Healthcare", href: "/solutions/healthcare" },
      { name: "Financial Services", href: "/solutions/financial" },
    ],
  },
  { name: "Pricing", href: "/pricing" },
  {
    name: "Resources",
    href: "#",
    children: [
      { name: "Documentation", href: "/documentation" },
      { name: "API Docs", href: "/api-docs" },
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Security Academy", href: "/security-academy" },
      { name: "Technical Specs", href: "/technical-specs" },
      { name: "System Status", href: "/status" },
      { name: "Compliance", href: "/compliance" },
      { name: "Roadmap", href: "/roadmap" },
    ],
  },
  { name: "Partners", href: "/partners" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

interface NavbarProps {
  session: Session | null
}

export default function Navbar({ session }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" : "bg-white dark:bg-gray-900"
      }`}
    >
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex items-center">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">FGuard</span>
            <Image
              src="/images/logo.png"
              alt="FGuard Logo"
              width={200}
              height={200}
              className="mr-2"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`flex items-center gap-x-1 text-sm font-semibold leading-6 ${
                      activeDropdown === item.name
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-900 dark:text-gray-100"
                    }`}
                    aria-expanded={activeDropdown === item.name}
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </button>
                  {activeDropdown === item.name && (
                    <div className="absolute left-0 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-lg ring-1 ring-gray-900/5">
                      <div className="p-4">
                        {item.children.map((child) => (
                          <div
                            key={child.name}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-gray-700"
                          >
                            <div className="flex-auto">
                              <Link
                                href={child.href}
                                className="block font-semibold text-gray-900 dark:text-gray-100"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {child.name}
                                <span className="absolute inset-0" />
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`text-sm font-semibold leading-6 ${
                    isActive(item.href) ? "text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <ThemeToggle />
          {session ? (
            <UserNav user={session.user as any} />
          ) : (
            <>
              <Link
                href="/demo"
                className="rounded-md bg-blue-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Try Demo
              </Link>
              <Link
                href="/login"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
            </>
          )}
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center">
                <span className="sr-only">FGuard</span>
                <Image
                  src="/images/logo.png"
                  alt="FGuard Logo"
                  width={200}
                  height={200}
                  className="mr-2"
                />
              </Link>
              <button type="button" className="-m-2.5 rounded-md p-2.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name} className="-mx-3">
                      {item.children ? (
                        <div>
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className={`flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 ${
                              activeDropdown === item.name
                                ? "text-blue-600 dark:text-blue-400"
                                : "text-gray-900 dark:text-gray-100"
                            }`}
                            aria-expanded={activeDropdown === item.name}
                          >
                            {item.name}
                            <ChevronDown
                              className={`h-5 w-5 flex-none ${
                                activeDropdown === item.name ? "rotate-180" : ""
                              } transition-transform`}
                              aria-hidden="true"
                            />
                          </button>
                          {activeDropdown === item.name && (
                            <div className="mt-2 space-y-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className={`block rounded-lg py-2 pl-3 pr-3 text-base font-semibold leading-7 ${
                            isActive(item.href)
                              ? "text-blue-600 dark:text-blue-400"
                              : "text-gray-900 dark:text-gray-100"
                          } hover:bg-gray-50 dark:hover:bg-gray-800`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                {/* Mobile Auth/User section */}
                {session ? (
                  <div className="py-6">
                    <div className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800">
                      <UserNav user={session.user as any} />
                    </div>
                  </div>
                ) : (
                  <div className="py-6">
                    <Link
                      href="/login"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Log in
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
