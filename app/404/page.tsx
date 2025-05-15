"use client"

import { useEffect, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import NotFound from "../not-found"
import { Skeleton } from "@/components/ui/skeleton"

function Custom404Content() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Analytics tracking for 404 pages
    const path = window.location.pathname
    const referrer = document.referrer
    const query = searchParams.toString()

    // Log 404 error (in a real app, this would send to an analytics service)
    console.error(`404 error: ${path}${query ? `?${query}` : ""} (referred from: ${referrer})`)
  }, [searchParams])

  return <NotFound />
}

export default function Custom404Page() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
          <Skeleton className="h-64 w-64 rounded-full mb-8" />
          <Skeleton className="h-12 w-48 mb-4" />
          <Skeleton className="h-8 w-72 mb-8" />
          <div className="flex gap-4">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      }
    >
      <Custom404Content />
    </Suspense>
  )
}
