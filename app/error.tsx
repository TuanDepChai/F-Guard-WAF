"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Home, RefreshCw } from "lucide-react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-6 text-center">
      <div className="rounded-full bg-red-100 dark:bg-red-900/20 p-4 mb-4">
        <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
      </div>
      <h1 className="text-3xl font-bold mb-2">Something went wrong</h1>
      <p className="text-muted-foreground mb-6 max-w-md">
        We apologize for the inconvenience. Our team has been notified and is working to fix the issue.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button onClick={reset} variant="outline">
          <RefreshCw className="mr-2 h-4 w-4" />
          Try Again
        </Button>
        <Link href="/">
          <Button>
            <Home className="mr-2 h-4 w-4" />
            Return Home
          </Button>
        </Link>
      </div>
      {process.env.NODE_ENV === "development" && (
        <div className="mt-6 p-4 bg-slate-100 dark:bg-slate-800 rounded-md text-left overflow-auto max-w-full">
          <p className="font-mono text-sm">{error.message}</p>
          {error.stack && <pre className="mt-2 text-xs overflow-auto">{error.stack}</pre>}
        </div>
      )}
    </div>
  )
}
