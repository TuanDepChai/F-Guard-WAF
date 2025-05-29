"use client"

import Image from "next/image"
import { Shield, Zap, Lock, BarChart, Cloud, Database } from "lucide-react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"

const features = [
  {
    name: "DDoS Protection",
    description:
      "Advanced protection against distributed denial-of-service attacks, ensuring your applications remain available even during large-scale attacks.",
    icon: Shield,
    image: "/images/ddos-protection.png",
    color: "from-blue-500 to-blue-600",
    stats: {
      value: "99.99%",
      label: "Uptime Guarantee"
    }
  },
  {
    name: "Zero-Day Vulnerability Protection",
    description:
      "Proactive defense against unknown vulnerabilities with AI-powered threat detection and virtual patching technology.",
    icon: Zap,
    image: "/images/zero-day.png",
    color: "from-purple-500 to-purple-600",
    stats: {
      value: "24/7",
      label: "Threat Monitoring"
    }
  },
  {
    name: "OWASP Top 10 Coverage",
    description:
      "Comprehensive protection against the most critical web application security risks identified by the Open Web Application Security Project.",
    icon: Lock,
    image: "/images/owasp.jpg",
    color: "from-green-500 to-green-600",
    stats: {
      value: "100%",
      label: "OWASP Coverage"
    }
  },
  {
    name: "API Security",
    description:
      "Dedicated protection for your APIs with schema validation, rate limiting, and anomaly detection to prevent abuse and data exfiltration.",
    icon: Database,
    image: "/images/api-security.jpg",
    color: "from-red-500 to-red-600",
    stats: {
      value: "1M+",
      label: "API Calls Protected"
    }
  },
  {
    name: "Real-time Analytics",
    description:
      "Detailed insights into traffic patterns, attack vectors, and security events with customizable dashboards and alerts.",
    icon: BarChart,
    image: "/images/analytics.png",
    color: "from-yellow-500 to-yellow-600",
    stats: {
      value: "50ms",
      label: "Response Time"
    }
  },
  {
    name: "Global CDN Integration",
    description:
      "Seamless integration with leading content delivery networks to provide both security and performance optimization.",
    icon: Cloud,
    image: "/images/cdn.png",
    color: "from-indigo-500 to-indigo-600",
    stats: {
      value: "200+",
      label: "Global PoPs"
    }
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

const hoverVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
}

const iconVariants = {
  initial: { rotate: 0 },
  hover: { 
    rotate: 360,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
}

const imageVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
}

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <motion.div 
      ref={containerRef}
      style={{ opacity, scale }}
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <motion.h2 
            className="text-base font-semibold leading-7 text-primary dark:text-primary-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Advanced Protection
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl text-gradient-animate"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Comprehensive Security Features
          </motion.p>
          <motion.p 
            className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            FGuard provides multi-layered security to protect your web applications from a wide range of threats and
            vulnerabilities.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                variants={item}
                className="group relative"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <motion.div 
                  variants={hoverVariants}
                  initial="initial"
                  whileHover="hover"
                  className="flex flex-col p-6 rounded-lg border bg-card shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary/50"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    <motion.div 
                      variants={iconVariants}
                      className={`p-2 rounded-lg bg-gradient-to-r ${feature.color} text-white relative overflow-hidden`}
                    >
                      <feature.icon className="h-6 w-6 relative z-10" aria-hidden="true" />
                      <motion.div 
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        animate={{ x: hoveredIndex === index ? "100%" : "-100%" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                    </motion.div>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                    <p className="flex-auto">{feature.description}</p>
                    <div className="mt-6 rounded-md overflow-hidden shadow-lg border border-border group-hover:border-primary/50 transition-colors duration-300">
                      <motion.div 
                        variants={imageVariants}
                        className="relative aspect-video"
                      >
                        <Image
                          src={feature.image}
                          alt={feature.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={false}
                          animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                        />
                      </motion.div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <motion.div 
                        className="text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="font-semibold text-primary">{feature.stats.value}</div>
                        <div className="text-gray-500">{feature.stats.label}</div>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-primary hover:text-primary/80 relative overflow-hidden group"
                        >
                          <span className="relative z-10">Learn More →</span>
                          <motion.div 
                            className="absolute inset-0 bg-primary/10"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "0%" }}
                            transition={{ duration: 0.3 }}
                          />
                        </Button>
                      </motion.div>
                    </div>
                  </dd>
                </motion.div>
              </motion.div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white relative overflow-hidden group"
            >
              <span className="relative z-10">Explore All Features</span>
              <motion.div 
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  )
}
