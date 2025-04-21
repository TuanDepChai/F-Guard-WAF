"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslation } from "@/lib/i18n"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

export default function DemoResults() {
  const { t } = useTranslation()
  const [timeRange, setTimeRange] = useState("day")

  // Sample data for the charts
  const attackData = {
    day: [
      { name: "00:00", attacks: 12 },
      { name: "04:00", attacks: 19 },
      { name: "08:00", attacks: 37 },
      { name: "12:00", attacks: 43 },
      { name: "16:00", attacks: 29 },
      { name: "20:00", attacks: 18 },
    ],
    week: [
      { name: "Mon", attacks: 120 },
      { name: "Tue", attacks: 98 },
      { name: "Wed", attacks: 134 },
      { name: "Thu", attacks: 165 },
      { name: "Fri", attacks: 187 },
      { name: "Sat", attacks: 103 },
      { name: "Sun", attacks: 87 },
    ],
    month: [
      { name: "Week 1", attacks: 587 },
      { name: "Week 2", attacks: 723 },
      { name: "Week 3", attacks: 894 },
      { name: "Week 4", attacks: 612 },
    ],
  }

  const attackTypeData = [
    { name: "SQL Injection", value: 35 },
    { name: "XSS", value: 25 },
    { name: "CSRF", value: 15 },
    { name: "Path Traversal", value: 10 },
    { name: "Command Injection", value: 8 },
    { name: "Other", value: 7 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d"]

  const handleTimeRangeChange = (value: string) => {
    setTimeRange(value)
  }

  return (
    <div className="container mx-auto py-12">
      <Card className="border-2 border-gray-200 dark:border-gray-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">{t("demo.resultsTitle")}</CardTitle>
          <div className="mt-2">
            <Tabs value={timeRange} onValueChange={handleTimeRangeChange} className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="day">{t("demo.day")}</TabsTrigger>
                <TabsTrigger value="week">{t("demo.week")}</TabsTrigger>
                <TabsTrigger value="month">{t("demo.month")}</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t("demo.attacksOverTime")}</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={attackData[timeRange as keyof typeof attackData]}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="attacks" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t("demo.attackTypeDistribution")}</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={attackTypeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {attackTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("demo.totalAttacks")}</p>
                  <p className="text-3xl font-bold mt-1">
                    {timeRange === "day" ? "158" : timeRange === "week" ? "894" : "2,816"}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("demo.blockedAttacks")}</p>
                  <p className="text-3xl font-bold mt-1 text-green-600">
                    {timeRange === "day" ? "158" : timeRange === "week" ? "894" : "2,816"}
                    <span className="text-sm ml-1">100%</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {t("demo.averageResponseTime")}
                  </p>
                  <p className="text-3xl font-bold mt-1">
                    <span>12</span>
                    <span className="text-sm ml-1">ms</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
