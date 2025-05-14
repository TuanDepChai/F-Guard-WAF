/**
 * Stub implementation for i18n functionality
 * This file exists to satisfy imports that haven't been fully removed yet
 */

export const useTranslation = () => {
  // Return a function that returns the input string
  // This way any t("some.key") calls will just return "some.key"
  return {
    t: (key: string) => key,
    locale: "en",
    changeLocale: () => {},
  }
}

// Add any other exports that might be needed
export const getI18n = () => ({
  language: "en",
  changeLanguage: () => Promise.resolve(),
})
