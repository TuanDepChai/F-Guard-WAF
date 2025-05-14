"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"
import { CheckCircle2 } from "lucide-react"

export function BlogNewsletter() {
  const { t } = useTranslation()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail("")
    }, 1000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("blog.newsletterTitle") || "Security Newsletter"}</CardTitle>
        <CardDescription>
          {t("blog.newsletterDescription") || "Get the latest security updates and articles delivered to your inbox."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <div className="flex flex-col items-center text-center py-2">
            <CheckCircle2 className="h-12 w-12 text-green-500 mb-2" />
            <p className="font-medium">{t("blog.newsletterSuccess") || "Thank you for subscribing!"}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {t("blog.newsletterSuccessMessage") || "You'll receive our next security newsletter in your inbox."}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <Input
                type="email"
                placeholder={t("blog.emailPlaceholder") || "Your email address"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? t("blog.subscribing") || "Subscribing..." : t("blog.subscribe") || "Subscribe"}
              </Button>
            </div>
          </form>
        )}
      </CardContent>
      <CardFooter className="border-t text-xs text-muted-foreground">
        {t("blog.privacyNote") || "We respect your privacy. Unsubscribe at any time."}
      </CardFooter>
    </Card>
  )
}
