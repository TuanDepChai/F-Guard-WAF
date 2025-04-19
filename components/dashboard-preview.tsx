"use client"

import { motion } from "framer-motion"
import { Shield, AlertTriangle, Users, Globe, Lock, Server } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPreview() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
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
              <span>Enterprise Security Dashboard</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Comprehensive Security Visibility
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Our intuitive security dashboard provides real-time insights into your application security posture
            </p>
          </div>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="threats">Threats</TabsTrigger>
              <TabsTrigger value="traffic">Traffic</TabsTrigger>
              <TabsTrigger value="settings" className="hidden lg:block">
                Settings
              </TabsTrigger>
              <TabsTrigger value="reports" className="hidden lg:block">
                Reports
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-0">
              <div className="bg-slate-900 dark:bg-slate-800 border border-slate-200/10 dark:border-slate-700 p-6 rounded-xl shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Shield className="h-8 w-8 text-primary" />
                    <span className="text-xl font-bold text-white">FGuard Dashboard</span>
                  </div>
                  <div className="bg-green-500 px-2 py-1 rounded-full text-xs text-white flex items-center gap-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    Active
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-800/80 dark:bg-slate-700/80 p-4 rounded-lg backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="rounded-full bg-primary/20 p-2">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-400">Attacks Blocked</div>
                        <div className="text-2xl font-bold text-white">1,245</div>
                      </div>
                    </div>
                    <div className="h-2 bg-slate-700 dark:bg-slate-600 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-3/4 rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-slate-800/80 dark:bg-slate-700/80 p-4 rounded-lg backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="rounded-full bg-green-500/20 p-2">
                        <Users className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-400">Legitimate Users</div>
                        <div className="text-2xl font-bold text-white">8,392</div>
                      </div>
                    </div>
                    <div className="h-2 bg-slate-700 dark:bg-slate-600 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-[85%] rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-slate-800/80 dark:bg-slate-700/80 p-4 rounded-lg backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="rounded-full bg-yellow-500/20 p-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-400">Alerts</div>
                        <div className="text-2xl font-bold text-white">12</div>
                      </div>
                    </div>
                    <div className="h-2 bg-slate-700 dark:bg-slate-600 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 w-[15%] rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800/80 dark:bg-slate-700/80 p-4 rounded-lg backdrop-blur-sm">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-white font-medium">Attack Types</span>
                      <span className="text-xs text-slate-400">Last 7 days</span>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-slate-400">SQL Injection</span>
                          <span className="text-sm text-white">42%</span>
                        </div>
                        <div className="h-2 bg-slate-700 dark:bg-slate-600 rounded-full overflow-hidden">
                          <div className="h-full bg-red-500 w-[42%] rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-slate-400">XSS</span>
                          <span className="text-sm text-white">28%</span>
                        </div>
                        <div className="h-2 bg-slate-700 dark:bg-slate-600 rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-500 w-[28%] rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-slate-400">DDoS</span>
                          <span className="text-sm text-white">18%</span>
                        </div>
                        <div className="h-2 bg-slate-700 dark:bg-slate-600 rounded-full overflow-hidden">
                          <div className="h-full bg-orange-500 w-[18%] rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-slate-400">Other</span>
                          <span className="text-sm text-white">12%</span>
                        </div>
                        <div className="h-2 bg-slate-700 dark:bg-slate-600 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 w-[12%] rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-800/80 dark:bg-slate-700/80 p-4 rounded-lg backdrop-blur-sm">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-white font-medium">Recent Activity</span>
                      <span className="text-xs text-slate-400">Today</span>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="flex-1">
                          <div className="text-sm text-white">SQL Injection Blocked</div>
                          <div className="text-xs text-slate-400">10:45 AM</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="flex-1">
                          <div className="text-sm text-white">Malicious Bot Detected</div>
                          <div className="text-xs text-slate-400">09:32 AM</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="flex-1">
                          <div className="text-sm text-white">XSS Attack Blocked</div>
                          <div className="text-xs text-slate-400">08:17 AM</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="flex-1">
                          <div className="text-sm text-white">Security Rules Updated</div>
                          <div className="text-xs text-slate-400">07:05 AM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/80 dark:bg-slate-700/80 p-4 rounded-lg backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white font-medium">Traffic by Region</span>
                    <span className="text-xs text-slate-400">Last 24 hours</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="text-sm text-slate-400 mb-1">Asia</div>
                      <div className="text-xl font-bold text-white">42%</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-sm text-slate-400 mb-1">Europe</div>
                      <div className="text-xl font-bold text-white">28%</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-sm text-slate-400 mb-1">North America</div>
                      <div className="text-xl font-bold text-white">18%</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-sm text-slate-400 mb-1">Other</div>
                      <div className="text-xl font-bold text-white">12%</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="threats" className="mt-0">
              <div className="bg-slate-900 dark:bg-slate-800 border border-slate-200/10 dark:border-slate-700 p-6 rounded-xl shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-8 w-8 text-yellow-500" />
                    <span className="text-xl font-bold text-white">Threat Management</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-800/80 dark:bg-slate-700/80 p-4 rounded-lg backdrop-blur-sm">
                    <div className="text-white font-medium mb-3">Detected Threats</div>
                    <div className="space-y-3">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="bg-slate-700/50 p-3 rounded-md">
                          <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-red-500"></div>
                              <span className="text-white font-medium">SQL Injection #{item}</span>
                            </div>
                            <span className="text-xs text-slate-400">10:4{item} AM</span>
                          </div>
                          <p className="text-sm text-slate-400 mb-2">
                            SQL Injection attempt detected from IP 192.168.1.{item}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs px-2 py-1 bg-red-500/20 text-red-500 rounded-full">
                              High Level
                            </span>
                            <span className="text-xs text-primary">View Details</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="traffic" className="mt-0">
              <div className="bg-slate-900 dark:bg-slate-800 border border-slate-200/10 dark:border-slate-700 p-6 rounded-xl shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Globe className="h-8 w-8 text-blue-500" />
                    <span className="text-xl font-bold text-white">Traffic Analysis</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-800/80 dark:bg-slate-700/80 p-4 rounded-lg backdrop-blur-sm">
                    <div className="text-white font-medium mb-3">Traffic Over Time</div>
                    <div className="h-40 bg-slate-700/50 rounded-md flex items-end p-4 gap-2">
                      {[30, 45, 25, 60, 35, 50, 70, 40, 55, 65, 75, 45].map((height, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center gap-1">
                          <div className="w-full bg-primary rounded-sm" style={{ height: `${height}%` }}></div>
                          <span className="text-xs text-slate-400">{index + 1}h</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="settings" className="mt-0">
              <div className="bg-slate-900 dark:bg-slate-800 border border-slate-200/10 dark:border-slate-700 p-6 rounded-xl shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Lock className="h-8 w-8 text-green-500" />
                    <span className="text-xl font-bold text-white">Security Settings</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-800/80 dark:bg-slate-700/80 p-4 rounded-lg backdrop-blur-sm">
                    <div className="text-white font-medium mb-3">Security Settings</div>
                    <div className="space-y-3">
                      {["SQL Injection Protection", "XSS Protection", "DDoS Protection", "API Protection"].map(
                        (item, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-slate-700/50 rounded-md">
                            <span className="text-white">{item}</span>
                            <div className="w-12 h-6 bg-primary/20 rounded-full relative">
                              <div className="absolute inset-y-1 left-1 w-4 h-4 bg-primary rounded-full"></div>
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reports" className="mt-0">
              <div className="bg-slate-900 dark:bg-slate-800 border border-slate-200/10 dark:border-slate-700 p-6 rounded-xl shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Server className="h-8 w-8 text-purple-500" />
                    <span className="text-xl font-bold text-white">Reports</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-800/80 dark:bg-slate-700/80 p-4 rounded-lg backdrop-blur-sm">
                    <div className="text-white font-medium mb-3">Recent Reports</div>
                    <div className="space-y-3">
                      {["Weekly Report", "Attack Report", "Performance Report", "Security Report"].map(
                        (item, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-slate-700/50 rounded-md">
                            <span className="text-white">{item}</span>
                            <span className="text-xs text-primary">Download</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
