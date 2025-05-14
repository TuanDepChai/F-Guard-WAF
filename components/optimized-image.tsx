"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  quality?: number
  onLoad?: () => void
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  sizes = "100vw",
  quality = 85,
  onLoad,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Preload high-priority images
    if (priority && typeof window !== "undefined") {
      const img = new Image()
      img.src = src
      img.onload = () => {
        setIsLoading(false)
        if (onLoad) onLoad()
      }
    }
  }, [src, priority, onLoad])

  return (
    <div className={cn("overflow-hidden relative", className)}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={cn(
          "transition-opacity duration-500 ease-in-out",
          isLoading ? "opacity-0" : "opacity-100",
          className,
        )}
        priority={priority}
        fill={fill}
        sizes={sizes}
        quality={quality}
        onLoad={() => {
          setIsLoading(false)
          if (onLoad) onLoad()
        }}
      />
      {isLoading && <div className={cn("absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse", className)} />}
    </div>
  )
}
