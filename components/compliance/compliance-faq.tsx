import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ComplianceFaq() {
  const faqs = [
    {
      question: "How does FGuard help with GDPR compliance?",
      answer:
        "FGuard helps with GDPR compliance by providing robust security measures to prevent unauthorized access to personal data, detailed logging for accountability, data breach prevention capabilities, and options for EU data residency to ensure data sovereignty requirements are met.",
    },
    {
      question: "Is FGuard PCI DSS certified?",
      answer:
        "Yes, FGuard is PCI DSS certified as a service provider. Our WAF solution helps organizations meet PCI DSS Requirement 6.6 for protecting web applications against known attacks and vulnerabilities, particularly those in the OWASP Top 10.",
    },
    {
      question: "Can FGuard help with HIPAA compliance?",
      answer:
        "Yes, FGuard supports HIPAA compliance by providing security controls to protect electronic Protected Health Information (ePHI), comprehensive audit logging, and breach prevention capabilities. We also offer Business Associate Agreements (BAA) for healthcare organizations.",
    },
    {
      question: "How often are compliance certifications renewed?",
      answer:
        "FGuard maintains all compliance certifications with regular renewals. SOC 2 Type II audits are conducted annually, ISO 27001 certification is renewed every three years with annual surveillance audits, and PCI DSS compliance is reassessed annually.",
    },
    {
      question: "Does FGuard provide compliance documentation for audits?",
      answer:
        "Yes, FGuard provides comprehensive compliance documentation including security control descriptions, audit logs, penetration testing reports, and certification attestations that can be used during your organization's compliance audits.",
    },
    {
      question: "How does FGuard handle data residency requirements?",
      answer:
        "FGuard offers regional deployment options with data centers in multiple geographic locations to help organizations meet data residency requirements. This includes options for EU, US, APAC, and other regions to comply with local data sovereignty laws.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Compliance FAQs</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Common questions about FGuard's compliance capabilities
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
