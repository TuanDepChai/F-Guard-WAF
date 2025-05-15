import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutCta() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            We're always looking for talented individuals who are passionate about cybersecurity and want to make a
            difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/careers">
              <Button size="lg" className="w-full sm:w-auto">
                View Open Positions
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
