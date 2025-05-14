"use client"

import { useEffect, useState } from "react"

export function PerformanceMetrics() {
  const [metrics, setMetrics] = useState<{
    fcp: number | null
    lcp: number | null
    cls: number | null
    fid: number | null
  }>({
    fcp: null,
    lcp: null,
    cls: null,
    fid: null,
  })

  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== "production") return

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      const firstEntry = entries[0]
      if (firstEntry) {
        setMetrics((prev) => ({ ...prev, fcp: firstEntry.startTime }))
      }
    })
    fcpObserver.observe({ type: "paint", buffered: true })

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      const lastEntry = entries[entries.length - 1]
      if (lastEntry) {
        setMetrics((prev) => ({ ...prev, lcp: lastEntry.startTime }))
      }
    })
    lcpObserver.observe({ type: "largest-contentful-paint", buffered: true })

    // Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((entryList) => {
      let clsValue = 0
      for (const entry of entryList.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value
        }
      }
      setMetrics((prev) => ({ ...prev, cls: clsValue }))
    })
    clsObserver.observe({ type: "layout-shift", buffered: true })

    // First Input Delay
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      const firstEntry = entries[0]
      if (firstEntry) {
        setMetrics((prev) => ({ ...prev, fid: (firstEntry as any).processingStart - (firstEntry as any).startTime }))
      }
    })
    fidObserver.observe({ type: "first-input", buffered: true })

    return () => {
      fcpObserver.disconnect()
      lcpObserver.disconnect()
      clsObserver.disconnect()
      fidObserver.disconnect()
    }
  }, [])

  // Send metrics to analytics or monitoring service
  useEffect(() => {
    if (metrics.fcp && metrics.lcp && metrics.cls !== null && metrics.fid) {
      // Here you would send the metrics to your analytics service
      console.log("Performance metrics:", metrics)
    }
  }, [metrics])

  // This component doesn't render anything visible
  return null
}

export default PerformanceMetrics
