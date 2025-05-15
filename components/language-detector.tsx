"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-context"
import { motion, AnimatePresence } from "framer-motion"
import type { Locale } from "@/lib/i18n/translations"

const languageNames: Record<Locale, string> = {
  en: "English",
  vi: "Tiếng Việt",
  fr: "Français",
  de: "Deutsch",
  es: "Español",
  ja: "日本語",
  zh: "中文",
}

export function LanguageDetector() {
  const { locale, setLocale } = useLanguage()
  const [browserLocale, setBrowserLocale] = useState<Locale | null>(null)
  const [dismissed, setDismissed] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Check if the user has previously dismissed the banner
    const hasDismissed = localStorage.getItem("language-banner-dismissed") === "true"
    if (hasDismissed) {
      setDismissed(true)
      return
    }

    // Detect browser language
    const detectedLocale = navigator.language.split("-")[0] as Locale
    if (
      detectedLocale &&
      Object.keys(languageNames).includes(detectedLocale) &&
      detectedLocale !== locale &&
      !localStorage.getItem(`language-banner-dismissed-${detectedLocale}`)
    ) {
      setBrowserLocale(detectedLocale)
      setVisible(true)
    }
  }, [locale])

  const handleDismiss = () => {
    setVisible(false)
    setDismissed(true)
    localStorage.setItem("language-banner-dismissed", "true")
    if (browserLocale) {
      localStorage.setItem(`language-banner-dismissed-${browserLocale}`, "true")
    }
  }

  const handleSwitch = () => {
    if (browserLocale) {
      setLocale(browserLocale)
      setVisible(false)
      setDismissed(true)
      localStorage.setItem("language-banner-dismissed", "true")
    }
  }

  if (!browserLocale || dismissed || !visible) {
    return null
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-16 inset-x-0 z-40 p-4"
        >
          <div className="container mx-auto">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <p className="text-sm">
                  We detected that your browser language is{" "}
                  <span className="font-medium">{languageNames[browserLocale]}</span>. Would you like to switch?
                </p>
                <Button size="sm" variant="outline" onClick={handleSwitch}>
                  Switch to {languageNames[browserLocale]}
                </Button>
              </div>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 rounded-full"
                onClick={handleDismiss}
                aria-label="Dismiss"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
