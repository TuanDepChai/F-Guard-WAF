import type { Metadata } from "next"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactMap } from "@/components/contact/contact-map"
import { ContactFaq } from "@/components/contact/contact-faq"

export const metadata: Metadata = {
  title: "Contact Us | FGuard WAF",
  description: "Get in touch with our security experts for any questions about FGuard WAF solutions",
  keywords: ["contact", "support", "security consultation", "WAF support"],
}

export default function ContactPage() {
  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Our Security Experts</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about our WAF solutions? Need a custom security plan? Our team is ready to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <ContactForm />
            <ContactInfo />
          </div>

          <ContactMap />

          <div className="mt-16">
            <ContactFaq />
          </div>
        </div>
      </div>
    </main>
  )
}
