import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react"

export function ContactInfo() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
          <div>
            <h3 className="font-medium">Headquarters</h3>
            <address className="not-italic text-muted-foreground">
              123 Security Avenue
              <br />
              Tech District
              <br />
              San Francisco, CA 94105
              <br />
              United States
            </address>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
          <div>
            <h3 className="font-medium">Phone</h3>
            <p className="text-muted-foreground">
              Sales: +1 (555) 123-4567
              <br />
              Support: +1 (555) 987-6543
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
          <div>
            <h3 className="font-medium">Email</h3>
            <p className="text-muted-foreground">
              Sales: sales@fguard.com
              <br />
              Support: support@fguard.com
              <br />
              General: info@fguard.com
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
          <div>
            <h3 className="font-medium">Business Hours</h3>
            <p className="text-muted-foreground">
              Monday - Friday: 9:00 AM - 6:00 PM (PST)
              <br />
              Technical Support: 24/7/365
            </p>
          </div>
        </div>

        <div className="pt-4">
          <Button variant="outline" className="w-full" asChild>
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              Schedule a Call
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
