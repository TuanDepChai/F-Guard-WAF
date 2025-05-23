import { Shield, Zap, Lock, Activity, AlertTriangle, Settings } from "lucide-react"
import { motion } from "framer-motion"

export default function FeaturesPage() {
  const features = [
    {
      icon: Shield,
      title: "Advanced Protection",
      description: "Enterprise-grade protection against OWASP Top 10 threats, zero-day attacks, and sophisticated cyber threats.",
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "24/7 monitoring and instant alerts for suspicious activities and potential security breaches.",
    },
    {
      icon: Lock,
      title: "API Security",
      description: "Comprehensive API protection with rate limiting, authentication, and request validation.",
    },
    {
      icon: Activity,
      title: "Performance Optimization",
      description: "Intelligent caching and optimization to ensure maximum performance without compromising security.",
    },
    {
      icon: AlertTriangle,
      title: "Threat Intelligence",
      description: "AI-powered threat detection and prevention using real-time threat intelligence.",
    },
    {
      icon: Settings,
      title: "Easy Configuration",
      description: "User-friendly interface for easy configuration and management of security rules.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Powerful Features</h1>
        <p className="text-xl text-muted-foreground">
          Discover how F-Guard WAF protects your applications with advanced security features
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
          >
            <feature.icon className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join thousands of businesses that trust F-Guard WAF for their security needs
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          Contact Sales
        </a>
      </motion.div>
    </div>
  )
} 