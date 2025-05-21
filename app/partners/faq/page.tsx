import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight, MessageSquare } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Partner FAQ | FGuard WAF",
  description: "Find answers to frequently asked questions about FGuard WAF partner program.",
}

const faqs = [
  {
    category: "General Questions",
    questions: [
      {
        question: "What are the benefits of becoming an FGuard partner?",
        answer: "As an FGuard partner, you'll get access to cutting-edge security technology, dedicated support, marketing resources, technical training, revenue sharing opportunities, and a global partner network. You'll also receive exclusive pricing, deal registration protection, and a dedicated partner manager."
      },
      {
        question: "How do I become an FGuard partner?",
        answer: "To become an FGuard partner, you need to submit an application through our partner portal. Our team will review your application and schedule an introductory call. Once approved, you'll go through our onboarding process and get access to partner resources."
      },
      {
        question: "What types of partner programs do you offer?",
        answer: "We offer four main partner programs: Reseller Program, Technology Partner Program, Security Partner Program, and Service Partner Program. Each program is designed for different types of businesses and offers specific benefits and requirements."
      }
    ]
  },
  {
    category: "Technical Questions",
    questions: [
      {
        question: "What technical support do partners receive?",
        answer: "Partners receive 24/7 technical support, including access to our technical documentation, API references, integration guides, and best practices. You'll also get dedicated technical training and certification programs."
      },
      {
        question: "How do I get technical training?",
        answer: "We offer comprehensive technical training through our partner portal, including video tutorials, certification courses, and hands-on workshops. You can access these resources anytime and track your progress."
      },
      {
        question: "What integration options are available?",
        answer: "FGuard WAF offers various integration options, including API access, SDKs, and pre-built integrations with popular platforms. Our technical team will help you choose and implement the best integration method for your needs."
      }
    ]
  },
  {
    category: "Business Questions",
    questions: [
      {
        question: "How does the revenue sharing work?",
        answer: "Our revenue sharing model is based on your partner tier and performance. You'll earn a percentage of the revenue from your sales, with higher tiers offering better rates. We provide detailed reporting and payment processing through our partner portal."
      },
      {
        question: "What marketing support is available?",
        answer: "Partners get access to marketing resources, including co-branded materials, campaign templates, case studies, and social media content. We also offer joint marketing activities and support for your marketing initiatives."
      },
      {
        question: "How do I register deals?",
        answer: "You can register deals through our partner portal. This protects your opportunity and ensures you receive the appropriate benefits. Our partner team will help you through the process and provide guidance on deal registration."
      }
    ]
  }
]

export default function FAQPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Find answers to common questions about our partner program
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {faqs.map((category, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, idx) => (
                    <AccordionItem key={idx} value={`item-${index}-${idx}`}>
                      <AccordionTrigger className="text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16 text-center">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <MessageSquare className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Our partner team is here to help. Contact us for more information.
              </p>
              <Link href="/partners/contact">
                <Button size="lg" className="group">
                  Contact Partner Team
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
} 