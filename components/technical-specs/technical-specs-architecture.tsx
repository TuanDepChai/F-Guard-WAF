import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function TechnicalSpecsArchitecture() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">FGuard Architecture</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Our multi-layered security architecture provides comprehensive protection for your web applications
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="relative h-[500px] w-full">
                <Image
                  src="/images/waf-diagram.jpg"
                  alt="FGuard WAF Architecture Diagram"
                  fill
                  className="object-contain"
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Traffic Processing Layer</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Handles incoming traffic, performs initial filtering, and distributes requests across our global network
                for optimal performance.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Security Analysis Engine</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Core security component that analyzes requests using multiple detection methods including signature
                matching, behavioral analysis, and machine learning.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Management & Reporting</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Provides real-time visibility, detailed analytics, and centralized policy management across all
                protected applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
