"use client"

import { useEffect } from "react"
import { initializePerformanceOptimizations } from "@/lib/performance"

export function PerformanceOptimization() {
  useEffect(() => {
    initializePerformanceOptimizations()
  }, [])

  return null
}

export default PerformanceOptimization
