"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { motion, useAnimation, type Variant } from "framer-motion"
import { cn } from "@/lib/utils"

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out" | "flip" | "rotate"

interface AnimationVariants {
  hidden: Variant
  visible: Variant
}

const animations: Record<AnimationType, AnimationVariants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  "zoom-in": {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  "zoom-out": {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 1, scale: 1 },
  },
  flip: {
    hidden: { opacity: 0, rotateY: 90 },
    visible: { opacity: 1, rotateY: 0 },
  },
  rotate: {
    hidden: { opacity: 0, rotate: -45 },
    visible: { opacity: 1, rotate: 0 },
  },
}

interface ScrollAnimationProps {
  children: ReactNode
  type: AnimationType
  delay?: number
  duration?: number
  threshold?: number
  className?: string
}

export default function ScrollAnimation({
  children,
  type,
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className,
}: ScrollAnimationProps) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible")
          // Unobserve after animation has triggered
          if (ref.current) observer.unobserve(ref.current)
        }
      },
      { threshold },
    )

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [controls, threshold])

  const selectedAnimation = animations[type] || animations["fade-up"]

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={selectedAnimation}
      transition={{ duration, delay, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
