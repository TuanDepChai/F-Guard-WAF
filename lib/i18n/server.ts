import { en } from "./locales/en"

export function getTranslation(key: string): string {
  try {
    const keys = key.split(".")
    let value: any = en // Using only English for now to simplify

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
