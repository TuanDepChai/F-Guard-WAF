"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Shield, Code, AlertTriangle, CheckCircle, Clock, Terminal, Database, FileCode, Folder } from "lucide-react"

type AttackType = "sql" | "xss" | "path" | "command" | "custom"
type AttackResult = {
  detected: boolean
  blocked: boolean
  type: string
  severity: "high" | "medium" | "low"
  details: string
  timeline: {
    detection: number
    analysis: number
    mitigation: number
    total: number
  }
}

export function DemoSimulator() {
  const [activeTab, setActiveTab] = useState<AttackType>("sql")
  const [customPayload, setCustomPayload] = useState("")
  const [isSimulating, setIsSimulating] = useState(false)
  const [result, setResult] = useState<AttackResult | null>(null)
  const [showCode, setShowCode] = useState(false)

  const attackExamples = {
    sql: "' OR 1=1 --",
    xss: "<script>alert('XSS')</script>",
    path: "../../../etc/passwd",
    command: "; cat /etc/passwd",
    custom: "",
  }

  const simulateAttack = (attackType: AttackType) => {
    setIsSimulating(true)
    setResult(null)

    // Get the payload based on attack type
    const payload = attackType === "custom" ? customPayload : attackExamples[attackType]

    // Simulate processing delay
    setTimeout(() => {
      // Generate result based on attack type
      const result = generateResult(attackType, payload)
      setResult(result)
      setIsSimulating(false)
    }, 2000)
  }

  const generateResult = (attackType: AttackType, payload: string): AttackResult => {
    // Base result structure
    const baseResult: AttackResult = {
      detected: true,
      blocked: true,
      type: "",
      severity: "medium",
      details: "",
      timeline: {
        detection: Math.floor(Math.random() * 50) + 10, // 10-60ms
        analysis: Math.floor(Math.random() * 100) + 50, // 50-150ms
        mitigation: Math.floor(Math.random() * 50) + 20, // 20-70ms
        total: 0,
      },
    }

    // Customize based on attack type
    switch (attackType) {
      case "sql":
        baseResult.type = "SQL Injection"
        baseResult.severity = "high"
        baseResult.details =
          "Attempted SQL injection detected. The payload contains SQL syntax that could be used to manipulate database queries."
        break
      case "xss":
        baseResult.type = "Cross-Site Scripting (XSS)"
        baseResult.severity = "high"
        baseResult.details =
          "Attempted XSS attack detected. The payload contains JavaScript code that could be executed in users' browsers."
        break
      case "path":
        baseResult.type = "Path Traversal"
        baseResult.severity = "medium"
        baseResult.details =
          "Attempted path traversal attack detected. The payload attempts to access files outside the intended directory."
        break
      case "command":
        baseResult.type = "Command Injection"
        baseResult.severity = "high"
        baseResult.details =
          "Attempted command injection detected. The payload contains characters that could be used to execute system commands."
        break
      case "custom":
        // Analyze custom payload
        if (payload.includes("'") || payload.includes("=")) {
          baseResult.type = "Potential SQL Injection"
          baseResult.severity = "medium"
          baseResult.details = "Suspicious SQL-like syntax detected in the payload."
        } else if (payload.includes("<script>") || payload.includes("javascript:")) {
          baseResult.type = "Potential XSS"
          baseResult.severity = "high"
          baseResult.details = "JavaScript code detected in the payload, indicating a possible XSS attempt."
        } else if (payload.includes("../") || payload.includes("..\\")) {
          baseResult.type = "Potential Path Traversal"
          baseResult.severity = "medium"
          baseResult.details = "Directory traversal patterns detected in the payload."
        } else if (payload.includes(";") || payload.includes("|") || payload.includes("&&")) {
          baseResult.type = "Potential Command Injection"
          baseResult.severity = "high"
          baseResult.details = "Command chaining characters detected in the payload."
        } else if (payload.trim() === "") {
          baseResult.type = "Empty Payload"
          baseResult.severity = "low"
          baseResult.detected = false
          baseResult.blocked = false
          baseResult.details = "No payload provided for analysis."
        } else {
          baseResult.type = "Unknown"
          baseResult.severity = "low"
          baseResult.detected = Math.random() > 0.7 // 30% chance of false negative for unknown patterns
          baseResult.blocked = baseResult.detected
          baseResult.details =
            "The payload doesn't match known attack patterns, but was flagged for unusual characteristics."
        }
        break
    }

    // Calculate total time
    baseResult.timeline.total =
      baseResult.timeline.detection + baseResult.timeline.analysis + baseResult.timeline.mitigation

    return baseResult
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value as AttackType)
    setResult(null)
    if (value === "custom") {
      setCustomPayload("")
    }
  }

  const handleReset = () => {
    setResult(null)
    if (activeTab === "custom") {
      setCustomPayload("")
    }
  }

  const getAttackIcon = (type: AttackType) => {
    switch (type) {
      case "sql":
        return <Database className="h-5 w-5" />
      case "xss":
        return <FileCode className="h-5 w-5" />
      case "path":
        return <Folder className="h-5 w-5" />
      case "command":
        return <Terminal className="h-5 w-5" />
      default:
        return <Code className="h-5 w-5" />
    }
  }

  const getSeverityColor = (severity: "high" | "medium" | "low") => {
    switch (severity) {
      case "high":
        return "text-red-500"
      case "medium":
        return "text-orange-500"
      case "low":
        return "text-yellow-500"
      default:
        return "text-gray-500"
    }
  }

  return (
    <div className="max-w-4xl mx-auto mb-16">
      <Card className="border-2 border-gray-200 dark:border-gray-800 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl">
            <Shield className="mr-2 h-6 w-6 text-primary" />
            WAF Attack Simulator
          </CardTitle>
          <CardDescription>
            Test how FGuard WAF detects and blocks different types of attacks in real-time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="sql">SQL Injection</TabsTrigger>
              <TabsTrigger value="xss">XSS</TabsTrigger>
              <TabsTrigger value="path">Path Traversal</TabsTrigger>
              <TabsTrigger value="command">Command Injection</TabsTrigger>
              <TabsTrigger value="custom">Custom</TabsTrigger>
            </TabsList>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">Attack Payload</h3>
                <Button variant="ghost" size="sm" onClick={() => setShowCode(!showCode)} className="text-xs">
                  <Code className="h-3.5 w-3.5 mr-1" />
                  {showCode ? "Hide Code" : "Show Code"}
                </Button>
              </div>

              {activeTab === "custom" ? (
                <Textarea
                  value={customPayload}
                  onChange={(e) => setCustomPayload(e.target.value)}
                  placeholder="Enter your custom attack payload here..."
                  className="font-mono text-sm"
                  rows={3}
                />
              ) : (
                <div className="relative">
                  <div
                    className={`border rounded-md p-3 font-mono text-sm ${
                      showCode ? "bg-gray-50 dark:bg-gray-900" : ""
                    }`}
                  >
                    {attackExamples[activeTab]}
                  </div>
                  {showCode && (
                    <div className="absolute top-0 right-0 bg-gray-200 dark:bg-gray-800 px-2 py-1 text-xs rounded-bl-md rounded-tr-md">
                      payload
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="flex justify-center gap-4 mb-8">
              <Button
                onClick={() => simulateAttack(activeTab)}
                disabled={isSimulating || (activeTab === "custom" && !customPayload.trim())}
                className="w-40"
              >
                {isSimulating ? (
                  <>
                    <div className="h-4 w-4 mr-2 rounded-full border-2 border-t-transparent border-white animate-spin" />
                    Simulating...
                  </>
                ) : (
                  <>
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Simulate Attack
                  </>
                )}
              </Button>

              {result && (
                <Button variant="outline" onClick={handleReset} className="w-40">
                  Reset
                </Button>
              )}
            </div>

            {result && (
              <div className="border-t pt-6">
                <h3 className="font-semibold text-lg mb-4">Attack Simulation Results</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className={`mr-3 ${result.detected ? "text-green-500" : "text-red-500"}`}>
                        {result.detected ? <CheckCircle className="h-6 w-6" /> : <AlertTriangle className="h-6 w-6" />}
                      </div>
                      <div>
                        <div className="font-medium">{result.detected ? "Attack Detected" : "Attack Not Detected"}</div>
                        <div className="text-sm text-muted-foreground">
                          {result.blocked ? "Request was blocked" : "Request was not blocked"}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="text-sm font-medium mb-1">Attack Type</div>
                        <div className="flex items-center">
                          {getAttackIcon(activeTab)}
                          <span className="ml-2">{result.type}</span>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-medium mb-1">Severity</div>
                        <div className={`font-medium ${getSeverityColor(result.severity)}`}>
                          {result.severity.charAt(0).toUpperCase() + result.severity.slice(1)}
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-medium mb-1">Details</div>
                        <div className="text-sm">{result.details}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mb-4">
                      <Clock className="h-5 w-5 mr-2 text-primary" />
                      <div className="font-medium">Response Timeline</div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Detection</span>
                          <span>{result.timeline.detection} ms</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${(result.timeline.detection / result.timeline.total) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Analysis</span>
                          <span>{result.timeline.analysis} ms</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-purple-500 h-2 rounded-full"
                            style={{ width: `${(result.timeline.analysis / result.timeline.total) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Mitigation</span>
                          <span>{result.timeline.mitigation} ms</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${(result.timeline.mitigation / result.timeline.total) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="pt-2 border-t">
                        <div className="flex justify-between font-medium">
                          <span>Total Time</span>
                          <span>{result.timeline.total} ms</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
