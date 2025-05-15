"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Mail } from "lucide-react"
import Link from "next/link"

export default function PricingCalculatorTool() {
  const [plan, setPlan] = useState("standard")
  const [websites, setWebsites] = useState(1)
  const [traffic, setTraffic] = useState(100) // GB per month
  const [apiProtection, setApiProtection] = useState(false)
  const [botProtection, setBotProtection] = useState(false)
  const [ddosProtection, setDdosProtection] = useState(false)
  const [dataRegion, setDataRegion] = useState("us")
  const [supportLevel, setSupportLevel] = useState("standard")
  const [totalPrice, setTotalPrice] = useState(0)
  const [monthlyPrice, setMonthlyPrice] = useState(0)

  // Base prices
  const basePrices = {
    standard: 99,
    professional: 299,
    enterprise: 999,
  }

  // Traffic costs per GB
  const trafficCosts = {
    standard: 0.15,
    professional: 0.12,
    enterprise: 0.08,
  }

  // Website costs
  const websiteCosts = {
    standard: 20,
    professional: 15,
    enterprise: 10,
  }

  // Add-on costs
  const addOnCosts = {
    apiProtection: {
      standard: 50,
      professional: 40,
      enterprise: 30,
    },
    botProtection: {
      standard: 75,
      professional: 60,
      enterprise: 45,
    },
    ddosProtection: {
      standard: 100,
      professional: 80,
      enterprise: 60,
    },
  }

  // Support level costs (additional percentage)
  const supportCosts = {
    standard: 0,
    premium: 0.1, // 10% additional
    dedicated: 0.2, // 20% additional
  }

  // Data region costs (additional percentage)
  const regionCosts = {
    us: 0,
    eu: 0.05, // 5% additional
    asia: 0.08, // 8% additional
    global: 0.15, // 15% additional
  }

  // Calculate price whenever inputs change
  useEffect(() => {
    // Base price for selected plan
    let price = basePrices[plan as keyof typeof basePrices]

    // Add website costs (first website is included)
    if (websites > 1) {
      price += (websites - 1) * websiteCosts[plan as keyof typeof websiteCosts]
    }

    // Add traffic costs (first 100GB is included)
    if (traffic > 100) {
      price += (traffic - 100) * trafficCosts[plan as keyof typeof trafficCosts]
    }

    // Add feature add-ons
    if (apiProtection) {
      price += addOnCosts.apiProtection[plan as keyof typeof addOnCosts.apiProtection]
    }
    if (botProtection) {
      price += addOnCosts.botProtection[plan as keyof typeof addOnCosts.botProtection]
    }
    if (ddosProtection) {
      price += addOnCosts.ddosProtection[plan as keyof typeof addOnCosts.ddosProtection]
    }

    // Apply support level costs
    price += price * supportCosts[supportLevel as keyof typeof supportCosts]

    // Apply data region costs
    price += price * regionCosts[dataRegion as keyof typeof regionCosts]

    // Set annual price
    setTotalPrice(Math.round(price * 12))

    // Set monthly price (annual price / 12)
    setMonthlyPrice(Math.round(price))
  }, [plan, websites, traffic, apiProtection, botProtection, ddosProtection, dataRegion, supportLevel])

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="calculator" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="calculator">Calculator</TabsTrigger>
              <TabsTrigger value="comparison">Plan Comparison</TabsTrigger>
            </TabsList>

            <TabsContent value="calculator" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Configure Your Plan</CardTitle>
                      <CardDescription>
                        Adjust the parameters below to calculate your estimated FGuard costs
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Plan Selection */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Plan</label>
                        <div className="grid grid-cols-3 gap-4">
                          <Button
                            variant={plan === "standard" ? "default" : "outline"}
                            className="w-full"
                            onClick={() => setPlan("standard")}
                          >
                            Standard
                          </Button>
                          <Button
                            variant={plan === "professional" ? "default" : "outline"}
                            className="w-full"
                            onClick={() => setPlan("professional")}
                          >
                            Professional
                          </Button>
                          <Button
                            variant={plan === "enterprise" ? "default" : "outline"}
                            className="w-full"
                            onClick={() => setPlan("enterprise")}
                          >
                            Enterprise
                          </Button>
                        </div>
                      </div>

                      {/* Number of Websites */}
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <label className="text-sm font-medium">Number of Websites</label>
                          <span className="text-sm text-gray-500">{websites}</span>
                        </div>
                        <Slider
                          value={[websites]}
                          min={1}
                          max={20}
                          step={1}
                          onValueChange={(value) => setWebsites(value[0])}
                        />
                      </div>

                      {/* Monthly Traffic */}
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <label className="text-sm font-medium">Monthly Traffic (GB)</label>
                          <span className="text-sm text-gray-500">{traffic} GB</span>
                        </div>
                        <Slider
                          value={[traffic]}
                          min={50}
                          max={5000}
                          step={50}
                          onValueChange={(value) => setTraffic(value[0])}
                        />
                      </div>

                      {/* Add-on Features */}
                      <div className="space-y-4">
                        <label className="text-sm font-medium">Add-on Features</label>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <div className="text-sm">API Protection</div>
                              <div className="text-xs text-gray-500">Advanced API security and schema validation</div>
                            </div>
                            <Switch checked={apiProtection} onCheckedChange={setApiProtection} />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <div className="text-sm">Bot Protection</div>
                              <div className="text-xs text-gray-500">
                                Advanced bot detection and mitigation capabilities
                              </div>
                            </div>
                            <Switch checked={botProtection} onCheckedChange={setBotProtection} />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <div className="text-sm">DDoS Protection</div>
                              <div className="text-xs text-gray-500">
                                Enhanced protection against distributed denial of service attacks
                              </div>
                            </div>
                            <Switch checked={ddosProtection} onCheckedChange={setDdosProtection} />
                          </div>
                        </div>
                      </div>

                      {/* Data Region */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Data Region</label>
                        <Select value={dataRegion} onValueChange={setDataRegion}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select data region" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="eu">European Union</SelectItem>
                            <SelectItem value="asia">Asia Pacific</SelectItem>
                            <SelectItem value="global">Global (Multi-region)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Support Level */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Support Level</label>
                        <Select value={supportLevel} onValueChange={setSupportLevel}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select support level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="standard">Standard Support (Business Hours)</SelectItem>
                            <SelectItem value="premium">Premium Support (24/7)</SelectItem>
                            <SelectItem value="dedicated">Dedicated Support (24/7 + Dedicated Engineer)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="sticky top-20">
                    <CardHeader>
                      <CardTitle>Estimated Price</CardTitle>
                      <CardDescription>Based on your selected configuration</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold">${monthlyPrice}</div>
                        <div className="text-sm text-gray-500">per month</div>
                        <div className="mt-2 text-sm text-gray-500">
                          ${totalPrice} billed annually (save{" "}
                          {Math.round(((monthlyPrice * 12 - totalPrice) / (monthlyPrice * 12)) * 100)}%)
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-sm font-medium">Your Plan Includes:</div>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>
                              {websites} protected website{websites > 1 ? "s" : ""}
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>{traffic} GB monthly traffic</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>{plan.charAt(0).toUpperCase() + plan.slice(1)} plan features</span>
                          </li>
                          {apiProtection && (
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span>API Protection</span>
                            </li>
                          )}
                          {botProtection && (
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span>Bot Protection</span>
                            </li>
                          )}
                          {ddosProtection && (
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span>DDoS Protection</span>
                            </li>
                          )}
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>
                              {supportLevel === "standard"
                                ? "Standard Support"
                                : supportLevel === "premium"
                                  ? "Premium 24/7 Support"
                                  : "Dedicated Support"}
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>
                              {dataRegion === "us"
                                ? "US Region"
                                : dataRegion === "eu"
                                  ? "EU Region"
                                  : dataRegion === "asia"
                                    ? "Asia Pacific Region"
                                    : "Global Multi-region"}
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <Button className="w-full">Get Started</Button>
                        <div className="grid grid-cols-2 gap-3">
                          <Button variant="outline" size="sm" className="w-full">
                            <Download className="h-4 w-4 mr-2" />
                            <span>Save Quote</span>
                          </Button>
                          <Link href="/contact">
                            <Button variant="outline" size="sm" className="w-full">
                              <Mail className="h-4 w-4 mr-2" />
                              <span>Contact Sales</span>
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="comparison" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Plan Comparison</CardTitle>
                  <CardDescription>Compare features across our different plans</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="text-left py-3 px-4">Feature</th>
                          <th className="text-center py-3 px-4">Standard</th>
                          <th className="text-center py-3 px-4">Professional</th>
                          <th className="text-center py-3 px-4">Enterprise</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 font-medium">Base Price</td>
                          <td className="text-center py-3 px-4">$99/mo</td>
                          <td className="text-center py-3 px-4">$299/mo</td>
                          <td className="text-center py-3 px-4">$999/mo</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 font-medium">Included Traffic</td>
                          <td className="text-center py-3 px-4">100 GB</td>
                          <td className="text-center py-3 px-4">100 GB</td>
                          <td className="text-center py-3 px-4">100 GB</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 font-medium">Additional Traffic</td>
                          <td className="text-center py-3 px-4">$0.15/GB</td>
                          <td className="text-center py-3 px-4">$0.12/GB</td>
                          <td className="text-center py-3 px-4">$0.08/GB</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 font-medium">Included Websites</td>
                          <td className="text-center py-3 px-4">1</td>
                          <td className="text-center py-3 px-4">1</td>
                          <td className="text-center py-3 px-4">1</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 font-medium">Additional Websites</td>
                          <td className="text-center py-3 px-4">$20/site</td>
                          <td className="text-center py-3 px-4">$15/site</td>
                          <td className="text-center py-3 px-4">$10/site</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 font-medium">API Protection</td>
                          <td className="text-center py-3 px-4">+$50/mo</td>
                          <td className="text-center py-3 px-4">+$40/mo</td>
                          <td className="text-center py-3 px-4">+$30/mo</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 font-medium">Bot Protection</td>
                          <td className="text-center py-3 px-4">+$75/mo</td>
                          <td className="text-center py-3 px-4">+$60/mo</td>
                          <td className="text-center py-3 px-4">+$45/mo</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 font-medium">DDoS Protection</td>
                          <td className="text-center py-3 px-4">+$100/mo</td>
                          <td className="text-center py-3 px-4">+$80/mo</td>
                          <td className="text-center py-3 px-4">+$60/mo</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 font-medium">Premium Support (24/7)</td>
                          <td className="text-center py-3 px-4">+10%</td>
                          <td className="text-center py-3 px-4">+10%</td>
                          <td className="text-center py-3 px-4">+10%</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 font-medium">Dedicated Support</td>
                          <td className="text-center py-3 px-4">+20%</td>
                          <td className="text-center py-3 px-4">+20%</td>
                          <td className="text-center py-3 px-4">+20%</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 font-medium">EU Region</td>
                          <td className="text-center py-3 px-4">+5%</td>
                          <td className="text-center py-3 px-4">+5%</td>
                          <td className="text-center py-3 px-4">+5%</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 font-medium">Asia Pacific Region</td>
                          <td className="text-center py-3 px-4">+8%</td>
                          <td className="text-center py-3 px-4">+8%</td>
                          <td className="text-center py-3 px-4">+8%</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">Global Multi-region</td>
                          <td className="text-center py-3 px-4">+15%</td>
                          <td className="text-center py-3 px-4">+15%</td>
                          <td className="text-center py-3 px-4">+15%</td>
                        </tr>
                      </tbody>
                    </table>
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
