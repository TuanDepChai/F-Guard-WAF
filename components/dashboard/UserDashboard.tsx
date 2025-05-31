'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, Activity, Server, Network, Settings, Bell, User, RefreshCw, AlertTriangle, BarChart2, Cpu, Database, ShieldCheck, Search, Moon, Sun, Clock, Zap, Filter, Download, Upload, FileText, ShieldAlert, Lock, Key, Eye, EyeOff, BellRing, Globe, ShieldX, AlertCircle, TrendingUp, TrendingDown, Info, Users, BarChart3, LineChart as LineChartIcon, PieChart as PieChartIcon, Calendar, ChevronDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ComposedChart, Scatter, ReferenceLine } from 'recharts';

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

const UserDashboard: React.FC = () => {
  const { logout } = useAuth();
  const router = useRouter();

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
  const [interfaceDisplayMode, setInterfaceDisplayMode] = useState(() => getLocalStorageItem('dashboard-interface-display', 'icons'));

  // Local Storage Feature 7: Enable Advanced Logs
  const [advancedLogsEnabled, setAdvancedLogsEnabled] = useState(() => getLocalStorageItem('dashboard-advanced-logs', false));

  // Local Storage Feature 8: Notification Dismissal
  const [showNotification, setShowNotification] = useState(() => getLocalStorageItem('dashboard-show-notification', true));

  // Local Storage Feature 9: Preferred Dashboard Layout
  const [preferredLayout, setPreferredLayout] = useState(() => getLocalStorageItem('dashboard-layout', 'default'));

  // Local Storage Feature 10: System Load Threshold
  const [systemLoadThreshold, setSystemLoadThreshold] = useState(() => getLocalStorageItem('dashboard-system-load-threshold', 80));

  // Local Storage Feature 11: Dark Mode Toggle
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Local Storage Feature 12: Search Query
  const [searchQuery, setSearchQuery] = useState('');

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

  useEffect(() => {
    setLocalStorageItem('dashboard-is-dark-mode', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    setLocalStorageItem('dashboard-search-query', searchQuery);
  }, [searchQuery]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const handleLogoutClick = () => {
    logout();
    router.push('/');
  };

  // Sample data for charts
  const performanceData = [
    { time: '00:00', value: 30 },
    { time: '04:00', value: 45 },
    { time: '08:00', value: 60 },
    { time: '12:00', value: 75 },
    { time: '16:00', value: 65 },
    { time: '20:00', value: 50 },
    { time: '24:00', value: 40 },
  ];

  const attackTypeData = [
    { name: 'DDoS', value: 4000 },
    { name: 'SQL Injection', value: 3000 },
    { name: 'XSS', value: 2000 },
    { name: 'Brute Force', value: 1500 },
    { name: 'Other', value: 1000 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <div className={`container mx-auto py-8 px-4 min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}>
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-8 p-4 rounded-lg glass shadow-sm">
        <div className="flex items-center space-x-4 flex-1 max-w-2xl">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search dashboard..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Shield className="h-10 w-10 text-blue-600 dark:text-blue-400" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Web Application Firewall Dashboard
          </h1>
        </div>
        <div className="flex space-x-3">
          <Button onClick={() => router.push('/dashboard/license')} variant="outline" className="flex items-center space-x-2">
            <Key className="h-4 w-4" />
            <span>License</span>
          </Button>
          <Button onClick={() => router.push('/dashboard/profile')} variant="outline" className="flex items-center space-x-2">
            <User className="h-4 w-4" />
            <span>Profile</span>
          </Button>
          <Button onClick={() => router.push('/dashboard/update')} variant="outline" className="flex items-center space-x-2">
            <RefreshCw className="h-4 w-4" />
            <span>Update</span>
          </Button>
          <Button onClick={() => router.push('/dashboard/settings')} variant="outline" className="flex items-center space-x-2">
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </Button>
          <Button onClick={handleLogoutClick} variant="outline" className="flex items-center space-x-2 text-red-600 hover:text-red-700">
            <span>Logout</span>
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium opacity-80">Total Attacks Blocked</p>
                <h3 className="text-2xl font-bold mt-1">12,345</h3>
                <p className="text-sm opacity-80 mt-1">↑ 12% from last week</p>
              </div>
              <ShieldCheck className="h-8 w-8 opacity-80" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium opacity-80">System Health</p>
                <h3 className="text-2xl font-bold mt-1">98%</h3>
              </div>
              <Activity className="h-8 w-8 opacity-80" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium opacity-80">Active Rules</p>
                <h3 className="text-2xl font-bold mt-1">256</h3>
              </div>
              <BarChart2 className="h-8 w-8 opacity-80" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium opacity-80">Threats Detected</p>
                <h3 className="text-2xl font-bold mt-1">42</h3>
              </div>
              <AlertTriangle className="h-8 w-8 opacity-80" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
          <TabsTrigger value="basic" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
            <Activity className="h-4 w-4 mr-2" />
            Basic
          </TabsTrigger>
          <TabsTrigger value="security-policies" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
            <Shield className="h-4 w-4 mr-2" />
            Security Policies
          </TabsTrigger>
          <TabsTrigger value="advanced" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
            <Settings className="h-4 w-4 mr-2" />
            Advanced
          </TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="mt-6">
          {/* Basic tab content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="value" stroke="#3b82f6" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Attack Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={attackTypeData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {attackTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="security-policies" className="mt-6">
          {/* Security policies tab content */}
          <Card>
            <CardHeader>
              <CardTitle>Security Policies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Enable DDoS Protection</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Enable SQL Injection Protection</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Enable XSS Protection</Label>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="mt-6">
          {/* Advanced tab content */}
          <Card>
            <CardHeader>
              <CardTitle>Advanced Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Show Help Text</Label>
                  <Switch checked={showHelpText} onCheckedChange={setShowHelpText} />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Performance Display</Label>
                  <Select value={performanceDisplay} onValueChange={setPerformanceDisplay}>
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Select display" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="percentage">Percentage</SelectItem>
                      <SelectItem value="value">Value</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <Label>Enable Advanced Logs</Label>
                  <Switch checked={advancedLogsEnabled} onCheckedChange={setAdvancedLogsEnabled} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserDashboard; 