import { LoginForm } from "@/components/auth/login-form"
import { ThemeProvider } from "@/components/theme-provider"

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
          <LoginForm />
        </div>
      </main>
    </ThemeProvider>
  )
}
