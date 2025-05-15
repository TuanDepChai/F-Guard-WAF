import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, CheckCircle, Clock } from "lucide-react"

export default function StatusIncidents() {
  // Mock data for incidents
  const incidents = [
    {
      id: 1,
      title: "Analytics Platform Performance Degradation",
      status: "investigating",
      date: "May 15, 2025",
      time: "08:45 AM UTC",
      description: "We are investigating reports of slow response times in the Analytics Platform.",
      updates: [
        { time: "08:45 AM UTC", message: "Investigating reports of slow response times in the Analytics Platform." },
        { time: "09:15 AM UTC", message: "Identified increased database load causing the slowdown. Working on a fix." },
      ],
    },
    {
      id: 2,
      title: "API Protection Service Latency",
      status: "resolved",
      date: "April 28, 2025",
      time: "03:22 PM UTC",
      description: "Users experienced increased latency with the API Protection service.",
      updates: [
        { time: "03:22 PM UTC", message: "Investigating increased latency in API Protection service." },
        { time: "03:45 PM UTC", message: "Identified network congestion in US-East region." },
        { time: "04:30 PM UTC", message: "Rerouted traffic and optimized load balancing." },
        { time: "05:15 PM UTC", message: "Issue resolved. Service operating normally." },
      ],
    },
    {
      id: 3,
      title: "Customer Dashboard Maintenance",
      status: "completed",
      date: "April 15, 2025",
      time: "01:00 AM UTC",
      description: "Scheduled maintenance to upgrade Customer Dashboard infrastructure.",
      updates: [
        { time: "01:00 AM UTC", message: "Beginning scheduled maintenance." },
        { time: "02:30 AM UTC", message: "Upgrade completed successfully. Monitoring for any issues." },
        { time: "03:00 AM UTC", message: "Maintenance completed. All systems operational." },
      ],
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "investigating":
      case "identified":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      case "resolved":
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      default:
        return <Clock className="h-5 w-5 text-blue-500" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "investigating":
        return "Investigating"
      case "identified":
        return "Identified"
      case "resolved":
        return "Resolved"
      case "completed":
        return "Completed"
      default:
        return status.charAt(0).toUpperCase() + status.slice(1)
    }
  }

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Recent Incidents</h2>

          <div className="space-y-6">
            {incidents.map((incident) => (
              <Card key={incident.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{incident.title}</CardTitle>
                      <CardDescription>
                        {incident.date} at {incident.time}
                      </CardDescription>
                    </div>
                    <div className="flex items-center">
                      {getStatusIcon(incident.status)}
                      <span className="ml-2 font-medium">{getStatusText(incident.status)}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{incident.description}</p>

                  <h4 className="font-medium mb-2">Updates:</h4>
                  <div className="space-y-3">
                    {incident.updates.map((update, index) => (
                      <div key={index} className="flex">
                        <div className="text-sm text-gray-500 dark:text-gray-400 w-32 flex-shrink-0">{update.time}</div>
                        <div>{update.message}</div>
                      </div>
                    ))}
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
