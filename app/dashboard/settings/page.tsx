'use client';

import React, { useState, useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

// Helper function for Local Storage with basic error handling
const getLocalStorageItem = (key: string, defaultValue: any) => {
  if (typeof window === 'undefined') return defaultValue;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return defaultValue;
  }
};

const setLocalStorageItem = (key: string, value: any) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error writing to localStorage:', error);
  }
};

const SettingsPage: React.FC = () => {
  // Setting 1: Email Notifications
  const [emailNotifications, setEmailNotifications] = useState(() => getLocalStorageItem('settings-email-notifications', true));
  
  // Setting 2: Preferred Language (Placeholder)
  const [preferredLanguage, setPreferredLanguage] = useState(() => getLocalStorageItem('settings-preferred-language', 'en'));

  // Update Local Storage when state changes
  useEffect(() => {
    setLocalStorageItem('settings-email-notifications', emailNotifications);
  }, [emailNotifications]);

   useEffect(() => {
    setLocalStorageItem('settings-preferred-language', preferredLanguage);
  }, [preferredLanguage]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Account Settings</h1>
      
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Email Notifications Setting */}
          <div className="flex items-center justify-between">
            <Label htmlFor="email-notifications">Email Notifications</Label>
            <Switch
              id="email-notifications"
              checked={emailNotifications}
              onCheckedChange={setEmailNotifications}
            />
          </div>

          {/* Preferred Language Setting (Placeholder) */}
          <div className="flex items-center justify-between">
             <Label htmlFor="preferred-language">Preferred Language</Label>
             <Select value={preferredLanguage} onValueChange={setPreferredLanguage}>
               <SelectTrigger className="w-[180px]">
                 <SelectValue placeholder="Select language" />
               </SelectTrigger>
               <SelectContent>
                 <SelectItem value="en">English</SelectItem>
                 <SelectItem value="vn">Vietnamese</SelectItem>
                 {/* Add more languages as needed */}
               </SelectContent>
             </Select>
           </div>
           
           {/* Add more settings here */}

        </CardContent>
      </Card>

    </div>
  );
};

export default SettingsPage; 