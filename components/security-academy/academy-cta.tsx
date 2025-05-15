import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AcademyCta() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Security Journey Today</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Whether you're just starting out or looking to advance your security career, FGuard Academy has resources
            for every skill level
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#courses">
              <Button size="lg" className="w-full sm:w-auto">
                Browse Courses
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Contact Education Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
