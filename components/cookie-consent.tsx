"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Cookie, Settings, X } from "lucide-react"

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  preferences: boolean
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  })

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    }
    setPreferences(allAccepted)
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted))
    setIsVisible(false)
  }

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences))
    setIsVisible(false)
    setShowSettings(false)
  }

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    }
    setPreferences(onlyNecessary)
    localStorage.setItem("cookie-consent", JSON.stringify(onlyNecessary))
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4"
      >
        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-background to-background/80 backdrop-blur-sm border-primary/20">
          {!showSettings ? (
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Cookie className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Cookie Preferences</h3>
                    <p className="text-muted-foreground">
                      We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                      By clicking "Accept All", you consent to our use of cookies.
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsVisible(false)}
                  className="hover:bg-primary/10"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                <Button
                  onClick={handleAcceptAll}
                  className="bg-primary hover:bg-primary/90"
                >
                  Accept All
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowSettings(true)}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Customize
                </Button>
                <Button
                  variant="ghost"
                  onClick={handleRejectAll}
                >
                  Reject All
                </Button>
              </div>
            </div>
          ) : (
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Cookie Settings</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowSettings(false)}
                  className="hover:bg-primary/10"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="necessary"
                    checked={preferences.necessary}
                    disabled
                  />
                  <Label htmlFor="necessary" className="flex-1">
                    <div>
                      <span className="font-medium">Necessary Cookies</span>
                      <p className="text-sm text-muted-foreground">
                        Required for the website to function properly. Cannot be disabled.
                      </p>
                    </div>
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="analytics"
                    checked={preferences.analytics}
                    onCheckedChange={(checked) => 
                      setPreferences(prev => ({ ...prev, analytics: checked as boolean }))
                    }
                  />
                  <Label htmlFor="analytics" className="flex-1">
                    <div>
                      <span className="font-medium">Analytics Cookies</span>
                      <p className="text-sm text-muted-foreground">
                        Help us understand how visitors interact with our website.
                      </p>
                    </div>
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="marketing"
                    checked={preferences.marketing}
                    onCheckedChange={(checked) => 
                      setPreferences(prev => ({ ...prev, marketing: checked as boolean }))
                    }
                  />
                  <Label htmlFor="marketing" className="flex-1">
                    <div>
                      <span className="font-medium">Marketing Cookies</span>
                      <p className="text-sm text-muted-foreground">
                        Used to track visitors across websites for marketing purposes.
                      </p>
                    </div>
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="preferences"
                    checked={preferences.preferences}
                    onCheckedChange={(checked) => 
                      setPreferences(prev => ({ ...prev, preferences: checked as boolean }))
                    }
                  />
                  <Label htmlFor="preferences" className="flex-1">
                    <div>
                      <span className="font-medium">Preference Cookies</span>
                      <p className="text-sm text-muted-foreground">
                        Remember your settings and preferences for a better experience.
                      </p>
                    </div>
                  </Label>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <Button
                  onClick={handleSavePreferences}
                  className="bg-primary hover:bg-primary/90"
                >
                  Save Preferences
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowSettings(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </Card>
      </motion.div>
    </AnimatePresence>
  )
}
