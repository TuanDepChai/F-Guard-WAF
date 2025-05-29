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
    <section className="py-16 sm:py-24 lg:py-32">
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 dark:text-white text-gradient-animate">
              Trusted by Security Leaders
            </h2>
            <p className="max-w-[900px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              See why enterprise security professionals choose our WAF solution for their critical applications
            </p>
          </div>
        </motion.div>

        {/* Featured testimonial with image */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
            <div className="absolute inset-0 bg-grid-white/5"></div>
            <motion.div
              className="absolute inset-0 bg-dot-white/10"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 30,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center">
              <div className="p-8 md:p-12 max-w-lg">
                <motion.div
                  className="flex space-x-1 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 + 0.1 * i }}
                    >
                      <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    </motion.div>
                  ))}
                </motion.div>
                <motion.p
                  className="text-white text-xl mb-6 italic"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  FGuard's enterprise WAF solution has been instrumental in protecting our global infrastructure. Their
                  security team's expertise and the platform's advanced capabilities have given us confidence in our web
                  application security posture.
                </motion.p>
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Avatar className="h-12 w-12 mr-4 border-2 border-white">
                    <AvatarFallback className="bg-primary text-white">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-white">James Davidson</p>
                    <p className="text-gray-200">Chief Information Security Officer, Global 500 Company</p>
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.div
              className="absolute right-8 bottom-8 w-32 h-32 opacity-20"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
            >
              <Shield className="w-full h-full text-primary" />
            </motion.div>
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
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.2 },
              }}
            >
              <Card className="overflow-hidden bg-card shadow-sm border border-border card-hover transition-transform duration-200 ease-in-out hover:scale-[1.02]">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
                  <div className="flex space-x-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                      >
                        <Star
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                          }`}
                        />
                      </motion.div>
                    ))}
                  </div>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">{testimonial.content}</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3 border-2 border-border">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-card shadow-sm border border-border rounded-lg p-8 text-center"
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
          <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Trusted by 1,000+ enterprise clients worldwide</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From Fortune 500 companies to government agencies, our enterprise-grade WAF solution protects
            mission-critical applications across industries including finance, healthcare, e-commerce, and more.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
