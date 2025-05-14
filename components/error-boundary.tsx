"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle, RefreshCw } from "lucide-react"

interface ErrorBoundaryProps {
  children: React.ReactNode
}

export function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const errorHandler = (error: ErrorEvent) => {
      console.error("Error caught by error boundary:", error)
      setError(error.error)
      setHasError(true)
    }

    window.addEventListener("error", errorHandler)

    return () => {
      window.removeEventListener("error", errorHandler)
    }
  }, [])

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-6 text-center">
        <div className="rounded-full bg-red-100 dark:bg-red-900/20 p-4 mb-4">
          <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
        <p className="text-muted-foreground mb-6 max-w-md">
          We apologize for the inconvenience. Our team has been notified of this issue.
        </p>
        <div className="flex gap-4">
          <Button
            variant="outline"
            onClick={() => {
              setHasError(false)
              setError(null)
            }}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Button onClick={() => window.location.reload()}>Reload Page</Button>
        </div>
        {process.env.NODE_ENV === "development" && error && (
          <div className="mt-6 p-4 bg-slate-100 dark:bg-slate-800 rounded-md text-left overflow-auto max-w-full">
            <p className="font-mono text-sm">{error.toString()}</p>
          </div>
        )}
      </div>
    )
  }

  return <>{children}</>
}

export default ErrorBoundary
