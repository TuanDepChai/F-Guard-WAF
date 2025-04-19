"use client"

import { motion } from "framer-motion"
import { Shield, Server, Clock, Users } from "lucide-react"

export default function StatsSection() {
  return (
    <section className="py-12 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Shield className="h-8 w-8 text-primary mb-2" />
            <h3 className="text-3xl font-bold">99.9%</h3>
            <p className="text-muted-foreground">Threat Detection Rate</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Server className="h-8 w-8 text-primary mb-2" />
            <h3 className="text-3xl font-bold">50TB+</h3>
            <p className="text-muted-foreground">Daily Traffic Secured</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Clock className="h-8 w-8 text-primary mb-2" />
            <h3 className="text-3xl font-bold">99.999%</h3>
            <p className="text-muted-foreground">Service Availability</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Users className="h-8 w-8 text-primary mb-2" />
            <h3 className="text-3xl font-bold">1,000+</h3>
            <p className="text-muted-foreground">Enterprise Clients</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
