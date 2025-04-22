"use client"

import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)

    // Set initial value
    setMatches(media.matches)

    // Create event listener for changes
    const listener = () => setMatches(media.matches)

    // Add listener
    media.addEventListener("change", listener)

    // Clean up
    return () => media.removeEventListener("change", listener)
  }, [query])

  return matches
}

// Common breakpoints helper hooks
export function useIsMobile() {
  return useMediaQuery("(max-width: 639px)")
}

export function useIsTablet() {
  return useMediaQuery("(min-width: 640px) and (max-width: 1023px)")
}

export function useIsDesktop() {
  return useMediaQuery("(min-width: 1024px)")
}

export function useIsLargeDesktop() {
  return useMediaQuery("(min-width: 1280px)")
}
