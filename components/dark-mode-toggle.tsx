"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon, Laptop } from "lucide-react"

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        type="button"
        className="rounded-md p-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Toggle dark mode"
      >
        <Sun className="h-5 w-5" />
      </button>
    )
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const closeDropdown = () => {
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleDropdown}
        className="rounded-md p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Toggle dark mode"
      >
        {theme === "dark" ? (
          <Moon className="h-5 w-5" />
        ) : theme === "light" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Laptop className="h-5 w-5" />
        )}
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={closeDropdown}></div>
          <div className="absolute right-0 z-20 mt-2 w-36 rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <button
                onClick={() => {
                  setTheme("light")
                  closeDropdown()
                }}
                className="flex w-full items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                role="menuitem"
              >
                <Sun className="mr-3 h-4 w-4" />
                Light
              </button>
              <button
                onClick={() => {
                  setTheme("dark")
                  closeDropdown()
                }}
                className="flex w-full items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                role="menuitem"
              >
                <Moon className="mr-3 h-4 w-4" />
                Dark
              </button>
              <button
                onClick={() => {
                  setTheme("system")
                  closeDropdown()
                }}
                className="flex w-full items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                role="menuitem"
              >
                <Laptop className="mr-3 h-4 w-4" />
                System
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
