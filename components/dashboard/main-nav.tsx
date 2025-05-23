"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {}

export function MainNav({ className, ...props }: MainNavProps) {
  const pathname = usePathname()

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/dashboard"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          pathname === "/dashboard"
            ? "bg-muted font-medium"
            : "hover:bg-transparent hover:underline",
          "justify-start"
        )}
      >
        Dashboard
      </Link>
      <Link
        href="/dashboard/analytics"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          pathname === "/dashboard/analytics"
            ? "bg-muted font-medium"
            : "hover:bg-transparent hover:underline",
          "justify-start"
        )}
      >
        Analytics
      </Link>
      <Link
        href="/dashboard/reports"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          pathname === "/dashboard/reports"
            ? "bg-muted font-medium"
            : "hover:bg-transparent hover:underline",
          "justify-start"
        )}
      >
        Reports
      </Link>
      <Link
        href="/dashboard/notifications"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          pathname === "/dashboard/notifications"
            ? "bg-muted font-medium"
            : "hover:bg-transparent hover:underline",
          "justify-start"
        )}
      >
        Notifications
      </Link>
    </nav>
  )
} 