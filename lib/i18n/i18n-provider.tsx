"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { locales, type Locale } from "./index"

interface I18nContextProps {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextProps>({
  locale: "vi",
  setLocale: () => {},
  t: (key) => key,
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("vi")

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale | null
    if (savedLocale && Object.keys(locales).includes(savedLocale)) {
      setLocale(savedLocale)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("locale", locale)
    document.documentElement.lang = locale
  }, [locale])

  const t = (key: string): string => {
    try {
      const keys = key.split(".")
      let value: any = locales[locale]

      for (const k of keys) {
        if (value === undefined || value === null) {
          return key // Return the key if any part of the path is undefined
        }
        value = value[k]
      }

      return typeof value === "string" ? value : key
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error)
      return key // Return the key if any error occurs
    }
  }

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>
}

export const useI18n = () => useContext(I18nContext)
