'use client';

import { motion } from 'framer-motion';
import { 
  FileText,
  Download,
  Calendar,
  Filter,
  BarChart,
  LineChart,
  PieChart,
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
  LineChart as RechartsLineChart,
  AreaChart as RechartsAreaChart,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  BarChart as RechartsBarChart,
  Bar
} from 'recharts';

const reportMetrics = [
  {
    id: 1,
    name: 'Total Reports',
    value: '156',
    change: '+8.2%',
    trend: 'up'
  },
  {
    id: 2,
    name: 'Critical Issues',
    value: '12',
    change: '-3.5%',
    trend: 'down'
  },
  {
    id: 3,
    name: 'Resolved Issues',
    value: '89%',
    change: '+5.1%',
    trend: 'up'
  },
  {
    id: 4,
    name: 'Average Response Time',
    value: '2.5h',
    change: '-12.3%',
    trend: 'down'
  }
];

const issueTypes = [
  { name: 'Security', value: 35 },
  { name: 'Performance', value: 25 },
  { name: 'Availability', value: 20 },
  { name: 'Compliance', value: 15 },
  { name: 'Other', value: 5 }
];

const issueData = [
  { date: '2024-03-01', reported: 12, resolved: 10 },
  { date: '2024-03-02', reported: 15, resolved: 13 },
  { date: '2024-03-03', reported: 8, resolved: 7 },
  { date: '2024-03-04', reported: 20, resolved: 18 },
  { date: '2024-03-05', reported: 25, resolved: 22 },
  { date: '2024-03-06', reported: 18, resolved: 16 },
  { date: '2024-03-07', reported: 22, resolved: 20 }
];

const recentIssues = [
  {
    id: 1,
    type: 'Security Vulnerability',
    severity: 'High',
    status: 'Open',
    time: '2 hours ago'
  },
  {
    id: 2,
    type: 'Performance Degradation',
    severity: 'Medium',
    status: 'In Progress',
    time: '5 hours ago'
  },
  {
    id: 3,
    type: 'Service Outage',
    severity: 'Critical',
    status: 'Resolved',
    time: '1 day ago'
  }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Reports</h1>
        <div className="flex gap-4">
          <select className="px-4 py-2 rounded-md border bg-background">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground">
            <Download className="h-4 w-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* Report Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reportMetrics.map((metric, index) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card rounded-lg p-6 border"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary" />
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

      {/* Issue Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-lg border p-6"
        >
          <h2 className="text-xl font-bold mb-4">Issue Distribution</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={issueTypes}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {issueTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Issue Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-lg border p-6"
        >
          <h2 className="text-xl font-bold mb-4">Issue Timeline</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsAreaChart data={issueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="reported"
                  stroke="#FF4B4B"
                  fill="#FF4B4B20"
                  name="Reported Issues"
                />
                <Area
                  type="monotone"
                  dataKey="resolved"
                  stroke="#4CAF50"
                  fill="#4CAF5020"
                  name="Resolved Issues"
                />
              </RechartsAreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Recent Issues */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-lg border p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <AlertTriangle className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-xl font-bold">Recent Issues</h2>
        </div>

        <div className="space-y-4">
          {recentIssues.map((issue, index) => (
            <motion.div
              key={issue.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-md bg-background"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {issue.status === 'Resolved' ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : issue.status === 'Open' ? (
                    <XCircle className="h-5 w-5 text-red-500" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  )}
                  <div>
                    <h3 className="font-medium">{issue.type}</h3>
                    <p className="text-sm text-muted-foreground">Severity: {issue.severity}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">{issue.time}</span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    issue.status === 'Resolved' 
                      ? 'bg-green-100 text-green-800'
                      : issue.status === 'Open'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {issue.status}
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