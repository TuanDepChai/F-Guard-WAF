"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Theme = "light" | "dark"
type ColorTheme = "blue" | "purple" | "teal" | "amber" | "rose"

interface ThemeContextProps {
  theme: Theme
  colorTheme: ColorTheme
  setTheme: (theme: Theme) => void
  setColorTheme: (colorTheme: ColorTheme) => void
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  colorTheme: "blue",
  setTheme: () => {},
  setColorTheme: () => {},
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light")
  const [colorTheme, setColorTheme] = useState<ColorTheme>("blue")

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    const storedColorTheme = localStorage.getItem("colorTheme") as ColorTheme | null

    if (storedTheme) {
      setTheme(storedTheme === "dark" ? "dark" : "light")
    } else {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark")
      }
    }

    if (storedColorTheme) {
      setColorTheme(storedColorTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", theme)
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  useEffect(() => {
    localStorage.setItem("colorTheme", colorTheme)
    document.documentElement.setAttribute("data-color-theme", colorTheme)
  }, [colorTheme])

  return (
    <ThemeContext.Provider value={{ theme, colorTheme, setTheme, setColorTheme }}>{children}</ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
