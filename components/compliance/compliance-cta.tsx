import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"

export default function ComplianceCta() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Compliance Information?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Download our detailed compliance documentation or speak with our security experts
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              <span>Download Compliance Whitepaper</span>
            </Button>
            <Link href="/contact">
              <Button variant="outline" className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                <span>Request Compliance Documentation</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
