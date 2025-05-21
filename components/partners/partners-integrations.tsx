"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Database, BarChart, Server, UserCircle, Code, Zap, Link2 } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const siemPlatforms = [
  { 
    name: "Splunk", 
    logo: "/images/Splunk_logo.png",
    description: "Advanced security analytics and visualization",
    features: ["Real-time monitoring", "Custom dashboards", "Threat correlation"]
  },
  { 
    name: "IBM QRadar", 
    logo: "/images/purepng.com-ibm-logologobrand-logoiconslogos-251519939176ka7y8.png",
    description: "Enterprise-grade security intelligence",
    features: ["Advanced analytics", "Threat detection", "Compliance monitoring"]
  },
  { 
    name: "Microsoft Sentinel", 
    logo: "/images/microsoft-80658_1280.png",
    description: "Cloud-native SIEM and SOAR solution",
    features: ["AI-powered analytics", "Automated response", "Cloud integration"]
  },
  { 
    name: "Elastic Security", 
    logo: null,
    description: "Open-source security analytics",
    features: ["Real-time analysis", "Machine learning", "Custom visualizations"]
  },
  { 
    name: "LogRhythm", 
    logo: null,
    description: "Unified security operations platform",
    features: ["Threat detection", "Compliance automation", "Incident response"]
  },
]

const cloudPlatforms = [
  { 
    name: "Amazon Web Services (AWS)", 
    logo: "/images/Amazon_Web_Services-Logo.wine.png",
    description: "Comprehensive cloud security integration",
    features: ["WAF integration", "CloudWatch monitoring", "Lambda automation"]
  },
  { 
    name: "Microsoft Azure", 
    logo: "/images/microsoft-80658_1280.png",
    description: "Native Azure security services",
    features: ["Application Gateway", "Security Center", "Sentinel integration"]
  },
  { 
    name: "Google Cloud Platform (GCP)", 
    logo: "/images/google-cloud-icon-2048x1646-7admxejz.png",
    description: "Advanced cloud security features",
    features: ["Cloud Armor", "Security Command Center", "Cloud Monitoring"]
  },
  { 
    name: "IBM Cloud", 
    logo: "/images/purepng.com-ibm-logologobrand-logoiconslogos-251519939176ka7y8.png",
    description: "Enterprise cloud security",
    features: ["Cloud Security Services", "Monitoring", "Compliance"]
  },
  { 
    name: "Oracle Cloud", 
    logo: null,
    description: "Comprehensive cloud security",
    features: ["WAF services", "Security monitoring", "Compliance tools"]
  },
]

const identityProviders = [
  { 
    name: "Okta", 
    logo: null,
    description: "Enterprise identity management",
    features: ["SSO", "MFA", "Universal Directory"]
  },
  { 
    name: "Azure Active Directory", 
    logo: "/images/microsoft-80658_1280.png",
    description: "Microsoft's identity platform",
    features: ["Enterprise SSO", "Conditional access", "Identity protection"]
  },
  { 
    name: "Auth0", 
    logo: null,
    description: "Modern identity platform",
    features: ["Universal login", "Social connections", "Enterprise SSO"]
  },
  { 
    name: "Ping Identity", 
    logo: null,
    description: "Intelligent identity platform",
    features: ["SSO", "MFA", "API security"]
  },
  { 
    name: "OneLogin", 
    logo: null,
    description: "Unified access management",
    features: ["SSO", "MFA", "Directory integration"]
  },
]

export default function PartnersIntegrations() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Integration Opportunities</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Explore the various ways to integrate with FGuard's security platform
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="api" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="api">API Integration</TabsTrigger>
              <TabsTrigger value="siem">SIEM Integration</TabsTrigger>
              <TabsTrigger value="cloud">Cloud Platforms</TabsTrigger>
              <TabsTrigger value="identity">Identity Providers</TabsTrigger>
            </TabsList>

            <TabsContent value="api" className="mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <Code className="h-6 w-6 text-primary" />
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
                          <li className="flex items-start gap-2">
                            <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>Security rule management</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>Real-time threat analytics</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>Configuration automation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>Event monitoring and alerting</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>User and access management</span>
                          </li>
                        </ul>
                      </div>

                      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">Integration Support</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                          <li className="flex items-start gap-2">
                            <Link2 className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>Comprehensive API documentation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Link2 className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>SDKs for multiple languages</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Link2 className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>Integration code samples</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Link2 className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>Developer sandbox environment</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Link2 className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>Technical integration support</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-center">
                      <Button variant="outline" className="gap-2">
                        <Code className="h-4 w-4" />
                        View API Documentation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="siem" className="mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
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
                        <h3 className="text-lg font-semibold mb-4">Supported SIEM Platforms</h3>
                        <div className="space-y-4">
                          {siemPlatforms.map((platform, index) => (
                            <motion.div
                              key={platform.name}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                            >
                              {platform.logo ? (
                                <div className="w-10 h-10 relative flex-shrink-0">
                                  <Image
                                    src={platform.logo}
                                    alt={`${platform.name} logo`}
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                              ) : (
                                <div className="w-10 h-10 flex items-center justify-center text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-lg flex-shrink-0">
                                  <Database className="h-5 w-5" />
                                </div>
                              )}
                              <div>
                                <h4 className="font-medium">{platform.name}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{platform.description}</p>
                                <div className="mt-2 flex flex-wrap gap-2">
                                  {platform.features.map((feature) => (
                                    <span
                                      key={feature}
                                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                                    >
                                      {feature}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">Integration Features</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                          <li className="flex items-start gap-2">
                            <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>Real-time event forwarding</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>Custom dashboards and visualizations</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>Correlation rule templates</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>Automated response playbooks</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>Threat intelligence sharing</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="cloud" className="mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
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
                        <h3 className="text-lg font-semibold mb-4">Supported Cloud Platforms</h3>
                        <div className="space-y-4">
                          {cloudPlatforms.map((platform, index) => (
                            <motion.div
                              key={platform.name}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                            >
                              {platform.logo ? (
                                <div className="w-10 h-10 relative flex-shrink-0">
                                  <Image
                                    src={platform.logo}
                                    alt={`${platform.name} logo`}
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                              ) : (
                                <div className="w-10 h-10 flex items-center justify-center text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-lg flex-shrink-0">
                                  <Server className="h-5 w-5" />
                                </div>
                              )}
                              <div>
                                <h4 className="font-medium">{platform.name}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{platform.description}</p>
                                <div className="mt-2 flex flex-wrap gap-2">
                                  {platform.features.map((feature) => (
                                    <span
                                      key={feature}
                                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                                    >
                                      {feature}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">Integration Features</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                          <li className="flex items-start gap-2">
                            <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>One-click deployment templates</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>Cloud marketplace listings</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>Native cloud service integration</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>Infrastructure-as-Code templates</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>Cloud-native security controls</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="identity" className="mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
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
                        <h3 className="text-lg font-semibold mb-4">Supported Providers</h3>
                        <div className="space-y-4">
                          {identityProviders.map((provider, index) => (
                            <motion.div
                              key={provider.name}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                            >
                              {provider.logo ? (
                                <div className="w-10 h-10 relative flex-shrink-0">
                                  <Image
                                    src={provider.logo}
                                    alt={`${provider.name} logo`}
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                              ) : (
                                <div className="w-10 h-10 flex items-center justify-center text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-lg flex-shrink-0">
                                  <UserCircle className="h-5 w-5" />
                                </div>
                              )}
                              <div>
                                <h4 className="font-medium">{provider.name}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{provider.description}</p>
                                <div className="mt-2 flex flex-wrap gap-2">
                                  {provider.features.map((feature) => (
                                    <span
                                      key={feature}
                                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                                    >
                                      {feature}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">Integration Features</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                          <li className="flex items-start gap-2">
                            <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>Single Sign-On (SSO)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>Multi-Factor Authentication (MFA)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>Role-based Access Control (RBAC)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>Identity-based threat detection</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>Automated user provisioning</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
