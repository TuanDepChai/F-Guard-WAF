import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AcademyHero() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">FGuard Security Academy</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Master web application security with our comprehensive training resources and certification programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#courses">
              <Button size="lg" className="w-full sm:w-auto">
                Explore Courses
              </Button>
            </Link>
            <Link href="#certification">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Get Certified
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
