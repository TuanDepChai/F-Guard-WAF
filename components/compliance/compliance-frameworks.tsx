import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, FileText, Database } from "lucide-react"

export default function ComplianceFrameworks() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Regulatory Frameworks</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            FGuard helps organizations meet their compliance requirements across various regulatory frameworks
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="gdpr" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="gdpr">GDPR</TabsTrigger>
              <TabsTrigger value="hipaa">HIPAA</TabsTrigger>
              <TabsTrigger value="pci">PCI DSS</TabsTrigger>
              <TabsTrigger value="ccpa">CCPA</TabsTrigger>
            </TabsList>

            <TabsContent value="gdpr" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-3">General Data Protection Regulation (GDPR)</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        FGuard helps organizations comply with GDPR requirements by providing:
                      </p>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Data breach prevention through advanced WAF protection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Detailed logging and audit trails for security events</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Encryption of data in transit</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Customizable data retention policies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>EU data residency options for cloud deployments</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="hipaa" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <FileText className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        Health Insurance Portability and Accountability Act (HIPAA)
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        FGuard supports HIPAA compliance for healthcare organizations by providing:
                      </p>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Protection against unauthorized access to PHI</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Comprehensive audit logging for security incidents</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Data loss prevention capabilities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Secure transmission of healthcare data</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Business Associate Agreement (BAA) available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pci" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Lock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        Payment Card Industry Data Security Standard (PCI DSS)
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        FGuard helps meet PCI DSS requirements for organizations handling payment card data:
                      </p>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Protection against OWASP Top 10 vulnerabilities (Requirement 6.6)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Network segmentation validation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Monitoring and logging of access to cardholder data environments</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Regular security testing and vulnerability scanning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Credit card number detection and masking</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ccpa" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Database className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-3">California Consumer Privacy Act (CCPA)</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        FGuard supports CCPA compliance for businesses serving California residents:
                      </p>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Protection against data breaches and unauthorized access</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Detailed security event logging and reporting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Data protection through advanced security controls</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Sensitive data identification capabilities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Support for implementing reasonable security procedures</span>
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
