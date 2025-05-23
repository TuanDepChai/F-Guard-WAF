'use client';

import { motion } from 'framer-motion';
import { 
  Book, 
  Code, 
  Shield, 
  Settings,
  ChevronRight
} from 'lucide-react';

const categories = [
  {
    title: 'Getting Started',
    description: 'Learn the basics of FGuard WAF',
    icon: Book,
    items: [
      'Installation Guide',
      'Quick Start',
      'Basic Configuration',
      'First Steps'
    ]
  },
  {
    title: 'API Reference',
    description: 'Detailed API documentation',
    icon: Code,
    items: [
      'Authentication',
      'Endpoints',
      'Request/Response',
      'Error Handling'
    ]
  },
  {
    title: 'Security Rules',
    description: 'Configure WAF rules',
    icon: Shield,
    items: [
      'Rule Types',
      'Custom Rules',
      'Rule Management',
      'Best Practices'
    ]
  },
  {
    title: 'Advanced Topics',
    description: 'Advanced configuration and features',
    icon: Settings,
    items: [
      'Performance Tuning',
      'High Availability',
      'Monitoring',
      'Troubleshooting'
    ]
  }
];

export default function DocumentationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Documentation</h1>
        <p className="text-xl text-muted-foreground">
          Everything you need to know about FGuard WAF
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card rounded-lg border p-6"
          >
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <category.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold">{category.title}</h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            </div>
            <ul className="space-y-2">
              {category.items.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center justify-between p-2 rounded-md hover:bg-accent"
                  >
                    <span>{item}</span>
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 bg-card rounded-lg border p-6"
      >
        <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
        <p className="text-muted-foreground mb-4">
          Can't find what you're looking for? Our support team is here to help.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          Contact Support
        </a>
      </motion.div>
    </div>
  );
}
