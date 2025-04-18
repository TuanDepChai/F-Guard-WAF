"use client"

import { motion } from "framer-motion"
import { Check, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingSection() {
  const plans = [
    {
      name: "Cơ bản",
      description: "Dành cho website cá nhân và doanh nghiệp nhỏ",
      price: "199k",
      popular: false,
      features: [
        "Bảo vệ DDoS cơ bản",
        "Chống SQL Injection",
        "Chống XSS",
        "1 website",
        "100GB băng thông/tháng",
        "Hỗ trợ email",
      ],
    },
    {
      name: "Nâng cao",
      description: "Dành cho doanh nghiệp vừa và nhỏ",
      price: "499k",
      popular: true,
      features: [
        "Bảo vệ DDoS nâng cao",
        "Chống SQL Injection",
        "Chống XSS",
        "Bảo vệ API",
        "5 website",
        "500GB băng thông/tháng",
        "Hỗ trợ 24/7 qua email và chat",
        "Báo cáo bảo mật hàng tuần",
      ],
    },
    {
      name: "Doanh nghiệp",
      description: "Dành cho doanh nghiệp lớn",
      price: "999k",
      popular: false,
      features: [
        "Bảo vệ DDoS cao cấp",
        "Chống SQL Injection",
        "Chống XSS",
        "Bảo vệ API nâng cao",
        "20 website",
        "2TB băng thông/tháng",
        "Hỗ trợ 24/7 ưu tiên",
        "Báo cáo bảo mật hàng ngày",
        "Tư vấn bảo mật chuyên sâu",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-slate-50 dark:bg-slate-900">
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
              <span>Bảng giá linh hoạt</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Gói dịch vụ phù hợp với mọi nhu cầu
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Chọn gói dịch vụ phù hợp với nhu cầu bảo mật website của bạn
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card
                className={`flex flex-col h-full ${plan.popular ? "border-primary shadow-lg shadow-primary/10" : ""}`}
              >
                <CardHeader className="flex flex-col space-y-1.5">
                  {plan.popular && (
                    <div className="mx-auto rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-2">
                      Phổ biến nhất
                    </div>
                  )}
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/tháng</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-primary to-blue-700 hover:from-primary/90 hover:to-blue-700/90"
                        : ""
                    }`}
                  >
                    Đăng ký ngay
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
