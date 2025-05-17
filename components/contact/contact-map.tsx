"use client"

import { Card } from "@/components/ui/card"

export function ContactMap() {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-[16/9] md:aspect-[21/9]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968870204486!2d-122.39997532357392!3d37.78774771202427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807c23cc4ebb%3A0x7f0d40960cf9e608!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1710530000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="FGuard Office Location"
        ></iframe>
      </div>
    </Card>
  )
}
