"use client"

import { useI18n } from "./i18n-provider"

export function useTranslation() {
  return useI18n()
}

export function getTranslation(key: string) {
  // This is a simplified version for client components
  // The actual implementation would use the server-side function
  return key
}
