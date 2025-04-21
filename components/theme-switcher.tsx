"use client"

import { useState } from "react"
import { Check, Moon, Palette, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function ThemeSwitcher() {
  const { theme, colorTheme, setTheme, setColorTheme } = useTheme()
  const [open, setOpen] = useState(false)

  const colorThemes = [
    { name: "Blue", value: "blue", color: "bg-blue-600" },
    { name: "Purple", value: "purple", color: "bg-purple-600" },
    { name: "Teal", value: "teal", color: "bg-teal-600" },
    { name: "Amber", value: "amber", color: "bg-amber-600" },
    { name: "Rose", value: "rose", color: "bg-rose-600" },
  ]

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setTheme("light")} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sun className="h-4 w-4" />
            <span>Light</span>
          </div>
          {theme === "light" && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Moon className="h-4 w-4" />
            <span>Dark</span>
          </div>
          {theme === "dark" && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="flex items-center gap-2">
          <Palette className="h-4 w-4" />
          <span>Color Theme</span>
        </DropdownMenuLabel>
        <div className="grid grid-cols-5 gap-1 p-2">
          {colorThemes.map((item) => (
            <motion.button
              key={item.value}
              className={cn(
                "h-8 w-8 rounded-full flex items-center justify-center",
                item.color,
                colorTheme === item.value ? "ring-2 ring-offset-2 ring-offset-background" : "",
              )}
              onClick={() => setColorTheme(item.value as any)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {colorTheme === item.value && <Check className="h-4 w-4 text-white" />}
            </motion.button>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
