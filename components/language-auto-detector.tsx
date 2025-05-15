"use client"

import { useEffect } from "react"
import { useLanguage } from "@/lib/i18n/language-context"
import type { Locale } from "@/lib/i18n/translations"

export function LanguageAutoDetector() {
  const { locale, setLocale } = useLanguage()

  useEffect(() => {
    // Check if user has already selected a language
    const savedLocale = localStorage.getItem("locale")
    if (savedLocale) return

    // Detect browser language
    const browserLang = navigator.language.split("-")[0] as Locale
    const supportedLanguages: Locale[] = ["en", "vi", "fr", "de", "es", "ja", "zh"]

    if (supportedLanguages.includes(browserLang) && browserLang !== locale) {
      setLocale(browserLang)
    }
  }, [locale, setLocale])

  return null
}
