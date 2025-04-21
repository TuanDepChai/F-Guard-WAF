"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  Shield,
  ArrowRight,
  Filter,
  AlertTriangle,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Zap,
  BarChart4,
  Lock,
  Server,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [showDetails, setShowDetails] = useState(false)

  const steps = [
    {
      icon: <Filter className="h-6 w-6 text-white" />,
      title: "Traffic Filtering",
      description: "All traffic to your website is routed through FGuard's WAF system for inspection and filtering.",
      color: "bg-blue-600",
      detailedDescription:
        "Our advanced traffic filtering system acts as the first line of defense, examining all incoming requests before they reach your application servers. Using a combination of IP reputation databases, rate limiting, and behavioral analysis, we can identify and filter out suspicious traffic patterns in real-time.",
      stats: {
        trafficFiltered: "50TB+",
        dailyRequests: "1B+",
        averageLatency: "<5ms",
      },
      features: [
        "Global edge network with 250+ locations",
        "Intelligent rate limiting and throttling",
        "IP reputation database with 20M+ malicious addresses",
        "Geolocation-based access controls",
      ],
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-white" />,
      title: "Threat Detection",
      description: "The system analyzes traffic in real-time to detect attack patterns and abnormal behavior.",
      color: "bg-yellow-600",
      detailedDescription:
        "Our threat detection engine uses machine learning algorithms and signature-based detection to identify known attack patterns and zero-day threats. By analyzing HTTP/HTTPS traffic at the application layer, we can detect SQL injection attempts, XSS attacks, CSRF, and other OWASP Top 10 vulnerabilities.",
      stats: {
        attackPatterns: "10,000+",
        zeroDay: "99.8%",
        falsePositives: "<0.001%",
      },
      features: [
        "Machine learning-powered anomaly detection",
        "OWASP Top 10 protection",
        "Advanced bot detection and management",
        "API abuse prevention",
      ],
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Attack Blocking",
      description:
        "Attacks and malicious traffic are automatically blocked, while legitimate users can still access normally.",
      color: "bg-red-600",
      detailedDescription:
        "When a threat is detected, our system takes immediate action to neutralize it. Depending on the severity and confidence level, actions range from blocking the specific request to temporarily banning the source IP. Our intelligent system minimizes false positives, ensuring legitimate users maintain uninterrupted access.",
      stats: {
        responseTime: "<50ms",
        blockRate: "99.9%",
        legitimateTraffic: "Zero Impact",
      },
      features: [
        "Granular blocking policies",
        "Custom rules and exceptions",
        "Challenge-based verification for suspicious traffic",
        "Automatic IP blocking for persistent attackers",
      ],
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-white" />,
      title: "Continuous Protection",
      description:
        "The system continuously updates security rules to combat the latest threats and protect your website 24/7.",
      color: "bg-green-600",
      detailedDescription:
        "Security is not a one-time setup but an ongoing process. Our dedicated security research team continuously monitors emerging threats and updates protection rules. With virtual patching capabilities, we can protect your applications from newly discovered vulnerabilities even before you update your code.",
      stats: {
        ruleUpdates: "Daily",
        threatIntel: "Real-time",
        uptime: "99.999%",
      },
      features: [
        "24/7 security operations center",
        "Virtual patching for zero-day vulnerabilities",
        "Continuous rule updates",
        "Detailed security analytics and reporting",
      ],
    },
  ]

  const advancedFeatures = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Performance Optimization",
      description: "Our WAF is designed for speed, adding minimal latency while providing maximum protection.",
    },
    {
      icon: <BarChart4 className="h-6 w-6 text-primary" />,
      title: "Advanced Analytics",
      description: "Gain insights into attack patterns and traffic with comprehensive security analytics.",
    },
    {
      icon: <Lock className="h-6 w-6 text-primary" />,
      title: "Compliance Support",
      description: "Meet regulatory requirements with built-in compliance controls for PCI DSS, GDPR, and more.",
    },
    {
      icon: <Server className="h-6 w-6 text-primary" />,
      title: "Flexible Deployment",
      description: "Deploy as cloud service, on-premises, or hybrid to meet your specific infrastructure needs.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-slate-50 dark:bg-slate-900">
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
              <Shield className="mr-1 h-4 w-4" />
              <span>How It Works</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How FGuard WAF Protects Your Applications
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Our enterprise-grade WAF solution provides comprehensive protection through a sophisticated multi-step
              process that identifies and neutralizes threats before they reach your applications
            </p>
          </div>
        </motion.div>

        {/* Interactive Process Diagram */}
        <motion.div
          className="mb-16 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-xl">
            <div className="absolute inset-0 bg-grid-white/5"></div>
            <motion.div
              className="absolute inset-0 bg-dot-white/10"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 30,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-500/10 to-transparent"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-500/10 to-transparent"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2.5,
              }}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="hidden md:flex items-center space-x-12 lg:space-x-24">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center relative"
                    initial={{ opacity: 0.5 }}
                    animate={{
                      opacity: activeStep === index ? 1 : 0.7,
                      scale: activeStep === index ? 1.1 : 1,
                    }}
                    whileHover={{ scale: 1.05, opacity: 1 }}
                    onClick={() => setActiveStep(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <motion.div
                      className={`${step.color} p-6 rounded-full mb-3 shadow-lg relative z-10`}
                      whileHover={{
                        boxShadow: `0 0 20px 5px ${
                          step.color.includes("blue")
                            ? "#3b82f6"
                            : step.color.includes("yellow")
                              ? "#eab308"
                              : step.color.includes("red")
                                ? "#ef4444"
                                : "#22c55e"
                        }40`,
                      }}
                      animate={
                        activeStep === index
                          ? {
                              scale: [1, 1.1, 1],
                              boxShadow: [
                                `0 0 0px 0px ${step.color.includes("blue") ? "#3b82f6" : step.color.includes("yellow") ? "#eab308" : step.color.includes("red") ? "#ef4444" : "#22c55e"}00`,
                                `0 0 20px 5px ${step.color.includes("blue") ? "#3b82f6" : step.color.includes("yellow") ? "#eab308" : step.color.includes("red") ? "#ef4444" : "#22c55e"}40`,
                                `0 0 0px 0px ${step.color.includes("blue") ? "#3b82f6" : step.color.includes("yellow") ? "#eab308" : step.color.includes("red") ? "#ef4444" : "#22c55e"}00`,
                              ],
                            }
                          : {}
                      }
                      transition={
                        activeStep === index
                          ? {
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }
                          : {}
                      }
                    >
                      {step.icon}
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                    </motion.div>
                    <div className="text-white text-base font-medium">{step.title}</div>
                    {index < steps.length - 1 && (
                      <motion.div
                        className="absolute top-8 left-full w-12 lg:w-24 flex items-center justify-center"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      >
                        <div className="h-0.5 bg-gradient-to-r from-white/10 via-white/30 to-white/10 w-full"></div>
                        <motion.div
                          className="absolute right-0"
                          animate={{
                            x: [-5, 5, -5],
                          }}
                          transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 1.5,
                          }}
                        >
                          <ArrowRight className="text-white/50 h-4 w-4" />
                        </motion.div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Mobile view - vertical steps */}
              <div className="flex md:hidden flex-col space-y-6 w-full px-4">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                    onClick={() => setActiveStep(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className={`${step.color} p-3 rounded-full relative flex-shrink-0`}>
                      {step.icon}
                      <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">{step.title}</div>
                      <div className="text-white/70 text-xs">{step.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Overlay with active step details */}
            {activeStep !== null && (
              <motion.div
                className="absolute inset-0 bg-black/80 flex items-center justify-center p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="max-w-2xl text-center relative">
                  <button
                    className="absolute top-0 right-0 text-white/70 hover:text-white"
                    onClick={() => setActiveStep(null)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className={`${steps[activeStep].color} p-4 rounded-full inline-flex mb-4`}>
                    {steps[activeStep].icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Step {activeStep + 1}: {steps[activeStep].title}
                  </h3>
                  <p className="text-white/90 text-lg mb-6">{steps[activeStep].detailedDescription}</p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(steps[activeStep].stats).map(([key, value], idx) => (
                      <div key={idx} className="bg-white/10 rounded-lg p-3">
                        <div className="text-white/70 text-xs capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</div>
                        <div className="text-white text-xl font-bold">{value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="text-white font-medium mb-2">Key Features:</div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {steps[activeStep].features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-white/80">
                          <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Main title and description when no step is selected */}
            {activeStep === null && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center p-6 max-w-3xl">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Enterprise-Grade Protection Process
                  </h3>
                  <p className="text-white/90 text-lg mb-6">
                    Our WAF solution employs a sophisticated multi-layered approach to identify and neutralize threats
                    before they reach your applications
                  </p>
                  <div className="hidden md:block">
                    <p className="text-white/70 text-sm">Click on any step to learn more</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Detailed Steps Section */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-16 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <motion.div
                          className={`inline-flex items-center justify-center rounded-full ${step.color} p-3`}
                          whileHover={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                          animate={{
                            boxShadow: [
                              `0 0 0px 0px ${step.color.includes("blue") ? "#3b82f6" : step.color.includes("yellow") ? "#eab308" : step.color.includes("red") ? "#ef4444" : "#22c55e"}00`,
                              `0 0 15px 2px ${step.color.includes("blue") ? "#3b82f6" : step.color.includes("yellow") ? "#eab308" : step.color.includes("red") ? "#ef4444" : "#22c55e"}40`,
                              `0 0 0px 0px ${step.color.includes("blue") ? "#3b82f6" : step.color.includes("yellow") ? "#eab308" : step.color.includes("red") ? "#ef4444" : "#22c55e"}00`,
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        >
                          {step.icon}
                        </motion.div>
                        <span className="bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-200 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          Step {index + 1}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">{step.description}</p>

                      <div className="pt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-1 group border-primary/20 hover:border-primary/50 hover:bg-primary/5"
                          onClick={() => setActiveStep(index)}
                        >
                          Learn More
                          <motion.div
                            animate={{
                              x: [0, 5, 0],
                            }}
                            transition={{
                              repeat: Number.POSITIVE_INFINITY,
                              duration: 1.5,
                              ease: "easeInOut",
                            }}
                          >
                            <ArrowRight className="h-4 w-4 group-hover:text-primary transition-colors" />
                          </motion.div>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                    <motion.div
                      className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg border"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div className="relative w-full h-[200px] rounded-md overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                        <motion.div
                          className={`${step.color} p-6 rounded-full shadow-lg`}
                          animate={{
                            scale: [1, 1.05, 1],
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            scale: {
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            },
                            rotate: {
                              duration: 5,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            },
                          }}
                        >
                          {React.cloneElement(step.icon, { className: "h-12 w-12 text-white" })}
                        </motion.div>

                        {/* Animated particles/icons representing the specific step */}
                        <div className="absolute inset-0 overflow-hidden opacity-30">
                          {index === 0 &&
                            Array.from({ length: 10 }).map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute"
                                initial={{
                                  x: Math.random() * 100 + "%",
                                  y: "-20%",
                                  opacity: 0.3 + Math.random() * 0.7,
                                }}
                                animate={{
                                  y: "120%",
                                  opacity: 0,
                                }}
                                transition={{
                                  repeat: Number.POSITIVE_INFINITY,
                                  duration: 2 + Math.random() * 3,
                                  delay: Math.random() * 2,
                                }}
                              >
                                <Filter className="h-3 w-3 text-blue-600" />
                              </motion.div>
                            ))}

                          {index === 1 &&
                            Array.from({ length: 8 }).map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute"
                                initial={{
                                  x: Math.random() * 100 + "%",
                                  y: Math.random() * 100 + "%",
                                  opacity: 0,
                                }}
                                animate={{
                                  opacity: [0, 1, 0],
                                  scale: [0.8, 1.2, 0.8],
                                }}
                                transition={{
                                  repeat: Number.POSITIVE_INFINITY,
                                  duration: 2 + Math.random() * 2,
                                  delay: Math.random() * 3,
                                }}
                              >
                                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                              </motion.div>
                            ))}

                          {index === 2 &&
                            Array.from({ length: 6 }).map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute"
                                initial={{
                                  x: Math.random() * 100 + "%",
                                  y: Math.random() * 100 + "%",
                                }}
                                animate={{
                                  x: Math.random() * 100 + "%",
                                  opacity: [1, 0],
                                }}
                                transition={{
                                  repeat: Number.POSITIVE_INFINITY,
                                  duration: 1 + Math.random() * 1,
                                  delay: Math.random() * 2,
                                }}
                              >
                                <Shield className="h-5 w-5 text-red-600" />
                              </motion.div>
                            ))}

                          {index === 3 &&
                            Array.from({ length: 12 }).map((_, i) => (
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
                                <CheckCircle className="h-3 w-3 text-green-600" />
                              </motion.div>
                            ))}
                        </div>
                      </div>
                      <div className="text-center p-4">
                        <h4 className="font-medium text-lg">{step.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Connector arrow */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-8 hidden md:flex">
                    <div className="w-0.5 h-8 bg-slate-200 dark:bg-slate-800"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Advanced Features Section */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold">Advanced Protection Features</h3>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Beyond our core protection process, FGuard WAF includes advanced features to ensure comprehensive security
              for your applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advancedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-medium mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Details Accordion */}
        <motion.div
          className="mt-24 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">Technical Specifications</h3>
            <p className="text-muted-foreground mt-2">
              Explore the technical details behind our enterprise-grade WAF solution
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border overflow-hidden">
            <Tabs defaultValue="architecture" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="architecture">Architecture</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="deployment">Deployment</TabsTrigger>
              </TabsList>
              <TabsContent value="architecture" className="p-6">
                <h4 className="text-lg font-medium mb-3">Multi-Layered Architecture</h4>
                <p className="text-muted-foreground mb-4">
                  FGuard WAF employs a sophisticated multi-layered architecture designed to provide defense in depth
                  against a wide range of threats.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Edge Layer</p>
                      <p className="text-sm text-muted-foreground">
                        DDoS protection, TLS termination, and basic traffic filtering at 250+ global edge locations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Application Layer</p>
                      <p className="text-sm text-muted-foreground">
                        Deep packet inspection, signature-based detection, and behavioral analysis
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Intelligence Layer</p>
                      <p className="text-sm text-muted-foreground">
                        Machine learning models and threat intelligence integration for advanced detection
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="performance" className="p-6">
                <h4 className="text-lg font-medium mb-3">Performance Metrics</h4>
                <p className="text-muted-foreground mb-4">
                  Our WAF is designed for high performance, ensuring protection without compromising user experience.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">Average Latency</p>
                    <p className="text-2xl font-bold text-primary">&lt; 5ms</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">Requests Per Second</p>
                    <p className="text-2xl font-bold text-primary">1M+</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">Rule Processing Time</p>
                    <p className="text-2xl font-bold text-primary">&lt; 2ms</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">Uptime SLA</p>
                    <p className="text-2xl font-bold text-primary">99.999%</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="deployment" className="p-6">
                <h4 className="text-lg font-medium mb-3">Flexible Deployment Options</h4>
                <p className="text-muted-foreground mb-4">
                  FGuard WAF offers multiple deployment models to fit your specific infrastructure requirements.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Cloud WAF</p>
                      <p className="text-sm text-muted-foreground">
                        Fully managed cloud-based WAF with simple DNS configuration
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">On-Premises</p>
                      <p className="text-sm text-muted-foreground">
                        Hardware or virtual appliances for deployment within your own infrastructure
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Hybrid Deployment</p>
                      <p className="text-sm text-muted-foreground">
                        Combination of cloud and on-premises components for maximum flexibility
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Multi-Cloud Support</p>
                      <p className="text-sm text-muted-foreground">
                        Deploy across AWS, Azure, Google Cloud, and other major cloud providers
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Secure Your Applications?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Experience enterprise-grade protection with FGuard WAF. Our security experts are ready to help you
              implement the perfect security solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-blue-700">
                Schedule a Demo
              </Button>
              <Button size="lg" variant="outline">
                View Technical Documentation
              </Button>
            </div>
          </div>
        </motion.div>

        {/* FAQ Toggle */}
        <div className="mt-16 text-center">
          <Button variant="ghost" onClick={() => setShowDetails(!showDetails)} className="flex items-center gap-2">
            {showDetails ? "Hide Technical Details" : "Show Technical Details"}
            {showDetails ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>

          {showDetails && (
            <motion.div
              className="mt-8 max-w-3xl mx-auto text-left bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-lg font-medium mb-4">Technical Specifications</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium">Protection Features</h5>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>• OWASP Top 10 protection (SQL Injection, XSS, CSRF, etc.)</li>
                    <li>• Layer 3-4 and Layer 7 DDoS protection</li>
                    <li>• Advanced bot detection and mitigation</li>
                    <li>• API abuse prevention</li>
                    <li>• Virtual patching for zero-day vulnerabilities</li>
                    <li>• Machine learning-based anomaly detection</li>
                    <li>• IP reputation filtering</li>
                    <li>• Geo-blocking capabilities</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium">Performance Specifications</h5>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>• Average request processing time: &lt;5ms</li>
                    <li>• Maximum throughput: 1M+ requests per second</li>
                    <li>• Global edge network with 250+ locations</li>
                    <li>• 99.999% uptime SLA</li>
                    <li>• Automatic scaling during attack scenarios</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium">Compliance & Certifications</h5>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>• PCI DSS Level 1 Service Provider</li>
                    <li>• HIPAA/HITECH compliant</li>
                    <li>• SOC 2 Type II certified</li>
                    <li>• ISO 27001 certified</li>
                    <li>• GDPR compliant</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
