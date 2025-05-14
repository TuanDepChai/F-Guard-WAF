import { Badge } from "@/components/ui/badge"
import { serverGetTranslation } from "@/lib/i18n/server"

export function DemoHeader() {
  const t = serverGetTranslation()

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <Badge variant="outline" className="mb-4">
          {t("demo.badge") || "Interactive Experience"}
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("demo.title") || "See FGuard WAF in Action"}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t("demo.description") ||
            "Experience how our Web Application Firewall protects your applications from real-world attacks in this interactive demo."}
        </p>
      </div>
    </section>
  )
}
