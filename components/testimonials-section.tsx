"use client"

import { motion } from "framer-motion"
import { Shield, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Nguyễn Văn A",
      role: "CEO, Tech Solutions",
      content:
        "FGuard đã giúp chúng tôi bảo vệ website khỏi hàng nghìn cuộc tấn công mỗi tháng. Dịch vụ hỗ trợ khách hàng tuyệt vời và dashboard rất dễ sử dụng.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
    },
    {
      name: "Trần Thị B",
      role: "CTO, E-commerce Platform",
      content:
        "Chúng tôi đã thử nhiều giải pháp WAF khác nhau, nhưng FGuard là giải pháp tốt nhất với chi phí hợp lý. Tôi đặc biệt ấn tượng với khả năng phát hiện và ngăn chặn các cuộc tấn công SQL Injection.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
    },
    {
      name: "Lê Văn C",
      role: "IT Manager, Financial Services",
      content:
        "Bảo mật là ưu tiên hàng đầu trong ngành tài chính. FGuard đã giúp chúng tôi tuân thủ các quy định bảo mật và bảo vệ dữ liệu khách hàng một cách hiệu quả.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
    },
    {
      name: "Phạm Thị D",
      role: "Developer, Startup",
      content:
        "Tôi rất hài lòng với FGuard. Việc triển khai rất đơn giản và tôi có thể tập trung vào phát triển sản phẩm mà không phải lo lắng về các vấn đề bảo mật.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-slate-950">
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
              <span>Khách hàng tin dùng</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Khách hàng nói gì về FGuard?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Hàng nghìn khách hàng đã tin tưởng FGuard để bảo vệ website của họ
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex space-x-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mb-4 text-muted-foreground">{testimonial.content}</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 bg-slate-100 dark:bg-slate-800 rounded-lg p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div className="flex space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2">Được tin dùng bởi hơn 5,000+ khách hàng</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Từ các doanh nghiệp nhỏ đến các tập đoàn lớn, FGuard bảo vệ hàng nghìn website trên toàn thế giới khỏi các
            mối đe dọa trực tuyến.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
