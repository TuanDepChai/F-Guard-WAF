"use client"

import { useEffect, useRef } from "react"
import type { ReactNode } from "react"

interface FocusTrapProps {
  children: ReactNode
  active?: boolean
  onEscape?: () => void
}

export function FocusTrap({ children, active = true, onEscape }: FocusTrapProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!active) return

    const container = containerRef.current
    if (!container) return

    // Find all focusable elements
    const focusableElements = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    )

    if (focusableElements.length === 0) return

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    // Focus the first element when the trap is activated
    firstElement.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      // Handle escape key
      if (e.key === "Escape" && onEscape) {
        e.preventDefault()
        onEscape()
        return
      }

      // Handle tab key to trap focus
      if (e.key === "Tab") {
        if (e.shiftKey) {
          // If shift+tab and on first element, move to last element
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          }
        } else {
          // If tab and on last element, move to first element
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [active, onEscape])

  return <div ref={containerRef}>{children}</div>
}
