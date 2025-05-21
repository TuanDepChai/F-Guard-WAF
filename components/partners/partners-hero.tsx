"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Users, Globe } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function PartnersHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Become an FGuard WAF Partner
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Join our global partner network and grow your business with industry-leading web application security solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/partners/join">
              <Button size="lg" className="group">
                Become a Partner
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/partners/programs">
              <Button size="lg" variant="outline" className="group">
                View Programs
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Security Expertise</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Access cutting-edge security solutions and expertise
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Partner Network</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Join a global network of security professionals
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Expand your business globally with FGuard
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
