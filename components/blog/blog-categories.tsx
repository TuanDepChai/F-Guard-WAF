"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/lib/i18n"

const categories = [
  { name: "Security Threats", count: 12, slug: "security-threats" },
  { name: "Web Security", count: 8, slug: "web-security" },
  { name: "API Security", count: 6, slug: "api-security" },
  { name: "Best Practices", count: 9, slug: "best-practices" },
  { name: "Industry News", count: 5, slug: "industry-news" },
  { name: "Architecture", count: 4, slug: "architecture" },
  { name: "Compliance", count: 7, slug: "compliance" },
  { name: "Case Studies", count: 3, slug: "case-studies" },
]

export function BlogCategories() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("blog.categories") || "Categories"}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/blog/category/${category.slug}`}
              onClick={(e) => {
                e.preventDefault()
                setActiveCategory(category.slug === activeCategory ? null : category.slug)
              }}
            >
              <Badge variant={category.slug === activeCategory ? "default" : "outline"} className="cursor-pointer">
                {category.name} ({category.count})
              </Badge>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
