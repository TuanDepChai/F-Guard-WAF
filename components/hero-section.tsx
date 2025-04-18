"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Shield, ShieldCheck, ShieldAlert, Lock, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n/i18n-provider"

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const { t } = useI18n()

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const calculateTransform = (factor: number) => {
    return `translateY(${scrollY * factor}px)`
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          style={{ transform: calculateTransform(0.05) }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          style={{ transform: calculateTransform(-0.05) }}
        ></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
              <ShieldCheck className="mr-1 h-4 w-4" />
              <span>{t("hero.badge")}</span>
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">{t("hero.title.line1")}</span>
                <span className="block text-primary">{t("hero.title.line2")}</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">{t("hero.description")}</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="gap-1 bg-gradient-to-r from-primary to-blue-700 hover:from-primary/90 hover:to-blue-700/90"
              >
                {t("hero.startNow")}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                {t("hero.learnMore")}
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-primary" />
                <span>{t("hero.ddosProtection")}</span>
              </div>
              <div className="flex items-center gap-1">
                <Lock className="h-4 w-4 text-primary" />
                <span>{t("hero.sqlInjection")}</span>
              </div>
              <div className="flex items-center gap-1">
                <ShieldAlert className="h-4 w-4 text-primary" />
                <span>{t("hero.xssProtection")}</span>
              </div>
              <div className="flex items-center gap-1">
                <Server className="h-4 w-4 text-primary" />
                <span>{t("hero.apiProtection")}</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[600px] aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative bg-slate-900 dark:bg-slate-800 border border-slate-200/10 dark:border-slate-700 p-8 rounded-xl shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Shield className="h-8 w-8 text-primary" />
                    <span className="text-xl font-bold text-white">FGuard Dashboard</span>
                  </div>
                  <div className="bg-green-500 px-2 py-1 rounded-full text-xs text-white flex items-center gap-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    Hoạt động
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-800/80 dark:bg-slate-700/80 p-4 rounded-lg backdrop-blur-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">Tổng số tấn công đã chặn</span>
                      <span className="text-primary font-bold">1,245</span>
                    </div>
                    <div className="h-2 bg-slate-700 dark:bg-slate-600 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-3/4 rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-slate-800/80 dark:bg-slate-700/80 p-4 rounded-lg backdrop-blur-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">Thời gian hoạt động</span>
                      <span className="text-primary font-bold">99.9%</span>
                    </div>
                    <div className="h-2 bg-slate-700 dark:bg-slate-600 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[99%] rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-slate-800/80 dark:bg-slate-700/80 p-4 rounded-lg backdrop-blur-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">Tình trạng bảo mật</span>
                      <span className="text-green-500 font-bold">An toàn</span>
                    </div>
                    <div className="h-2 bg-slate-700 dark:bg-slate-600 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-full rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-slate-800/80 dark:bg-slate-700/80 p-4 rounded-lg backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white font-medium">Hoạt động gần đây</span>
                    <span className="text-xs text-slate-400">Hôm nay</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="flex-1">
                        <div className="text-sm text-white">SQL Injection đã bị chặn</div>
                        <div className="text-xs text-slate-400">10:45 AM</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="flex-1">
                        <div className="text-sm text-white">Phát hiện bot độc hại</div>
                        <div className="text-xs text-slate-400">09:32 AM</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="flex-1">
                        <div className="text-sm text-white">XSS Attack đã bị chặn</div>
                        <div className="text-xs text-slate-400">08:17 AM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
