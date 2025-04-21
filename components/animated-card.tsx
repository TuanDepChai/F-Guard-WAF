"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useTheme } from "@/components/theme-provider"

interface AnimatedCardProps {
  className?: string
  children: ReactNode
  glowOnHover?: boolean
  variant?: "default" | "glass" | "gradient" | "outline"
}

export function AnimatedCard({ className, children, glowOnHover = true, variant = "default" }: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const getCardClasses = () => {
    switch (variant) {
      case "glass":
        return "glass border border-white/10 dark:border-white/5"
      case "gradient":
        return "bg-gradient-to-br from-[hsl(var(--gradient-start)/0.1)] to-[hsl(var(--gradient-end)/0.1)] dark:from-[hsl(var(--gradient-start)/0.2)] dark:to-[hsl(var(--gradient-end)/0.2)] border border-white/10 dark:border-white/5"
      case "outline":
        return "bg-transparent gradient-border"
      default:
        return cn("bg-white dark:bg-slate-800 border", isDark ? "border-slate-700" : "border-slate-200")
    }
  }

  // Create a className string that includes the glow effect conditionally
  const cardClassName = cn(
    "rounded-lg overflow-hidden relative theme-transition",
    getCardClasses(),
    // Only add the glow class if both conditions are met
    glowOnHover && isHovered ? "glow" : "",
    className,
  )

  return (
    <motion.div
      ref={cardRef}
      className={cardClassName}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {isHovered && glowOnHover && (
        <motion.div
          className="absolute pointer-events-none"
          animate={{
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          style={{
            width: 150,
            height: 150,
            borderRadius: "50%",
            background: `radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 70%)`,
          }}
        />
      )}
      {children}
    </motion.div>
  )
}
