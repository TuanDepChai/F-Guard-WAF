"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Shield, Palette, Check } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ThemeShowcase() {
  const { colorTheme, setColorTheme } = useTheme()
  const [activeDemo, setActiveDemo] = useState<string | null>(null)

  const colorThemes = [
    { name: "Blue", value: "blue", color: "bg-blue-600" },
    { name: "Purple", value: "purple", color: "bg-purple-600" },
    { name: "Teal", value: "teal", color: "bg-teal-600" },
    { name: "Amber", value: "amber", color: "bg-amber-600" },
    { name: "Rose", value: "rose", color: "bg-rose-600" },
  ]

  return (
    <section className="py-20 relative overflow-hidden theme-transition">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
              <Palette className="mr-1 h-4 w-4" />
              <span>Customizable Themes</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="gradient-text">Choose Your Style</span>
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Personalize your FGuard experience with our dynamic theme system
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {colorThemes.map((theme) => (
            <motion.div
              key={theme.value}
              className={cn(
                "relative rounded-lg overflow-hidden aspect-square cursor-pointer",
                activeDemo === theme.value ? "ring-2 ring-offset-2 ring-offset-background" : "",
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setColorTheme(theme.value as any)
                setActiveDemo(theme.value)
              }}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br",
                  theme.value === "blue" && "from-blue-500 to-blue-700",
                  theme.value === "purple" && "from-purple-500 to-purple-700",
                  theme.value === "teal" && "from-teal-500 to-teal-700",
                  theme.value === "amber" && "from-amber-500 to-amber-700",
                  theme.value === "rose" && "from-rose-500 to-rose-700",
                )}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="h-12 w-12 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-center">
                {theme.name}
              </div>
              {colorTheme === theme.value && (
                <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                  <Check className="h-4 w-4 text-black" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Experience FGuard Your Way</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Our dynamic theme system allows you to customize the look and feel of your FGuard dashboard to match your
            brand or personal preference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-gradient-to-r from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))]">
              Try FGuard Today
            </Button>
            <Button variant="outline" className="gradient-border">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
