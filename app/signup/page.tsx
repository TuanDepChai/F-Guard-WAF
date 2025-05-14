import type { Metadata } from "next"
import { SignupForm } from "@/components/auth/signup-form"
import { generateSeoMetadata } from "@/components/seo-optimization"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = generateSeoMetadata({
  title: "Sign Up - FGuard",
  description: "Create your FGuard account to start protecting your web applications",
  keywords: ["signup", "register", "create account", "WAF account"],
  path: "/signup",
})

export default function SignupPage() {
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
          <h1 className="text-3xl font-bold mb-2">Create your account</h1>
          <p className="text-muted-foreground">Sign up to start protecting your web applications with FGuard WAF</p>
        </div>

        <SignupForm />

        <div className="mt-6 text-center text-sm">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline font-medium">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
