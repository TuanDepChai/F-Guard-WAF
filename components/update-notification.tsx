"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw, X } from "lucide-react"

export function UpdateNotification() {
  const [showUpdateNotification, setShowUpdateNotification] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
      return
    }

    let refreshing = false

    // Check for service worker updates
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (refreshing) return
      refreshing = true
      window.location.reload()
    })

    // Listen for new service worker
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.onstatechange = (event) => {
        if ((event.target as any).state === "redundant") {
          setShowUpdateNotification(true)
        }
      }
    }

    // Check for updates every 10 minutes
    const interval = setInterval(
      () => {
        navigator.serviceWorker.ready.then((registration) => {
          registration.update().catch(console.error)
        })
      },
      10 * 60 * 1000,
    )

    return () => clearInterval(interval)
  }, [])

  if (!showUpdateNotification) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm bg-white dark:bg-slate-800 rounded-lg shadow-lg border p-4 flex items-center gap-4">
      <div className="flex-1">
        <p className="font-medium">New version available</p>
        <p className="text-sm text-muted-foreground">Refresh to update to the latest version</p>
      </div>
      <div className="flex gap-2">
        <Button size="sm" onClick={() => window.location.reload()}>
          <RefreshCw className="h-4 w-4 mr-1" />
          Update
        </Button>
        <Button size="sm" variant="ghost" onClick={() => setShowUpdateNotification(false)}>
          <X className="h-4 w-4" />
          <span className="sr-only">Dismiss</span>
        </Button>
      </div>
    </div>
  )
}

export default UpdateNotification
