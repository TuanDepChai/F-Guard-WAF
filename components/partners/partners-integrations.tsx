import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Database, BarChart, Server } from "lucide-react"

export default function PartnersIntegrations() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Integration Opportunities</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Explore the various ways to integrate with FGuard's security platform
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="api" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="api">API Integration</TabsTrigger>
              <TabsTrigger value="siem">SIEM Integration</TabsTrigger>
              <TabsTrigger value="cloud">Cloud Platforms</TabsTrigger>
              <TabsTrigger value="identity">Identity Providers</TabsTrigger>
            </TabsList>

            <TabsContent value="api" className="mt-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <Server className="h-6 w-6 text-primary" />
                    <CardTitle>API Integration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="mb-6 text-gray-600 dark:text-gray-400">
                    Integrate with FGuard's comprehensive RESTful API to manage security rules, analyze threats, and
                    automate security operations.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2">Key Capabilities</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Security rule management</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Real-time threat analytics</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Configuration automation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Event monitoring and alerting</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>User and access management</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2">Integration Support</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Comprehensive API documentation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>SDKs for multiple languages</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Integration code samples</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Developer sandbox environment</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Technical integration support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="siem" className="mt-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <BarChart className="h-6 w-6 text-primary" />
                    <CardTitle>SIEM Integration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="mb-6 text-gray-600 dark:text-gray-400">
                    Connect FGuard with leading SIEM solutions to centralize security monitoring, enhance threat
                    detection, and streamline incident response.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2">Supported SIEM Platforms</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Splunk</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>IBM QRadar</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Microsoft Sentinel</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Elastic Security</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>LogRhythm</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2">Integration Features</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Real-time event forwarding</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Custom dashboards and visualizations</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Correlation rule templates</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Automated response playbooks</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Threat intelligence sharing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cloud" className="mt-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <Database className="h-6 w-6 text-primary" />
                    <CardTitle>Cloud Platform Integration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="mb-6 text-gray-600 dark:text-gray-400">
                    Seamlessly integrate FGuard with major cloud platforms to protect cloud-native applications and
                    infrastructure with minimal configuration.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2">Supported Cloud Platforms</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Amazon Web Services (AWS)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Microsoft Azure</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Google Cloud Platform (GCP)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>IBM Cloud</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Oracle Cloud</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2">Integration Features</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>One-click deployment templates</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Cloud marketplace listings</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Native cloud service integration</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Infrastructure-as-Code templates</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Cloud-native security controls</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="identity" className="mt-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>Identity Provider Integration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="mb-6 text-gray-600 dark:text-gray-400">
                    Integrate FGuard with identity providers to implement robust authentication, authorization, and
                    identity-based security policies.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2">Supported Identity Providers</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Microsoft Entra ID (Azure AD)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Okta</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Auth0</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Ping Identity</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>OneLogin</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2">Integration Features</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Single Sign-On (SSO)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Multi-factor authentication</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Role-based access control</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Identity-based security policies</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>User activity monitoring</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
