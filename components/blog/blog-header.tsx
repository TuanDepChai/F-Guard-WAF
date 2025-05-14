import { Badge } from "@/components/ui/badge"
import { serverGetTranslation } from "@/lib/i18n/server"

export function BlogHeader() {
  const t = serverGetTranslation()

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <Badge variant="outline" className="mb-4">
          {t("blog.badge") || "Security Insights"}
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("blog.title") || "FGuard Security Blog"}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t("blog.description") ||
            "Stay updated with the latest security trends, threats, and best practices to keep your web applications safe."}
        </p>
      </div>
    </section>
  )
}
