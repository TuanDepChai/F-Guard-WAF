import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const categories = [
  { name: "Security", count: 12 },
  { name: "Threats", count: 8 },
  { name: "Best Practices", count: 15 },
  { name: "Research", count: 6 },
  { name: "Industry News", count: 9 },
  { name: "Tutorials", count: 7 },
]

export function BlogCategories() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name} className="flex justify-between items-center">
              <Link
                href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {category.name}
              </Link>
              <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
