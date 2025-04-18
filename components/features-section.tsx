import { Shield, Lock, BarChart, AlertTriangle, Zap, Clock, Server, RefreshCw } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-slate-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
              <Shield className="mr-1 h-4 w-4" />
              <span>Tính năng bảo mật hàng đầu</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Bảo vệ toàn diện với FGuard WAF
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              FGuard cung cấp giải pháp Web Application Firewall (WAF) toàn diện để bảo vệ website của bạn khỏi các mối
              đe dọa trực tuyến.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Bảo vệ DDoS</h3>
            <p className="text-center text-muted-foreground">
              Ngăn chặn các cuộc tấn công từ chối dịch vụ phân tán (DDoS) bằng cách lọc lưu lượng độc hại.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Chống SQL Injection</h3>
            <p className="text-center text-muted-foreground">
              Bảo vệ cơ sở dữ liệu của bạn khỏi các cuộc tấn công SQL Injection nhằm đánh cắp hoặc phá hoại dữ liệu.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <AlertTriangle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Chống XSS</h3>
            <p className="text-center text-muted-foreground">
              Ngăn chặn các cuộc tấn công Cross-Site Scripting (XSS) nhằm đánh cắp thông tin người dùng.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <BarChart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Phân tích thời gian thực</h3>
            <p className="text-center text-muted-foreground">
              Theo dõi và phân tích lưu lượng truy cập website của bạn theo thời gian thực để phát hiện các mối đe dọa.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Tối ưu hiệu suất</h3>
            <p className="text-center text-muted-foreground">
              Tăng tốc website của bạn với CDN tích hợp và các tính năng tối ưu hóa hiệu suất.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Giám sát 24/7</h3>
            <p className="text-center text-muted-foreground">
              Đội ngũ chuyên gia bảo mật giám sát hệ thống 24/7 để đảm bảo website của bạn luôn được bảo vệ.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Server className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Bảo vệ API</h3>
            <p className="text-center text-muted-foreground">
              Bảo vệ các API của bạn khỏi các cuộc tấn công và lạm dụng với các quy tắc bảo mật tùy chỉnh.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <RefreshCw className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Cập nhật liên tục</h3>
            <p className="text-center text-muted-foreground">
              Hệ thống tự động cập nhật các quy tắc bảo mật để đối phó với các mối đe dọa mới nhất.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm md:col-span-2 lg:col-span-1">
            <div className="rounded-full bg-primary/10 p-3">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Tuân thủ quy định</h3>
            <p className="text-center text-muted-foreground">
              Đáp ứng các tiêu chuẩn bảo mật và tuân thủ quy định như GDPR, PCI DSS, và ISO 27001.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
