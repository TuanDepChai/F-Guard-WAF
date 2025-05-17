"use client"

import type * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { createContext, useContext, useState, useEffect } from "react"

type ThemeProviderProps = {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
}

type ColorTheme = "blue" | "purple" | "teal" | "amber" | "rose"

type ThemeContextType = {
  theme: string | undefined
  colorTheme: ColorTheme
  setTheme: (theme: string) => void
  setColorTheme: (colorTheme: ColorTheme) => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  colorTheme: "blue",
  setTheme: () => {},
  setColorTheme: () => {},
})

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  ...props
}: ThemeProviderProps) {
  const [colorTheme, setColorThemeState] = useState<ColorTheme>("blue")
  const [mounted, setMounted] = useState(false)
  const [resolvedTheme, setResolvedTheme] = useState<string | undefined>(defaultTheme)

  useEffect(() => {
    // Get color theme from localStorage if available
    try {
      const savedColor = localStorage.getItem("FGUARD_COLOR") as ColorTheme
      if (savedColor) {
        setColorThemeState(savedColor)
      }
    } catch (e) {
      // Ignore localStorage errors
    }
    setMounted(true)
  }, [])

  // Set color theme and save to localStorage
  const setColorTheme = (newColorTheme: ColorTheme) => {
    setColorThemeState(newColorTheme)
    try {
      localStorage.setItem("FGUARD_COLOR", newColorTheme)
    } catch (e) {
      // Ignore localStorage errors
    }
  }

  // Update theme
  const setTheme = (theme: string) => {
    setResolvedTheme(theme)
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{ theme: resolvedTheme, colorTheme, setTheme, setColorTheme }}>
      <NextThemesProvider attribute={attribute} defaultTheme={defaultTheme} enableSystem={enableSystem} {...props}>
        {children}
      </NextThemesProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
