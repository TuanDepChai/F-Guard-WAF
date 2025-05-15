"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell } from "lucide-react"

export default function StatusSubscribe() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setEmail("")

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }, 1000)
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Bell className="h-6 w-6 text-primary" />
                <CardTitle>Subscribe to Status Updates</CardTitle>
              </div>
              <CardDescription>Get notified about service incidents and maintenance windows via email</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>

              {isSuccess && (
                <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-md">
                  Success! You are now subscribed to status updates.
                </div>
              )}

              <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                <p>You will receive notifications for:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Service outages and degradations</li>
                  <li>Scheduled maintenance windows</li>
                  <li>Resolution of incidents</li>
                  <li>Monthly uptime reports</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
