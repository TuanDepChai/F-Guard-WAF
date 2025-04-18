"use client"

import { motion } from "framer-motion"
import { Building, Users, Globe, Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EnterpriseSection() {
  return (
    <section id="enterprise" className="py-20 bg-white dark:bg-slate-950">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
              <Building className="mr-1 h-4 w-4" />
              <span>Giải pháp doanh nghiệp</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Giải pháp bảo mật tùy chỉnh cho doanh nghiệp
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                FGuard cung cấp giải pháp bảo mật tùy chỉnh đáp ứng nhu cầu cụ thể của doanh nghiệp bạn, bất kể quy mô
                hay ngành nghề.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Đội ngũ chuyên gia</h3>
                  <p className="text-muted-foreground">
                    Đội ngũ chuyên gia bảo mật với nhiều năm kinh nghiệm sẽ tư vấn và triển khai giải pháp phù hợp nhất.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Bảo vệ toàn cầu</h3>
                  <p className="text-muted-foreground">
                    Hệ thống máy chủ toàn cầu giúp bảo vệ website của bạn khỏi các cuộc tấn công từ mọi nơi trên thế
                    giới.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Tuân thủ quy định</h3>
                  <p className="text-muted-foreground">
                    Đảm bảo website của bạn tuân thủ các quy định bảo mật và quyền riêng tư như GDPR, PCI DSS, và ISO
                    27001.
                  </p>
                </div>
              </div>
            </div>
            <Button className="gap-1 bg-gradient-to-r from-primary to-blue-700 hover:from-primary/90 hover:to-blue-700/90">
              Liên hệ tư vấn
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="grid gap-4">
                <div className="rounded-lg bg-slate-100 dark:bg-slate-800 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold mb-2">Bảo vệ tài sản số</h3>
                  <p className="text-muted-foreground">
                    Bảo vệ dữ liệu và tài sản số của doanh nghiệp khỏi các mối đe dọa mạng.
                  </p>
                </div>
                <div className="rounded-lg bg-slate-100 dark:bg-slate-800 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold mb-2">Giảm thiểu rủi ro</h3>
                  <p className="text-muted-foreground">
                    Giảm thiểu rủi ro bảo mật và ngăn chặn các cuộc tấn công trước khi xảy ra.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-lg bg-slate-100 dark:bg-slate-800 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold mb-2">Tối ưu chi phí</h3>
                  <p className="text-muted-foreground">
                    Giải pháp bảo mật hiệu quả với chi phí hợp lý cho doanh nghiệp.
                  </p>
                </div>
                <div className="rounded-lg bg-slate-100 dark:bg-slate-800 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold mb-2">Hỗ trợ 24/7</h3>
                  <p className="text-muted-foreground">Đội ngũ hỗ trợ kỹ thuật 24/7 sẵn sàng giải quyết mọi vấn đề.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
