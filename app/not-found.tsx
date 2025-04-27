import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, AlertTriangle } from "lucide-react"
import { getTranslation } from "@/lib/i18n/server"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="mb-8 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <Shield className="h-64 w-64 text-primary" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="h-12 w-12 text-amber-500 mr-4" />
            <h1 className="text-6xl font-bold">404</h1>
          </div>
          <h2 className="text-3xl font-semibold mb-6">{getTranslation("notFound.title")}</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">{getTranslation("notFound.message")}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="px-8">
          <Link href="/">{getTranslation("notFound.returnHome")}</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/documentation">{getTranslation("notFound.viewDocs")}</Link>
        </Button>
      </div>
    </div>
  )
}
