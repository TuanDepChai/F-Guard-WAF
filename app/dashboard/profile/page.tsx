'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Shield, User, Settings, Bell, Lock, Key, Mail, Phone, Globe, ShieldCheck, Download, LogIn, Clock, Smartphone, LogOut, Upload, Trash2, ExternalLink, Facebook, Twitter, Github, Linkedin, Instagram, AlertTriangle, Calendar, DollarSign, Clock as ClockIcon, ListOrdered } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

const ProfilePage: React.FC = () => {
  const { userData, setUserData, logout } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('general');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: userData?.username || '',
    email: userData?.email || '',
    phone: userData?.phone || '',
    timezone: 'UTC',
    notifications: {
      email: true,
      sms: false,
      security: true,
      updates: true
    },
    dateFormat: 'MM/DD/YYYY',
    timeFormat: '12h',
    currency: 'USD',
    numberFormat: '1,234.56'
  });
  const [showDeviceManagement, setShowDeviceManagement] = useState(false);
  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const [showDeleteAccount, setShowDeleteAccount] = useState(false);
  const [showExportData, setShowExportData] = useState(false);
  const [showBackupRestore, setShowBackupRestore] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(userData?.avatar || '');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNotificationChange = (key: string) => {
    setFormData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: !prev.notifications[key as keyof typeof prev.notifications]
      }
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData(prev => ({
      ...prev,
      username: userData?.username || '',
      email: userData?.email || '',
      phone: userData?.phone || ''
    }));
  };

  const handleSave = async () => {
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Validate phone number (allows formats like: +1234567890, 123-456-7890, (123) 456-7890)
    const phoneRegex = /^(\+\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      toast.error('Please enter a valid phone number');
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/auth/me`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        setUserData(data.user);
        toast.success(data.message);
        console.log('Profile updated successfully');
      } else {
        toast.error(data.message);
        console.error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Error updating profile');
    } finally {
      setIsEditing(false);
    }
  };

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // TODO: Implement actual avatar upload to backend
        setAvatarUrl(reader.result as string); // Cập nhật state để hiển thị preview
        // Có thể gọi API upload file ở đây
        console.log('Selected file:', file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBackupSettings = () => {
    // TODO: Implement backup logic
    console.log('Backup settings', formData);
    const settingsData = JSON.stringify(formData, null, 2);
    const blob = new Blob([settingsData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'fguard_profile_settings.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleRestoreSettings = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        try {
          const restoredData = JSON.parse(reader.result as string);
          // TODO: Implement restore logic - cần kiểm tra cấu trúc restoredData
          setFormData(prev => ({ ...prev, ...restoredData }));
          console.log('Settings restored', restoredData);
        } catch (error) {
          console.error('Failed to restore settings:', error);
          alert('Failed to restore settings. Please check the file format.');
        }
      };
      reader.readAsText(file);
    }
  };

  const activityData = [
    { id: 1, type: 'login', description: 'Logged in from Hanoi, Vietnam', timestamp: '2024-02-20 10:30', ip: '192.168.1.1' },
    { id: 2, type: 'settings', description: 'Changed password', timestamp: '2024-02-19 15:00', ip: '192.168.1.1' },
    { id: 3, type: 'security', description: 'Two-factor authentication enabled', timestamp: '2024-02-18 11:00', ip: '192.168.1.1' },
    { id: 4, type: 'profile', description: 'Updated profile information', timestamp: '2024-02-17 09:00', ip: '192.168.1.1' },
  ];

  const devices = [
    { id: 1, name: 'iPhone 13 Pro', type: 'Mobile', lastActive: '2024-02-20T10:30:00', location: 'Hanoi, Vietnam', current: true },
    { id: 2, name: 'MacBook Pro', type: 'Desktop', lastActive: '2024-02-20T09:15:00', location: 'Hanoi, Vietnam', current: false },
    { id: 3, name: 'iPad Air', type: 'Tablet', lastActive: '2024-02-19T15:45:00', location: 'Hanoi, Vietnam', current: false },
  ];

  const socialAccounts = [
    { id: 1, platform: 'Facebook', username: 'john.doe', connected: true },
    { id: 2, platform: 'Twitter', username: '@johndoe', connected: true },
    { id: 3, platform: 'Github', username: 'johndoe', connected: false },
    { id: 4, platform: 'LinkedIn', username: 'john-doe', connected: false },
    { id: 5, platform: 'Instagram', username: 'johndoe', connected: false },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Shield className="h-10 w-10 text-blue-600" />
          <h1 className="text-3xl font-bold">Profile Settings</h1>
        </div>
        <Button onClick={() => router.push('/dashboard')} variant="outline">
          Back to Dashboard
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Overview Card */}
        <Card className="lg:col-span-1">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="h-24 w-24 group">
                <AvatarImage src={avatarUrl} alt="Avatar" />
                <AvatarFallback>{userData?.username?.charAt(0)}</AvatarFallback>
                <label htmlFor="avatar-upload" className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer rounded-full">
                  <Upload className="h-8 w-8 text-white" />
                  <span className="sr-only">Upload avatar</span>
                </label>
                <input
                  id="avatar-upload"
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={handleAvatarUpload}
                />
              </Avatar>
              <div className="text-center">
                <h2 className="text-xl font-semibold">{userData?.username}</h2>
                <p className="text-gray-500">{userData?.email}</p>
              </div>
              <div className="w-full space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="text-sm">Account Status</span>
                  <span className="text-sm font-medium text-green-600">Active</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="text-sm">Last Login</span>
                  <span className="text-sm font-medium">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="text-sm">Member Since</span>
                  <span className="text-sm font-medium">Jan 2024</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings Tabs */}
        <div className="lg:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4 gap-2">
              <TabsTrigger value="general" className="flex items-center justify-center">
                <User className="h-4 w-4 mr-2" />
                General
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center justify-center">
                <Shield className="h-4 w-4 mr-2" />
                Security
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center justify-center">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="preferences" className="flex items-center justify-center">
                <Settings className="h-4 w-4 mr-2" />
                Preferences
              </TabsTrigger>
            </TabsList>
            <TabsList className="grid w-full grid-cols-4 gap-2 mt-2">
              <TabsTrigger value="activity" className="flex items-center justify-center">
                <Download className="h-4 w-4 mr-2" />
                Activity
              </TabsTrigger>
              <TabsTrigger value="devices" className="flex items-center justify-center">
                <Smartphone className="h-4 w-4 mr-2" />
                Devices
              </TabsTrigger>
              <TabsTrigger value="social" className="flex items-center justify-center">
                <ExternalLink className="h-4 w-4 mr-2" />
                Social
              </TabsTrigger>
              <TabsTrigger value="data" className="flex items-center justify-center">
                <Download className="h-4 w-4 mr-2" />
                Data
              </TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>General Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Username</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.username}
                          onChange={handleInputChange}
                          disabled
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2">
                      {isEditing ? (
                        <>
                          <Button variant="outline" onClick={handleCancel}>
                            Cancel
                          </Button>
                          <Button onClick={handleSave}>
                            Save Changes
                          </Button>
                        </>
                      ) : (
                        <Button onClick={() => setIsEditing(true)}>
                          Edit Profile
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Lock className="h-5 w-5 text-blue-500" />
                        <div>
                          <h3 className="font-medium">Two-Factor Authentication</h3>
                          <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                        </div>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Key className="h-5 w-5 text-green-500" />
                        <div>
                          <h3 className="font-medium">Password</h3>
                          <p className="text-sm text-gray-500">Last changed 30 days ago</p>
                        </div>
                      </div>
                      <Button variant="outline">Change Password</Button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <ShieldCheck className="h-5 w-5 text-purple-500" />
                        <div>
                          <h3 className="font-medium">Active Sessions</h3>
                          <p className="text-sm text-gray-500">Manage your active sessions</p>
                        </div>
                      </div>
                      <Button variant="outline">View Sessions</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-blue-500" />
                        <div>
                          <h3 className="font-medium">Email Notifications</h3>
                          <p className="text-sm text-gray-500">Receive notifications via email</p>
                        </div>
                      </div>
                      <Switch
                        checked={formData.notifications.email}
                        onCheckedChange={() => handleNotificationChange('email')}
                      />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-green-500" />
                        <div>
                          <h3 className="font-medium">SMS Notifications</h3>
                          <p className="text-sm text-gray-500">Receive notifications via SMS</p>
                        </div>
                      </div>
                      <Switch
                        checked={formData.notifications.sms}
                        onCheckedChange={() => handleNotificationChange('sms')}
                      />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Shield className="h-5 w-5 text-red-500" />
                        <div>
                          <h3 className="font-medium">Security Alerts</h3>
                          <p className="text-sm text-gray-500">Get notified about security events</p>
                        </div>
                      </div>
                      <Switch
                        checked={formData.notifications.security}
                        onCheckedChange={() => handleNotificationChange('security')}
                      />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Bell className="h-5 w-5 text-yellow-500" />
                        <div>
                          <h3 className="font-medium">System Updates</h3>
                          <p className="text-sm text-gray-500">Receive notifications about system updates</p>
                        </div>
                      </div>
                      <Switch
                        checked={formData.notifications.updates}
                        onCheckedChange={() => handleNotificationChange('updates')}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preferences" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Preferences</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Timezone</Label>
                        <Select
                          value={formData.timezone}
                          onValueChange={(value) => handleSelectChange('timezone', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="UTC">UTC</SelectItem>
                            <SelectItem value="GMT+7">GMT+7 (Vietnam)</SelectItem>
                            <SelectItem value="GMT+8">GMT+8 (China)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Separator />
                    <h4 className="text-lg font-medium">Detailed Language Settings</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="date-format">Date Format</Label>
                        <Select
                          value={formData.dateFormat}
                          onValueChange={(value) => handleSelectChange('dateFormat', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select date format" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="MM/DD/YYYY">MM/DD/YYYY (02/20/2024)</SelectItem>
                            <SelectItem value="DD/MM/YYYY">DD/MM/YYYY (20/02/2024)</SelectItem>
                            <SelectItem value="YYYY-MM-DD">YYYY-MM-DD (2024-02-20)</SelectItem>
                            <SelectItem value="YYYY/MM/DD">YYYY/MM/DD (2024/02/20)</SelectItem>
                            <SelectItem value="DD-MMM-YYYY">DD-MMM-YYYY (20-Feb-2024)</SelectItem>
                            <SelectItem value="MMM DD, YYYY">MMM DD, YYYY (Feb 20, 2024)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time-format">Time Format</Label>
                        <Select
                          value={formData.timeFormat}
                          onValueChange={(value) => handleSelectChange('timeFormat', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select time format" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="12h">12-hour (AM/PM)</SelectItem>
                            <SelectItem value="24h">24-hour (23:00)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currency">Currency</Label>
                        <Select
                          value={formData.currency}
                          onValueChange={(value) => handleSelectChange('currency', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select currency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="USD">USD ($)</SelectItem>
                            <SelectItem value="VND">VND (₫)</SelectItem>
                            <SelectItem value="EUR">EUR (€)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="number-format">Number Format</Label>
                        <Select
                          value={formData.numberFormat}
                          onValueChange={(value) => handleSelectChange('numberFormat', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select number format" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1,234.56">1,234.56</SelectItem>
                            <SelectItem value="1.234,56">1.234,56</SelectItem>
                            <SelectItem value="1 234,56">1 234,56</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Globe className="h-5 w-5 text-blue-500" />
                        <div>
                          <h3 className="font-medium">Public Profile</h3>
                          <p className="text-sm text-gray-500">Allow others to view your profile</p>
                        </div>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Activity History</h3>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export Activity
                  </Button>
                </div>
                <div className="space-y-4">
                  {activityData.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-4 p-4 rounded-lg border bg-card">
                      <div className={`p-2 rounded-full ${activity.type === 'login' ? 'bg-green-100 text-green-600' :
                        activity.type === 'settings' ? 'bg-blue-100 text-blue-600' :
                          activity.type === 'security' ? 'bg-red-100 text-red-600' :
                            'bg-gray-100 text-gray-600'}`}>
                        {activity.type === 'login' ? <LogIn className="w-4 h-4" /> :
                          activity.type === 'settings' ? <Settings className="w-4 h-4" /> :
                            activity.type === 'security' ? <Shield className="w-4 h-4" /> :
                              <User className="w-4 h-4" />}
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">{activity.description}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="w-3 h-3 mr-1" />
                          {activity.timestamp}
                          <span className="mx-2">•</span>
                          <Globe className="w-3 h-3 mr-1" />
                          {activity.ip}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="devices" className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Connected Devices</h3>
                  <Button variant="outline" size="sm" onClick={() => setShowDeviceManagement(true)}>
                    <Smartphone className="w-4 h-4 mr-2" />
                    Manage Devices
                  </Button>
                </div>
                <div className="space-y-4">
                  {devices.map((device) => (
                    <div key={device.id} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 rounded-full bg-primary/10">
                          <Smartphone className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{device.name}</p>
                          <p className="text-sm text-muted-foreground">{device.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Last active: {device.lastActive}</p>
                        <p className="text-sm text-muted-foreground">{device.location}</p>
                        {device.current && (
                          <Badge variant="secondary" className="mt-1">Current Device</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="social" className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Social Accounts</h3>
                  <Button variant="outline" size="sm" onClick={() => setShowSocialLinks(true)}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Connect Account
                  </Button>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {socialAccounts.map((account) => (
                    <div key={account.id} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 rounded-full bg-primary/10">
                          {account.platform === 'Facebook' ? <Facebook className="w-4 h-4 text-primary" /> :
                            account.platform === 'Twitter' ? <Twitter className="w-4 h-4 text-primary" /> :
                              account.platform === 'Github' ? <Github className="w-4 h-4 text-primary" /> :
                                account.platform === 'LinkedIn' ? <Linkedin className="w-4 h-4 text-primary" /> :
                                  <Instagram className="w-4 h-4 text-primary" />}
                        </div>
                        <div>
                          <p className="font-medium">{account.platform}</p>
                          <p className="text-sm text-muted-foreground">{account.username}</p>
                        </div>
                      </div>
                      <div>
                        {account.connected ? (
                          <Badge variant="secondary">Connected</Badge>
                        ) : (
                          <Button variant="outline" size="sm">
                            Connect
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="data" className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Data Management</h3>
                  <div className="space-x-2">
                    <Button variant="outline" size="sm" onClick={() => setShowExportData(true)}>
                      <Download className="w-4 h-4 mr-2" />
                      Export Data
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => setShowDeleteAccount(true)}>
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete Account
                    </Button>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Export Data</CardTitle>
                      <CardDescription>Download all your personal data</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        You can download a copy of your data including your profile information, activity history, and settings.
                      </p>
                      <Button variant="outline" className="w-full" onClick={() => setShowExportData(true)}>
                        <Download className="w-4 h-4 mr-2" />
                        Download Data
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Delete Account</CardTitle>
                      <CardDescription>Permanently delete your account</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        This action cannot be undone. All your data will be permanently deleted.
                      </p>
                      <Button variant="destructive" className="w-full" onClick={() => setShowDeleteAccount(true)}>
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete Account
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>Backup and Restore</CardTitle>
                      <CardDescription>Backup or restore your profile settings</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Download className="h-5 w-5 text-blue-500" />
                            <div>
                              <h3 className="font-medium">Backup Settings</h3>
                              <p className="text-sm text-gray-500">Download a copy of your current settings.</p>
                            </div>
                          </div>
                          <Button variant="outline" onClick={handleBackupSettings}>
                            Backup Now
                          </Button>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Upload className="h-5 w-5 text-green-500" />
                            <div>
                              <h3 className="font-medium">Restore Settings</h3>
                              <p className="text-sm text-gray-500">Upload a backup file to restore your settings.</p>
                            </div>
                          </div>
                          <label htmlFor="restore-file" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 cursor-pointer">
                            Choose File
                            <input
                              id="restore-file"
                              type="file"
                              accept=".json"
                              className="sr-only"
                              onChange={handleRestoreSettings}
                            />
                          </label>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Dialog open={showDeleteAccount} onOpenChange={setShowDeleteAccount}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Account</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete your account? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-destructive/10 text-destructive">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4" />
                <p className="text-sm font-medium">Warning</p>
              </div>
              <p className="text-sm mt-2">
                This will permanently delete your account and all associated data. Please make sure you have backed up any important information.
              </p>
            </div>
            <div className="space-y-2">
              <Label>Confirm your password</Label>
              <Input type="password" placeholder="Enter your password" />
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setShowDeleteAccount(false)}>
                Cancel
              </Button>
              <Button variant="destructive">
                Delete Account
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showExportData} onOpenChange={setShowExportData}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Export Data</DialogTitle>
            <DialogDescription>
              Choose what data you want to export
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="profile" />
                <Label htmlFor="profile">Profile Information</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="activity" />
                <Label htmlFor="activity">Activity History</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="settings" />
                <Label htmlFor="settings">Settings</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="social" />
                <Label htmlFor="social">Social Connections</Label>
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setShowExportData(false)}>
                Cancel
              </Button>
              <Button>
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showDeviceManagement} onOpenChange={setShowDeviceManagement}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Manage Devices</DialogTitle>
            <DialogDescription>
              View and manage your connected devices
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            {devices.map((device) => (
              <div key={device.id} className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Smartphone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{device.name}</p>
                    <p className="text-sm text-muted-foreground">{device.type}</p>
                  </div>
                </div>
                <Button variant="destructive" size="sm">
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showSocialLinks} onOpenChange={setShowSocialLinks}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Connect Social Account</DialogTitle>
            <DialogDescription>
              Choose a social platform to connect
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            {socialAccounts.map((account) => (
              <Button key={account.id} variant="outline" className="w-full justify-start">
                {account.platform === 'Facebook' ? <Facebook className="w-4 h-4 mr-2" /> :
                  account.platform === 'Twitter' ? <Twitter className="w-4 h-4 mr-2" /> :
                    account.platform === 'Github' ? <Github className="w-4 h-4 mr-2" /> :
                      account.platform === 'LinkedIn' ? <Linkedin className="w-4 h-4 mr-2" /> :
                        <Instagram className="w-4 h-4 mr-2" />}
                Connect with {account.platform}
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProfilePage; 