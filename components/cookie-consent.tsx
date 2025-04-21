"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

export default function CookieConsent() {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white dark:bg-gray-900 border-t shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{t("cookieConsent.title")}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{t("cookieConsent.description")}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={handleDecline}>
            {t("cookieConsent.decline")}
          </Button>
          <Button size="sm" onClick={handleAccept}>
            {t("cookieConsent.accept")}
          </Button>
        </div>
      </div>
    </div>
  )
}
