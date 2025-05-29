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
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { Shield, Activity, Server, Network, Settings, Bell, User, RefreshCw, AlertTriangle, BarChart2, Cpu, Database, ShieldCheck, Search, Moon, Sun, Clock, Zap, Filter, Download, Upload, FileText, ShieldAlert, Lock, Key, Eye, EyeOff, BellRing, Globe, ShieldX, AlertCircle, TrendingUp, TrendingDown, Info, Users, BarChart3, LineChart as LineChartIcon, PieChart as PieChartIcon, Calendar, ChevronDown } from 'lucide-react';

// Import Recharts components
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ComposedChart, Scatter, ReferenceLine } from 'recharts';
import { motion } from 'framer-motion';
import { format as formatDate } from 'date-fns';
import { DateRangePicker, DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

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
  // Use Auth Context and router
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
  const [interfaceDisplayMode, setInterfaceDisplayMode] = useState(() => getLocalStorageItem('dashboard-interface-display', 'icons')); // 'icons' or 'list'

  // Local Storage Feature 7: Enable Advanced Logs (Placeholder Config)
  const [advancedLogsEnabled, setAdvancedLogsEnabled] = useState(() => getLocalStorageItem('dashboard-advanced-logs', false));

  // Local Storage Feature 8: Notification Dismissal (Simple example for one notification)
  const [showNotification, setShowNotification] = useState(() => getLocalStorageItem('dashboard-show-notification', true));

  // Local Storage Feature 9: Preferred Dashboard Layout (Simple identifier)
  const [preferredLayout, setPreferredLayout] = useState(() => getLocalStorageItem('dashboard-layout', 'default'));

  // Local Storage Feature 10: Sample Threshold Setting (e.g., for System Load alert)
  const [systemLoadThreshold, setSystemLoadThreshold] = useState(() => getLocalStorageItem('dashboard-system-load-threshold', 80)); // Percentage

  // Local Storage Feature 11: Dark Mode Toggle
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Local Storage Feature 12: Search Query
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data for performance chart
  const performanceData = [
    { time: '00:00', value: 30 },
    { time: '04:00', value: 45 },
    { time: '08:00', value: 60 },
    { time: '12:00', value: 75 },
    { time: '16:00', value: 65 },
    { time: '20:00', value: 50 },
    { time: '24:00', value: 40 },
  ];

  // Sample data for detailed statistics
  const attackTypeData = [
    { name: 'DDoS', value: 4000 },
    { name: 'SQL Injection', value: 3000 },
    { name: 'XSS', value: 2000 },
    { name: 'Brute Force', value: 1500 },
    { name: 'Other', value: 1000 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

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

  const subscriptionStatus = [
    { name: 'Energize Updates', status: 'Demonstration Unit (Expires: 2025-04-10)', expired: true, purchaseLink: '#' },
    { name: 'Premium Support', status: 'Current', expired: false, purchaseLink: null },
    { name: 'Active DDoS Prevention', status: 'Demonstration Unit (Expires: 2025-04-10)', expired: true, purchaseLink: '#' },
    { name: 'Advanced Bot Protection', status: 'Demonstration Unit (Expires: 2025-04-10)', expired: true, purchaseLink: '#' },
  ];

  const filteredSubscriptions = hideExpiredSubs ? subscriptionStatus.filter(sub => !sub.expired) : subscriptionStatus;

  const handleLogoutClick = () => {
    logout();
    router.push('/');
  };

  const [showFilters, setShowFilters] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState('24h');
  const [selectedAttackType, setSelectedAttackType] = useState('all');
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [showExportOptions, setShowExportOptions] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);

  // Sample data for real-time statistics
  const realTimeData = [
    { time: '00:00', attacks: 30, blocked: 28 },
    { time: '04:00', attacks: 45, blocked: 42 },
    { time: '08:00', attacks: 60, blocked: 58 },
    { time: '12:00', attacks: 75, blocked: 72 },
    { time: '16:00', attacks: 65, blocked: 63 },
    { time: '20:00', attacks: 50, blocked: 48 },
    { time: '24:00', attacks: 40, blocked: 38 },
  ];

  // Sample data for security radar chart
  const securityData = [
    { subject: 'DDoS Protection', A: 90, B: 85 },
    { subject: 'SQL Injection', A: 95, B: 90 },
    { subject: 'XSS', A: 85, B: 80 },
    { subject: 'Brute Force', A: 88, B: 85 },
    { subject: 'File Upload', A: 92, B: 88 },
  ];

  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  });
  const [selectedTrendPeriod, setSelectedTrendPeriod] = useState('7d');
  const [showUserManagement, setShowUserManagement] = useState(false);

  // Sample data for trend analysis
  const trendData = [
    { date: '2024-01-01', attacks: 120, blocked: 115, severity: 0.8 },
    { date: '2024-01-02', attacks: 150, blocked: 145, severity: 0.9 },
    { date: '2024-01-03', attacks: 180, blocked: 175, severity: 0.7 },
    { date: '2024-01-04', attacks: 200, blocked: 190, severity: 0.95 },
    { date: '2024-01-05', attacks: 160, blocked: 155, severity: 0.85 },
    { date: '2024-01-06', attacks: 140, blocked: 135, severity: 0.75 },
    { date: '2024-01-07', attacks: 130, blocked: 125, severity: 0.65 },
  ];

  // Sample data for attack patterns
  const attackPatternData = [
    { time: '00:00', ddos: 20, sql: 15, xss: 10, brute: 5 },
    { time: '04:00', ddos: 25, sql: 18, xss: 12, brute: 8 },
    { time: '08:00', ddos: 30, sql: 22, xss: 15, brute: 10 },
    { time: '12:00', ddos: 35, sql: 25, xss: 18, brute: 12 },
    { time: '16:00', ddos: 40, sql: 28, xss: 20, brute: 15 },
    { time: '20:00', ddos: 45, sql: 30, xss: 22, brute: 18 },
    { time: '24:00', ddos: 50, sql: 32, xss: 25, brute: 20 },
  ];

  return (
    <div className={`container mx-auto py-8 px-4 min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}>
      {/* Top Bar with Enhanced Search and Notifications */}
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
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <Filter className="h-4 w-4" />
            </Button>
        </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2"
          >
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </Button>
          <Button
            variant="outline"
            onClick={() => setShowExportOptions(!showExportOptions)}
            className="flex items-center space-x-2"
          >
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Button
              variant="ghost"
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Bell className="h-5 w-5" />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notificationCount}
                </span>
              )}
          </Button>
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Notifications</h3>
                  <Button variant="ghost" size="sm" onClick={() => setNotificationCount(0)}>
                    Mark all as read
                  </Button>
                </div>
                <div className="space-y-4">
                  {[
                    { type: 'alert', message: 'High CPU usage detected', time: '2 minutes ago', severity: 'high' },
                    { type: 'update', message: 'System update available', time: '1 hour ago', severity: 'medium' },
                    { type: 'info', message: 'New security patch released', time: '3 hours ago', severity: 'low' },
                  ].map((notification, index) => (
                    <div key={index} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                      <div className={`p-2 rounded-full ${
                        notification.severity === 'high' ? 'bg-red-100 text-red-600' :
                        notification.severity === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-blue-100 text-blue-600'
                      }`}>
                        {notification.type === 'alert' ? <AlertCircle className="h-4 w-4" /> :
                         notification.type === 'update' ? <RefreshCw className="h-4 w-4" /> :
                         <Info className="h-4 w-4" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{notification.message}</p>
                        <p className="text-xs text-gray-500">{notification.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Advanced Search Panel */}
      {showAdvancedSearch && (
        <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label>Search in</Label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="attacks">Attack Logs</SelectItem>
                  <SelectItem value="rules">Security Rules</SelectItem>
                  <SelectItem value="users">User Activity</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
            <div>
              <Label>Date Range</Label>
              <div className="flex space-x-2">
                <input
                  type="date"
                  className="flex-1 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
                />
                <input
                  type="date"
                  className="flex-1 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
                />
                </div>
            </div>
            <div>
              <Label>Sort by</Label>
              <Select defaultValue="recent">
                <SelectTrigger>
                  <SelectValue placeholder="Select sort order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="severity">Severity</SelectItem>
                  <SelectItem value="type">Type</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}

      {/* Advanced Filters Panel */}
      {showFilters && (
        <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
              <Label>Time Range</Label>
              <Select value={selectedDateRange} onValueChange={setSelectedDateRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="24h">Last 24 Hours</SelectItem>
                  <SelectItem value="7d">Last 7 Days</SelectItem>
                  <SelectItem value="30d">Last 30 Days</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
                    </div>
            <div>
              <Label>Attack Type</Label>
              <Select value={selectedAttackType} onValueChange={setSelectedAttackType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select attack type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="ddos">DDoS</SelectItem>
                  <SelectItem value="sql">SQL Injection</SelectItem>
                  <SelectItem value="xss">XSS</SelectItem>
                  <SelectItem value="brute">Brute Force</SelectItem>
                </SelectContent>
              </Select>
                  </div>
                  <div>
              <Label>Severity</Label>
              <Select value={selectedSeverity} onValueChange={setSelectedSeverity}>
                <SelectTrigger>
                  <SelectValue placeholder="Select severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
                    </div>
            <div>
              <Label>Status</Label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="blocked">Blocked</SelectItem>
                  <SelectItem value="allowed">Allowed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
                  </div>
          </div>
        </div>
      )}

      {/* Export Options Panel */}
      {showExportOptions && (
        <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="flex items-center justify-center space-x-2 p-4">
              <FileText className="h-5 w-5" />
              <div className="text-left">
                <p className="font-medium">Export as PDF</p>
                <p className="text-sm text-gray-500">Detailed report in PDF format</p>
              </div>
            </Button>
            <Button variant="outline" className="flex items-center justify-center space-x-2 p-4">
              <Download className="h-5 w-5" />
              <div className="text-left">
                <p className="font-medium">Export as CSV</p>
                <p className="text-sm text-gray-500">Raw data in CSV format</p>
              </div>
            </Button>
            <Button variant="outline" className="flex items-center justify-center space-x-2 p-4">
              <BarChart2 className="h-5 w-5" />
              <div className="text-left">
                <p className="font-medium">Export Charts</p>
                <p className="text-sm text-gray-500">Visual data in PNG format</p>
              </div>
            </Button>
          </div>
        </div>
      )}

      {showNotification && (
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 mb-6 rounded-lg shadow-lg flex justify-between items-center animate-fade-in" role="alert">
          <div className="flex items-center space-x-2">
            <Bell className="h-5 w-5" />
                   <div>
              <p className="font-bold">Welcome!</p>
              <p>This is your FGuard Web Application Firewall Dashboard.</p>
                    </div>
                  </div>
          <Button variant="ghost" onClick={() => setShowNotification(false)} className="text-white hover:bg-blue-600">
            Dismiss
          </Button>
                  </div>
      )}

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Shield className="h-10 w-10 text-blue-600 dark:text-blue-400" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Web Application Firewall Dashboard
          </h1>
                  </div>
        <div className="flex space-x-3">
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

      {/* Quick Stats Section with Animation */}
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

      {/* Real-time Statistics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <CardTitle className="text-lg font-semibold">Real-time Attack Statistics</CardTitle>
                      </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-green-500 flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                +12% from last hour
              </span>
                    </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={realTimeData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                  <XAxis dataKey="time" className="text-sm" />
                  <YAxis className="text-sm" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: '8px',
                      border: 'none',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Line type="monotone" dataKey="attacks" stroke="#ef4444" strokeWidth={2} />
                  <Line type="monotone" dataKey="blocked" stroke="#22c55e" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
                  </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b">
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-blue-500" />
              <CardTitle className="text-lg font-semibold">Global Security Overview</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={securityData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis />
                  <Radar name="Current" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                  <Radar name="Target" dataKey="B" stroke="#22c55e" fill="#22c55e" fillOpacity={0.6} />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
      </div>

      {/* Detailed Statistics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b">
            <div className="flex items-center space-x-2">
              <ShieldAlert className="h-5 w-5 text-red-500" />
              <CardTitle className="text-lg font-semibold">Attack Types Distribution</CardTitle>
            </div>
              </CardHeader>
          <CardContent className="pt-6">
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

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b">
            <div className="flex items-center space-x-2">
              <Lock className="h-5 w-5 text-green-500" />
              <CardTitle className="text-lg font-semibold">Security Score</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
                  <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Key className="h-5 w-5 text-blue-500" />
                  <span>Password Strength</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Progress value={85} className="w-32" />
                  <span className="text-sm font-medium">85%</span>
                </div>
                  </div>
                  <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-purple-500" />
                  <span>Firewall Protection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Progress value={92} className="w-32" />
                  <span className="text-sm font-medium">92%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Eye className="h-5 w-5 text-yellow-500" />
                  <span>Privacy Settings</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Progress value={78} className="w-32" />
                  <span className="text-sm font-medium">78%</span>
                </div>
                  </div>
                </div>
              </CardContent>
            </Card>
      </div>

      {/* Performance Overview */}
      <Card className="mb-6 hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b">
          <div className="flex items-center space-x-2">
            <Zap className="h-5 w-5 text-yellow-500" />
            <CardTitle className="text-lg font-semibold">Performance Overview</CardTitle>
                  </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>Last 24 Hours</span>
            </Button>
                        </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                <XAxis dataKey="time" className="text-sm" />
                <YAxis className="text-sm" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3b82f6" 
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
                        </div>
        </CardContent>
      </Card>

      {/* Trend Analysis Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-blue-500" />
              <CardTitle className="text-lg font-semibold">Attack Trends</CardTitle>
                        </div>
            <div className="flex items-center space-x-2">
              <Select value={selectedTrendPeriod} onValueChange={setSelectedTrendPeriod}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="24h">Last 24 Hours</SelectItem>
                  <SelectItem value="7d">Last 7 Days</SelectItem>
                  <SelectItem value="30d">Last 30 Days</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
              {selectedTrendPeriod === 'custom' && (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
                      <Calendar className="mr-2 h-4 w-4" />
                      {dateRange.startDate ? (
                        dateRange.endDate ? (
                          <>
                            {formatDate(dateRange.startDate as Date, "LLL dd, y")} -{" "}
                            {formatDate(dateRange.endDate as Date, "LLL dd, y")}
                          </>
                        ) : (
                          formatDate(dateRange.startDate as Date, "LLL dd, y")
                        )
                      ) : (
                        <span>Pick a date range</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <DateRangePicker
                      ranges={[dateRange]}
                      onChange={(ranges: { selection: DateRange }) => setDateRange(ranges.selection)}
                      months={1}
                      direction="horizontal"
                    />
                  </PopoverContent>
                </Popover>
                  )}
                </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={trendData}>
                  <defs>
                    <linearGradient id="colorAttacks" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorBlocked" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                  <XAxis dataKey="date" className="text-sm" />
                  <YAxis yAxisId="left" className="text-sm" />
                  <YAxis yAxisId="right" orientation="right" className="text-sm" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: '8px',
                      border: 'none',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Legend />
                  <Area
                    yAxisId="left"
                    type="monotone"
                    dataKey="attacks"
                    stroke="#ef4444"
                    fill="url(#colorAttacks)"
                    fillOpacity={0.3}
                  />
                  <Area
                    yAxisId="left"
                    type="monotone"
                    dataKey="blocked"
                    stroke="#22c55e"
                    fill="url(#colorBlocked)"
                    fillOpacity={0.3}
                  />
                  <Scatter
                    yAxisId="right"
                    dataKey="severity"
                    fill="#8884d8"
                    fillOpacity={0.6}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
              </CardContent>
            </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b">
                 <div className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-purple-500" />
              <CardTitle className="text-lg font-semibold">Attack Patterns</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={attackPatternData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                  <XAxis dataKey="time" className="text-sm" />
                  <YAxis className="text-sm" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: '8px',
                      border: 'none',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Legend />
                  <Bar dataKey="ddos" stackId="a" fill="#ef4444" />
                  <Bar dataKey="sql" stackId="a" fill="#f59e0b" />
                  <Bar dataKey="xss" stackId="a" fill="#10b981" />
                  <Bar dataKey="brute" stackId="a" fill="#6366f1" />
                </BarChart>
              </ResponsiveContainer>
                  </div>
          </CardContent>
        </Card>
      </div>

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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Attack Origins Section */}
            <Card className="lg:col-span-2 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b">
                   <div className="flex items-center space-x-2">
                  <Network className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-lg font-semibold">Attack Origins</CardTitle>
                </div>
                <div className="flex items-center space-x-2">
                  {showHelpText && <span className="text-sm text-gray-500">(Source locations of attacks)</span>}
                  <Select value={attackTimeRange} onValueChange={setAttackTimeRange}>
                    <SelectTrigger className="w-[120px] bg-gray-50 dark:bg-gray-800">
                      <SelectValue placeholder="Time Range" />
                         </SelectTrigger>
                         <SelectContent>
                      <SelectItem value="lastDay">Last 24 Hours</SelectItem>
                      <SelectItem value="lastWeek">Last Week</SelectItem>
                      <SelectItem value="lastMonth">Last Month</SelectItem>
                         </SelectContent>
                       </Select>
                   </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="w-full h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { name: 'USA', attacks: 4000 },
                        { name: 'China', attacks: 3000 },
                        { name: 'Germany', attacks: 2000 },
                        { name: 'Japan', attacks: 2780 },
                        { name: 'France', attacks: 1890 },
                      ]}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                      <XAxis dataKey="name" className="text-sm" />
                      <YAxis className="text-sm" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          borderRadius: '8px',
                          border: 'none',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <Legend />
                      <Bar dataKey="attacks" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Performance Statistics Section */}
            <Card className="flex-1 p-6">
              <div className="flex items-center space-x-4">
                <Cpu className="h-6 w-6 text-blue-500" />
                <div>
                  <p className="text-lg font-semibold">CPU Usage</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{performanceDisplay === 'percentage' ? '75%' : '7500 MHz'}</p>
                </div>
              </div>
              <Progress value={75} className="mt-4" />
            </Card>

            <Card className="flex-1 p-6">
              <div className="flex items-center space-x-4">
                <Database className="h-6 w-6 text-green-500" />
                <div>
                  <p className="text-lg font-semibold">Storage Used</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{performanceDisplay === 'percentage' ? '40%' : '200GB / 500GB'}</p>
                </div>
              </div>
              <Progress value={40} className="mt-4" />
            </Card>

            <Card className="flex-1 p-6">
              <div className="flex items-center space-x-4">
                <Network className="h-6 w-6 text-purple-500" />
                <div>
                  <p className="text-lg font-semibold">Network Traffic</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{performanceDisplay === 'percentage' ? '60%' : '100 Mbps'}</p>
                </div>
              </div>
              <Progress value={60} className="mt-4" />
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="security-policies" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-lg font-semibold">Active Security Rules</CardTitle>
                </div>
                <Button variant="outline" size="sm">Add Rule</Button>
            </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {[
                    { name: 'DDoS Protection', status: 'active', priority: 'high', lastModified: '2 hours ago' },
                    { name: 'SQL Injection Prevention', status: 'active', priority: 'high', lastModified: '1 day ago' },
                    { name: 'XSS Protection', status: 'active', priority: 'medium', lastModified: '3 days ago' },
                    { name: 'Brute Force Protection', status: 'active', priority: 'medium', lastModified: '1 week ago' },
                  ].map((rule, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-full ${
                          rule.priority === 'high' ? 'bg-red-100 text-red-600' :
                          'bg-yellow-100 text-yellow-600'
                        }`}>
                          <Shield className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">{rule.name}</p>
                          <p className="text-sm text-gray-500">Last modified: {rule.lastModified}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className={`text-sm font-medium ${
                          rule.status === 'active' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {rule.status.charAt(0).toUpperCase() + rule.status.slice(1)}
                        </span>
                        <Button variant="ghost" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b">
                <div className="flex items-center space-x-2">
                  <EyeOff className="h-5 w-5 text-purple-600" />
                  <CardTitle className="text-lg font-semibold">Privacy Settings</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Hide IP Addresses</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Mask Sensitive Data</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Enable Audit Logging</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Data Retention (days)</Label>
                    <Select defaultValue="30">
                      <SelectTrigger className="w-24">
                        <SelectValue placeholder="Days" />
                   </SelectTrigger>
                   <SelectContent>
                        <SelectItem value="7">7 days</SelectItem>
                        <SelectItem value="30">30 days</SelectItem>
                        <SelectItem value="90">90 days</SelectItem>
                        <SelectItem value="365">1 year</SelectItem>
                   </SelectContent>
                 </Select>
                  </div>
               </div>
            </CardContent>
          </Card>
          </div>
        </TabsContent>

        <TabsContent value="advanced" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b">
                <div className="flex items-center space-x-2">
                  <Settings className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-lg font-semibold">Advanced Configuration</CardTitle>
                </div>
            </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Log Level</Label>
                      <Select defaultValue="info">
                        <SelectTrigger>
                          <SelectValue placeholder="Select log level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="debug">Debug</SelectItem>
                          <SelectItem value="info">Info</SelectItem>
                          <SelectItem value="warning">Warning</SelectItem>
                          <SelectItem value="error">Error</SelectItem>
                        </SelectContent>
                      </Select>
               </div>
                    <div>
                      <Label>Cache Duration</Label>
                      <Select defaultValue="3600">
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1800">30 minutes</SelectItem>
                          <SelectItem value="3600">1 hour</SelectItem>
                          <SelectItem value="7200">2 hours</SelectItem>
                          <SelectItem value="14400">4 hours</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Enable Rate Limiting</Label>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Enable WebSocket Protection</Label>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Enable API Protection</Label>
                      <Switch defaultChecked />
                    </div>
                  </div>
                  </div>
            </CardContent>
          </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b">
                <div className="flex items-center space-x-2">
                  <ShieldX className="h-5 w-5 text-red-500" />
                  <CardTitle className="text-lg font-semibold">Threat Intelligence</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <ShieldCheck className="h-5 w-5 text-green-500" />
                      <span>Known Threats</span>
                    </div>
                    <span className="text-sm font-medium">1,234</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="h-5 w-5 text-yellow-500" />
                      <span>Active Threats</span>
                    </div>
                    <span className="text-sm font-medium">42</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <TrendingDown className="h-5 w-5 text-red-500" />
                      <span>Blocked Today</span>
                    </div>
                    <span className="text-sm font-medium">156</span>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Update Threat Database
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Recent Activity Feed */}
      <Card className="mt-6 hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-purple-600" />
            <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {[
              { type: 'attack', message: 'Blocked DDoS attack from 192.168.1.1', time: '2 minutes ago', severity: 'high' },
              { type: 'update', message: 'System update completed successfully', time: '1 hour ago', severity: 'low' },
              { type: 'alert', message: 'High CPU usage detected', time: '3 hours ago', severity: 'medium' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${
                    activity.severity === 'high' ? 'bg-red-100 text-red-600' :
                    activity.severity === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    {activity.type === 'attack' ? <Shield className="h-4 w-4" /> :
                     activity.type === 'update' ? <RefreshCw className="h-4 w-4" /> :
                     <AlertTriangle className="h-4 w-4" />}
                  </div>
                  <div>
                    <p className="font-medium">{activity.message}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{activity.time}</p>
                  </div>
                </div>
                <span className={`text-sm font-medium ${
                  activity.severity === 'high' ? 'text-red-600' :
                  activity.severity === 'medium' ? 'text-yellow-600' :
                  'text-green-600'
                }`}>
                  {activity.severity.charAt(0).toUpperCase() + activity.severity.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
