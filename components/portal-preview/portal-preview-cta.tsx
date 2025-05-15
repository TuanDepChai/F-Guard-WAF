import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PortalPreviewCta() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience FGuard?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Get hands-on with our powerful security platform through a personalized demo or free trial
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo">
              <Button size="lg" className="w-full sm:w-auto">
                Schedule Demo
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
