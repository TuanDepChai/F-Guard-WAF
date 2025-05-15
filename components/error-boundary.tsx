"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

interface ErrorBoundaryProps {
  children: React.ReactNode
}

export default function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const errorHandler = (error: ErrorEvent) => {
      setHasError(true)
      setError(error.error)
      console.error("Error caught by error boundary:", error)
    }

    window.addEventListener("error", errorHandler)

    return () => {
      window.removeEventListener("error", errorHandler)
    }
  }, [])

  if (hasError) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="max-w-md p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We're sorry, but there was an error loading this page. Our team has been notified.
          </p>
          <div className="space-y-4">
            <Button
              onClick={() => {
                setHasError(false)
                setError(null)
              }}
            >
              Try again
            </Button>
            <Button variant="outline" onClick={() => window.location.reload()}>
              Reload page
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
