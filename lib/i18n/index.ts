import { en } from "./locales/en"
import { useI18n } from "./i18n-provider"
import { getTranslation as serverGetTranslation } from "./server"

export const locales = {
  en,
}

export type Locale = keyof typeof locales

// Export useTranslation as an alias for useI18n
export const useTranslation = useI18n

// Export server-compatible translation function
export { serverGetTranslation as getTranslation }
