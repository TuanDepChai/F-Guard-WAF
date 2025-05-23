'use client';

import { Check } from "lucide-react"
import { motion } from "framer-motion"

export default function PricingContent() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic WAF Protection",
        "Up to 5 domains",
        "Standard DDoS Protection",
        "24/7 Monitoring",
        "Basic Analytics",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "$299",
      description: "Ideal for growing businesses",
      features: [
        "Advanced WAF Protection",
        "Up to 20 domains",
        "Enhanced DDoS Protection",
        "Real-time Monitoring",
        "Advanced Analytics",
        "Priority Support",
        "Custom Rules",
        "API Protection",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex needs",
      features: [
        "Enterprise-grade WAF",
        "Unlimited domains",
        "Advanced DDoS Protection",
        "Custom Monitoring",
        "Advanced Analytics",
        "24/7 Premium Support",
        "Custom Rules",
        "API Protection",
        "Dedicated Account Manager",
        "SLA Guarantee",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-muted-foreground">
          Choose the perfect plan for your security needs
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`rounded-lg border bg-card p-8 ${
              plan.popular ? "ring-2 ring-primary" : ""
            }`}
          >
            {plan.popular && (
              <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold mb-4">{plan.price}</div>
            <p className="text-muted-foreground mb-6">{plan.description}</p>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className={`block w-full text-center rounded-md px-4 py-2 text-sm font-medium ${
                plan.popular
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
              }`}
            >
              Get Started
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16 text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="text-muted-foreground mb-8">
          Contact our sales team for a tailored package that meets your specific requirements
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          Contact Sales
        </a>
      </motion.div>
    </div>
  )
} 