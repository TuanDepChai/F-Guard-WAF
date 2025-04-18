import { ArrowRight, Shield, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
              <ShieldCheck className="mr-1 h-4 w-4" />
              <span>Bảo vệ website của bạn 24/7</span>
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                FGuard Web Application Firewall
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Giải pháp bảo mật toàn diện bảo vệ website của bạn khỏi các cuộc tấn công mạng và các mối đe dọa trực
                tuyến.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="gap-1">
                Bắt đầu ngay
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Tìm hiểu thêm
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-primary" />
                <span>Bảo vệ DDoS</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-primary" />
                <span>Chống SQL Injection</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-primary" />
                <span>Chống XSS</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative bg-slate-900 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 rounded-xl shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Shield className="h-8 w-8 text-primary" />
                    <span className="text-xl font-bold text-white">FGuard Dashboard</span>
                  </div>
                  <div className="bg-green-500 px-2 py-1 rounded-full text-xs text-white">Hoạt động</div>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-800 dark:bg-slate-700 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">Tổng số tấn công đã chặn</span>
                      <span className="text-primary font-bold">1,245</span>
                    </div>
                    <div className="h-2 bg-slate-700 dark:bg-slate-600 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-3/4 rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-slate-800 dark:bg-slate-700 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">Thời gian hoạt động</span>
                      <span className="text-primary font-bold">99.9%</span>
                    </div>
                    <div className="h-2 bg-slate-700 dark:bg-slate-600 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[99%] rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-slate-800 dark:bg-slate-700 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">Tình trạng bảo mật</span>
                      <span className="text-green-500 font-bold">An toàn</span>
                    </div>
                    <div className="h-2 bg-slate-700 dark:bg-slate-600 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-full rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
