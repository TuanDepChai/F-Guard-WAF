"use client"

import { useState, useEffect } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { getCookie, setCookie } from "@/lib/cookies"

const languages = [
  { name: "English", code: "en", flag: "🇺🇸" },
  { name: "Tiếng Việt", code: "vi", flag: "🇻🇳" },
  { name: "日本語", code: "ja", flag: "🇯🇵" },
  { name: "中文", code: "zh", flag: "🇨🇳" },
]

export function LanguageSwitcher() {
  const [currentLanguage, setCurrentLanguage] = useState("en")

  useEffect(() => {
    const savedLang = getCookie("FGUARD_LANG") || "en"
    setCurrentLanguage(savedLang)
  }, [])

  const handleLanguageChange = (code: string) => {
    // Save language preference
    setCookie("FGUARD_LANG", code, 30)
    setCurrentLanguage(code)
    window.location.reload()
  }

  const getCurrentFlag = () => {
    const lang = languages.find((l) => l.code === currentLanguage)
    return lang?.flag || "🌐"
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative w-8 h-8 rounded-full">
          <span className="text-lg">{getCurrentFlag()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="text-base">{language.flag}</span>
              <span>{language.name}</span>
            </div>
            {currentLanguage === language.code && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
