"use client"

import { motion } from "framer-motion"
import { Shield, Star } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "David Chen",
      role: "CISO, Global Financial Services",
      content:
        "After evaluating multiple WAF solutions, we chose FGuard for its enterprise-grade protection capabilities. Their zero-day attack prevention has proven invaluable, blocking several sophisticated attacks that would have bypassed traditional security measures.",
      initials: "DC",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "VP of Information Security, E-commerce Enterprise",
      content:
        "FGuard's WAF solution has transformed our security posture. The advanced API protection features were crucial for securing our microservices architecture. Their virtual patching capability has reduced our vulnerability window to zero.",
      initials: "SJ",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "IT Director, Healthcare Organization",
      content:
        "In the healthcare sector, security and compliance are paramount. FGuard's WAF not only provides robust protection against OWASP Top 10 threats but also helps us maintain HIPAA compliance with comprehensive logging and reporting.",
      initials: "MR",
      rating: 5,
    },
    {
      name: "Jennifer Lee",
      role: "CTO, SaaS Platform Provider",
      content:
        "As a SaaS provider, we needed a WAF solution that could scale with our rapid growth while providing enterprise-level security. FGuard delivered beyond our expectations with their multi-tenant architecture, granular controls, and exceptional performance even under high traffic loads.",
      initials: "JL",
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
              <span>Enterprise Success Stories</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trusted by Security Leaders</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              See why enterprise security professionals choose our WAF solution for their critical applications
            </p>
          </div>
        </motion.div>

        {/* Featured testimonial with image */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-slate-800">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center">
              <div className="p-8 md:p-12 max-w-lg">
                <div className="flex space-x-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-white text-xl mb-6 italic">
                  "FGuard's enterprise WAF solution has been instrumental in protecting our global infrastructure. Their
                  security team's expertise and the platform's advanced capabilities have given us confidence in our web
                  application security posture."
                </p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4 border-2 border-white">
                    <AvatarFallback className="bg-primary text-white">JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-white">James Davidson</p>
                    <p className="text-white/80">Chief Information Security Officer, Global 500 Company</p>
                  </div>
                </div>
              </div>
            </div>
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
                      <AvatarFallback className="bg-primary/10 text-primary">{testimonial.initials}</AvatarFallback>
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
          <h3 className="text-2xl font-bold mb-2">Trusted by 1,000+ enterprise clients worldwide</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From Fortune 500 companies to government agencies, our enterprise-grade WAF solution protects
            mission-critical applications across industries including finance, healthcare, e-commerce, and more.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
