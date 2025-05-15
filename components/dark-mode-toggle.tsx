"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before accessing theme
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Toggle theme">
        <div className="h-5 w-5 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>
      </Button>
    )
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-9 w-9 relative overflow-hidden"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      <div className="relative w-5 h-5">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{
            rotate: theme === "dark" ? 45 : 0,
            opacity: theme === "dark" ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="h-5 w-5" />
        </motion.div>

        <motion.div
          initial={{ rotate: -45 }}
          animate={{
            rotate: theme === "dark" ? 0 : -45,
            opacity: theme === "dark" ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="h-5 w-5" />
        </motion.div>
      </div>
    </Button>
  )
}
