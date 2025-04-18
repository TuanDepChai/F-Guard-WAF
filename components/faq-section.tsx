"use client"

import { motion } from "framer-motion"
import { Shield } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  const faqs = [
    {
      question: "Web Application Firewall (WAF) là gì?",
      answer:
        "Web Application Firewall (WAF) là một giải pháp bảo mật giúp bảo vệ các ứng dụng web khỏi các cuộc tấn công như SQL Injection, Cross-Site Scripting (XSS), và các mối đe dọa khác. WAF hoạt động bằng cách lọc và giám sát lưu lượng HTTP giữa ứng dụng web và Internet, ngăn chặn các yêu cầu độc hại trước khi chúng đến được máy chủ của bạn.",
    },
    {
      question: "FGuard WAF bảo vệ website của tôi khỏi những mối đe dọa nào?",
      answer:
        "FGuard WAF bảo vệ website của bạn khỏi nhiều loại tấn công khác nhau, bao gồm: SQL Injection, Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), tấn công DDoS, tấn công brute force, file inclusion, command injection, và nhiều loại tấn công khác. Hệ thống của chúng tôi liên tục cập nhật để đối phó với các mối đe dọa mới nhất.",
    },
    {
      question: "Làm thế nào để triển khai FGuard WAF cho website của tôi?",
      answer:
        "Triển khai FGuard WAF rất đơn giản. Sau khi đăng ký, bạn chỉ cần thay đổi DNS của tên miền để trỏ về hệ thống của chúng tôi. Đội ngũ hỗ trợ kỹ thuật của chúng tôi sẽ hướng dẫn bạn qua từng bước của quá trình thiết lập. Toàn bộ quá trình thường chỉ mất vài phút và không yêu cầu bất kỳ thay đổi nào đối với mã nguồn website của bạn.",
    },
    {
      question: "FGuard có ảnh hưởng đến hiệu suất website của tôi không?",
      answer:
        "FGuard được thiết kế để tối ưu hóa hiệu suất. Thay vì làm chậm website, chúng tôi thực sự giúp cải thiện tốc độ tải trang thông qua CDN tích hợp và các tính năng tối ưu hóa. Hệ thống của chúng tôi được phân phối trên toàn cầu, đảm bảo thời gian phản hồi nhanh cho người dùng ở bất kỳ vị trí nào.",
    },
    {
      question: "Tôi có thể tùy chỉnh các quy tắc bảo mật không?",
      answer:
        "Có, FGuard cung cấp khả năng tùy chỉnh các quy tắc bảo mật để phù hợp với nhu cầu cụ thể của website bạn. Bạn có thể tạo các quy tắc tùy chỉnh, điều chỉnh mức độ bảo mật, và thiết lập các ngoại lệ cho các phần cụ thể của ứng dụng web. Dashboard quản trị trực quan giúp bạn dễ dàng quản lý tất cả các cài đặt bảo mật.",
    },
    {
      question: "FGuard có hỗ trợ HTTPS không?",
      answer:
        "Có, FGuard hỗ trợ đầy đủ HTTPS và tự động cung cấp chứng chỉ SSL miễn phí cho tất cả các website được bảo vệ. Chúng tôi đảm bảo mọi kết nối đều được mã hóa và an toàn, giúp bảo vệ dữ liệu của người dùng và cải thiện xếp hạng SEO của website bạn.",
    },
    {
      question: "Tôi có thể chuyển từ một nhà cung cấp WAF khác sang FGuard không?",
      answer:
        "Hoàn toàn có thể! Chúng tôi có quy trình chuyển đổi đơn giản và đội ngũ hỗ trợ sẽ giúp bạn chuyển từ nhà cung cấp WAF hiện tại sang FGuard một cách suôn sẻ, đảm bảo không có thời gian ngừng hoạt động. Chúng tôi cũng có thể nhập các quy tắc bảo mật tùy chỉnh từ hệ thống cũ của bạn.",
    },
    {
      question: "FGuard có cung cấp báo cáo và phân tích không?",
      answer:
        "Có, FGuard cung cấp báo cáo chi tiết và phân tích theo thời gian thực về lưu lượng truy cập, các cuộc tấn công đã bị chặn, và hiệu suất website. Bạn có thể xem các báo cáo này trên dashboard hoặc nhận báo cáo định kỳ qua email. Các báo cáo này giúp bạn hiểu rõ hơn về các mối đe dọa bảo mật và cách cải thiện bảo mật website.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-slate-50 dark:bg-slate-900">
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
              <span>Câu hỏi thường gặp</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Giải đáp thắc mắc của bạn</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Tìm hiểu thêm về FGuard WAF và cách chúng tôi có thể bảo vệ website của bạn
            </p>
          </div>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
