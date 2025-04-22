"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { getCookie } from "@/lib/cookies"
import { en } from "./locales/en"

// Simplified for now to fix the error
type Language = string

interface I18nContextProps {
  t: (key: string, options?: { returnObjects?: boolean }) => string | any
  language: string
  setLanguage: (lang: string) => void
}

const I18nContext = createContext<I18nContextProps>({
  t: (key) => key,
  language: "en",
  setLanguage: () => {},
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<string>("en")

  useEffect(() => {
    const savedLang = getCookie("FGUARD_LANG") || "en"
    setLanguage(savedLang)
  }, [])

  const t = (key: string, options?: { returnObjects?: boolean }): string | any => {
    try {
      const returnObjects = options?.returnObjects || false
      const keys = key.split(".")
      let value: any = en // Using only English for now to simplify

      // Navigate through the nested properties
      for (const k of keys) {
        if (value === undefined || value === null) {
          console.warn(`Translation key part "${k}" not found in "${key}"`)
          return key // Return the key if any part of the path is undefined
        }
        value = value[k]
      }

      // Return the whole object if returnObjects is true
      if (returnObjects && typeof value === "object") {
        return value
      }

      // Otherwise return string or fallback to key
      return typeof value === "string" ? value : key
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error)
      return key // Return the key if any error occurs
    }
  }

  return <I18nContext.Provider value={{ t, language, setLanguage }}>{children}</I18nContext.Provider>
}

export const useI18n = () => useContext(I18nContext)
