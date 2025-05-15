"use client"

import { useEffect } from "react"
import { useLanguage } from "@/lib/i18n/language-context"

export function LanguageAutoDetector() {
  const { setLanguage } = useLanguage()

  useEffect(() => {
    // Get browser language
    const browserLang = navigator.language.split("-")[0]

    // Check if browser language is supported
    const supportedLanguages = ["en", "fr", "es", "de", "ja", "zh"]

    if (supportedLanguages.includes(browserLang) && browserLang !== "en") {
      // Set language based on browser preference
      setLanguage(browserLang)
    }
  }, [setLanguage])

  return null
}
