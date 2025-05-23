"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"
import { Star, Quote, ThumbsUp, MessageCircle } from "lucide-react"

export default function PartnersShowcase() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechSecure Solutions",
      image: "/images/testimonials/sarah.svg",
      quote: "FGuard's WAF solution has transformed our security offerings. The partnership program provides exceptional support and resources.",
      rating: 5,
      logo: "/images/partners/techsecure.svg"
    },
    {
      name: "Michael Chen",
      role: "Director of Security, CloudDefend",
      image: "/images/testimonials/michael.svg",
      quote: "The integration capabilities and technical support from FGuard have been outstanding. Our joint solutions are delivering real value to customers.",
      rating: 5,
      logo: "/images/partners/clouddefend.svg"
    },
    {
      name: "Emma Rodriguez",
      role: "CEO, SecureNet Services",
      image: "/images/testimonials/emma.svg",
      quote: "As a service partner, FGuard has enabled us to expand our managed security services portfolio and grow our business significantly.",
      rating: 5,
      logo: "/images/partners/securenet.svg"
    }
  ]

  const logos = [
    "/images/partners/partner1.svg",
    "/images/partners/partner2.svg",
    "/images/partners/partner3.svg",
    "/images/partners/partner4.svg",
    "/images/partners/partner5.svg",
    "/images/partners/partner6.svg",
    "/images/partners/partner7.svg",
    "/images/partners/partner8.svg"
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Partners</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Trusted by leading security companies and service providers worldwide
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                      <p className="text-gray-600 dark:text-gray-400 relative z-10">
                        {testimonial.quote}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Image
                      src={testimonial.logo}
                      alt={`${testimonial.name}'s company logo`}
                      width={120}
                      height={40}
                      className="opacity-70"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20"
        >
          {[
            { value: "500+", label: "Active Partners" },
            { value: "10,000+", label: "Protected Customers" },
            { value: "50+", label: "Countries" },
            { value: "99.9%", label: "Customer Satisfaction" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
