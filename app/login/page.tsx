import type { Metadata } from "next"
import { LoginForm } from "@/components/auth/login-form"
import { generateSeoMetadata } from "@/components/seo-optimization"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = generateSeoMetadata({
  title: "Log In - FGuard",
  description: "Log in to your FGuard account to manage your web application security",
  keywords: ["login", "sign in", "account access", "WAF login"],
  path: "/login",
})

export default function LoginPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center py-12">
      <div className="w-full max-w-md px-4">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
          <p className="text-muted-foreground">Log in to your FGuard account to manage your security settings</p>
        </div>

        <LoginForm />

        <div className="mt-6 text-center text-sm">
          <p className="text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
