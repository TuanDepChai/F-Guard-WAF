import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ResponsiveContainerProps {
  children: ReactNode
  className?: string
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"
  padding?: boolean
}

export default function ResponsiveContainer({
  children,
  className,
  maxWidth = "xl",
  padding = true,
}: ResponsiveContainerProps) {
  return (
    <div
      className={cn(
        "w-full mx-auto",
        {
          "px-4 sm:px-6 md:px-8": padding,
          "max-w-screen-xs": maxWidth === "xs",
          "max-w-screen-sm": maxWidth === "sm",
          "max-w-screen-md": maxWidth === "md",
          "max-w-screen-lg": maxWidth === "lg",
          "max-w-screen-xl": maxWidth === "xl",
          "max-w-screen-2xl": maxWidth === "2xl",
        },
        className,
      )}
    >
      {children}
    </div>
  )
}
