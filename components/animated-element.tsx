"use client"

import type React from "react"

import type { ReactNode } from "react"
import { motion, type MotionProps, type Variant } from "framer-motion"
import { cn } from "@/lib/utils"

type AnimationPreset =
  | "fade-in"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "zoom-in"
  | "zoom-out"
  | "bounce"
  | "pulse"
  | "wiggle"

interface AnimationConfig {
  initial: Variant
  animate: Variant
  exit?: Variant
}

const animations: Record<AnimationPreset, AnimationConfig> = {
  "fade-in": {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "slide-up": {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  "slide-down": {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  "slide-left": {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },
  "slide-right": {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },
  "zoom-in": {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
  "zoom-out": {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
  },
  bounce: {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: [0, -10, 0] },
  },
  pulse: {
    initial: { opacity: 0, scale: 1 },
    animate: { opacity: 1, scale: [1, 1.05, 1] },
  },
  wiggle: {
    initial: { opacity: 0, rotate: 0 },
    animate: { opacity: 1, rotate: [0, -3, 3, -2, 2, 0] },
  },
}

interface AnimatedElementProps extends MotionProps {
  children: ReactNode
  preset?: AnimationPreset
  className?: string
  delay?: number
  duration?: number
  as?: React.ElementType
}

export default function AnimatedElement({
  children,
  preset = "fade-in",
  className,
  delay = 0,
  duration = 0.4,
  as = "div",
  ...props
}: AnimatedElementProps) {
  const Component = motion[as as keyof typeof motion] || motion.div
  const animation = animations[preset]

  return (
    <Component
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animation}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Component>
  )
}
