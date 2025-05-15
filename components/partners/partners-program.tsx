import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Award, BarChart, Zap } from "lucide-react"

export default function PartnersProgram() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Partner Program Types</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Choose the partnership model that best fits your business goals
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="reseller" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="reseller">Reseller</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
              <TabsTrigger value="service">Service</TabsTrigger>
              <TabsTrigger value="referral">Referral</TabsTrigger>
            </TabsList>

            <TabsContent value="reseller" className="mt-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-primary" />
                    <CardTitle>Reseller Program</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="mb-6 text-gray-600 dark:text-gray-400">
                    Become an authorized FGuard reseller and offer our industry-leading WAF solutions to your customers.
                    Earn competitive margins while providing top-tier security solutions.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2">Benefits</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Competitive margins up to 30%</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Deal registration protection</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Sales and technical training</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Marketing resources and co-branding</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Dedicated partner manager</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Established security practice</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Minimum annual revenue commitment</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Technical certification (2+ staff)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Sales certification (2+ staff)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Business plan development</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="technology" className="mt-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <Zap className="h-6 w-6 text-primary" />
                    <CardTitle>Technology Partner Program</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="mb-6 text-gray-600 dark:text-gray-400">
                    Integrate your technology with FGuard to create powerful joint solutions. Expand your product
                    capabilities and reach new markets through technical collaboration.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2">Benefits</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>API access and integration support</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Joint solution development</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Technical documentation and resources</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Co-marketing opportunities</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Solution showcase in marketplace</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Complementary technology solution</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Technical integration capability</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Integration testing and certification</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Joint go-to-market strategy</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Mutual customer support agreement</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="service" className="mt-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-primary" />
                    <CardTitle>Service Partner Program</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="mb-6 text-gray-600 dark:text-gray-400">
                    Provide implementation, consulting, and managed services around FGuard solutions. Expand your
                    service offerings with our industry-leading WAF technology.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2">Benefits</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Advanced technical training</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Service delivery methodologies</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Professional services certification</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Customer referrals</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Technical support escalation</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Security services practice</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Certified technical staff (3+)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Service delivery methodology</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Customer satisfaction metrics</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>24/7 support capability (for MSPs)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="referral" className="mt-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <BarChart className="h-6 w-6 text-primary" />
                    <CardTitle>Referral Partner Program</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="mb-6 text-gray-600 dark:text-gray-400">
                    Earn commissions by referring customers to FGuard. Our referral program is perfect for consultants,
                    influencers, and businesses looking to monetize their network.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2">Benefits</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Competitive commission rates (10-15%)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Simple referral process</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Marketing materials and resources</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Referral tracking portal</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Monthly commission payments</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Completed partner application</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Basic product knowledge</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Referral agreement acceptance</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>Valid tax and payment information</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>No minimum referral requirements</span>
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
