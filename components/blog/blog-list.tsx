import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getSortedPostsData } from "@/lib/blog";

export function BlogList() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allPostsData.map((post) => (
          <Card key={post.slug} className="overflow-hidden h-full flex flex-col transition-shadow hover:shadow-lg">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative w-full h-48">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </Link>
            <CardContent className="p-6 flex flex-col flex-grow">
              <div className="flex items-center mb-2">
                <Badge variant="secondary" className="mr-2 text-sm">
                  {post.category}
                </Badge>
                <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
              </div>
              <Link href={`/blog/${post.slug}`} className="hover:underline flex-grow">
                <h3 className="text-xl font-bold mb-2 leading-tight">{post.title}</h3>
              </Link>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center mt-auto">
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 mr-2"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">{post.author}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors">
          Load More Articles
        </button>
      </div>
    </div>
  )
}
