import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PortalPreviewDashboard() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Interactive Dashboard</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Explore the intuitive dashboard interface designed for security professionals
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="threats">Threat Analysis</TabsTrigger>
              <TabsTrigger value="rules">Rule Management</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold">Security Overview Dashboard</h3>
                </div>
                <div className="relative aspect-video">
                  <Image
                    src="/images/barracuda-dashboard.png"
                    alt="Barracuda WAF Dashboard"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    The overview dashboard provides a comprehensive view of your security posture, including active
                    threats, blocked attacks, and security events across all protected applications.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="threats" className="mt-6">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold">Threat Analysis Dashboard</h3>
                </div>
                <div className="relative aspect-video">
                  <Image
                    src="/images/barracuda-dashboard.png"
                    alt="Barracuda WAF Threat Analysis"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    The threat analysis dashboard provides detailed insights into attack patterns, threat sources, and
                    vulnerability exploits with advanced filtering and investigation tools.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="rules" className="mt-6">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold">Rule Management Interface</h3>
                </div>
                <div className="relative aspect-video">
                  <Image
                    src="/images/barracuda-dashboard.png"
                    alt="Barracuda WAF Rule Management"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    The rule management interface allows you to create, test, and deploy custom security rules with an
                    intuitive visual builder and real-time validation.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reports" className="mt-6">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold">Security Reports</h3>
                </div>
                <div className="relative aspect-video">
                  <Image
                    src="/images/barracuda-dashboard.png"
                    alt="Barracuda WAF Security Reports"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    The reporting interface provides customizable reports for security metrics, compliance requirements,
                    and executive summaries with export options.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
