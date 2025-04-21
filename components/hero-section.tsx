"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Shield, ShieldCheck, ShieldAlert, Lock, Server, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const { theme, colorTheme } = useTheme()
  const isDark = theme === "dark"

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
    <section className="relative overflow-hidden py-20 md:py-32 theme-transition">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-0 -left-4 w-72 h-72 animated-shape"
          style={{
            background: `radial-gradient(circle, hsl(var(--primary-light) / 0.3), transparent)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 animated-shape"
          style={{
            background: `radial-gradient(circle, hsl(var(--primary-dark) / 0.2), transparent)`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] animated-shape"
          style={{
            background: `radial-gradient(circle, hsl(var(--primary) / 0.1), transparent)`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        ></motion.div>
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
              <span>Enterprise-Grade Web Application Firewall</span>
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Advanced WAF
                </motion.span>
                <motion.span
                  className="block gradient-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Protection for Business
                </motion.span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                FGuard delivers enterprise-grade Web Application Firewall solutions with Barracuda-level protection to
                safeguard your critical web applications from sophisticated cyber threats.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="gap-1 bg-gradient-to-r from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))] hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                Request Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 gradient-border"
              >
                Technical Specifications
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-primary" />
                <span>Advanced DDoS Protection</span>
              </div>
              <div className="flex items-center gap-1">
                <Lock className="h-4 w-4 text-primary" />
                <span>Zero-Day Attack Prevention</span>
              </div>
              <div className="flex items-center gap-1">
                <ShieldAlert className="h-4 w-4 text-primary" />
                <span>OWASP Top 10 Protection</span>
              </div>
              <div className="flex items-center gap-1">
                <Server className="h-4 w-4 text-primary" />
                <span>API Security</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[600px]">
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] rounded-full opacity-20 blur-3xl"></div>
              <div
                className={cn("relative p-6 rounded-xl shadow-2xl glass", "border border-white/10 dark:border-white/5")}
              >
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] rounded-xl"></div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      <Shield className="h-8 w-8 text-primary" />
                    </motion.div>
                    <span className="text-xl font-bold text-foreground">FGuard Enterprise Console</span>
                  </div>
                  <div className="bg-green-500 px-2 py-1 rounded-full text-xs text-white flex items-center gap-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    Protected
                  </div>
                </div>

                <div className="relative w-full h-[300px] mb-4 rounded-lg overflow-hidden bg-slate-800/50 backdrop-blur">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shield className="h-16 w-16 text-primary/20" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-900/50"></div>

                  {/* Animated security elements */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    {Array.from({ length: 8 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute"
                        initial={{
                          x: Math.random() * 100 + "%",
                          y: Math.random() * 100 + "%",
                          opacity: 0,
                        }}
                        animate={{
                          opacity: [0, 0.7, 0],
                          scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 3 + Math.random() * 2,
                          delay: Math.random() * 5,
                        }}
                      >
                        <Sparkles className="h-3 w-3 text-primary" />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-800/50 dark:bg-slate-700/50 p-4 rounded-lg backdrop-blur-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground font-medium">Threats Mitigated</span>
                      <span className="text-primary font-bold">3,842</span>
                    </div>
                    <div className="h-2 bg-slate-700/50 dark:bg-slate-600/50 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                      ></motion.div>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 dark:bg-slate-700/50 p-4 rounded-lg backdrop-blur-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground font-medium">Protection Score</span>
                      <span className="text-primary font-bold">99.8%</span>
                    </div>
                    <div className="h-2 bg-slate-700/50 dark:bg-slate-600/50 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "99%" }}
                        transition={{ duration: 1.5, delay: 0.7 }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-slate-800/50 dark:bg-slate-700/50 p-4 rounded-lg backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-foreground font-medium">Security Events</span>
                    <span className="text-xs text-muted-foreground">Last 24 hours</span>
                  </div>
                  <div className="space-y-3">
                    <motion.div
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="flex-1">
                        <div className="text-sm text-foreground">Advanced SQL Injection Attempt Blocked</div>
                        <div className="text-xs text-muted-foreground">10:45 AM</div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="flex-1">
                        <div className="text-sm text-foreground">Credential Stuffing Attack Prevented</div>
                        <div className="text-xs text-muted-foreground">09:32 AM</div>
                      </div>
                    </motion.div>
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
