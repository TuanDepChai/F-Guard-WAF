// Simplified i18n implementation without actual translation functionality
export function useTranslation() {
  // Return a simple translation function that just returns the key
  return {
    t: (key: string, options?: any) => {
      // If options contains count, handle plural forms simply
      if (options?.count !== undefined) {
        return options.count === 1 ? key : `${key}s`
      }
      return key
    },
    i18n: {
      language: "en",
      changeLanguage: (lang: string) => Promise.resolve(),
    },
  }
}

// Simple language detection
export function detectLanguage(): string {
  return "en"
}

// Simple language list
export const languages = ["en"]

// Default language
export const defaultLanguage = "en"
