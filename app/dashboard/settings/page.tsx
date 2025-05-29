'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, Shield, Bell, Settings as SettingsIcon, Key } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'sonner';

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  const { userData } = useAuth();

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center space-x-4 mb-8">
        <SettingsIcon className="h-10 w-10 text-blue-600" />
        <h1 className="text-3xl font-bold">System Settings</h1>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">
            <User className="h-4 w-4 mr-2" />
            General
          </TabsTrigger>
          <TabsTrigger value="security">
            <Shield className="h-4 w-4 mr-2" />
            Security
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="license">
            <Key className="h-4 w-4 mr-2" />
            License
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="site-name">Site Name</Label>
                <Input id="site-name" placeholder="Your Site Name" />
              </div>
              <div className="space-y-2">
                 <Label htmlFor="default-language">Default Language</Label>
                 <Select defaultValue="en">
                   <SelectTrigger>
                     <SelectValue placeholder="Select language" />
                   </SelectTrigger>
                   <SelectContent>
                     <SelectItem value="en">English</SelectItem>
                     <SelectItem value="vi">Tiếng Việt</SelectItem>
                     <SelectItem value="zh">中文</SelectItem>
                   </SelectContent>
                 </Select>
              </div>
               <div className="flex items-center justify-between">
                 <Label htmlFor="dark-mode">Enable Dark Mode</Label>
                 <Switch id="dark-mode" />
               </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                 <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                 <Switch id="two-factor" />
              </div>
               <div className="space-y-2">
                 <Label htmlFor="password-policy">Password Policy</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger>
                      <SelectValue placeholder="Select policy" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
               </div>
               <Button variant="outline">Change Password</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
           <Card>
             <CardHeader>
               <CardTitle>Notification Settings</CardTitle>
             </CardHeader>
             <CardContent className="space-y-4">
               <div className="flex items-center justify-between">
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <Switch id="email-notifications" defaultChecked />
                </div>
                 <div className="flex items-center justify-between">
                   <Label htmlFor="sms-notifications">SMS Notifications</Label>
                   <Switch id="sms-notifications" />
                 </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="push-notifications">Push Notifications</Label>
                    <Switch id="push-notifications" />
                  </div>
             </CardContent>
           </Card>
        </TabsContent>

        <TabsContent value="license" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>License Information</CardTitle>
              <CardDescription>Manage your software license key.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="license-key">Your License Key</Label>
                <div className="flex items-center space-x-2">
                  <Input id="license-key" value={userData?.licenseKey || ''} readOnly className="font-mono" />
                   {userData?.licenseKey && (
                      <CopyToClipboard
                         text={userData.licenseKey}
                         onCopy={() => toast.success('License key copied to clipboard!')}
                       >
                        <Button variant="outline" size="sm">Copy Key</Button>
                      </CopyToClipboard>
                   )}
                </div>
                {!userData?.licenseKey && (
                  <p className="text-sm text-yellow-600">No license key found. Please contact support.</p>
                )}
              </div>
              <div className="space-y-2 mt-4">
                <p className="font-medium">License Details (Placeholder):</p>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                  <li>Plan: Pro</li>
                  <li>Status: Active</li>
                  <li>Expires: 2025-12-31</li>
                  <li>Usage: 5/10 users</li>
                </ul>
              </div>
              <Button variant="outline">View License Details</Button>
              <Button>Renew License</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage; 