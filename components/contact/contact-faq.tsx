import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { serverGetTranslation } from "@/lib/i18n/server"

export function ContactFaq() {
  const t = serverGetTranslation()

  const faqs = [
    {
      question: t("contact.faq.response") || "How quickly can I expect a response?",
      answer:
        t("contact.faq.responseAnswer") ||
        "For general inquiries, we typically respond within 24 hours during business days. For urgent technical support issues, our team is available 24/7 and will respond as quickly as possible, usually within 1-2 hours.",
    },
    {
      question: t("contact.faq.demo") || "How can I schedule a product demo?",
      answer:
        t("contact.faq.demoAnswer") ||
        "You can request a demo through our contact form by selecting 'Request a Demo' as your inquiry type. Alternatively, you can click the 'Schedule a Call' button to book a time directly with our sales team.",
    },
    {
      question: t("contact.faq.support") || "What information should I include for technical support?",
      answer:
        t("contact.faq.supportAnswer") ||
        "For the fastest resolution to technical issues, please include your account ID, the specific service experiencing problems, error messages you're seeing, and steps to reproduce the issue. Screenshots or logs are also very helpful.",
    },
    {
      question: t("contact.faq.offices") || "Do you have offices in other locations?",
      answer:
        t("contact.faq.officesAnswer") ||
        "Yes, in addition to our San Francisco headquarters, we have regional offices in New York, London, Singapore, and Sydney. Contact information for these offices can be provided upon request.",
    },
    {
      question: t("contact.faq.partnership") || "How can I explore partnership opportunities?",
      answer:
        t("contact.faq.partnershipAnswer") ||
        "We're always open to strategic partnerships. Please use our contact form and select 'Partnership Opportunity' as your inquiry type. Our business development team will reach out to discuss potential collaboration.",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">{t("contact.frequentlyAsked") || "Frequently Asked Questions"}</h2>
        <p className="text-muted-foreground">
          {t("contact.quickAnswers") || "Quick answers to common questions about contacting us"}
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
