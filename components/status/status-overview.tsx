"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertTriangle, XCircle, Clock } from "lucide-react"

// Mock data - in a real application, this would come from an API
const mockServices = [
  { id: 1, name: "WAF Cloud Service", status: "operational", uptime: "99.999%" },
  { id: 2, name: "API Protection", status: "operational", uptime: "99.998%" },
  { id: 3, name: "DDoS Mitigation", status: "operational", uptime: "100%" },
  { id: 4, name: "Customer Dashboard", status: "operational", uptime: "99.995%" },
  { id: 5, name: "Analytics Platform", status: "degraded", uptime: "99.87%" },
  { id: 6, name: "Documentation Site", status: "operational", uptime: "99.999%" },
]

export default function StatusOverview() {
  const [services, setServices] = useState(mockServices)
  const [lastUpdated, setLastUpdated] = useState(new Date())
  const [overallStatus, setOverallStatus] = useState("operational")

  useEffect(() => {
    // Determine overall status based on individual services
    const hasOutage = services.some((service) => service.status === "outage")
    const hasDegraded = services.some((service) => service.status === "degraded")

    if (hasOutage) {
      setOverallStatus("outage")
    } else if (hasDegraded) {
      setOverallStatus("degraded")
    } else {
      setOverallStatus("operational")
    }
  }, [services])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-6 w-6 text-green-500" />
      case "degraded":
        return <AlertTriangle className="h-6 w-6 text-yellow-500" />
      case "outage":
        return <XCircle className="h-6 w-6 text-red-500" />
      default:
        return <Clock className="h-6 w-6 text-gray-500" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "operational":
        return "Operational"
      case "degraded":
        return "Degraded Performance"
      case "outage":
        return "Service Outage"
      default:
        return "Unknown"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "bg-green-500"
      case "degraded":
        return "bg-yellow-500"
      case "outage":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="mb-8">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-2xl">System Status</CardTitle>
                <CardDescription>
                  Last updated: {lastUpdated.toLocaleTimeString()} {lastUpdated.toLocaleDateString()}
                </CardDescription>
              </div>
              <div className="flex items-center">
                {getStatusIcon(overallStatus)}
                <span className="ml-2 font-medium">
                  {overallStatus === "operational"
                    ? "All Systems Operational"
                    : overallStatus === "degraded"
                      ? "Partial System Degradation"
                      : "System Outage"}
                </span>
              </div>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Card key={service.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle>{service.name}</CardTitle>
                    <div className={`h-3 w-3 rounded-full ${getStatusColor(service.status)}`}></div>
                  </div>
                  <CardDescription>Current uptime: {service.uptime}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    {getStatusIcon(service.status)}
                    <span className="ml-2">{getStatusText(service.status)}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
