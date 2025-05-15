"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface BlurImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export default function BlurImage({ src, alt, width, height, className, priority = false }: BlurImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (priority) {
      setIsLoaded(true)
      return
    }

    const img = new Image()
    img.src = src
    img.onload = () => {
      setIsLoaded(true)
    }
  }, [src, priority])

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className={cn(
          "absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse",
          isLoaded ? "opacity-0" : "opacity-100",
        )}
        style={{ transition: "opacity 0.5s ease-in-out" }}
      />
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0",
        )}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  )
}
