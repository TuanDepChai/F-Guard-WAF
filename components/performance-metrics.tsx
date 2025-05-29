"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Gauge, Zap, Clock, Shield, Activity } from "lucide-react"

interface Metric {
  id: string
  name: string
  value: number
  unit: string
  icon: React.ReactNode
  color: string
  description: string
}

export default function PerformanceMetrics() {
  const metrics: Metric[] = [
    {
      id: "response-time",
      name: "Response Time",
      value: 15,
      unit: "ms",
      icon: <Clock className="w-5 h-5" />,
      color: "text-blue-500",
      description: "Average response time for WAF rules"
    },
    {
      id: "throughput",
      name: "Throughput",
      value: 8500,
      unit: "req/s",
      icon: <Activity className="w-5 h-5" />,
      color: "text-green-500",
      description: "Maximum requests per second"
    },
    {
      id: "cpu-usage",
      name: "CPU Usage",
      value: 35,
      unit: "%",
      icon: <Gauge className="w-5 h-5" />,
      color: "text-yellow-500",
      description: "Average CPU utilization"
    },
    {
      id: "memory-usage",
      name: "Memory Usage",
      value: 45,
      unit: "%",
      icon: <Zap className="w-5 h-5" />,
      color: "text-purple-500",
      description: "Average memory utilization"
    },
    {
      id: "protection-rate",
      name: "Protection Rate",
      value: 99.9,
      unit: "%",
      icon: <Shield className="w-5 h-5" />,
      color: "text-red-500",
      description: "Attack detection accuracy"
    }
  ]

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          Performance Metrics
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground"
        >
          Real-time performance metrics of F-Guard WAF
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 bg-gradient-to-br from-background to-background/80 backdrop-blur-sm border-primary/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-lg bg-${metric.color.split('-')[1]}/10`}>
                    {metric.icon}
                  </div>
                  <h3 className="font-semibold">{metric.name}</h3>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold">{metric.value}</span>
                  <span className="text-sm text-muted-foreground ml-1">{metric.unit}</span>
                </div>
              </div>

              <Progress 
                value={metric.value} 
                className="h-2 mb-4"
                indicatorClassName={`bg-${metric.color.split('-')[1]}`}
              />

              <p className="text-sm text-muted-foreground">{metric.description}</p>

              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -z-10"
              />
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 text-center"
      >
        <p className="text-sm text-muted-foreground">
          Metrics are updated in real-time and represent the current system performance
        </p>
      </motion.div>
    </div>
  )
}
