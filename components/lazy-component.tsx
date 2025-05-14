"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface LazyComponentProps {
  children: React.ReactNode
  threshold?: number
  placeholder?: React.ReactNode
}

export function LazyComponent({ children, threshold = 0.1, placeholder }: LazyComponentProps) {
  const [shouldRender, setShouldRender] = useState(false)
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      setShouldRender(true)
    }
  }, [inView])

  return (
    <div ref={ref} className="w-full">
      {shouldRender
        ? children
        : placeholder || <div className="animate-pulse bg-slate-200 dark:bg-slate-700 h-40 rounded-md" />}
    </div>
  )
}

export default LazyComponent
