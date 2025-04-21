"use client"

import { motion } from "framer-motion"
import { Shield, Check, X, AlertTriangle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function ComparisonSection() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
              <Shield className="mr-1 h-4 w-4" />
              <span>Competitive Analysis</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              FGuard vs. Leading WAF Solutions
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              See how FGuard compares to other enterprise WAF solutions like Barracuda, Cloudflare, and AWS WAF
            </p>
          </div>
        </motion.div>

        <Tabs defaultValue="features" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="features">Feature Comparison</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="pricing">Pricing & Value</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="mt-0">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border overflow-hidden">
              <TooltipProvider>
                <Table>
                  <TableCaption>Comprehensive feature comparison between leading WAF solutions</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[250px]">Feature</TableHead>
                      <TableHead className="text-center">
                        <div className="flex flex-col items-center">
                          <Shield className="h-5 w-5 text-primary mb-1" />
                          <span>FGuard WAF</span>
                        </div>
                      </TableHead>
                      <TableHead className="text-center">Barracuda WAF</TableHead>
                      <TableHead className="text-center">Cloudflare WAF</TableHead>
                      <TableHead className="text-center">AWS WAF</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">OWASP Top 10 Protection</TableCell>
                      <TableCell className="text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Advanced Bot Protection</TableCell>
                      <TableCell className="text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center">
                        <Tooltip>
                          <TooltipTrigger>
                            <AlertTriangle className="h-5 w-5 text-yellow-500 mx-auto" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Limited bot protection, requires additional services</p>
                          </TooltipContent>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Machine Learning-Based Detection</TableCell>
                      <TableCell className="text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center">
                        <Tooltip>
                          <TooltipTrigger>
                            <AlertTriangle className="h-5 w-5 text-yellow-500 mx-auto" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Limited ML capabilities, primarily rule-based</p>
                          </TooltipContent>
                        </Tooltip>
                      </TableCell>
                      <TableCell className="text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center">
                        <Tooltip>
                          <TooltipTrigger>
                            <AlertTriangle className="h-5 w-5 text-yellow-500 mx-auto" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Basic ML capabilities, requires AWS Shield Advanced</p>
                          </TooltipContent>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Virtual Patching</TableCell>
                      <TableCell className="text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center">
                        <Tooltip>
                          <TooltipTrigger>
                            <AlertTriangle className="h-5 w-5 text-yellow-500 mx-auto" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Limited virtual patching capabilities</p>
                          </TooltipContent>
                        </Tooltip>
                      </TableCell>
                      <TableCell className="text-center">
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">API Security</TableCell>
                      <TableCell className="text-center">
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="flex justify-center">
                              <Check className="h-5 w-5 text-green-500" />
                              <span className="ml-1 text-xs bg-primary/20 text-primary px-1 rounded">Advanced</span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Comprehensive API security with schema validation and anomaly detection</p>
                          </TooltipContent>
                        </Tooltip>
                      </TableCell>
                      <TableCell className="text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center">
                        <Tooltip>
                          <TooltipTrigger>
                            <AlertTriangle className="h-5 w-5 text-yellow-500 mx-auto" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Basic API protection, requires API Gateway integration</p>
                          </TooltipContent>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">DDoS Protection</TableCell>
                      <TableCell className="text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center">
                        <Tooltip>
                          <TooltipTrigger>
                            <AlertTriangle className="h-5 w-5 text-yellow-500 mx-auto" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Requires additional AWS Shield subscription</p>
                          </TooltipContent>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">On-Premises Deployment</TableCell>
                      <TableCell className="text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center">
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center">
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Multi-Cloud Support</TableCell>
                      <TableCell className="text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center">
                        <Tooltip>
                          <TooltipTrigger>
                            <AlertTriangle className="h-5 w-5 text-yellow-500 mx-auto" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Limited multi-cloud capabilities</p>
                          </TooltipContent>
                        </Tooltip>
                      </TableCell>
                      <TableCell className="text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center">
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">24/7 Expert Support</TableCell>
                      <TableCell className="text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center">
                        <Tooltip>
                          <TooltipTrigger>
                            <AlertTriangle className="h-5 w-5 text-yellow-500 mx-auto" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Available only on Enterprise plans</p>
                          </TooltipContent>
                        </Tooltip>
                      </TableCell>
                      <TableCell className="text-center">
                        <Tooltip>
                          <TooltipTrigger>
                            <AlertTriangle className="h-5 w-5 text-yellow-500 mx-auto" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Requires Business or Enterprise Support plan</p>
                          </TooltipContent>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TooltipProvider>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="mt-0">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border overflow-hidden p-6">
              <h3 className="text-xl font-bold mb-6">Performance Benchmarks</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-4">Request Processing Time (Lower is better)</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>FGuard WAF</span>
                        <span className="font-medium">2.3ms</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Barracuda WAF</span>
                        <span className="font-medium">3.8ms</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Cloudflare WAF</span>
                        <span className="font-medium">2.5ms</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                        <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>AWS WAF</span>
                        <span className="font-medium">4.2ms</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-4">Requests Per Second (Higher is better)</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>FGuard WAF</span>
                        <span className="font-medium">1.2M</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Barracuda WAF</span>
                        <span className="font-medium">850K</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Cloudflare WAF</span>
                        <span className="font-medium">1.1M</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                        <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>AWS WAF</span>
                        <span className="font-medium">950K</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-medium mb-4">Detection Accuracy</h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">WAF Solution</th>
                        <th className="py-3 px-4">True Positive Rate</th>
                        <th className="py-3 px-4">False Positive Rate</th>
                        <th className="py-3 px-4">Zero-Day Detection</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">FGuard WAF</td>
                        <td className="py-3 px-4 text-center">99.8%</td>
                        <td className="py-3 px-4 text-center">0.001%</td>
                        <td className="py-3 px-4 text-center">98.5%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Barracuda WAF</td>
                        <td className="py-3 px-4 text-center">98.7%</td>
                        <td className="py-3 px-4 text-center">0.005%</td>
                        <td className="py-3 px-4 text-center">95.2%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Cloudflare WAF</td>
                        <td className="py-3 px-4 text-center">99.5%</td>
                        <td className="py-3 px-4 text-center">0.002%</td>
                        <td className="py-3 px-4 text-center">97.8%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">AWS WAF</td>
                        <td className="py-3 px-4 text-center">98.2%</td>
                        <td className="py-3 px-4 text-center">0.008%</td>
                        <td className="py-3 px-4 text-center">94.1%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  * Based on independent third-party testing across 10,000+ attack vectors
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="pricing" className="mt-0">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border overflow-hidden p-6">
              <h3 className="text-xl font-bold mb-6">Pricing & Total Cost of Ownership</h3>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Feature</th>
                      <th className="py-3 px-4">FGuard WAF</th>
                      <th className="py-3 px-4">Barracuda WAF</th>
                      <th className="py-3 px-4">Cloudflare WAF</th>
                      <th className="py-3 px-4">AWS WAF</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Starting Price</td>
                      <td className="py-3 px-4 text-center">$1,499/mo</td>
                      <td className="py-3 px-4 text-center">$5,000+ upfront</td>
                      <td className="py-3 px-4 text-center">$200/mo</td>
                      <td className="py-3 px-4 text-center">Pay-per-use</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Enterprise Plan</td>
                      <td className="py-3 px-4 text-center">$3,999/mo</td>
                      <td className="py-3 px-4 text-center">$15,000+ upfront</td>
                      <td className="py-3 px-4 text-center">$5,000+/mo</td>
                      <td className="py-3 px-4 text-center">$3,000+/mo</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Hidden Costs</td>
                      <td className="py-3 px-4 text-center">None</td>
                      <td className="py-3 px-4 text-center">Maintenance, Updates</td>
                      <td className="py-3 px-4 text-center">Rate limiting fees</td>
                      <td className="py-3 px-4 text-center">Data transfer, Rules</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Free Trial</td>
                      <td className="py-3 px-4 text-center">14 days</td>
                      <td className="py-3 px-4 text-center">30 days</td>
                      <td className="py-3 px-4 text-center">Limited</td>
                      <td className="py-3 px-4 text-center">None</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Pricing Model</td>
                      <td className="py-3 px-4 text-center">Predictable subscription</td>
                      <td className="py-3 px-4 text-center">Upfront + maintenance</td>
                      <td className="py-3 px-4 text-center">Tiered subscription</td>
                      <td className="py-3 px-4 text-center">Pay-per-use</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8">
                <h4 className="font-medium mb-4">Total Cost of Ownership (3-Year)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>FGuard WAF</span>
                          <span className="font-medium">$144,000</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: "80%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Barracuda WAF</span>
                          <span className="font-medium">$180,000</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Cloudflare WAF</span>
                          <span className="font-medium">$160,000</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                          <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>AWS WAF</span>
                          <span className="font-medium">$150,000+</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      * Estimated for enterprise deployment protecting 10 applications
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
                    <h4 className="font-medium mb-3">FGuard Value Proposition</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Lower total cost of ownership compared to traditional WAF appliances</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>No hidden costs or surprise bills with predictable subscription pricing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Included 24/7 expert support without additional support contracts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Automatic updates and virtual patching included at no additional cost</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Flexible deployment options without vendor lock-in</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-blue-700">
                  Request Custom Pricing Quote
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
