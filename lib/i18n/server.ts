import { cookies } from "next/headers"
import { translations } from "./translations"
import { defaultLanguage } from "./config"
import type { Language } from "./translations"

export function getTranslation(key: string, options?: { returnObjects?: boolean }): string | any {
  const cookieStore = cookies()
  const language = (cookieStore.get("FGUARD_LANG")?.value as Language) || (defaultLanguage as Language)
  const returnObjects = options?.returnObjects || false

  try {
    const keys = key.split(".")
    let value: any = translations[language]

    if (!value) {
      console.warn(`Translation for language ${language} not found, falling back to ${defaultLanguage}`)
      value = translations[defaultLanguage as Language]
    }

    // Navigate through the nested properties
    for (const k of keys) {
      if (value === undefined || value === null) {
        console.warn(`Translation key part "${k}" not found in "${key}"`)
        return key
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
    return key
  }
}
