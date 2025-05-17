"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`${
        isVisible ? "opacity-100" : "opacity-0"
      } fixed bottom-4 right-4 z-40 rounded-full bg-blue-600 p-3 text-white shadow-md transition-opacity duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}
