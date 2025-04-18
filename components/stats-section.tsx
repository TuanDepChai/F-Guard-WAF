"use client"

import { motion } from "framer-motion"
import { Shield, Server, Clock, Users } from "lucide-react"
import { useI18n } from "@/lib/i18n/i18n-provider"

export default function StatsSection() {
  const { t } = useI18n()

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
            <p className="text-muted-foreground">{t("stats.blockRate")}</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Server className="h-8 w-8 text-primary mb-2" />
            <h3 className="text-3xl font-bold">10TB+</h3>
            <p className="text-muted-foreground">{t("stats.trafficProtected")}</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Clock className="h-8 w-8 text-primary mb-2" />
            <h3 className="text-3xl font-bold">99.99%</h3>
            <p className="text-muted-foreground">{t("stats.uptime")}</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Users className="h-8 w-8 text-primary mb-2" />
            <h3 className="text-3xl font-bold">5,000+</h3>
            <p className="text-muted-foreground">{t("stats.customers")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
