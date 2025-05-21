"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

const items = [
  {
    title: "Trang chủ",
    href: "/",
  },
  {
    title: "Tính năng",
    href: "/features",
  },
  {
    title: "Bảng giá",
    href: "/pricing",
  },
  {
    title: "Tài liệu",
    href: "/docs",
  },
  {
    title: "Blog",
    href: "/blog",
  },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-6 lg:space-x-8">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
} 