"use client"

import { createContext, useContext, type ReactNode } from "react"
import { en } from "./locales/en"

interface I18nContextProps {
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextProps>({
  t: (key) => key,
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const t = (key: string): string => {
    try {
      const keys = key.split(".")
      let value: any = en

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

  return <I18nContext.Provider value={{ t }}>{children}</I18nContext.Provider>
}

export const useI18n = () => useContext(I18nContext)
// We're not exporting useTranslation here anymore, it's in index.ts
