'use client';

import { motion } from 'framer-motion';
import { 
  Shield,
  AlertTriangle,
  Lock,
  Globe,
  Server,
  Activity,
  AlertCircle,
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
  AreaChart,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const securityMetrics = [
  {
    id: 1,
    name: 'Total Attacks Blocked',
    value: '1,234',
    change: '+12.5%',
    trend: 'up'
  },
  {
    id: 2,
    name: 'Active Threats',
    value: '23',
    change: '-5.2%',
    trend: 'down'
  },
  {
    id: 3,
    name: 'Security Score',
    value: '92/100',
    change: '+2.1%',
    trend: 'up'
  },
  {
    id: 4,
    name: 'Vulnerabilities',
    value: '5',
    change: '-15.3%',
    trend: 'down'
  }
];

const attackTypes = [
  { name: 'SQL Injection', value: 35 },
  { name: 'XSS', value: 25 },
  { name: 'DDoS', value: 20 },
  { name: 'Brute Force', value: 15 },
  { name: 'Other', value: 5 }
];

const attackData = [
  { time: '00:00', attacks: 12, blocked: 10 },
  { time: '01:00', attacks: 15, blocked: 13 },
  { time: '02:00', attacks: 8, blocked: 7 },
  { time: '03:00', attacks: 20, blocked: 18 },
  { time: '04:00', attacks: 25, blocked: 22 },
  { time: '05:00', attacks: 18, blocked: 16 },
  { time: '06:00', attacks: 22, blocked: 20 }
];

const recentThreats = [
  {
    id: 1,
    type: 'SQL Injection Attempt',
    source: '192.168.1.100',
    time: '2 minutes ago',
    status: 'blocked'
  },
  {
    id: 2,
    type: 'XSS Attack',
    source: '10.0.0.50',
    time: '5 minutes ago',
    status: 'blocked'
  },
  {
    id: 3,
    type: 'DDoS Attack',
    source: '45.67.89.123',
    time: '10 minutes ago',
    status: 'mitigated'
  }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export default function SecurityPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Security Analysis</h1>
        <div className="flex gap-4">
          <select className="px-4 py-2 rounded-md border bg-background">
            <option>Last 24 hours</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
          <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground">
            Export Report
          </button>
        </div>
      </div>

      {/* Security Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {securityMetrics.map((metric, index) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card rounded-lg p-6 border"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                metric.trend === 'up' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {metric.change}
              </span>
            </div>
            <h3 className="font-medium">{metric.name}</h3>
            <p className="text-2xl font-bold mt-2">{metric.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Attack Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-lg border p-6"
        >
          <h2 className="text-xl font-bold mb-4">Attack Distribution</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={attackTypes}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {attackTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Attack Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-lg border p-6"
        >
          <h2 className="text-xl font-bold mb-4">Attack Timeline</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={attackData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="attacks"
                  stroke="#FF4B4B"
                  fill="#FF4B4B20"
                  name="Total Attacks"
                />
                <Area
                  type="monotone"
                  dataKey="blocked"
                  stroke="#4CAF50"
                  fill="#4CAF5020"
                  name="Blocked Attacks"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Recent Threats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-lg border p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <AlertTriangle className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-xl font-bold">Recent Threats</h2>
        </div>

        <div className="space-y-4">
          {recentThreats.map((threat, index) => (
            <motion.div
              key={threat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-md bg-background"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {threat.status === 'blocked' ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-yellow-500" />
                  )}
                  <div>
                    <h3 className="font-medium">{threat.type}</h3>
                    <p className="text-sm text-muted-foreground">Source: {threat.source}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">{threat.time}</span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    threat.status === 'blocked' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {threat.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 