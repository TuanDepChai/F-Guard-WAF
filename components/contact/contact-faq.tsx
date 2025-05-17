import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ContactFaq() {
  const faqs = [
    {
      question: "How quickly can I expect a response?",
      answer:
        "For general inquiries, we typically respond within 24 hours during business days. For urgent technical support issues, our team is available 24/7 and will respond as quickly as possible, usually within 1-2 hours.",
    },
    {
      question: "How can I schedule a product demo?",
      answer:
        "You can request a demo through our contact form by selecting 'Request a Demo' as your inquiry type. Alternatively, you can click the 'Schedule a Call' button to book a time directly with our sales team.",
    },
    {
      question: "What information should I include for technical support?",
      answer:
        "For the fastest resolution to technical issues, please include your account ID, the specific service experiencing problems, error messages you're seeing, and steps to reproduce the issue. Screenshots or logs are also very helpful.",
    },
    {
      question: "Do you have offices in other locations?",
      answer:
        "Yes, in addition to our San Francisco headquarters, we have regional offices in New York, London, Singapore, and Sydney. Contact information for these offices can be provided upon request.",
    },
    {
      question: "How can I explore partnership opportunities?",
      answer:
        "We're always open to strategic partnerships. Please use our contact form and select 'Partnership Opportunity' as your inquiry type. Our business development team will reach out to discuss potential collaboration.",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
        <p className="text-muted-foreground">Quick answers to common questions about contacting us</p>
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
