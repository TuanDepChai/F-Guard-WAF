'use client';

import { motion } from 'framer-motion';
import { 
  Users, 
  Plus,
  Search,
  Filter,
  Mail,
  Shield,
  MoreVertical,
  CheckCircle,
  XCircle
} from 'lucide-react';

const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin',
    status: 'active',
    lastLogin: '2024-03-15 14:30',
    permissions: ['manage_rules', 'view_analytics', 'manage_users']
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'analyst',
    status: 'active',
    lastLogin: '2024-03-15 13:45',
    permissions: ['view_analytics', 'view_rules']
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike@example.com',
    role: 'viewer',
    status: 'inactive',
    lastLogin: '2024-03-14 09:15',
    permissions: ['view_analytics']
  }
];

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">User Management</h1>
        <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground">
          <Plus className="h-4 w-4" />
          Add New User
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search users..."
            className="w-full pl-10 pr-4 py-2 rounded-md border bg-background"
          />
        </div>
        <div className="flex gap-2">
          <select className="px-4 py-2 rounded-md border bg-background">
            <option>All Roles</option>
            <option>Admin</option>
            <option>Analyst</option>
            <option>Viewer</option>
          </select>
          <select className="px-4 py-2 rounded-md border bg-background">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
          <button className="p-2 rounded-md border bg-background">
            <Filter className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-card rounded-lg border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-left text-sm font-medium">User</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Role</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Last Login</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Permissions</th>
              <th className="px-6 py-3 text-right text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b last:border-0"
              >
                <td className="px-6 py-4">
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-muted-foreground flex items-center">
                      <Mail className="h-3 w-3 mr-1" />
                      {user.email}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    <Shield className="h-3 w-3 mr-1" />
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    user.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {user.status === 'active' ? (
                      <CheckCircle className="h-3 w-3 mr-1" />
                    ) : (
                      <XCircle className="h-3 w-3 mr-1" />
                    )}
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">
                  {user.lastLogin}
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {user.permissions.map((permission) => (
                      <span
                        key={permission}
                        className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-accent"
                      >
                        {permission}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 rounded-md hover:bg-accent">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 