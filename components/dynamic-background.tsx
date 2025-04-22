"use client"

import type React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

interface DynamicBackgroundProps {
  className?: string
  children?: React.ReactNode
  variant?: "default" | "gradient" | "mesh" | "animated"
  intensity?: "low" | "medium" | "high"
}

export function DynamicBackground({
  className,
  children,
  variant = "default",
  intensity = "medium",
}: DynamicBackgroundProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={cn("relative", className)}>{children}</div>
  }

  const isDark = theme === "dark"

  const getBackgroundClasses = () => {
    switch (variant) {
      case "gradient":
        return cn(
          "bg-gradient-to-br",
          isDark ? "from-slate-900 via-slate-800 to-slate-900" : "from-white via-slate-50 to-white",
          className,
        )
      case "mesh":
        return cn(isDark ? "bg-mesh-dark" : "bg-mesh-light", className)
      case "animated":
        return cn("relative overflow-hidden", isDark ? "bg-slate-900" : "bg-white", className)
      default:
        return cn(isDark ? "bg-slate-900" : "bg-white", className)
    }
  }

  const getIntensityValue = () => {
    switch (intensity) {
      case "low":
        return 0.3
      case "high":
        return 0.8
      default:
        return 0.5
    }
  }

  return (
    <div className={cn("relative transition-colors duration-300", getBackgroundClasses())}>
      {variant === "default" && (
        <div className="absolute inset-0 -z-10">
          <div
            className={cn(
              "absolute inset-0",
              isDark ? "bg-grid-slate-700/20" : "bg-grid-slate-200/50",
              "[mask-image:linear-gradient(0deg,white,transparent)]",
            )}
          ></div>
        </div>
      )}

      {variant === "animated" && (
        <>
          <motion.div
            className="absolute top-0 -left-40 w-80 h-80 opacity-30"
            style={{
              background: `radial-gradient(circle, ${isDark ? "rgba(59, 130, 246, 0.3)" : "rgba(59, 130, 246, 0.15)"}, transparent)`,
            }}
            animate={{
              x: [0, 60, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 opacity-30"
            style={{
              background: `radial-gradient(circle, ${isDark ? "rgba(14, 165, 233, 0.3)" : "rgba(14, 165, 233, 0.15)"}, transparent)`,
            }}
            animate={{
              x: [0, -60, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20"
            style={{
              background: `radial-gradient(circle, ${isDark ? "rgba(37, 99, 235, 0.3)" : "rgba(37, 99, 235, 0.15)"}, transparent)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </>
      )}

      {children}
    </div>
  )
}
