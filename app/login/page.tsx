import type { Metadata } from "next"
import { LoginForm } from "@/components/auth/login-form"
import { generateSeoMetadata } from "@/components/seo-optimization"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield } from "lucide-react"
import { Toaster } from "sonner"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = generateSeoMetadata({
  title: "Log In - FGuard",
  description: "Log in to your FGuard account to manage your web application security",
  keywords: ["login", "sign in", "account access", "WAF login"],
  path: "/login",
})

export default function LoginPage() {
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
          <div className="mb-8 text-center">
            <Link href="/">
              <Button 
                variant="ghost" 
                size="sm" 
                className="mb-4 hover:bg-background/80 transition-colors button-effect spotlight scale-effect"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-primary animate-float neon-effect scale-effect" />
            </div>
            <h1 className="text-4xl font-bold mb-2 text-gradient-animate neon-effect">
              Welcome back
            </h1>
            <p className="text-muted-foreground text-lg">
              Log in to your FGuard account to manage your security settings
            </p>
          </div>

          <div className="glass-effect rounded-lg shadow-2xl border border-border/50 card-hover transform-3d interactive">
            <LoginForm />
          </div>

          <div className="mt-6 text-center text-sm">
            <p className="text-muted-foreground">
              Don't have an account?{" "}
              <Link 
                href="/signup" 
                className="text-primary hover:text-primary/80 font-medium transition-colors hover-lift animated-underline scale-effect"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
        <Toaster position="top-right" />
      </main>
    </ThemeProvider>
  )
}
