"use client"

import { useEffect } from "react"

export function FontOptimization() {
  useEffect(() => {
    // Add font display swap to all Google Fonts
    const links = document.querySelectorAll('link[href*="fonts.googleapis.com"]')
    links.forEach((link) => {
      const href = link.getAttribute("href")
      if (href && !href.includes("&display=swap")) {
        link.setAttribute("href", `${href}&display=swap`)
      }
    })

    // Preload critical fonts
    const preloadFonts = [
      "/fonts/inter-var.woff2", // Example path, adjust as needed
    ]

    preloadFonts.forEach((font) => {
      const link = document.createElement("link")
      link.rel = "preload"
      link.href = font
      link.as = "font"
      link.type = "font/woff2"
      link.crossOrigin = "anonymous"
      document.head.appendChild(link)
    })
  }, [])

  return null
}

export default FontOptimization
