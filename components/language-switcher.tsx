"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Globe } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/i18n/language-context"
import type { Locale } from "@/lib/i18n/translations"

const languages = [
  { code: "en", name: "English" },
  { code: "vi", name: "Tiếng Việt" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "es", name: "Español" },
  { code: "ja", name: "日本語" },
  { code: "zh", name: "中文" },
]

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()
  const [open, setOpen] = useState(false)

  const handleSelect = (value: string) => {
    setLocale(value as Locale)
    setOpen(false)
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Select language">
          <Globe className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[180px]">
        <DropdownMenuRadioGroup value={locale} onValueChange={handleSelect}>
          {languages.map((language) => (
            <DropdownMenuRadioItem key={language.code} value={language.code} className="cursor-pointer">
              <span className="flex items-center justify-between w-full">
                {language.name}
                {locale === language.code && <Check className="h-4 w-4 ml-2" />}
              </span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
