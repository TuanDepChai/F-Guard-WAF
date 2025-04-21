"use client"

import { motion } from "framer-motion"
import { Shield, AlertTriangle, Filter, CheckCircle } from "lucide-react"
import { useState, useEffect } from "react"

export default function ProtectionProcessAnimation() {
  const [activeStep, setActiveStep] = useState(0)

  // Auto-advance through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const steps = [
    {
      icon: <Filter className="h-8 w-8 text-white" />,
      title: "Traffic Filtering",
      color: "bg-blue-600",
      description: "Examining all incoming traffic",
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-white" />,
      title: "Threat Detection",
      color: "bg-yellow-600",
      description: "Identifying malicious patterns",
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Attack Blocking",
      color: "bg-red-600",
      description: "Neutralizing identified threats",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "Continuous Protection",
      color: "bg-green-600",
      description: "Ongoing security updates",
    },
  ]

  return (
    <div className="relative w-full h-[400px] bg-slate-900 rounded-xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center space-x-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              animate={{
                scale: activeStep === index ? 1.2 : 0.9,
                opacity: activeStep === index ? 1 : 0.6,
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className={`${step.color} p-6 rounded-full mb-4 relative`}
                animate={{
                  boxShadow:
                    activeStep === index
                      ? `0 0 30px 5px ${
                          step.color.includes("blue")
                            ? "#3b82f680"
                            : step.color.includes("yellow")
                              ? "#eab30880"
                              : step.color.includes("red")
                                ? "#ef444480"
                                : "#22c55e80"
                        }`
                      : "none",
                }}
              >
                {step.icon}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </div>
              </motion.div>
              <div className="text-white text-center">
                <div className="font-medium">{step.title}</div>
                <div className="text-xs text-white/70">{step.description}</div>
              </div>

              {/* Connecting arrows */}
              {index < steps.length - 1 && (
                <motion.div
                  className="absolute left-full w-16 flex items-center justify-center"
                  animate={{
                    opacity: activeStep === index ? 1 : 0.3,
                  }}
                >
                  <div className="h-0.5 bg-white/30 w-full"></div>
                  <motion.div
                    className="absolute right-0"
                    animate={{
                      x: activeStep === index ? [0, 10, 0] : 0,
                    }}
                    transition={{
                      repeat: activeStep === index ? Number.POSITIVE_INFINITY : 0,
                      duration: 1.5,
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 1L11 6L6 11"
                        stroke="white"
                        strokeOpacity="0.5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Traffic particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`traffic-${i}`}
            className="absolute w-1 h-1 rounded-full bg-blue-500/50"
            initial={{
              x: Math.random() * 100 + "%",
              y: "-5%",
              opacity: 0.3 + Math.random() * 0.7,
            }}
            animate={{
              y: "105%",
              opacity: 0,
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2 + Math.random() * 3,
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Alert indicators */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`alert-${i}`}
            className="absolute"
            initial={{
              x: 20 + Math.random() * 60 + "%",
              y: 20 + Math.random() * 60 + "%",
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.7, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2 + Math.random() * 2,
              delay: Math.random() * 10,
            }}
          >
            <AlertTriangle className="h-3 w-3 text-yellow-500/70" />
          </motion.div>
        ))}

        {/* Shield pulses */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`shield-${i}`}
            className="absolute"
            initial={{
              x: 40 + Math.random() * 20 + "%",
              y: 40 + Math.random() * 20 + "%",
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [1, 2, 1],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 3 + Math.random() * 2,
              delay: 5 + Math.random() * 10,
            }}
          >
            <Shield className="h-6 w-6 text-red-500/50" />
          </motion.div>
        ))}

        {/* Checkmarks */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`check-${i}`}
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
              delay: Math.random() * 15,
            }}
          >
            <CheckCircle className="h-2 w-2 text-green-500/70" />
          </motion.div>
        ))}
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900"></div>

      {/* Step description */}
      <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-900 to-transparent">
        <motion.div
          className="text-center"
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-white mb-2">
            Step {activeStep + 1}: {steps[activeStep].title}
          </h3>
          <p className="text-white/80 max-w-lg mx-auto">
            {activeStep === 0 &&
              "All traffic to your website is routed through FGuard's WAF system for inspection and filtering."}
            {activeStep === 1 &&
              "The system analyzes traffic in real-time to detect attack patterns and abnormal behavior."}
            {activeStep === 2 &&
              "Attacks and malicious traffic are automatically blocked, while legitimate users can still access normally."}
            {activeStep === 3 &&
              "The system continuously updates security rules to combat the latest threats and protect your website 24/7."}
          </p>
        </motion.div>
      </div>
    </div>
  )
}
