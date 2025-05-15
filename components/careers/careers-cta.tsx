import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CareersCta() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See the Right Fit?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future
            opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#positions">
              <Button size="lg" className="w-full sm:w-auto">
                View Open Positions
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Contact Recruiting
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
