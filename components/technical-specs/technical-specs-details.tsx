import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, Server, Cloud, Database, Lock } from "lucide-react"

export default function TechnicalSpecsDetails() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Detailed Specifications</h2>

        <Tabs defaultValue="performance" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="security">Security Features</TabsTrigger>
            <TabsTrigger value="deployment">Deployment Options</TabsTrigger>
          </TabsList>

          <TabsContent value="performance">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Zap className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Processing Capacity</CardTitle>
                  <CardDescription>Request handling capabilities</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Up to 10 million requests per second</li>
                    <li>• 99.999% uptime guarantee</li>
                    <li>• Average latency under 1ms</li>
                    <li>• Global load balancing across 50+ data centers</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Server className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Hardware Requirements</CardTitle>
                  <CardDescription>For on-premise deployment</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Minimum 8-core CPU</li>
                    <li>• 16GB RAM recommended</li>
                    <li>• 100GB SSD storage</li>
                    <li>• 10Gbps network interface</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Database className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Data Processing</CardTitle>
                  <CardDescription>Analytics and logging capabilities</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Real-time log processing</li>
                    <li>• 30-day log retention (standard)</li>
                    <li>• Up to 1-year log retention (enterprise)</li>
                    <li>• Customizable dashboards and reports</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Cloud className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Scalability</CardTitle>
                  <CardDescription>Handling traffic spikes</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Auto-scaling within seconds</li>
                    <li>• Unlimited bandwidth (cloud version)</li>
                    <li>• Elastic resource allocation</li>
                    <li>• No performance degradation during attacks</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="security">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Shield className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Protection Capabilities</CardTitle>
                  <CardDescription>Threat prevention features</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• OWASP Top 10 protection</li>
                    <li>• Advanced XSS and SQLi detection</li>
                    <li>• Zero-day vulnerability protection</li>
                    <li>• Bot detection and mitigation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Lock className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Compliance</CardTitle>
                  <CardDescription>Regulatory standards</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• PCI DSS compliant</li>
                    <li>• GDPR ready</li>
                    <li>• HIPAA compliant</li>
                    <li>• SOC 2 Type II certified</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>DDoS Protection</CardTitle>
                  <CardDescription>Attack mitigation</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Layer 3-4 DDoS protection</li>
                    <li>• Layer 7 application-level protection</li>
                    <li>• Traffic anomaly detection</li>
                    <li>• 120+ Tbps mitigation capacity</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Database className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>API Security</CardTitle>
                  <CardDescription>API-specific protections</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• OpenAPI/Swagger validation</li>
                    <li>• API rate limiting</li>
                    <li>• JWT token validation</li>
                    <li>• API abuse prevention</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="deployment">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Cloud className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Cloud Deployment</CardTitle>
                  <CardDescription>SaaS solution</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Zero infrastructure management</li>
                    <li>• Instant provisioning</li>
                    <li>• Automatic updates</li>
                    <li>• Global CDN integration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Server className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>On-Premise</CardTitle>
                  <CardDescription>Self-hosted solution</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Full control over infrastructure</li>
                    <li>• Air-gapped deployment option</li>
                    <li>• Custom hardware optimization</li>
                    <li>• Integration with existing security tools</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Database className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Hybrid Deployment</CardTitle>
                  <CardDescription>Combined approach</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Cloud management with on-premise data processing</li>
                    <li>• Flexible traffic routing</li>
                    <li>• Centralized policy management</li>
                    <li>• Distributed threat intelligence</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Lock className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Containerized</CardTitle>
                  <CardDescription>Kubernetes and Docker</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Kubernetes-native deployment</li>
                    <li>• Docker container support</li>
                    <li>• Helm charts available</li>
                    <li>• Auto-scaling with cluster resources</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
