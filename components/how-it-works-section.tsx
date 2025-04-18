"use client"

import { motion } from "framer-motion"
import { Shield, ArrowRight, Filter, AlertTriangle, CheckCircle } from "lucide-react"

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <Filter className="h-6 w-6 text-white" />,
      title: "Lọc lưu lượng",
      description:
        "Tất cả lưu lượng truy cập đến website của bạn đều được chuyển qua hệ thống WAF của FGuard để kiểm tra và lọc.",
      color: "bg-blue-600",
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-white" />,
      title: "Phát hiện mối đe dọa",
      description:
        "Hệ thống phân tích lưu lượng truy cập theo thời gian thực để phát hiện các mẫu tấn công và hành vi bất thường.",
      color: "bg-yellow-600",
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Chặn tấn công",
      description:
        "Các cuộc tấn công và lưu lượng độc hại được chặn tự động, trong khi người dùng hợp pháp vẫn có thể truy cập bình thường.",
      color: "bg-red-600",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-white" />,
      title: "Bảo vệ liên tục",
      description:
        "Hệ thống liên tục cập nhật các quy tắc bảo mật để đối phó với các mối đe dọa mới nhất và bảo vệ website của bạn 24/7.",
      color: "bg-green-600",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
              <Shield className="mr-1 h-4 w-4" />
              <span>Cách thức hoạt động</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              FGuard WAF bảo vệ website của bạn như thế nào?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Hiểu rõ quy trình bảo vệ website của bạn với Web Application Firewall của FGuard
            </p>
          </div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={`order-${index % 2 === 0 ? 1 : 2} md:text-${index % 2 === 0 ? "right" : "left"}`}>
                    <div className="space-y-3">
                      <div className={`inline-flex items-center justify-center rounded-full ${step.color} p-3`}>
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  <div
                    className={`order-${index % 2 === 0 ? 2 : 1} bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border`}
                  >
                    <div className="aspect-video bg-slate-100 dark:bg-slate-700 rounded-md flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className={`inline-flex items-center justify-center rounded-full ${step.color} p-3 mb-3`}>
                          {step.icon}
                        </div>
                        <h4 className="font-medium">Bước {index + 1}</h4>
                        <p className="text-sm text-muted-foreground">{step.title}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector arrow */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4 hidden md:flex">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
