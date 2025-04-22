"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { getCookie, setCookie } from "@/lib/cookies"

// Define a simple array of languages since we can't import from config yet
const languages = [
  { code: "en", fallbacks: ["en-US", "en-GB", "en-AU", "en-CA"] },
  { code: "vi", fallbacks: [] },
  { code: "ja", fallbacks: [] },
  { code: "zh", fallbacks: ["zh-CN", "zh-TW", "zh-HK"] },
]

export default function LanguageDetector() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check if language preference already exists
    const savedLang = getCookie("FGUARD_LANG")
    if (savedLang) return

    // Detect browser language
    const browserLang = navigator.language.split("-")[0]

    // Check if detected language is supported
    const supportedLang = languages.find((lang) => lang.code === browserLang || lang.fallbacks?.includes(browserLang))

    if (supportedLang) {
      // Set language in cookie
      setCookie("FGUARD_LANG", supportedLang.code, 30)

      // Redirect if not on homepage to prevent unnecessary redirects
      if (pathname !== "/") {
        router.push(`/${supportedLang.code}${pathname}`)
      }
    }
  }, [pathname, router])

  return null
}
