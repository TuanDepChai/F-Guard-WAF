'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Shield, 
  Activity, 
  Settings, 
  Users, 
  FileText,
  Bell,
  Menu,
  ChevronLeft,
  ChevronRight,
  Gauge,
  Database,
  Code,
  Lock
} from 'lucide-react';
import Notifications from './notifications';

const menuItems = [
  { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
  { icon: Shield, label: 'WAF Rules', href: '/dashboard/rules' },
  { icon: Activity, label: 'Analytics', href: '/dashboard/analytics' },
  { icon: Gauge, label: 'Performance', href: '/dashboard/performance' },
  { icon: Code, label: 'API Monitoring', href: '/dashboard/api-monitoring' },
  { icon: Lock, label: 'Security Analysis', href: '/dashboard/security' },
  { icon: Users, label: 'Users', href: '/dashboard/users' },
  { icon: FileText, label: 'Reports', href: '/dashboard/reports' },
  { icon: Database, label: 'Backup', href: '/dashboard/backup' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <motion.div
        initial={{ width: 240 }}
        animate={{ width: isSidebarOpen ? 240 : 80 }}
        className="h-full border-r bg-card"
      >
        <div className="flex items-center justify-between p-4 border-b">
          {isSidebarOpen && (
            <h1 className="text-xl font-bold">FGuard WAF</h1>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-md hover:bg-accent"
          >
            {isSidebarOpen ? (
              <ChevronLeft className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent"
                >
                  <item.icon className="h-5 w-5" />
                  {isSidebarOpen && <span>{item.label}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 border-b bg-card flex items-center justify-between px-6">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-md hover:bg-accent md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-4">
            <Notifications />
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-sm font-medium">JD</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
} 