'use client';

import React, { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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

const DashboardPage: React.FC = () => {
  // Local Storage Feature 1: Active Tab
  const [activeTab, setActiveTab] = useState(() => getLocalStorageItem('dashboard-active-tab', 'basic'));

  // Local Storage Feature 2: Show Help Text Toggle
  const [showHelpText, setShowHelpText] = useState(() => getLocalStorageItem('dashboard-show-help', true));

  // Local Storage Feature 3: Performance Stats Display (Percentage or Value)
  const [performanceDisplay, setPerformanceDisplay] = useState(() => getLocalStorageItem('dashboard-perf-display', 'percentage'));

  // Local Storage Feature 4: Attack Origins Time Range
  const [attackTimeRange, setAttackTimeRange] = useState(() => getLocalStorageItem('dashboard-attack-time-range', 'lastDay'));

  // Local Storage Feature 5: Hide Expired Subscriptions
  const [hideExpiredSubs, setHideExpiredSubs] = useState(() => getLocalStorageItem('dashboard-hide-expired', false));

  // Local Storage Feature 6: Interface Display Mode
  const [interfaceDisplayMode, setInterfaceDisplayMode] = useState(() => getLocalStorageItem('dashboard-interface-display', 'icons')); // 'icons' or 'list'

  // Local Storage Feature 7: Enable Advanced Logs (Placeholder Config)
  const [advancedLogsEnabled, setAdvancedLogsEnabled] = useState(() => getLocalStorageItem('dashboard-advanced-logs', false));

  // Local Storage Feature 8: Notification Dismissal (Simple example for one notification)
  const [showNotification, setShowNotification] = useState(() => getLocalStorageItem('dashboard-show-notification', true));

  // Local Storage Feature 9: Preferred Dashboard Layout (Simple identifier)
  const [preferredLayout, setPreferredLayout] = useState(() => getLocalStorageItem('dashboard-layout', 'default'));

  // Local Storage Feature 10: Sample Threshold Setting (e.g., for System Load alert)
  const [systemLoadThreshold, setSystemLoadThreshold] = useState(() => getLocalStorageItem('dashboard-system-load-threshold', 80)); // Percentage

  // Update Local Storage when state changes
  useEffect(() => {
    setLocalStorageItem('dashboard-active-tab', activeTab);
  }, [activeTab]);

  useEffect(() => {
    setLocalStorageItem('dashboard-show-help', showHelpText);
  }, [showHelpText]);

  useEffect(() => {
    setLocalStorageItem('dashboard-perf-display', performanceDisplay);
  }, [performanceDisplay]);

  useEffect(() => {
    setLocalStorageItem('dashboard-attack-time-range', attackTimeRange);
  }, [attackTimeRange]);

  useEffect(() => {
    setLocalStorageItem('dashboard-hide-expired', hideExpiredSubs);
  }, [hideExpiredSubs]);

  useEffect(() => {
    setLocalStorageItem('dashboard-interface-display', interfaceDisplayMode);
  }, [interfaceDisplayMode]);

  useEffect(() => {
    setLocalStorageItem('dashboard-advanced-logs', advancedLogsEnabled);
  }, [advancedLogsEnabled]);

  useEffect(() => {
    setLocalStorageItem('dashboard-show-notification', showNotification);
  }, [showNotification]);

  useEffect(() => {
    setLocalStorageItem('dashboard-layout', preferredLayout);
  }, [preferredLayout]);

  useEffect(() => {
    setLocalStorageItem('dashboard-system-load-threshold', systemLoadThreshold);
  }, [systemLoadThreshold]);


  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const subscriptionStatus = [
    { name: 'Energize Updates', status: 'Demonstration Unit (Expires: 2025-04-10)', expired: true, purchaseLink: '#' },
    { name: 'Premium Support', status: 'Current', expired: false, purchaseLink: null },
    { name: 'Active DDoS Prevention', status: 'Demonstration Unit (Expires: 2025-04-10)', expired: true, purchaseLink: '#' },
    { name: 'Advanced Bot Protection', status: 'Demonstration Unit (Expires: 2025-04-10)', expired: true, purchaseLink: '#' },
  ];

  const filteredSubscriptions = hideExpiredSubs ? subscriptionStatus.filter(sub => !sub.expired) : subscriptionStatus;

  return (
    <div className="container mx-auto py-8">
      {showNotification && (
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-6 flex justify-between items-center" role="alert">
          <p className="font-bold">Information</p>
          <p>Welcome to your FGuard Web Application Firewall Dashboard.</p>
          <Button variant="ghost" onClick={() => setShowNotification(false)}>Dismiss</Button>
        </div>
      )}

      <h1 className="text-3xl font-bold mb-6">Web Application Firewall Dashboard</h1>

      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basic">Basic</TabsTrigger>
          <TabsTrigger value="security-policies">Security Policies</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Attack Origins Section */}
            <Card className="lg:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold">Attack Origins</CardTitle>
                <div className="flex items-center space-x-2">
                   {showHelpText && <span className="text-sm text-gray-500">(Source locations of attacks)</span>}
                  <Select value={attackTimeRange} onValueChange={setAttackTimeRange}>
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Time Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lastDay">Last Day</SelectItem>
                      <SelectItem value="lastWeek">Last Week</SelectItem>
                      <SelectItem value="lastMonth">Last Month</SelectItem>
                    </SelectContent>
                  </Select>
                  {/* Placeholder for Help Button */}
                </div>
              </CardHeader>
              <CardContent>
                <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-md">
                  {/* Placeholder for World Map */}
                  <p className="text-gray-500 dark:text-gray-400">World Map Placeholder</p>
                </div>
              </CardContent>
            </Card>

            {/* Performance Statistics Section */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold">Performance Statistics</CardTitle>
                 {showHelpText && <span className="text-sm text-gray-500">(Current system performance metrics)</span>}
                {/* Placeholder for Help Button */}
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <Label>System Load:</Label>
                      <span>{performanceDisplay === 'percentage' ? '4%' : 'Value A'}</span>
                    </div>
                    <Progress value={4} className="w-full" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <Label>Log Storage:</Label>
                       <span>{performanceDisplay === 'percentage' ? '14%' : 'Value B'}</span>
                    </div>
                    <Progress value={14} className="w-full" />
                  </div>
                   <div>
                    <div className="flex items-center justify-between mb-1">
                      <Label>Firmware Storage:</Label>
                      <span>{performanceDisplay === 'percentage' ? '36%' : 'Value C'}</span>
                    </div>
                    <Progress value={36} className="w-full" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Operation Mode:</Label>
                    <span>Proxy</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Data Path Status:</Label>
                    <span>Active</span>
                  </div>
                   <div className="flex items-center justify-between">
                    <Label>High Availability Status:</Label>
                    <span>barracuda</span> {/* Assuming this is a status indicator */}
                  </div>
                   <div className="flex items-center justify-between">
                    <Label>CPU Cores in Use:</Label>
                    <span>1</span>
                  </div>
                   <div className="flex items-center justify-between">
                    <Label>Cloud Control:</Label>
                    <span>Not Configured</span>
                  </div>
                   <div className="flex items-center justify-between">
                    <Label htmlFor="perf-display">Show as Percentage:</Label>
                     <Switch
                        id="perf-display"
                        checked={performanceDisplay === 'percentage'}
                        onCheckedChange={(checked) => setPerformanceDisplay(checked ? 'percentage' : 'value')}
                     />
                  </div>
                   <div className="flex items-center justify-between">
                    <Label htmlFor="load-threshold">System Load Alert Threshold (%):</Label>
                     <input
                        id="load-threshold"
                        type="number"
                        min="0"
                        max="100"
                        value={systemLoadThreshold}
                        onChange={(e) => setSystemLoadThreshold(parseInt(e.target.value))}
                        className="w-16 px-2 py-1 border rounded dark:bg-gray-800 dark:border-gray-600"
                     />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Subscription Status Section */}
            <Card className="lg:col-span-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold">Subscription Status</CardTitle>
                 {showHelpText && <span className="text-sm text-gray-500">(Your current license and support status)</span>}
                <Button variant="outline" size="sm">Refresh</Button>
                {/* Placeholder for Help Button */}
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {filteredSubscriptions.map((sub) => (
                    <div key={sub.name} className="text-sm">
                      <div className="font-medium">{sub.name}:</div>
                      <div>
                        {sub.status}
                        {sub.purchaseLink && (
                          <a href={sub.purchaseLink} className="text-blue-600 hover:underline ml-2">
                            (Click here to purchase)
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                   <div className="flex items-center space-x-2 mt-4">
                    <Switch
                      id="hide-expired"
                      checked={hideExpiredSubs}
                      onCheckedChange={setHideExpiredSubs}
                    />
                    <Label htmlFor="hide-expired">Hide Expired</Label>
                  </div>
                </div>
              </CardContent>
            </Card>

             {/* Services and Servers Section */}
             <Card className="lg:col-span-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold">Services and Servers</CardTitle>
                 {showHelpText && <span className="text-sm text-gray-500">(Status of deployed services and servers)</span>}
                {/* Placeholder for Help Button */}
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <Label>Services:</Label>
                    <span>Up 1, Down 0, Degraded 0</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Servers:</Label>
                    <span>Up 1, Down 0, Maintenance 0</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interfaces Section */}
            <Card className="lg:col-span-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold">Interfaces</CardTitle>
                 {showHelpText && <span className="text-sm text-gray-500">(Network interface status)</span>}
                {/* Placeholder for Help Button */}
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                     <Button variant="outline" onClick={() => setInterfaceDisplayMode('icons')} disabled={interfaceDisplayMode === 'icons'}>Show Icons</Button>
                     <Button variant="outline" onClick={() => setInterfaceDisplayMode('list')} disabled={interfaceDisplayMode === 'list'}>Show List</Button>
                  </div>
                  {interfaceDisplayMode === 'icons' ? (
                     <div className="flex space-x-4">
                        <div className="flex flex-col items-center">
                           {/* Placeholder Icon */}
                           <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-md mb-1"></div>
                           <span className="text-xs">MGMT</span>
                        </div>
                        <div className="flex flex-col items-center">
                           {/* Placeholder Icon */}
                           <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-md mb-1"></div>
                           <span className="text-xs">WAN</span>
                        </div>
                        <div className="flex flex-col items-center">
                           {/* Placeholder Icon */}
                           <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-md mb-1"></div>
                           <span className="text-xs">LAN</span>
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-2">
                        <div className="text-sm">MGMT: Up (IP: 192.168.1.1)</div> {/* Placeholder data */}
                        <div className="text-sm">WAN: Up (IP: 203.0.113.5)</div>
                        <div className="text-sm">LAN: Up (IP: 10.0.0.1)</div>
                     </div>
                  )}
                </div>
              </CardContent>
            </Card>

             {/* Global Settings / Local Storage Demo */}
             <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Dashboard Settings (Local Storage Demo)</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="flex items-center space-x-2">
                    <Switch
                      id="show-help"
                      checked={showHelpText}
                      onCheckedChange={setShowHelpText}
                    />
                    <Label htmlFor="show-help">Show Help Text for Sections</Label>
                  </div>
                   <div className="flex items-center space-x-2">
                     <Label htmlFor="preferred-layout">Preferred Layout:</Label>
                       <Select value={preferredLayout} onValueChange={setPreferredLayout}>
                         <SelectTrigger className="w-[180px]">
                           <SelectValue placeholder="Select layout" />
                         </SelectTrigger>
                         <SelectContent>
                           <SelectItem value="default">Default</SelectItem>
                           <SelectItem value="compact">Compact</SelectItem>
                           <SelectItem value="detailed">Detailed</SelectItem>
                         </SelectContent>
                       </Select>
                   </div>
                 {/* Add more controls for other Local Storage features here if needed */}
              </CardContent>
            </Card>

          </div>
        </TabsContent>

        <TabsContent value="security-policies" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Security Policies Configuration</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Placeholder for Security Policies content */}
              <p>Content for configuring security policies goes here.</p>
              {showHelpText && <p className="text-sm text-gray-500 mt-2">Manage your WAF rules, access controls, and other security settings.</p>}
               {/* Example Local Storage Feature: Policy Filter */}
               <div className="mt-4 flex items-center space-x-2">
                 <Label htmlFor="policy-filter">Default Policy View:</Label>
                 <Select value={getLocalStorageItem('dashboard-policy-view', 'all')} onValueChange={(value) => setLocalStorageItem('dashboard-policy-view', value)}>
                   <SelectTrigger className="w-[180px]">
                     <SelectValue placeholder="Select view" />
                   </SelectTrigger>
                   <SelectContent>
                     <SelectItem value="all">All Policies</SelectItem>
                     <SelectItem value="active">Active Policies</SelectItem>
                     <SelectItem value="draft">Draft Policies</SelectItem>
                   </SelectContent>
                 </Select>
               </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Advanced Settings</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Placeholder for Advanced settings content */}
              <p>Content for advanced firewall settings goes here.</p>
               {showHelpText && <p className="text-sm text-gray-500 mt-2">Configure advanced network options, logging levels, and integrations.</p>}
                {/* Example Local Storage Feature: Show Beta Features */}
                <div className="mt-4 flex items-center space-x-2">
                 <Switch
                    id="beta-features"
                    checked={getLocalStorageItem('dashboard-show-beta', false)}
                    onCheckedChange={(checked) => setLocalStorageItem('dashboard-show-beta', checked)}
                 />
                 <Label htmlFor="beta-features">Show Beta Features</Label>
               </div>
                {/* Example Local Storage Feature: Custom Log Retention Period (Placeholder) */}
                <div className="mt-4 flex items-center space-x-2">
                     <Label htmlFor="log-retention">Custom Log Retention (days):</Label>
                     <input
                        id="log-retention"
                        type="number"
                        min="7"
                        value={getLocalStorageItem('dashboard-log-retention', 30)}
                        onChange={(e) => setLocalStorageItem('dashboard-log-retention', parseInt(e.target.value))}
                        className="w-24 px-2 py-1 border rounded dark:bg-gray-800 dark:border-gray-600"
                     />
                  </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardPage;
