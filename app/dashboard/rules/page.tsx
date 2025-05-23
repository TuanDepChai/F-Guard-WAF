'use client';

import { motion } from 'framer-motion';
import { 
  Shield,
  Plus,
  Search,
  Filter,
  MoreVertical,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Edit,
  Trash2,
  Copy
} from 'lucide-react';

const rules = [
  {
    id: 1,
    name: 'SQL Injection Protection',
    description: 'Blocks SQL injection attempts in query parameters',
    type: 'security',
    status: 'active',
    priority: 'high',
    lastModified: '2024-03-15 14:30',
    matches: '1,234'
  },
  {
    id: 2,
    name: 'XSS Prevention',
    description: 'Prevents cross-site scripting attacks',
    type: 'security',
    status: 'active',
    priority: 'high',
    lastModified: '2024-03-15 13:45',
    matches: '856'
  },
  {
    id: 3,
    name: 'Rate Limiting',
    description: 'Limits requests per IP address',
    type: 'performance',
    status: 'active',
    priority: 'medium',
    lastModified: '2024-03-14 09:15',
    matches: '2,345'
  }
];

export default function RulesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">WAF Rules</h1>
        <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground">
          <Plus className="h-4 w-4" />
          Add New Rule
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search rules..."
            className="w-full pl-10 pr-4 py-2 rounded-md border bg-background"
          />
        </div>
        <div className="flex gap-2">
          <select className="px-4 py-2 rounded-md border bg-background">
            <option>All Types</option>
            <option>Security</option>
            <option>Performance</option>
            <option>Compliance</option>
          </select>
          <select className="px-4 py-2 rounded-md border bg-background">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
          <select className="px-4 py-2 rounded-md border bg-background">
            <option>All Priorities</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <button className="p-2 rounded-md border bg-background">
            <Filter className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Rules Table */}
      <div className="bg-card rounded-lg border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-left text-sm font-medium">Rule</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Type</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Priority</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Matches</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Last Modified</th>
              <th className="px-6 py-3 text-right text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rules.map((rule, index) => (
              <motion.tr
                key={rule.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b last:border-0"
              >
                <td className="px-6 py-4">
                  <div>
                    <div className="font-medium">{rule.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {rule.description}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    <Shield className="h-3 w-3 mr-1" />
                    {rule.type}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    rule.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {rule.status === 'active' ? (
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                    ) : (
                      <XCircle className="h-3 w-3 mr-1" />
                    )}
                    {rule.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    rule.priority === 'high'
                      ? 'bg-red-100 text-red-800'
                      : rule.priority === 'medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {rule.priority}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">
                  {rule.matches}
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">
                  {rule.lastModified}
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 rounded-md hover:bg-accent">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-md hover:bg-accent">
                      <Copy className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-md hover:bg-accent">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 