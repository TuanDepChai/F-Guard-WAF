"use client"

import { motion } from "framer-motion"
import { Check, Shield, X, Zap, Users, Building2, ArrowRight, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface Plan {
  _id: string;
  name: string;
  description: string;
  price: number;
}

export default function PricingPage() {
  const router = useRouter();
  const [plans, setPlans] = useState<Plan[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getPlanFeatures = (planName: string) => {
    switch (planName) {
      case "Business":
        return {
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
          notIncluded: [
            "Advanced bot protection",
            "API security",
            "Virtual patching",
            "Custom integrations"
          ]
        };
      case "Enterprise":
        return {
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
            "Dedicated security engineer"
          ],
          notIncluded: [
            "Custom integrations"
          ]
        };
      case "Ultimate":
        return {
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
            "On-site deployment option"
          ],
          notIncluded: []
        };
      default:
        return {
          features: [],
          notIncluded: []
        };
    }
  };

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/plans`);
        if (!response.ok) {
          throw new Error('Failed to fetch plans');
        }
        const data = await response.json();
        setPlans(data);
      } catch (error) {
        console.error('Error fetching plans:', error);
        toast.error('Failed to load pricing plans');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const handleGetStarted = (planId: string) => {
    router.push(`/checkout?plan=${planId}`);
  };

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. Monthly plans are billed via credit card only."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for all plans. No credit card required to start."
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer: "We'll notify you before you reach your limits. You can either upgrade your plan or purchase additional capacity."
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer: "Yes, we offer special pricing for non-profit organizations. Please contact our sales team for more information."
    }
  ]

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 dark:text-white text-gradient-animate">
              <span className="">
                Security Solutions for Every Scale
              </span>
            </h2>
            <p className="max-w-[900px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Enterprise-grade WAF protection with flexible pricing options to meet your organization's security needs
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const { features, notIncluded } = getPlanFeatures(plan.name);
            return (
              <motion.div
                key={plan._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full p-0"
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <Card
                  className="flex flex-col h-full relative overflow-hidden bg-card shadow-sm border border-border card-hover transition-transform duration-200 ease-in-out hover:scale-[1.02]"
                >
                  <CardHeader className="flex flex-col space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {plan.name === "Business" ? <Building2 className="h-8 w-8 text-primary" /> :
                         plan.name === "Enterprise" ? <Users className="h-8 w-8 text-primary" /> :
                         <Zap className="h-8 w-8 text-primary" />}
                        <CardTitle className="text-2xl">
                          <span className="text-gray-900 dark:text-white">
                            {plan.name}
                          </span>
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600 dark:text-gray-400">{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-primary dark:text-primary-light">
                        {formatPrice(plan.price)}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium text-sm mb-2 text-gray-900 dark:text-white">Included features:</p>
                        <ul className="space-y-2 text-sm">
                          {features.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              className="flex items-center"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 + featureIndex * 0.05 }}
                              viewport={{ once: true }}
                            >
                              <Check className="mr-2 h-4 w-4 text-primary" />
                              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {notIncluded.length > 0 && (
                        <div>
                          <p className="font-medium text-sm mb-2 text-gray-600 dark:text-gray-400">Not included:</p>
                          <ul className="space-y-2 text-sm">
                            {notIncluded.map((feature, featureIndex) => (
                              <motion.li
                                key={featureIndex}
                                className="flex items-center text-gray-600 dark:text-gray-400"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 + (features.length + featureIndex) * 0.05 }}
                                viewport={{ once: true }}
                              >
                                <X className="mr-2 h-4 w-4" />
                                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full" 
                      variant="outline"
                      onClick={() => handleGetStarted(plan._id)}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Find answers to common questions about our pricing and plans</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <HelpCircle className="h-5 w-5 text-primary mr-2" />
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
} 