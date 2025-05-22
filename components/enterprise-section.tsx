"use client"

import { motion } from "framer-motion"
import { Building, Shield, ArrowRight, FileText, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EnterpriseSection() {
  return (
    <section id="enterprise" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
              <Building className="mr-1 h-4 w-4" />
              <span>Enterprise WAF Solutions</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient-animate">
                Tailored Security for Enterprise Applications
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our enterprise WAF solution delivers Barracuda-level protection with customized security policies,
                dedicated support, and advanced threat intelligence tailored to your specific industry requirements.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 hover-lift p-2 rounded-md">
                <div className="rounded-full bg-primary/10 p-2">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Advanced Threat Protection</h3>
                  <p className="text-muted-foreground">
                    Enterprise-grade security with machine learning-powered threat detection, behavioral analysis, and
                    real-time protection against sophisticated attacks.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 hover-lift p-2 rounded-md">
                <div className="rounded-full bg-primary/10 p-2">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Compliance Assurance</h3>
                  <p className="text-muted-foreground">
                    Comprehensive compliance support for PCI DSS, HIPAA, GDPR, SOC 2, and other regulatory frameworks
                    with detailed audit logs and reporting.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 hover-lift p-2 rounded-md">
                <div className="rounded-full bg-primary/10 p-2">
                  <Headphones className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Dedicated Security Team</h3>
                  <p className="text-muted-foreground">
                    Access to certified security engineers who understand your business needs and provide 24/7
                    monitoring, incident response, and strategic security guidance.
                  </p>
                </div>
              </div>
            </div>
            <Button className="gap-1 bg-gradient-to-r from-primary to-blue-700 hover:from-primary/90 hover:to-blue-700/90 button-effect">
              Schedule Security Consultation
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-xl bg-slate-800">
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="h-32 w-32 text-primary/20" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-6 w-6 text-primary" />
                    <span className="text-white font-bold">Enterprise Security</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Comprehensive Protection for Critical Applications
                  </h3>
                  <p className="text-white/80">
                    Our enterprise solutions are trusted by Fortune 500 companies and government agencies worldwide
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
