"use client"

import { motion } from "framer-motion"
import { Shield, Server, Clock, Users } from "lucide-react"

export default function StatsSection() {
  const stats = [
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "99.9%",
      description: "Threat Detection Rate",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: <Server className="h-8 w-8 text-white" />,
      title: "50TB+",
      description: "Daily Traffic Secured",
      color: "from-cyan-600 to-cyan-400",
    },
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      title: "99.999%",
      description: "Service Availability",
      color: "from-purple-600 to-purple-400",
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "1,000+",
      description: "Enterprise Clients",
      color: "from-teal-600 to-teal-400",
    },
  ]

  return (
    <section className="py-16 sm:py-24 lg:py-32 border-y border-border relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-700/20 [mask-image:linear-gradient(0deg,white,transparent)] opacity-50 dark:opacity-20"></div>
        <motion.div
          className="absolute top-0 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -60, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        ></motion.div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-card shadow-sm card-hover transition-transform duration-200 ease-in-out hover:scale-[1.02]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`bg-gradient-to-r ${stat.color} rounded-full p-4 mb-4 shadow-lg`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: ["0 0 0 rgba(0, 0, 0, 0)", "0 0 20px rgba(59, 130, 246, 0.5)", "0 0 0 rgba(0, 0, 0, 0)"],
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  },
                }}
              >
                {stat.icon}
              </motion.div>
              <motion.h3
                className="text-3xl font-bold text-gray-900 dark:text-white text-gradient-animate"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
