"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/i18n/language-context"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LanguageDetector() {
  const [showBanner, setShowBanner] = useState(false)
  const { language, setLanguage } = useLanguage()

  useEffect(() => {
    // Get browser language
    const browserLang = navigator.language.split("-")[0]

    // Check if browser language is supported and different from current
    const supportedLanguages = ["en", "fr", "es", "de", "ja", "zh"]

    if (supportedLanguages.includes(browserLang) && browserLang !== language) {
      // Show language banner
      setShowBanner(true)
    }
  }, [language])

  const switchLanguage = () => {
    const browserLang = navigator.language.split("-")[0]
    setLanguage(browserLang)
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="bg-primary/10 border-b border-primary/20 py-2 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm">
          We detected that your browser language is different. Would you like to switch to {navigator.language}?
        </p>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={switchLanguage}>
            Switch Language
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setShowBanner(false)}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
