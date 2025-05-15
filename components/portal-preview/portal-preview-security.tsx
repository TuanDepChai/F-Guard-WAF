import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Clock } from "lucide-react"

export default function PortalPreviewSecurity() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Security Operations Center</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Enterprise-grade security monitoring and incident response capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardHeader className="pb-2">
              <Shield className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Real-time Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                24/7 monitoring of security events with real-time alerts and notifications for immediate response to
                potential threats.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <AlertTriangle className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Incident Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Comprehensive incident tracking, investigation tools, and response workflows to manage security events
                efficiently.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <Eye className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Threat Intelligence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Integration with global threat intelligence feeds to proactively identify and block emerging threats and
                attack patterns.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <Lock className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Compliance Reporting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Automated compliance reports for PCI DSS, HIPAA, GDPR, and other regulatory frameworks with audit
                trails.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CheckCircle className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Automated Response</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Configurable automated response actions to block attacks, update rules, and mitigate threats without
                manual intervention.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <Clock className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Historical Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Long-term storage and analysis of security events to identify trends, patterns, and potential
                vulnerabilities over time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
