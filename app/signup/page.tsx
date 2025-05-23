import type { Metadata } from "next"
import { RegisterForm } from "@/components/auth/register-form"
import { ThemeProvider } from "@/components/theme-provider"
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

export default function SignUpPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="min-h-screen flex flex-col items-center justify-center py-12 relative overflow-hidden bg-pattern">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        {/* Animated Circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-blob glow-effect morph-bg tilt-effect" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000 glow-effect morph-bg tilt-effect" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000 glow-effect morph-bg tilt-effect" />

        <div className="w-full max-w-md px-4 relative z-10">
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

          <RegisterForm />

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
    </ThemeProvider>
  )
}
