'use client';

import { motion } from 'framer-motion';
import { 
  Shield, 
  Activity, 
  AlertTriangle, 
  Globe,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const stats = [
  {
    title: 'Total Requests',
    value: '1.2M',
    change: '+12.3%',
    trend: 'up',
    icon: Globe
  },
  {
    title: 'Blocked Attacks',
    value: '24.5K',
    change: '+8.1%',
    trend: 'up',
    icon: Shield
  },
  {
    title: 'Active Rules',
    value: '156',
    change: '-2.4%',
    trend: 'down',
    icon: Activity
  },
  {
    title: 'Threats Detected',
    value: '892',
    change: '+15.7%',
    trend: 'up',
    icon: AlertTriangle
  }
];

const recentActivity = [
  {
    type: 'SQL Injection Attempt',
    domain: 'example.com',
    time: '2 minutes ago',
    severity: 'high'
  },
  {
    type: 'XSS Attack Blocked',
    domain: 'api.example.com',
    time: '15 minutes ago',
    severity: 'medium'
  },
  {
    type: 'DDoS Attack Mitigated',
    domain: 'example.com',
    time: '1 hour ago',
    severity: 'high'
  }
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card rounded-lg p-6 border"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
              </div>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="flex items-center mt-4">
              {stat.trend === 'up' ? (
                <ArrowUpRight className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowDownRight className="h-4 w-4 text-red-500" />
              )}
              <span className={`text-sm ml-1 ${
                stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
              }`}>
                {stat.change}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-card rounded-lg border p-6">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 rounded-md bg-background"
            >
              <div className="flex items-center space-x-4">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  activity.severity === 'high' ? 'bg-red-100' : 'bg-yellow-100'
                }`}>
                  <AlertTriangle className={`h-5 w-5 ${
                    activity.severity === 'high' ? 'text-red-500' : 'text-yellow-500'
                  }`} />
                </div>
                <div>
                  <p className="font-medium">{activity.type}</p>
                  <p className="text-sm text-muted-foreground">{activity.domain}</p>
                </div>
              </div>
              <span className="text-sm text-muted-foreground">{activity.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 