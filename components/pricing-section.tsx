"use client"

import { motion } from "framer-motion"
import { Check, Shield, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingSection() {
  const plans = [
    {
      name: "Business",
      description: "For small to medium businesses with standard security needs",
      price: "$1,499",
      popular: false,
      features: [
        "Up to 10 web applications",
        "Basic DDoS protection",
        "OWASP Top 10 protection",
        "SSL/TLS encryption",
        "5 custom security rules",
        "Basic reporting",
        "Email support (business hours)",
        "99.9% uptime SLA",
      ],
      notIncluded: ["Advanced bot protection", "API security", "Virtual patching", "Custom integrations"],
    },
    {
      name: "Enterprise",
      description: "For organizations with advanced security requirements",
      price: "$3,999",
      popular: true,
      features: [
        "Up to 50 web applications",
        "Advanced DDoS protection",
        "OWASP Top 10 protection",
        "SSL/TLS encryption",
        "Zero-day attack prevention",
        "API security",
        "Virtual patching",
        "25 custom security rules",
        "Advanced reporting & analytics",
        "24/7 email and phone support",
        "99.95% uptime SLA",
        "Dedicated security engineer",
      ],
      notIncluded: ["Custom integrations"],
    },
    {
      name: "Ultimate",
      description: "For large enterprises with mission-critical applications",
      price: "Custom",
      popular: false,
      features: [
        "Unlimited web applications",
        "Premium DDoS protection",
        "OWASP Top 10 protection",
        "SSL/TLS encryption",
        "Zero-day attack prevention",
        "Advanced API security",
        "Virtual patching",
        "Unlimited custom security rules",
        "Real-time threat intelligence",
        "Advanced reporting & analytics",
        "24/7 priority support",
        "99.99% uptime SLA",
        "Dedicated security team",
        "Custom integrations",
        "On-site deployment option",
      ],
      notIncluded: [],
    },
  ]

  return (
    <section id="pricing" className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
              <Shield className="mr-1 h-4 w-4" />
              <span>Enterprise Pricing</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient-animate">
              <span className="">
                Security Solutions for Every Scale
              </span>
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Enterprise-grade WAF protection with flexible pricing options to meet your organization's security needs
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full card-hover"
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
            >
              <Card
                className={`flex flex-col h-full relative overflow-hidden ${
                  plan.popular ? "border-primary shadow-lg shadow-primary/10" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 w-40 h-40 overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-r from-primary to-blue-600 shadow-md transform rotate-45 translate-x-12 -translate-y-2"></div>
                    <div className="absolute top-[22px] right-[-22px] transform rotate-45 text-xs text-white font-medium py-1 px-4">
                      Popular
                    </div>
                  </div>
                )}
                <CardHeader className="flex flex-col space-y-1.5">
                  <CardTitle className="text-2xl">
                    <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                      {plan.name}
                    </span>
                  </CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-sm mb-2">Included features:</p>
                      <ul className="space-y-2 text-sm">
                        {plan.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            className="flex items-center"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 + featureIndex * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <Check className="mr-2 h-4 w-4 text-primary" />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {plan.notIncluded.length > 0 && (
                      <div>
                        <p className="font-medium text-sm mb-2 text-muted-foreground">Not included:</p>
                        <ul className="space-y-2 text-sm">
                          {plan.notIncluded.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              className="flex items-center text-muted-foreground"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 + (plan.features.length + featureIndex) * 0.05 }}
                              viewport={{ once: true }}
                            >
                              <X className="mr-2 h-4 w-4" />
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-primary via-blue-600 to-blue-700 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                        : "hover:bg-primary/90 hover:shadow-md transition-all duration-300"
                    }`}
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
