"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, AlertTriangle, CheckCircle, XCircle, RefreshCw } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

export default function InteractiveDemo() {
  const { t } = useTranslation()
  const [attackInput, setAttackInput] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<null | {
    blocked: boolean
    threatType: string
    riskLevel: "high" | "medium" | "low"
    details: string
  }>(null)

  const commonAttacks = [
    { name: "SQL Injection", example: "' OR 1=1 --" },
    { name: "XSS Attack", example: "<script>alert('XSS')</script>" },
    { name: "Path Traversal", example: "../../../etc/passwd" },
    { name: "Command Injection", example: "; cat /etc/passwd" },
  ]

  const analyzeAttack = (input: string) => {
    setIsAnalyzing(true)
    setResult(null)

    // Simulate analysis delay
    setTimeout(() => {
      let threatType = ""
      let blocked = false
      let riskLevel: "high" | "medium" | "low" = "low"
      let details = ""

      if (input.includes("'") && (input.includes("OR") || input.includes("="))) {
        threatType = "SQL Injection"
        blocked = true
        riskLevel = "high"
        details = t("demo.sqlInjectionDetails")
      } else if (input.includes("<script>")) {
        threatType = "Cross-Site Scripting (XSS)"
        blocked = true
        riskLevel = "high"
        details = t("demo.xssDetails")
      } else if (input.includes("../")) {
        threatType = "Path Traversal"
        blocked = true
        riskLevel = "medium"
        details = t("demo.pathTraversalDetails")
      } else if (input.includes(";") || input.includes("|") || input.includes("&&")) {
        threatType = "Command Injection"
        blocked = true
        riskLevel = "high"
        details = t("demo.commandInjectionDetails")
      } else if (input.length > 0) {
        threatType = "Unknown"
        blocked = false
        riskLevel = "low"
        details = t("demo.safeInputDetails")
      } else {
        threatType = "Empty Input"
        blocked = false
        riskLevel = "low"
        details = t("demo.emptyInputDetails")
      }

      setResult({
        blocked,
        threatType,
        riskLevel,
        details,
      })
      setIsAnalyzing(false)
    }, 1500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    analyzeAttack(attackInput)
  }

  const handleExampleClick = (example: string) => {
    setAttackInput(example)
    analyzeAttack(example)
  }

  return (
    <div className="container mx-auto py-12">
      <Card className="border-2 border-gray-200 dark:border-gray-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">{t("demo.interactiveTitle")}</CardTitle>
          <CardDescription>{t("demo.interactiveDescription")}</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="simulator" className="w-full">
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="simulator">{t("demo.attackSimulator")}</TabsTrigger>
              <TabsTrigger value="examples">{t("demo.commonExamples")}</TabsTrigger>
            </TabsList>

            <TabsContent value="simulator">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="attack-input" className="text-sm font-medium">
                    {t("demo.enterAttackString")}
                  </label>
                  <div className="flex space-x-2">
                    <Input
                      id="attack-input"
                      value={attackInput}
                      onChange={(e) => setAttackInput(e.target.value)}
                      placeholder={t("demo.attackPlaceholder")}
                      className="flex-1"
                    />
                    <Button type="submit" disabled={isAnalyzing} className="bg-primary hover:bg-primary/90">
                      {isAnalyzing ? (
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Shield className="mr-2 h-4 w-4" />
                      )}
                      {isAnalyzing ? t("demo.analyzing") : t("demo.analyze")}
                    </Button>
                  </div>
                </div>
              </form>

              {result && (
                <div className="mt-8 border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                  <div className="flex items-center mb-4">
                    {result.blocked ? (
                      <div className="flex items-center text-red-600">
                        <XCircle className="h-6 w-6 mr-2" />
                        <span className="font-bold">{t("demo.threatBlocked")}</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="h-6 w-6 mr-2" />
                        <span className="font-bold">{t("demo.requestAllowed")}</span>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("demo.threatType")}</p>
                      <p className="font-medium">{result.threatType}</p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("demo.riskLevel")}</p>
                      <div className="flex items-center">
                        <span
                          className={`inline-block w-3 h-3 rounded-full mr-2 ${
                            result.riskLevel === "high"
                              ? "bg-red-500"
                              : result.riskLevel === "medium"
                                ? "bg-yellow-500"
                                : "bg-green-500"
                          }`}
                        />
                        <span className="font-medium">
                          {result.riskLevel === "high"
                            ? t("demo.highRisk")
                            : result.riskLevel === "medium"
                              ? t("demo.mediumRisk")
                              : t("demo.lowRisk")}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{t("demo.details")}</p>
                    <p className="text-sm">{result.details}</p>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="examples">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {commonAttacks.map((attack, index) => (
                  <Card
                    key={index}
                    className="cursor-pointer hover:border-primary transition-colors"
                    onClick={() => handleExampleClick(attack.example)}
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-2 text-yellow-500" />
                        {attack.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <code className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm block overflow-x-auto">
                        {attack.example}
                      </code>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleExampleClick(attack.example)
                        }}
                      >
                        {t("demo.tryExample")}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col items-start border-t p-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">{t("demo.disclaimer")}</p>
        </CardFooter>
      </Card>
    </div>
  )
}
