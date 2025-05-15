import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PricingCalculatorFaq() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Common questions about FGuard pricing and billing</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How is traffic measured?</AccordionTrigger>
              <AccordionContent>
                Traffic is measured as the total amount of data processed by the FGuard WAF, including both inbound and
                outbound traffic. We measure in gigabytes (GB) and calculate based on actual usage, not estimates. You
                can monitor your traffic usage in real-time through the FGuard dashboard.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>What happens if I exceed my traffic limit?</AccordionTrigger>
              <AccordionContent>
                If you exceed your included traffic limit, additional traffic will be billed at the overage rate for
                your plan ($0.15/GB for Standard, $0.12/GB for Professional, and $0.08/GB for Enterprise). We'll never
                cut off your protection - you'll simply be billed for the additional usage at the end of your billing
                cycle.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Can I change plans or add-ons mid-subscription?</AccordionTrigger>
              <AccordionContent>
                Yes, you can upgrade your plan or add additional features at any time. Upgrades take effect immediately,
                and you'll be billed the prorated difference for the remainder of your billing cycle. Downgrades will
                take effect at the start of your next billing cycle.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Do you offer discounts for annual billing?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer a discount for annual billing. When you choose to pay annually, you'll receive a discount
                equivalent to two months of service (approximately 16.7% savings) compared to monthly billing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Are there any setup or onboarding fees?</AccordionTrigger>
              <AccordionContent>
                There are no setup fees for Standard or Professional plans. Enterprise plans include complimentary
                onboarding and implementation assistance. For customers with complex requirements, we offer additional
                professional services at an hourly rate.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Do you offer custom pricing for large enterprises?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer custom pricing for large enterprises with specific requirements. Our enterprise sales team
                can work with you to create a tailored solution that meets your security needs and budget. Please
                contact our sales team for a custom quote.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
              <AccordionContent>
                We accept all major credit cards (Visa, Mastercard, American Express, Discover) and ACH bank transfers.
                For Enterprise customers, we also offer invoicing with net-30 payment terms. International customers can
                pay via credit card or wire transfer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
