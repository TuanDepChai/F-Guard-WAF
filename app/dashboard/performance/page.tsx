'use client';

import { motion } from 'framer-motion';
import { 
  Activity,
  Clock,
  Cpu,
  HardDrive,
  Network,
  Server,
  TrendingUp
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
  AreaChart,
  LineChart
} from 'recharts';

const performanceMetrics = [
  {
    title: 'CPU Usage',
    value: '45%',
    change: '+2.5%',
    trend: 'up',
    icon: Cpu
  },
  {
    title: 'Memory Usage',
    value: '68%',
    change: '-1.2%',
    trend: 'down',
    icon: HardDrive
  },
  {
    title: 'Network Traffic',
    value: '1.2 GB/s',
    change: '+5.8%',
    trend: 'up',
    icon: Network
  },
  {
    title: 'Response Time',
    value: '45ms',
    change: '-3.2%',
    trend: 'down',
    icon: Clock
  }
];

const cpuData = [
  { time: '00:00', usage: 35 },
  { time: '01:00', usage: 42 },
  { time: '02:00', usage: 38 },
  { time: '03:00', usage: 45 },
  { time: '04:00', usage: 40 },
  { time: '05:00', usage: 48 },
  { time: '06:00', usage: 52 }
];

const memoryData = [
  { time: '00:00', used: 60, total: 100 },
  { time: '01:00', used: 65, total: 100 },
  { time: '02:00', used: 62, total: 100 },
  { time: '03:00', used: 68, total: 100 },
  { time: '04:00', used: 70, total: 100 },
  { time: '05:00', used: 72, total: 100 },
  { time: '06:00', used: 75, total: 100 }
];

const networkData = [
  { time: '00:00', incoming: 800, outgoing: 400 },
  { time: '01:00', incoming: 1000, outgoing: 500 },
  { time: '02:00', incoming: 900, outgoing: 450 },
  { time: '03:00', incoming: 1200, outgoing: 600 },
  { time: '04:00', incoming: 1100, outgoing: 550 },
  { time: '05:00', incoming: 1300, outgoing: 650 },
  { time: '06:00', incoming: 1400, outgoing: 700 }
];

const serverStatus = [
  {
    name: 'Web Server 1',
    status: 'healthy',
    uptime: '99.99%',
    load: '45%',
    memory: '68%'
  },
  {
    name: 'Web Server 2',
    status: 'healthy',
    uptime: '99.98%',
    load: '42%',
    memory: '65%'
  },
  {
    name: 'Database Server',
    status: 'warning',
    uptime: '99.95%',
    load: '78%',
    memory: '82%'
  },
  {
    name: 'Cache Server',
    status: 'healthy',
    uptime: '99.99%',
    load: '35%',
    memory: '45%'
  }
];

export default function PerformancePage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Performance Monitoring</h1>
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

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {performanceMetrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card rounded-lg p-6 border"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <metric.icon className="h-6 w-6 text-primary" />
              </div>
              <span className={`text-sm ${
                metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
              }`}>
                {metric.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold">{metric.value}</h3>
            <p className="text-muted-foreground">{metric.title}</p>
          </motion.div>
        ))}
      </div>

      {/* CPU Usage Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-lg border p-6"
      >
        <h2 className="text-xl font-bold mb-4">CPU Usage</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={cpuData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="usage"
                stroke="#10B981"
                fill="#10B98120"
                name="CPU Usage (%)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Memory and Network Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card rounded-lg border p-6"
        >
          <h2 className="text-xl font-bold mb-4">Memory Usage</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={memoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="used"
                  stroke="#3B82F6"
                  fill="#3B82F620"
                  name="Used Memory (%)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card rounded-lg border p-6"
        >
          <h2 className="text-xl font-bold mb-4">Network Traffic</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={networkData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="incoming"
                  stroke="#8B5CF6"
                  strokeWidth={2}
                  name="Incoming (MB/s)"
                />
                <Line
                  type="monotone"
                  dataKey="outgoing"
                  stroke="#EC4899"
                  strokeWidth={2}
                  name="Outgoing (MB/s)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Server Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-lg border p-6"
      >
        <h2 className="text-xl font-bold mb-4">Server Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {serverStatus.map((server, index) => (
            <motion.div
              key={server.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-md bg-background"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">{server.name}</h3>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  server.status === 'healthy' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {server.status}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Uptime</span>
                  <span className="font-medium">{server.uptime}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Load</span>
                  <span className="font-medium">{server.load}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Memory</span>
                  <span className="font-medium">{server.memory}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 