"use client"

import type React from "react"

import { useState } from "react"

export default function SkipToContent() {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const mainContent = document.getElementById("main-content")
    if (mainContent) {
      mainContent.focus()
      mainContent.scrollIntoView()
    }
  }

  return (
    <a
      href="#main-content"
      className={`${
        isFocused ? "opacity-100 top-4" : "opacity-0 -top-10"
      } absolute left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-2 z-50 rounded-md transition-all duration-200 focus:outline-none`}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={handleClick}
    >
      Skip to content
    </a>
  )
}
