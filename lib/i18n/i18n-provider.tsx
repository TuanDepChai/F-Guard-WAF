"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { vi } from "./locales/vi"
import { en } from "./locales/en"
import { ja } from "./locales/ja"
import { zh } from "./locales/zh"

type Locale = "vi" | "en" | "ja" | "zh"

type Translations = {
  [key: string]: string | Translations
}

interface I18nContextProps {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const locales: Record<Locale, Translations> = {
  vi,
  en,
  ja,
  zh,
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
    const keys = key.split(".")
    let value: any = locales[locale]

    for (const k of keys) {
      if (value === undefined) return key
      value = value[k]
    }

    return typeof value === "string" ? value : key
  }

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>
}

export const useI18n = () => useContext(I18nContext)
