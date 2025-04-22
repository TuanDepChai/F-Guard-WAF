"use client"

import { motion } from "framer-motion"
import { Shield, Star } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function TestimonialComparison() {
  // Define the array directly to ensure it's never undefined
  const testimonials = [
    {
      name: "Michael Chen",
      role: "CIO, Global Financial Services",
      content:
        "After switching from Barracuda WAF to FGuard, we've seen a 40% reduction in false positives while maintaining the same level of protection. The machine learning capabilities have been particularly impressive in adapting to our unique traffic patterns.",
      initials: "MC",
      previousProvider: "Barracuda WAF",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Security, E-commerce Platform",
      content:
        "We migrated from Cloudflare WAF to FGuard for better API protection and customization options. The transition was seamless, and FGuard's dedicated security team provided exceptional support throughout the process. Our security posture has significantly improved.",
      initials: "SJ",
      previousProvider: "Cloudflare WAF",
    },
    {
      name: "David Rodriguez",
      role: "VP of Infrastructure, Healthcare Provider",
      content:
        "AWS WAF was meeting our basic needs, but FGuard has taken our security to another level. The virtual patching capabilities and advanced threat intelligence have already prevented several zero-day attacks that would have otherwise gone undetected.",
      initials: "DR",
      previousProvider: "AWS WAF",
    },
  ]

  return (
    <section className="py-20">
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
              <span>Customer Success Stories</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Customers Switched to FGuard</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Hear from organizations that switched from other WAF solutions to FGuard
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Add conditional rendering to ensure we don't map over undefined */}
          {testimonials &&
            testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="flex space-x-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="mb-6 text-muted-foreground">{testimonial.content}</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback className="bg-primary/10 text-primary">{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm">
                      <span className="text-muted-foreground">Previously using: </span>
                      <span className="font-medium">{testimonial.previousProvider}</span>
                    </p>
                  </div>
                </div>
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
          <h3 className="text-2xl font-bold mb-2">98% Customer Satisfaction Rate</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Based on surveys from over 500 enterprise customers who switched to FGuard WAF from other solutions
          </p>
        </motion.div>
      </div>
    </section>
  )
}
