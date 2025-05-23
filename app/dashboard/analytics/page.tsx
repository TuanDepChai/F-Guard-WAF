'use client';

import { motion } from 'framer-motion';
import { 
  BarChart as BarChartIcon, 
  LineChart as LineChartIcon, 
  PieChart as PieChartIcon,
  TrendingUp,
  AlertTriangle,
  Shield,
  Globe
} from 'lucide-react';
import {
  Line,
  Bar,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  LineChart,
  BarChart,
  PieChart
} from 'recharts';

const attackStats = [
  {
    type: 'SQL Injection',
    count: 245,
    trend: '+12%',
    icon: AlertTriangle
  },
  {
    type: 'XSS Attacks',
    count: 189,
    trend: '-5%',
    icon: Shield
  },
  {
    type: 'DDoS Attempts',
    count: 78,
    trend: '+23%',
    icon: Globe
  }
];

const trafficData = [
  { name: 'Mon', legitimate: 1200, blocked: 300 },
  { name: 'Tue', legitimate: 1900, blocked: 500 },
  { name: 'Wed', legitimate: 1500, blocked: 400 },
  { name: 'Thu', legitimate: 2100, blocked: 600 },
  { name: 'Fri', legitimate: 1800, blocked: 450 },
  { name: 'Sat', legitimate: 1400, blocked: 350 },
  { name: 'Sun', legitimate: 1600, blocked: 400 }
];

const attackDistribution = [
  { name: 'SQL Injection', value: 245 },
  { name: 'XSS', value: 189 },
  { name: 'DDoS', value: 78 },
  { name: 'Path Traversal', value: 45 },
  { name: 'File Upload', value: 32 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const detailedStats = [
  { name: 'Jan', attacks: 400, blocked: 240, legitimate: 1800 },
  { name: 'Feb', attacks: 300, blocked: 139, legitimate: 1600 },
  { name: 'Mar', attacks: 200, blocked: 980, legitimate: 2200 },
  { name: 'Apr', attacks: 278, blocked: 390, legitimate: 1900 },
  { name: 'May', attacks: 189, blocked: 480, legitimate: 2100 },
  { name: 'Jun', attacks: 239, blocked: 380, legitimate: 1800 }
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Analytics</h1>
        <div className="flex gap-4">
          <select className="px-4 py-2 rounded-md border bg-background">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
          <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground">
            Export Report
          </button>
        </div>
      </div>

      {/* Attack Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {attackStats.map((stat, index) => (
          <motion.div
            key={stat.type}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card rounded-lg p-6 border"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <span className={`text-sm ${
                stat.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'
              }`}>
                {stat.trend}
              </span>
            </div>
            <h3 className="text-2xl font-bold">{stat.count}</h3>
            <p className="text-muted-foreground">{stat.type}</p>
          </motion.div>
        ))}
      </div>

      {/* Traffic Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card rounded-lg border p-6"
        >
          <h2 className="text-xl font-bold mb-4">Traffic Overview</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="legitimate" 
                  stroke="#10B981" 
                  strokeWidth={2}
                  name="Legitimate Traffic"
                />
                <Line 
                  type="monotone" 
                  dataKey="blocked" 
                  stroke="#EF4444" 
                  strokeWidth={2}
                  name="Blocked Traffic"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card rounded-lg border p-6"
        >
          <h2 className="text-xl font-bold mb-4">Attack Distribution</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={attackDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {attackDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Detailed Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-lg border p-6"
      >
        <h2 className="text-xl font-bold mb-4">Detailed Statistics</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={detailedStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="attacks" fill="#8884d8" name="Total Attacks" />
              <Bar dataKey="blocked" fill="#82ca9d" name="Blocked Attacks" />
              <Bar dataKey="legitimate" fill="#ffc658" name="Legitimate Traffic" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
} 