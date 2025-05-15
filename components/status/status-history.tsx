"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function StatusHistory() {
  // Mock data for uptime history
  const uptimeData = [
    { date: "May 2025", uptime: 99.999, incidents: 0 },
    { date: "Apr 2025", uptime: 99.995, incidents: 1 },
    { date: "Mar 2025", uptime: 100.0, incidents: 0 },
    { date: "Feb 2025", uptime: 99.987, incidents: 2 },
    { date: "Jan 2025", uptime: 99.999, incidents: 0 },
    { date: "Dec 2024", uptime: 99.998, incidents: 1 },
  ]

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Uptime History</h2>

          <Card>
            <CardHeader>
              <CardTitle>Historical Uptime Performance</CardTitle>
              <CardDescription>Monthly uptime percentage for all FGuard services combined</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Month</th>
                      <th className="text-left py-3 px-4">Uptime %</th>
                      <th className="text-left py-3 px-4">Incidents</th>
                      <th className="text-left py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {uptimeData.map((month, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 px-4">{month.date}</td>
                        <td className="py-3 px-4">{month.uptime.toFixed(3)}%</td>
                        <td className="py-3 px-4">{month.incidents}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <div
                              className={`h-3 w-3 rounded-full ${month.uptime >= 99.99 ? "bg-green-500" : month.uptime >= 99.9 ? "bg-yellow-500" : "bg-red-500"} mr-2`}
                            ></div>
                            <span>
                              {month.uptime >= 99.99
                                ? "Excellent"
                                : month.uptime >= 99.9
                                  ? "Good"
                                  : "Needs Improvement"}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Uptime SLA Targets</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Standard Plan</div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="text-2xl font-bold">99.99%</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Professional Plan</div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="text-2xl font-bold">99.999%</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Enterprise Plan</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
