export const i18nConfig = {
  defaultLocale: "en",
  locales: ["en"],
  localeCookieName: "NEXT_LOCALE",
  localeDetection: true,
}

export type Locale = (typeof i18nConfig)["locales"][number]
