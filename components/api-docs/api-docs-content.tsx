import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ApiDocsContent() {
  return (
    <div className="space-y-12">
      <section id="introduction">
        <h2 className="text-3xl font-bold mb-6">Introduction</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="mb-4">
              The FGuard WAF API provides programmatic access to manage your web application firewall settings,
              configurations, and to retrieve security analytics data. This RESTful API allows you to integrate FGuard
              with your existing security infrastructure and automation workflows.
            </p>
            <p className="mb-4">
              The API is organized around REST principles. All requests should be made over HTTPS to ensure data
              security. The API accepts and returns JSON in the HTTP body. You can use the API to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Manage security rules and policies</li>
              <li>Configure protection settings</li>
              <li>Retrieve security events and analytics</li>
              <li>Automate responses to security incidents</li>
              <li>Integrate with your CI/CD pipeline</li>
            </ul>
            <p>
              The base URL for all API requests is:{" "}
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">https://api.fguard.com/v1</code>
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="authentication">
        <h2 className="text-3xl font-bold mb-6">Authentication</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="mb-4">
              All API requests require authentication using API keys. You can generate API keys in the FGuard dashboard
              under Account Settings → API Keys.
            </p>
            <p className="mb-4">There are two ways to authenticate your API requests:</p>

            <h3 className="text-xl font-semibold mb-3">1. Authorization Header</h3>
            <p className="mb-4">Include your API key in the Authorization header using the Bearer scheme:</p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-6">
              <code>Authorization: Bearer YOUR_API_KEY</code>
            </pre>

            <h3 className="text-xl font-semibold mb-3">2. Query Parameter</h3>
            <p className="mb-4">Alternatively, you can include your API key as a query parameter:</p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-6">
              <code>https://api.fguard.com/v1/rules?api_key=YOUR_API_KEY</code>
            </pre>

            <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg text-yellow-800 dark:text-yellow-200">
              <p className="font-semibold">Security Note:</p>
              <p>
                We recommend using the Authorization header method as it's more secure. Query parameters may be logged
                in server logs or browser history.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="rate-limits">
        <h2 className="text-3xl font-bold mb-6">Rate Limits</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="mb-4">
              To ensure the stability of the API, rate limits are enforced based on your subscription plan:
            </p>

            <Table className="mb-6">
              <TableHeader>
                <TableRow>
                  <TableHead>Plan</TableHead>
                  <TableHead>Rate Limit</TableHead>
                  <TableHead>Burst Limit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Standard</TableCell>
                  <TableCell>100 requests/minute</TableCell>
                  <TableCell>150 requests</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Professional</TableCell>
                  <TableCell>300 requests/minute</TableCell>
                  <TableCell>450 requests</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Enterprise</TableCell>
                  <TableCell>1000 requests/minute</TableCell>
                  <TableCell>1500 requests</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <p className="mb-4">Rate limit information is included in the response headers of each API request:</p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
              <code>
                X-RateLimit-Limit: 100
                <br />
                X-RateLimit-Remaining: 95
                <br />
                X-RateLimit-Reset: 1620000000
              </code>
            </pre>
          </CardContent>
        </Card>
      </section>

      <section id="endpoints">
        <h2 className="text-3xl font-bold mb-6">API Endpoints</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="mb-6">The FGuard API is organized around the following main resource categories:</p>

            <Tabs defaultValue="rules">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="rules">Rules</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="config">Configuration</TabsTrigger>
              </TabsList>

              <TabsContent value="rules" className="pt-4">
                <h3 className="text-xl font-semibold mb-3">Rules Management</h3>
                <p className="mb-4">Endpoints for managing security rules and policies:</p>

                <div className="space-y-4">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded text-sm font-medium">
                        GET
                      </span>
                      <code>/rules</code>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">List all security rules</p>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded text-sm font-medium">
                        GET
                      </span>
                      <code>/rules/{"{rule_id}"}</code>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">Get a specific rule by ID</p>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2 py-0.5 rounded text-sm font-medium">
                        POST
                      </span>
                      <code>/rules</code>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">Create a new security rule</p>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 px-2 py-0.5 rounded text-sm font-medium">
                        PUT
                      </span>
                      <code>/rules/{"{rule_id}"}</code>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">Update an existing rule</p>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 px-2 py-0.5 rounded text-sm font-medium">
                        DELETE
                      </span>
                      <code>/rules/{"{rule_id}"}</code>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">Delete a rule</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="events" className="pt-4">
                <h3 className="text-xl font-semibold mb-3">Security Events</h3>
                <p className="mb-4">Endpoints for retrieving and managing security events:</p>

                <div className="space-y-4">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded text-sm font-medium">
                        GET
                      </span>
                      <code>/events</code>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">List security events with filtering options</p>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded text-sm font-medium">
                        GET
                      </span>
                      <code>/events/{"{event_id}"}</code>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">Get detailed information about a specific event</p>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2 py-0.5 rounded text-sm font-medium">
                        POST
                      </span>
                      <code>/events/{"{event_id}"}/actions</code>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Take action on a security event (block, allow, etc.)
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="pt-4">
                <h3 className="text-xl font-semibold mb-3">Analytics</h3>
                <p className="mb-4">Endpoints for retrieving analytics and reporting data:</p>

                <div className="space-y-4">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded text-sm font-medium">
                        GET
                      </span>
                      <code>/analytics/summary</code>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">Get a summary of security analytics</p>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded text-sm font-medium">
                        GET
                      </span>
                      <code>/analytics/traffic</code>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">Get traffic analytics with filtering options</p>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded text-sm font-medium">
                        GET
                      </span>
                      <code>/analytics/threats</code>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">Get threat analytics and statistics</p>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded text-sm font-medium">
                        GET
                      </span>
                      <code>/analytics/reports</code>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">Generate and retrieve security reports</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="config" className="pt-4">
                <h3 className="text-xl font-semibold mb-3">Configuration</h3>
                <p className="mb-4">Endpoints for managing WAF configurations:</p>

                <div className="space-y-4">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded text-sm font-medium">
                        GET
                      </span>
                      <code>/config</code>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">Get current WAF configuration</p>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 px-2 py-0.5 rounded text-sm font-medium">
                        PUT
                      </span>
                      <code>/config</code>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">Update WAF configuration</p>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded text-sm font-medium">
                        GET
                      </span>
                      <code>/config/domains</code>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">List protected domains</p>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2 py-0.5 rounded text-sm font-medium">
                        POST
                      </span>
                      <code>/config/domains</code>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">Add a new protected domain</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
