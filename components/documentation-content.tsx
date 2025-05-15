"use client"

import { motion } from "framer-motion"
import { Shield, AlertTriangle, Info, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import PrintButton from "@/components/print-button"

export default function DocumentationContent() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(`curl -X GET "https://api.fguard.com/v1/waf/status" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      className="space-y-8 documentation-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-4">Getting Started with FGuard WAF</h1>
          <p className="text-muted-foreground mb-6">
            This guide will help you get started with FGuard WAF, from initial setup to advanced configuration.
          </p>
          <div className="flex items-center gap-2 mb-6">
            <div className="text-sm text-muted-foreground">Last updated: April 15, 2023</div>
            <div className="text-sm bg-primary/10 text-primary px-2 py-0.5 rounded">v2.5.0</div>
          </div>
        </div>
        <div className="print:hidden">
          <PrintButton />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Overview</h2>
        <p>
          FGuard WAF (Web Application Firewall) is an enterprise-grade security solution designed to protect web
          applications from various attacks, including SQL injection, cross-site scripting (XSS), and other OWASP Top 10
          vulnerabilities.
        </p>
        <p className="text-muted-foreground">
          Our WAF solution can be deployed in multiple environments, including cloud, on-premises, and hybrid
          configurations, providing flexibility to meet your organization's specific needs.
        </p>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3">
        <Info className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="font-medium">Before You Begin</h3>
          <p className="text-sm text-muted-foreground">
            Make sure you have an active FGuard account and API key. If you don't have one yet, you can{" "}
            <a href="#" className="text-primary hover:underline">
              sign up for a free trial
            </a>
            .
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Quick Start Guide</h2>
        <p>Follow these steps to quickly set up FGuard WAF for your web application:</p>

        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-800 border rounded-lg p-4">
            <h3 className="font-bold flex items-center gap-2">
              <div className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm">
                1
              </div>
              Create an Account
            </h3>
            <p className="mt-2 text-muted-foreground">
              Sign up for a FGuard account at{" "}
              <a href="https://dashboard.fguard.com/signup" className="text-primary hover:underline">
                dashboard.fguard.com/signup
              </a>
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 border rounded-lg p-4">
            <h3 className="font-bold flex items-center gap-2">
              <div className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm">
                2
              </div>
              Add Your Domain
            </h3>
            <p className="mt-2 text-muted-foreground">
              In the FGuard dashboard, navigate to "Domains" and click "Add Domain". Enter your domain name and select
              your protection level.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 border rounded-lg p-4">
            <h3 className="font-bold flex items-center gap-2">
              <div className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm">
                3
              </div>
              Update DNS Settings
            </h3>
            <p className="mt-2 text-muted-foreground">
              Update your DNS settings to point to FGuard's nameservers. This will route your traffic through our WAF.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 border rounded-lg p-4">
            <h3 className="font-bold flex items-center gap-2">
              <div className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm">
                4
              </div>
              Configure Security Rules
            </h3>
            <p className="mt-2 text-muted-foreground">
              Configure your security rules based on your application's needs. You can use our pre-configured rule sets
              or create custom rules.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 border rounded-lg p-4">
            <h3 className="font-bold flex items-center gap-2">
              <div className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm">
                5
              </div>
              Verify Protection
            </h3>
            <p className="mt-2 text-muted-foreground">
              Use our verification tools to ensure your website is properly protected. You can also run a security scan
              to identify any potential vulnerabilities.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">System Architecture</h2>
        <p>FGuard WAF uses a multi-layered approach to protect your web applications:</p>

        <div className="bg-white dark:bg-slate-800 border rounded-lg p-6">
          <div className="w-full h-[300px] bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
            <Shield className="h-16 w-16 text-primary/20" />
          </div>
          <p className="text-sm text-center text-muted-foreground mt-4">FGuard WAF Architecture Diagram</p>
        </div>

        <p className="text-muted-foreground">
          Traffic flows through multiple security layers, including DDoS protection, traffic filtering, threat
          detection, and application-specific rules before reaching your origin server.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">API Reference</h2>
        <p>FGuard provides a comprehensive API for managing your WAF configuration programmatically.</p>

        <Tabs defaultValue="rest" className="w-full">
          <TabsList>
            <TabsTrigger value="rest">REST API</TabsTrigger>
            <TabsTrigger value="sdk">SDK</TabsTrigger>
            <TabsTrigger value="cli">CLI</TabsTrigger>
          </TabsList>
          <TabsContent value="rest" className="mt-4">
            <div className="bg-slate-900 text-white rounded-lg overflow-hidden">
              <div className="flex items-center justify-between p-4 bg-slate-800">
                <div className="text-sm font-mono">GET /v1/waf/status</div>
                <Button variant="ghost" size="sm" onClick={handleCopy} className="text-slate-300 hover:text-white">
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <div className="p-4 font-mono text-sm overflow-x-auto">
                <pre>{`curl -X GET "https://api.fguard.com/v1/waf/status" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}</pre>
              </div>
            </div>

            <div className="mt-4 bg-slate-50 dark:bg-slate-800 border rounded-lg p-4">
              <h4 className="font-medium mb-2">Response</h4>
              <div className="bg-slate-900 text-white rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre>{`{
  "status": "active",
  "version": "2.5.0",
  "domains_protected": 3,
  "rules_active": 245,
  "last_attack_blocked": "2023-04-15T10:23:45Z",
  "attacks_blocked_24h": 1432
}`}</pre>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="sdk" className="mt-4">
            <div className="bg-slate-900 text-white rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`// JavaScript SDK Example
import { FGuardClient } from '@fguard/sdk';

const client = new FGuardClient({
  apiKey: 'YOUR_API_KEY'
});

async function getWafStatus() {
  const status = await client.waf.getStatus();
  console.log(status);
}

getWafStatus();`}</pre>
            </div>
          </TabsContent>
          <TabsContent value="cli" className="mt-4">
            <div className="bg-slate-900 text-white rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# FGuard CLI Example
fguard waf status --format json`}</pre>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-900/30 rounded-lg p-4 flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-500 mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="font-medium text-yellow-800 dark:text-yellow-500">Important Note</h3>
          <p className="text-sm text-yellow-800/80 dark:text-yellow-500/80">
            Never share your API keys publicly. Store them securely and use environment variables or secret management
            systems in your applications.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Next Steps</h2>
        <p>Now that you have a basic understanding of FGuard WAF, you can explore the following topics:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-800 border rounded-lg p-4">
            <h3 className="font-medium">Advanced Configuration</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Learn how to fine-tune your WAF settings for optimal protection and performance.
            </p>
            <Button variant="link" className="p-0 h-auto mt-2">
              Read More
            </Button>
          </div>
          <div className="bg-white dark:bg-slate-800 border rounded-lg p-4">
            <h3 className="font-medium">Custom Rules</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Create custom security rules tailored to your application's specific needs.
            </p>
            <Button variant="link" className="p-0 h-auto mt-2">
              Read More
            </Button>
          </div>
          <div className="bg-white dark:bg-slate-800 border rounded-lg p-4">
            <h3 className="font-medium">API Security</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Protect your APIs from abuse and attacks with specialized security measures.
            </p>
            <Button variant="link" className="p-0 h-auto mt-2">
              Read More
            </Button>
          </div>
          <div className="bg-white dark:bg-slate-800 border rounded-lg p-4">
            <h3 className="font-medium">Compliance</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Configure FGuard WAF to help meet regulatory compliance requirements.
            </p>
            <Button variant="link" className="p-0 h-auto mt-2">
              Read More
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t pt-8 mt-8">
        <div className="flex items-center justify-between">
          <Button variant="outline" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            Previous: Installation
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            Next: Configuration
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

function ChevronLeft(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function ChevronRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
