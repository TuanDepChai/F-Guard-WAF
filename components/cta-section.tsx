"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CtaSection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="rounded-full bg-primary/10 p-3 text-primary">
            <Shield className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Bảo vệ website của bạn ngay hôm nay
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed mx-auto">
              Đăng ký dùng thử miễn phí 14 ngày và trải nghiệm sự khác biệt với FGuard WAF
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <div className="flex space-x-2">
              <Input type="email" placeholder="Email của bạn" className="max-w-lg flex-1" />
              <Button className="gap-1 bg-gradient-to-r from-primary to-blue-700 hover:from-primary/90 hover:to-blue-700/90">
                Bắt đầu
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Bằng cách đăng ký, bạn đồng ý với{" "}
              <a href="#" className="underline underline-offset-2">
                Điều khoản dịch vụ
              </a>{" "}
              và{" "}
              <a href="#" className="underline underline-offset-2">
                Chính sách bảo mật
              </a>{" "}
              của chúng tôi.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
