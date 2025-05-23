'use client';

import { motion } from 'framer-motion';
import { 
  Shield,
  Bell,
  Globe,
  Lock,
  Mail,
  Save
} from 'lucide-react';

interface ToggleSetting {
  name: string;
  description: string;
  type: 'toggle';
  value: boolean;
}

interface NumberSetting {
  name: string;
  description: string;
  type: 'number';
  value: number;
}

interface SelectSetting {
  name: string;
  description: string;
  type: 'select';
  value: string;
  options: string[];
}

type Setting = ToggleSetting | NumberSetting | SelectSetting;

interface SettingsSection {
  title: string;
  icon: React.ElementType;
  settings: Setting[];
}

const settingsSections: SettingsSection[] = [
  {
    title: 'Security Settings',
    icon: Shield,
    settings: [
      {
        name: 'Block Suspicious IPs',
        description: 'Automatically block IPs that show suspicious behavior',
        type: 'toggle',
        value: true
      },
      {
        name: 'Rate Limiting',
        description: 'Limit the number of requests from a single IP',
        type: 'number',
        value: 100
      },
      {
        name: 'SSL/TLS',
        description: 'Enforce HTTPS connections',
        type: 'toggle',
        value: true
      }
    ]
  },
  {
    title: 'Notification Settings',
    icon: Bell,
    settings: [
      {
        name: 'Email Notifications',
        description: 'Receive security alerts via email',
        type: 'toggle',
        value: true
      },
      {
        name: 'Notification Frequency',
        description: 'How often to receive notifications',
        type: 'select',
        value: 'realtime',
        options: ['realtime', 'hourly', 'daily']
      }
    ]
  },
  {
    title: 'General Settings',
    icon: Globe,
    settings: [
      {
        name: 'Time Zone',
        description: 'Set your local time zone',
        type: 'select',
        value: 'UTC',
        options: ['UTC', 'EST', 'PST', 'GMT']
      },
      {
        name: 'Language',
        description: 'Choose your preferred language',
        type: 'select',
        value: 'en',
        options: ['en', 'es', 'fr', 'de']
      }
    ]
  }
];

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Settings</h1>
        <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground">
          <Save className="h-4 w-4" />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {settingsSections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card rounded-lg border p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <section.icon className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold">{section.title}</h2>
            </div>

            <div className="space-y-6">
              {section.settings.map((setting) => (
                <div key={setting.name} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{setting.name}</h3>
                    <p className="text-sm text-muted-foreground">{setting.description}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    {setting.type === 'toggle' && (
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked={setting.value} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    )}
                    {setting.type === 'select' && (
                      <select
                        className="px-3 py-2 rounded-md border bg-background"
                        defaultValue={setting.value}
                      >
                        {setting.options.map((option) => (
                          <option key={option} value={option}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </option>
                        ))}
                      </select>
                    )}
                    {setting.type === 'number' && (
                      <input
                        type="number"
                        className="w-24 px-3 py-2 rounded-md border bg-background"
                        defaultValue={setting.value}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* API Keys Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-lg border p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Lock className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-xl font-bold">API Keys</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-md bg-background">
            <div>
              <h3 className="font-medium">Production API Key</h3>
              <p className="text-sm text-muted-foreground">Used for production environment</p>
            </div>
            <div className="flex items-center gap-4">
              <code className="px-3 py-1 rounded bg-accent text-sm">••••••••••••••••</code>
              <button className="text-sm text-primary hover:underline">Regenerate</button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 rounded-md bg-background">
            <div>
              <h3 className="font-medium">Development API Key</h3>
              <p className="text-sm text-muted-foreground">Used for development environment</p>
            </div>
            <div className="flex items-center gap-4">
              <code className="px-3 py-1 rounded bg-accent text-sm">••••••••••••••••</code>
              <button className="text-sm text-primary hover:underline">Regenerate</button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Email Settings Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-lg border p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-xl font-bold">Email Settings</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-md bg-background">
            <div>
              <h3 className="font-medium">Notification Email</h3>
              <p className="text-sm text-muted-foreground">Email address for security notifications</p>
            </div>
            <input
              type="email"
              className="px-3 py-2 rounded-md border bg-background"
              defaultValue="admin@example.com"
            />
          </div>

          <div className="flex items-center justify-between p-4 rounded-md bg-background">
            <div>
              <h3 className="font-medium">SMTP Settings</h3>
              <p className="text-sm text-muted-foreground">Configure email server settings</p>
            </div>
            <button className="text-sm text-primary hover:underline">Configure</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 