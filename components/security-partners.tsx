"use client"

import { motion } from "framer-motion"
import { Shield } from "lucide-react"
import Image from "next/image"

export default function SecurityPartners() {
  const partners = [
    { name: "Microsoft", logo: "/images/partners/partner1.svg" },
    { name: "AWS", logo: "/images/partners/partner2.svg" },
    { name: "Google Cloud", logo: "/images/partners/partner3.svg" },
    { name: "IBM", logo: "/images/partners/partner4.svg" },
    { name: "Cisco", logo: "/images/partners/partner5.svg" },
    { name: "Splunk", logo: "/images/partners/partner6.svg" },
    { name: "TechSecure", logo: "/images/partners/techsecure.svg" },
    { name: "SecureNet", logo: "/images/partners/securenet.svg" },
    { name: "CloudDefend", logo: "/images/partners/clouddefend.svg" },
    { name: "Partner 7", logo: "/images/partners/partner7.svg" },
    { name: "Partner 8", logo: "/images/partners/partner8.svg" },
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
              <span>Strategic Partnerships</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient-animate">
              Trusted by Industry Leaders
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              We partner with leading technology providers to deliver comprehensive security solutions
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-4 bg-slate-100 dark:bg-slate-800 rounded-lg hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 }}}
            >
              <div className="relative h-16 w-full flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={120}
                  height={40}
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
