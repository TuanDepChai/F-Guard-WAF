'use client';

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
  Instagram,
  Send
} from "lucide-react"
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    description: 'support@fguard.com',
    link: 'mailto:support@fguard.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    description: '0981052217',
    link: 'tel:+84981052217'
  },
  {
    icon: MapPin,
    title: 'Office',
    description: 'Đại học FPT University, Quận 9',
    link: 'https://www.google.com/maps/search/?api=1&query=Đại+học+FPT+University,+Quận+9'
  }
];

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
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-muted-foreground">
          Get in touch with our team for any questions or support
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card rounded-lg border p-6"
        >
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-md border bg-background"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md border bg-background"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 rounded-md border bg-background"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-md border bg-background"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          {/* Contact Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{info.title}</h3>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Live Chat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-lg border p-6"
          >
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Live Chat Support</h3>
                <p className="text-sm text-muted-foreground">
                  Available 24/7 for immediate assistance
                </p>
              </div>
            </div>
            <button className="w-full px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
              Start Chat
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
