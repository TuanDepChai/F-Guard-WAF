import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TechnicalSpecsCta() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Applications?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Contact our technical team for a personalized consultation and detailed deployment plan
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">Schedule a Consultation</Button>
            </Link>
            <Link href="/documentation">
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
