import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PortalPreviewHero() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Customer Portal Experience</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Preview the powerful management dashboard and tools available to FGuard customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo">
              <Button size="lg" className="w-full sm:w-auto">
                Request Live Demo
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
