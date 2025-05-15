"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Locale, type TranslationKey, translations } from "./translations"

type LanguageContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: TranslationKey) => string
}

const defaultLocale: Locale = "en"

const LanguageContext = createContext<LanguageContextType>({
  locale: defaultLocale,
  setLocale: () => {},
  t: (key) => key,
})

export const useLanguage = () => useContext(LanguageContext)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  useEffect(() => {
    // Try to get the language from localStorage
    const savedLocale = localStorage.getItem("locale") as Locale | null
    if (savedLocale && Object.keys(translations).includes(savedLocale)) {
      setLocale(savedLocale)
    } else {
      // Try to detect browser language
      const browserLocale = navigator.language.split("-")[0] as Locale
      if (Object.keys(translations).includes(browserLocale)) {
        setLocale(browserLocale)
      }
    }
  }, [])

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem("locale", newLocale)
    // Update HTML lang attribute
    document.documentElement.lang = newLocale
  }

  const t = (key: TranslationKey): string => {
    return translations[locale][key] || translations[defaultLocale][key] || key
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>{children}</LanguageContext.Provider>
  )
}
