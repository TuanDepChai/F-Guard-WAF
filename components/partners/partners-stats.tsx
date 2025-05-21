"use client"

import { motion } from "framer-motion"
import { BarChart3, Users, Globe, Shield, Zap, Award } from "lucide-react"

export default function PartnersStats() {
  const stats = [
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      value: "500+",
      label: "Active Partners",
      description: "Growing network of trusted partners worldwide"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "10,000+",
      label: "Protected Customers",
      description: "Enterprise customers secured by our partners"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      value: "50+",
      label: "Countries",
      description: "Global presence across multiple regions"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable security protection for customers"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      value: "24/7",
      label: "Support",
      description: "Round-the-clock technical assistance"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      value: "100%",
      label: "Satisfaction",
      description: "Partner satisfaction rate"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Partner Success Metrics</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Our partners are achieving remarkable results with FGuard's WAF solution
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-lg font-semibold mb-2">{stat.label}</div>
                  <p className="text-gray-600 dark:text-gray-400">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Shield className="h-5 w-5" />
            <span className="font-medium">Trusted by Industry Leaders</span>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join our growing network of successful partners who are delivering exceptional security solutions
            to their customers
          </p>
        </motion.div>
      </div>
    </section>
  )
} 