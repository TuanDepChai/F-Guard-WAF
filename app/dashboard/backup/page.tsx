'use client';

import { motion } from 'framer-motion';
import { 
  Download,
  Upload,
  Clock,
  Database,
  FileText,
  Settings,
  Trash2,
  RefreshCw
} from 'lucide-react';

const backupHistory = [
  {
    id: 1,
    name: 'Full Backup',
    type: 'full',
    size: '2.5 GB',
    date: '2024-03-15 14:30',
    status: 'completed',
    retention: '30 days'
  },
  {
    id: 2,
    name: 'Incremental Backup',
    type: 'incremental',
    size: '500 MB',
    date: '2024-03-14 14:30',
    status: 'completed',
    retention: '30 days'
  },
  {
    id: 3,
    name: 'Full Backup',
    type: 'full',
    size: '2.4 GB',
    date: '2024-03-13 14:30',
    status: 'completed',
    retention: '30 days'
  },
  {
    id: 4,
    name: 'Incremental Backup',
    type: 'incremental',
    size: '450 MB',
    date: '2024-03-12 14:30',
    status: 'completed',
    retention: '30 days'
  }
];

const backupSettings = [
  {
    name: 'Backup Frequency',
    value: 'Daily',
    description: 'How often to create new backups'
  },
  {
    name: 'Retention Period',
    value: '30 days',
    description: 'How long to keep backup files'
  },
  {
    name: 'Backup Type',
    value: 'Full + Incremental',
    description: 'Type of backup to perform'
  },
  {
    name: 'Storage Location',
    value: 'Local + Cloud',
    description: 'Where to store backup files'
  }
];

export default function BackupPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Backup & Restore</h1>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground">
            <Download className="h-4 w-4" />
            Create Backup
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-md border bg-background">
            <Upload className="h-4 w-4" />
            Restore
          </button>
        </div>
      </div>

      {/* Backup Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-lg border p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Settings className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-xl font-bold">Backup Settings</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {backupSettings.map((setting, index) => (
            <motion.div
              key={setting.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-md bg-background"
            >
              <h3 className="font-medium">{setting.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{setting.description}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm font-medium">{setting.value}</span>
                <button className="text-sm text-primary hover:underline">Edit</button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Backup History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-lg border p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-xl font-bold">Backup History</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Name</th>
                <th className="text-left py-3 px-4">Type</th>
                <th className="text-left py-3 px-4">Size</th>
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Retention</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {backupHistory.map((backup, index) => (
                <motion.tr
                  key={backup.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {backup.type === 'full' ? (
                        <Database className="h-4 w-4 text-primary" />
                      ) : (
                        <FileText className="h-4 w-4 text-primary" />
                      )}
                      {backup.name}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="capitalize">{backup.type}</span>
                  </td>
                  <td className="py-3 px-4">{backup.size}</td>
                  <td className="py-3 px-4">{backup.date}</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {backup.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{backup.retention}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-accent rounded-full" title="Download">
                        <Download className="h-4 w-4" />
                      </button>
                      <button className="p-1 hover:bg-accent rounded-full" title="Restore">
                        <RefreshCw className="h-4 w-4" />
                      </button>
                      <button className="p-1 hover:bg-accent rounded-full" title="Delete">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Storage Usage */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-lg border p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Database className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-xl font-bold">Storage Usage</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-md bg-background">
            <h3 className="font-medium mb-2">Local Storage</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Used Space</span>
                <span className="font-medium">5.85 GB</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total Space</span>
                <span className="font-medium">10 GB</span>
              </div>
              <div className="w-full bg-accent rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '58.5%' }}></div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-md bg-background">
            <h3 className="font-medium mb-2">Cloud Storage</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Used Space</span>
                <span className="font-medium">15.2 GB</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total Space</span>
                <span className="font-medium">50 GB</span>
              </div>
              <div className="w-full bg-accent rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '30.4%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 