"use client"

import { motion } from "framer-motion"
import { Shield, Lock, BarChart, AlertTriangle, Zap, Clock, Server, RefreshCw } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Bảo vệ DDoS",
      description:
        "Ngăn chặn các cuộc tấn công từ chối dịch vụ phân tán (DDoS) bằng cách lọc lưu lượng độc hại và phân phối lưu lượng truy cập đến máy chủ của bạn.",
    },
    {
      icon: <Lock className="h-6 w-6 text-primary" />,
      title: "Chống SQL Injection",
      description:
        "Bảo vệ cơ sở dữ liệu của bạn khỏi các cuộc tấn công SQL Injection nhằm đánh cắp hoặc phá hoại dữ liệu với hệ thống phát hiện và ngăn chặn thông minh.",
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-primary" />,
      title: "Chống XSS",
      description:
        "Ngăn chặn các cuộc tấn công Cross-Site Scripting (XSS) nhằm đánh cắp thông tin người dùng và bảo vệ khách hàng của bạn khỏi mã độc.",
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "Phân tích thời gian thực",
      description:
        "Theo dõi và phân tích lưu lượng truy cập website của bạn theo thời gian thực để phát hiện các mối đe dọa và hành vi bất thường.",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Tối ưu hiệu suất",
      description:
        "Tăng tốc website của bạn với CDN tích hợp và các tính năng tối ưu hóa hiệu suất, giúp trang web của bạn luôn nhanh chóng và ổn định.",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Giám sát 24/7",
      description:
        "Đội ngũ chuyên gia bảo mật giám sát hệ thống 24/7 để đảm bảo website của bạn luôn được bảo vệ khỏi các mối đe dọa mới nhất.",
    },
    {
      icon: <Server className="h-6 w-6 text-primary" />,
      title: "Bảo vệ API",
      description:
        "Bảo vệ các API của bạn khỏi các cuộc tấn công và lạm dụng với các quy tắc bảo mật tùy chỉnh và hệ thống phát hiện bất thường.",
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-primary" />,
      title: "Cập nhật liên tục",
      description:
        "Hệ thống tự động cập nhật các quy tắc bảo mật để đối phó với các mối đe dọa mới nhất, đảm bảo bạn luôn được bảo vệ tối đa.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white dark:bg-slate-950">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
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
        </motion.div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="rounded-full bg-primary/10 p-3">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
