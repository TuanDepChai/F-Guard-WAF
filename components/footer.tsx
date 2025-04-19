"use client"

import Link from "next/link"
import {
  Shield,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Award,
  FileCheck,
  Lock,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-200">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">FGuard</span>
            </div>
            <p className="text-slate-400">
              Enterprise-grade Web Application Firewall solutions delivering Barracuda-level protection for
              mission-critical applications.
            </p>
            <div className="flex space-x-2">
              <div className="flex items-center gap-1 bg-slate-800 px-3 py-1 rounded-full text-xs">
                <Award className="h-3 w-3 text-primary" />
                <span>ISO 27001</span>
              </div>
              <div className="flex items-center gap-1 bg-slate-800 px-3 py-1 rounded-full text-xs">
                <FileCheck className="h-3 w-3 text-primary" />
                <span>SOC 2</span>
              </div>
              <div className="flex items-center gap-1 bg-slate-800 px-3 py-1 rounded-full text-xs">
                <Lock className="h-3 w-3 text-primary" />
                <span>PCI DSS</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                  Enterprise WAF
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                  Advanced DDoS Protection
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                  API Security
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                  Bot Management
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                  Managed WAF Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                  Security Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                  Threat Research
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                  Security Academy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-400">123 Security Boulevard, Enterprise Tower, Floor 15</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-slate-400">+1 (888) WAF-GUARD</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-slate-400">enterprise@fguard.com</span>
              </li>
            </ul>
            <div className="pt-4">
              <Button className="w-full bg-gradient-to-r from-primary to-blue-700 hover:from-primary/90 hover:to-blue-700/90">
                Schedule Security Consultation
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>© 2023 FGuard Enterprise Security Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
