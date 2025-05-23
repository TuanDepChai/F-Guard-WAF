'use client';

import { motion } from 'framer-motion';
import { 
  Activity,
  Clock,
  Code,
  Globe,
  Server,
  Settings,
  AlertTriangle,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import {
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  AreaChart
} from 'recharts';

const apiEndpoints = [
  {
    id: 1,
    name: 'Authentication API',
    path: '/api/auth',
    method: 'POST',
    status: 'active',
    uptime: '99.99%',
    responseTime: '45ms',
    requests: '1.2k/min',
    errors: '0.1%'
  },
  {
    id: 2,
    name: 'User Management',
    path: '/api/users',
    method: 'GET',
    status: 'active',
    uptime: '99.95%',
    responseTime: '38ms',
    requests: '800/min',
    errors: '0.2%'
  },
  {
    id: 3,
    name: 'Data Processing',
    path: '/api/process',
    method: 'POST',
    status: 'warning',
    uptime: '99.90%',
    responseTime: '120ms',
    requests: '500/min',
    errors: '1.5%'
  },
  {
    id: 4,
    name: 'File Upload',
    path: '/api/upload',
    method: 'POST',
    status: 'active',
    uptime: '99.98%',
    responseTime: '85ms',
    requests: '300/min',
    errors: '0.5%'
  }
];

const responseTimeData = [
  { time: '00:00', auth: 45, users: 38, process: 120, upload: 85 },
  { time: '01:00', auth: 42, users: 35, process: 115, upload: 82 },
  { time: '02:00', auth: 48, users: 40, process: 125, upload: 88 },
  { time: '03:00', auth: 45, users: 38, process: 120, upload: 85 },
  { time: '04:00', auth: 50, users: 42, process: 130, upload: 90 },
  { time: '05:00', auth: 47, users: 39, process: 122, upload: 86 },
  { time: '06:00', auth: 45, users: 38, process: 120, upload: 85 }
];

const errorRateData = [
  { time: '00:00', auth: 0.1, users: 0.2, process: 1.5, upload: 0.5 },
  { time: '01:00', auth: 0.2, users: 0.3, process: 1.8, upload: 0.6 },
  { time: '02:00', auth: 0.1, users: 0.2, process: 1.4, upload: 0.4 },
  { time: '03:00', auth: 0.3, users: 0.4, process: 2.0, upload: 0.7 },
  { time: '04:00', auth: 0.2, users: 0.3, process: 1.7, upload: 0.5 },
  { time: '05:00', auth: 0.1, users: 0.2, process: 1.5, upload: 0.4 },
  { time: '06:00', auth: 0.2, users: 0.3, process: 1.6, upload: 0.5 }
];

const recentErrors = [
  {
    id: 1,
    endpoint: 'Data Processing',
    error: 'Timeout Error',
    time: '2 minutes ago',
    status: 'critical'
  },
  {
    id: 2,
    endpoint: 'File Upload',
    error: 'Invalid File Format',
    time: '5 minutes ago',
    status: 'warning'
  },
  {
    id: 3,
    endpoint: 'User Management',
    error: 'Rate Limit Exceeded',
    time: '10 minutes ago',
    status: 'warning'
  }
];

export default function ApiMonitoringPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">API Monitoring</h1>
        <div className="flex gap-4">
          <select className="px-4 py-2 rounded-md border bg-background">
            <option>Last 24 hours</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
          <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground">
            Export Data
          </button>
        </div>
      </div>

      {/* API Endpoints Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {apiEndpoints.map((endpoint, index) => (
          <motion.div
            key={endpoint.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card rounded-lg p-6 border"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                endpoint.status === 'active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {endpoint.status}
              </span>
            </div>
            <h3 className="font-medium">{endpoint.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{endpoint.path}</p>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Uptime</span>
                <span className="font-medium">{endpoint.uptime}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Response Time</span>
                <span className="font-medium">{endpoint.responseTime}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Requests</span>
                <span className="font-medium">{endpoint.requests}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Error Rate</span>
                <span className="font-medium">{endpoint.errors}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Response Time Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-lg border p-6"
      >
        <h2 className="text-xl font-bold mb-4">Response Time</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={responseTimeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="auth"
                stroke="#10B981"
                strokeWidth={2}
                name="Authentication API"
              />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#3B82F6"
                strokeWidth={2}
                name="User Management"
              />
              <Line
                type="monotone"
                dataKey="process"
                stroke="#8B5CF6"
                strokeWidth={2}
                name="Data Processing"
              />
              <Line
                type="monotone"
                dataKey="upload"
                stroke="#EC4899"
                strokeWidth={2}
                name="File Upload"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Error Rate Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-lg border p-6"
      >
        <h2 className="text-xl font-bold mb-4">Error Rate</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={errorRateData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="auth"
                stroke="#10B981"
                fill="#10B98120"
                name="Authentication API"
              />
              <Area
                type="monotone"
                dataKey="users"
                stroke="#3B82F6"
                fill="#3B82F620"
                name="User Management"
              />
              <Area
                type="monotone"
                dataKey="process"
                stroke="#8B5CF6"
                fill="#8B5CF620"
                name="Data Processing"
              />
              <Area
                type="monotone"
                dataKey="upload"
                stroke="#EC4899"
                fill="#EC489920"
                name="File Upload"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Recent Errors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-lg border p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <AlertTriangle className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-xl font-bold">Recent Errors</h2>
        </div>

        <div className="space-y-4">
          {recentErrors.map((error, index) => (
            <motion.div
              key={error.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-md bg-background"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {error.status === 'critical' ? (
                    <XCircle className="h-5 w-5 text-red-500" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  )}
                  <div>
                    <h3 className="font-medium">{error.endpoint}</h3>
                    <p className="text-sm text-muted-foreground">{error.error}</p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">{error.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 