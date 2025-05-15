"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Keyboard } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

type ShortcutCategory = "navigation" | "actions" | "accessibility"

type Shortcut = {
  keys: string[]
  description: string
  action: () => void
  category: ShortcutCategory
}

export default function KeyboardShortcuts() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  const shortcuts: Shortcut[] = [
    {
      keys: ["?"],
      description: "Show keyboard shortcuts",
      action: () => setOpen(true),
      category: "accessibility",
    },
    {
      keys: ["Ctrl", "K"],
      description: "Open search",
      action: () => {
        const event = new KeyboardEvent("keydown", {
          key: "k",
          ctrlKey: true,
        })
        document.dispatchEvent(event)
      },
      category: "navigation",
    },
    {
      keys: ["g", "h"],
      description: "Go to home page",
      action: () => {
        window.location.href = "/"
      },
      category: "navigation",
    },
    {
      keys: ["g", "d"],
      description: "Go to documentation",
      action: () => {
        window.location.href = "/documentation"
      },
      category: "navigation",
    },
    {
      keys: ["g", "b"],
      description: "Go to blog",
      action: () => {
        window.location.href = "/blog"
      },
      category: "navigation",
    },
    {
      keys: ["g", "p"],
      description: "Go to pricing",
      action: () => {
        window.location.href = "/#pricing"
      },
      category: "navigation",
    },
    {
      keys: ["g", "a"],
      description: "Go to about us",
      action: () => {
        window.location.href = "/about"
      },
      category: "navigation",
    },
    {
      keys: ["g", "c"],
      description: "Go to contact",
      action: () => {
        window.location.href = "/contact"
      },
      category: "navigation",
    },
    {
      keys: ["t"],
      description: "Toggle theme",
      action: () => {
        const themeToggle = document.querySelector("[aria-label*='theme']") as HTMLButtonElement
        if (themeToggle) {
          themeToggle.click()
        }
      },
      category: "accessibility",
    },
    {
      keys: ["l"],
      description: "Open language switcher",
      action: () => {
        const languageSwitcher = document.querySelector("[aria-label='Select language']") as HTMLButtonElement
        if (languageSwitcher) {
          languageSwitcher.click()
        }
      },
      category: "accessibility",
    },
    {
      keys: ["p"],
      description: "Print current page",
      action: () => {
        const printButton = document.querySelector(".print-button") as HTMLButtonElement
        if (printButton) {
          printButton.click()
        } else {
          window.print()
        }
      },
      category: "actions",
    },
    {
      keys: ["Esc"],
      description: "Close dialogs",
      action: () => {
        setOpen(false)
      },
      category: "accessibility",
    },
    {
      keys: ["Tab"],
      description: "Navigate through focusable elements",
      action: () => {},
      category: "accessibility",
    },
    {
      keys: ["Shift", "Tab"],
      description: "Navigate backward through focusable elements",
      action: () => {},
      category: "accessibility",
    },
    {
      keys: ["/"],
      description: "Focus search",
      action: () => {
        const searchButton = document.querySelector("[aria-label*='search']") as HTMLButtonElement
        if (searchButton) {
          searchButton.click()
        }
      },
      category: "navigation",
    },
  ]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts when typing in input fields
      if (
        document.activeElement instanceof HTMLInputElement ||
        document.activeElement instanceof HTMLTextAreaElement ||
        document.activeElement instanceof HTMLSelectElement
      ) {
        return
      }

      // Show shortcuts dialog when pressing ?
      if (e.key === "?" && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault()
        setOpen(true)
        return
      }

      // Handle other shortcuts
      for (const shortcut of shortcuts) {
        if (shortcut.keys.length === 1 && e.key.toLowerCase() === shortcut.keys[0].toLowerCase()) {
          if (!e.ctrlKey && !e.metaKey && !e.altKey && e.key !== "?") {
            e.preventDefault()
            shortcut.action()
            return
          }
        }

        // Handle two-key shortcuts (like g followed by h)
        if (
          shortcut.keys.length === 2 &&
          e.key.toLowerCase() === shortcut.keys[1].toLowerCase() &&
          lastKeyPressed === shortcut.keys[0].toLowerCase()
        ) {
          if (!e.ctrlKey && !e.metaKey && !e.altKey) {
            e.preventDefault()
            shortcut.action()
            return
          }
        }
      }

      // Store last key pressed for two-key shortcuts
      if (!e.ctrlKey && !e.metaKey && !e.altKey) {
        lastKeyPressed = e.key.toLowerCase()
      }
    }

    let lastKeyPressed = ""
    let keyPressTimer: NodeJS.Timeout

    const resetLastKeyPressed = () => {
      clearTimeout(keyPressTimer)
      keyPressTimer = setTimeout(() => {
        lastKeyPressed = ""
      }, 1000)
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keydown", resetLastKeyPressed)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keydown", resetLastKeyPressed)
      clearTimeout(keyPressTimer)
    }
  }, [])

  // Group shortcuts by category
  const navigationShortcuts = shortcuts.filter((shortcut) => shortcut.category === "navigation")
  const actionShortcuts = shortcuts.filter((shortcut) => shortcut.category === "actions")
  const accessibilityShortcuts = shortcuts.filter((shortcut) => shortcut.category === "accessibility")

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9"
        onClick={() => setOpen(true)}
        aria-label="Keyboard shortcuts"
      >
        <Keyboard className="h-4 w-4" />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Keyboard Shortcuts</DialogTitle>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Navigation</h3>
              <div className="grid gap-2">
                {navigationShortcuts.map((shortcut, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span>{shortcut.description}</span>
                    <div className="flex items-center gap-1">
                      {shortcut.keys.map((key, keyIndex) => (
                        <kbd
                          key={keyIndex}
                          className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                        >
                          {key}
                        </kbd>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Actions</h3>
              <div className="grid gap-2">
                {actionShortcuts.map((shortcut, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span>{shortcut.description}</span>
                    <div className="flex items-center gap-1">
                      {shortcut.keys.map((key, keyIndex) => (
                        <kbd
                          key={keyIndex}
                          className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                        >
                          {key}
                        </kbd>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Accessibility</h3>
              <div className="grid gap-2">
                {accessibilityShortcuts.map((shortcut, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span>{shortcut.description}</span>
                    <div className="flex items-center gap-1">
                      {shortcut.keys.map((key, keyIndex) => (
                        <kbd
                          key={keyIndex}
                          className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                        >
                          {key}
                        </kbd>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            Press{" "}
            <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600">
              ?
            </kbd>{" "}
            at any time to show this dialog.
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
