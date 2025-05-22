"use client"

import { motion } from "framer-motion"
import { Shield } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  const faqs = [
    {
      question: "How does your WAF solution compare to Barracuda WAF?",
      answer:
        "Our WAF solution offers comparable enterprise-grade protection to Barracuda WAF, with advanced features including machine learning-based threat detection, zero-day vulnerability protection, and comprehensive API security. We provide similar capabilities in terms of DDoS protection, bot mitigation, and virtual patching, while offering more flexible deployment options and dedicated security engineering support tailored to your specific industry requirements.",
    },
    {
      question: "What deployment options are available for enterprise clients?",
      answer:
        "We offer multiple deployment options to meet enterprise requirements: cloud-based WAF-as-a-Service for rapid deployment and scalability, on-premises appliances (both physical and virtual) for environments with strict data sovereignty requirements, hybrid deployments that combine cloud and on-premises components, and multi-cloud deployments across AWS, Azure, Google Cloud, and other providers. Our security engineers will work with you to determine the optimal deployment strategy for your specific infrastructure.",
    },
    {
      question: "How do you handle zero-day vulnerabilities and emerging threats?",
      answer:
        "Our approach to zero-day vulnerabilities combines multiple layers of protection: our threat research team continuously monitors for emerging threats and develops protection signatures; our machine learning systems analyze traffic patterns to detect anomalous behavior indicative of new attack vectors; virtual patching provides immediate protection without application code changes; and our 24/7 security operations center provides human oversight and rapid response to emerging threats.",
    },
    {
      question: "What compliance standards does your WAF solution support?",
      answer:
        "Our WAF solution helps organizations meet requirements for numerous compliance standards including PCI DSS, HIPAA, GDPR, SOC 2, ISO 27001, NIST, and industry-specific regulations. We provide comprehensive logging, audit trails, and customizable reports specifically designed for compliance documentation. Our security experts can assist with configuring policies to address specific compliance requirements for your industry.",
    },
    {
      question: "How do you ensure minimal performance impact on our applications?",
      answer:
        "Performance is a core design principle of our WAF solution. We employ distributed architecture with global points of presence to minimize latency, intelligent caching and compression to optimize content delivery, custom hardware acceleration for cryptographic operations, and adaptive rule processing that applies only relevant security checks based on traffic context. Our enterprise clients typically experience less than 5ms of added latency when our WAF is properly configured.",
    },
    {
      question: "What level of support do enterprise clients receive?",
      answer:
        "Enterprise clients receive our highest tier of support, including: 24/7/365 access to certified security engineers via phone, email, and chat; a dedicated Technical Account Manager who understands your specific environment; guaranteed response times with 15-minute response for critical issues; proactive monitoring and threat hunting; quarterly security reviews and optimization recommendations; and priority access to our threat research team for custom security rule development.",
    },
    {
      question: "Can your WAF solution integrate with our existing security infrastructure?",
      answer:
        "Yes, our WAF solution is designed for seamless integration with enterprise security ecosystems. We provide robust APIs and pre-built integrations with leading SIEM platforms (Splunk, IBM QRadar, ArcSight), SOAR solutions, identity providers, threat intelligence platforms, and DevSecOps toolchains. Our professional services team can develop custom integrations for proprietary systems when needed.",
    },
    {
      question: "How do you handle custom applications and APIs?",
      answer:
        "Our WAF solution excels at protecting custom applications and APIs through multiple approaches: application-specific learning that builds behavioral profiles of normal traffic patterns; custom rule development by our security engineers who analyze your application architecture; API schema validation that enforces proper API usage; and granular rate limiting and access controls. We support REST, SOAP, GraphQL, gRPC, and custom API protocols.",
    },
  ]

  return (
    <section id="faq" className="py-20">
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
              <span>Enterprise WAF FAQ</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient-animate">
              Common Questions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Detailed answers to frequently asked questions about our enterprise-grade WAF solution
            </p>
          </div>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="card-hover rounded-md px-4 mb-2">
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
