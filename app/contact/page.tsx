import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Building2,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | FGuard WAF",
  description: "Get in touch with our team for support and inquiries.",
}

const contactInfo = [
  {
    title: "Address",
    description: "Lô E2a-7, Đường D1, Khu CNC Long Thạnh Mỹ, Quận 9, tp. HCM",
    icon: <MapPin className="h-6 w-6" />
  },
  {
    title: "Phone",
    description: "+84 98 105 2217",
    icon: <Phone className="h-6 w-6" />
  },
  {
    title: "Email",
    description: "contact@fguardwaf.com",
    icon: <Mail className="h-6 w-6" />
  },
  {
    title: "Working Hours",
    description: "Monday - Friday: 8:00 AM - 6:00 PM",
    icon: <Clock className="h-6 w-6" />
  }
]

const socialLinks = [
  {
    name: "Facebook",
    icon: <Facebook className="h-6 w-6" />,
    url: "https://facebook.com/fguardwaf"
  },
  {
    name: "Twitter",
    icon: <Twitter className="h-6 w-6" />,
    url: "https://twitter.com/fguardwaf"
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-6 w-6" />,
    url: "https://linkedin.com/company/fguardwaf"
  },
  {
    name: "Instagram",
    icon: <Instagram className="h-6 w-6" />,
    url: "https://instagram.com/fguardwaf"
  }
]

export default function ContactPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Get in touch with our team for support and inquiries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-semibold mb-2">{info.title}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {info.description}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32"
                      placeholder="Your message here..."
                    />
                  </div>
                  <Button className="w-full">
                    Send Message
                    <MessageSquare className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Our Location</h2>
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.231915302358!2d106.8011589!3d10.8415846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527158a0c5d33%3A0x6c3d4d9b2f135f6a!2zTG8gRTJhLTcsIMSQxrDhu51uZyBEMSwgS2h1IENOQyBMb25nIFRo4bqhbmggTeG7mWksIFF14bqtbiA5LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1647881234567!5m2!1svi!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Head Office</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Lô E2a-7, Đường D1<br />
                      Khu CNC Long Thạnh Mỹ, Quận 9<br />
                      tp. HCM
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Global Presence</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Offices in major cities<br />
                      Worldwide support
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Support</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      24/7 Technical Support<br />
                      Dedicated Account Manager
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
