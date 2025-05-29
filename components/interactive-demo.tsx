"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, AlertTriangle, CheckCircle2, XCircle } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

interface Attack {
  id: string
  type: string
  payload: string
  timestamp: Date
  status: "blocked" | "allowed"
  severity: "high" | "medium" | "low"
}

export default function InteractiveDemo() {
  const { t } = useTranslation()
  const [isRunning, setIsRunning] = useState(false)
  const [attacks, setAttacks] = useState<Attack[]>([])
  const [stats, setStats] = useState({
    total: 0,
    blocked: 0,
    allowed: 0,
    highSeverity: 0,
    mediumSeverity: 0,
    lowSeverity: 0
  })
  const demoRef = useRef<HTMLDivElement>(null)

  const attackTypes = [
    { type: "SQL Injection", payload: "' OR '1'='1", severity: "high" },
    { type: "XSS", payload: "<script>alert('xss')</script>", severity: "high" },
    { type: "Path Traversal", payload: "../../../etc/passwd", severity: "high" },
    { type: "Command Injection", payload: "& cat /etc/passwd", severity: "high" },
    { type: "File Upload", payload: "shell.php", severity: "medium" },
    { type: "CSRF", payload: "POST /api/transfer", severity: "medium" },
    { type: "Broken Auth", payload: "admin:admin", severity: "medium" },
    { type: "Sensitive Data", payload: "password=123456", severity: "low" },
    { type: "Rate Limiting", payload: "1000 requests/min", severity: "low" },
    { type: "Invalid Input", payload: "special@chars", severity: "low" }
  ]

  const generateAttack = () => {
    const randomAttack = attackTypes[Math.floor(Math.random() * attackTypes.length)]
    const newAttack: Attack = {
      id: Math.random().toString(36).substr(2, 9),
      type: randomAttack.type,
      payload: randomAttack.payload,
      timestamp: new Date(),
      status: Math.random() > 0.1 ? "blocked" : "allowed",
      severity: randomAttack.severity as "high" | "medium" | "low"
    }

    setAttacks(prev => [newAttack, ...prev].slice(0, 10))
    updateStats(newAttack)
  }

  const updateStats = (attack: Attack) => {
    setStats(prev => ({
      total: prev.total + 1,
      blocked: attack.status === "blocked" ? prev.blocked + 1 : prev.blocked,
      allowed: attack.status === "allowed" ? prev.allowed + 1 : prev.allowed,
      highSeverity: attack.severity === "high" ? prev.highSeverity + 1 : prev.highSeverity,
      mediumSeverity: attack.severity === "medium" ? prev.mediumSeverity + 1 : prev.mediumSeverity,
      lowSeverity: attack.severity === "low" ? prev.lowSeverity + 1 : prev.lowSeverity
    }))
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRunning) {
      interval = setInterval(generateAttack, 2000)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  return (
    <div className="w-full max-w-6xl mx-auto p-6" ref={demoRef}>
      <Card className="p-6 bg-gradient-to-br from-background to-background/80 backdrop-blur-sm border-primary/20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Live Attack Simulation</h2>
            <p className="text-muted-foreground">
              Watch F-Guard WAF in action as it protects against various web attacks
            </p>
          </div>
          <Button
            onClick={() => setIsRunning(!isRunning)}
            className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white"
          >
            {isRunning ? "Stop Demo" : "Start Demo"}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-4 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Protection Stats</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Total Attacks:</span>
                <span className="font-mono">{stats.total}</span>
              </div>
              <div className="flex justify-between">
                <span>Blocked:</span>
                <span className="font-mono text-green-500">{stats.blocked}</span>
              </div>
              <div className="flex justify-between">
                <span>Allowed:</span>
                <span className="font-mono text-red-500">{stats.allowed}</span>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Severity Distribution</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>High:</span>
                <span className="font-mono text-red-500">{stats.highSeverity}</span>
              </div>
              <div className="flex justify-between">
                <span>Medium:</span>
                <span className="font-mono text-yellow-500">{stats.mediumSeverity}</span>
              </div>
              <div className="flex justify-between">
                <span>Low:</span>
                <span className="font-mono text-blue-500">{stats.lowSeverity}</span>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Protection Rate</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Success Rate:</span>
                <span className="font-mono text-green-500">
                  {stats.total > 0 ? ((stats.blocked / stats.total) * 100).toFixed(1) : 0}%
                </span>
              </div>
              <div className="flex justify-between">
                <span>Response Time:</span>
                <span className="font-mono">{"<"} 10ms</span>
              </div>
              <div className="flex justify-between">
                <span>False Positives:</span>
                <span className="font-mono text-yellow-500">
                  {stats.total > 0 ? ((stats.allowed / stats.total) * 100).toFixed(1) : 0}%
                </span>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Live Attack Log</h3>
          <AnimatePresence>
            {attacks.map((attack) => (
              <motion.div
                key={attack.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-primary/10"
              >
                <div className="flex items-center gap-4">
                  <Badge
                    variant={attack.severity === "high" ? "destructive" : attack.severity === "medium" ? "warning" : "secondary"}
                  >
                    {attack.severity}
                  </Badge>
                  <div>
                    <p className="font-medium">{attack.type}</p>
                    <p className="text-sm text-muted-foreground font-mono">{attack.payload}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    {attack.timestamp.toLocaleTimeString()}
                  </span>
                  {attack.status === "blocked" ? (
                    <Badge variant="success" className="bg-green-500/20 text-green-500">
                      <CheckCircle2 className="w-4 h-4 mr-1" />
                      Blocked
                    </Badge>
                  ) : (
                    <Badge variant="destructive" className="bg-red-500/20 text-red-500">
                      <XCircle className="w-4 h-4 mr-1" />
                      Allowed
                    </Badge>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Card>
    </div>
  )
}
