import { vi } from "./locales/vi"
import { en } from "./locales/en"
import { ja } from "./locales/ja"
import { zh } from "./locales/zh"

export const locales = {
  vi,
  en,
  ja,
  zh,
}

export type Locale = keyof typeof locales
