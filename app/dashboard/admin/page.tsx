'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import {
  Shield, Activity, Server, Network, Settings, Bell, User,
  RefreshCw, AlertTriangle, BarChart2, Cpu, Database,
  ShieldCheck, Search, Moon, Sun, Clock, Zap, Filter,
  Download, Upload, FileText, ShieldAlert, Lock, Key,
  Eye, EyeOff, BellRing, Globe, ShieldX, AlertCircle,
  TrendingUp, TrendingDown, Info, Users, BarChart3,
  LineChart as LineChartIcon, PieChart as PieChartIcon,
  Calendar, ChevronDown, CheckCircle, XCircle,
} from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer, LineChart, Line,
  AreaChart, Area, PieChart, Pie, Cell, RadarChart,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  ComposedChart, Scatter, ReferenceLine
} from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { toast } from 'sonner';

const AdminDashboardPage: React.FC = () => {
  const { userData, logout } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  const [transactions, setTransactions] = useState<{
    transactions: any[];
    totalTransactions: number;
    totalPages: number;
    currentPage: number;
    totalAmount: number;
    totalTransactionMade: number;
    totalUserBought: number;
    successCount: number;
    failedCount: number;
  }>({
    transactions: [],
    totalTransactions: 0,
    totalPages: 0,
    currentPage: 1,
    totalAmount: 0,
    totalTransactionMade: 0,
    totalUserBought: 0,
    successCount: 0,
    failedCount: 0
  });
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [userList, setUserList] = useState<{
    users: any[];
    totalUsers: number;
    totalPages: number;
    currentPage: number;
  }>({
    users: [],
    totalUsers: 0,
    totalPages: 0,
    currentPage: 1
  });

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const queryParams = new URLSearchParams({
          page: transactions.currentPage.toString(),
          ...(statusFilter && { status: statusFilter })
        });
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/transactions/admin/history?${queryParams}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
        });
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };
    fetchTransactions();
  }, [transactions.currentPage, statusFilter]);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/auth/admin/users?page=${userList.currentPage}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
        });
        const data = await response.json();
        setUserList(data);
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    };
    fetchUserList();
  }, [userList.currentPage]);

  // Redirect if not admin
  useEffect(() => {
    if (userData?.role !== 'admin') {
      router.push('/dashboard');
    }
  }, [userData, router]);

  // Sample data for admin statistics
  const userStats = [
    { name: 'Total Users', value: 1234, change: '+12%' },
    { name: 'Active Users', value: 890, change: '+8%' },
    { name: 'New Users Today', value: 45, change: '+15%' },
    { name: 'Premium Users', value: 234, change: '+5%' },
  ];

  const systemStats = [
    { name: 'Total Attacks', value: 5678, change: '-5%' },
    { name: 'Blocked Attacks', value: 5432, change: '+2%' },
    { name: 'System Load', value: '65%', change: '-10%' },
    { name: 'Storage Used', value: '45%', change: '+3%' },
  ];

  const handleLogoutClick = () => {
    logout();
    router.push('/');
  };
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handlePageChange = (page: number) => {
    setTransactions(prev => ({ ...prev, currentPage: page }));
  };

  const handleStatusChange = (status: string) => {
    setStatusFilter(status);
    setTransactions(prev => ({ ...prev, currentPage: 1 })); // Reset to first page when filter changes
  };

  const handleUserPageChange = (page: number) => {
    setUserList(prev => ({ ...prev, currentPage: page }));
  };

  const handleDeleteUser = async (userId: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/auth/admin/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (response.ok) {
        setUserList(prev => ({ ...prev, users: prev.users.filter(user => user._id !== userId) }));
        toast.success('User deleted successfully');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 min-h-screen">
      {/* Admin Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Shield className="h-10 w-10 text-blue-600" />
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        </div>
        <div className="flex space-x-3">
          <Button onClick={handleLogoutClick} variant="outline" className="text-red-600">
            Logout
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Revenue</p>
                <h3 className="text-2xl font-bold mt-1">{formatPrice(transactions.totalAmount)}</h3>
                <p className="text-sm text-green-500 mt-1">Total Amount</p>
              </div>
              <BarChart3 className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Transactions</p>
                <h3 className="text-2xl font-bold mt-1">{transactions.totalTransactionMade}</h3>
                <p className="text-sm text-blue-500 mt-1">All Time</p>
              </div>
              <Activity className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Success Rate</p>
                <h3 className="text-2xl font-bold mt-1">{transactions.successCount}</h3>
                <p className="text-sm text-green-500 mt-1">Successful Transactions</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Failed Transactions</p>
                <h3 className="text-2xl font-bold mt-1">{transactions.failedCount}</h3>
                <p className="text-sm text-red-500 mt-1">Failed Attempts</p>
              </div>
              <XCircle className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Users</p>
                <h3 className="text-2xl font-bold mt-1">{userList.totalUsers}</h3>
                <p className="text-sm text-blue-500 mt-1">Total number of users</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Success Rate</p>
                <h3 className="text-2xl font-bold mt-1">
                  {transactions.totalTransactionMade > 0
                    ? Math.round((transactions.successCount / transactions.totalTransactionMade) * 100)
                    : 0}%
                </h3>
                <p className="text-sm text-green-500 mt-1">Transaction Success</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Admin Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-100 p-1 rounded-lg">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="transactions">Transactions History</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          {/* Overview content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>User Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={[
                      { month: 'Jan', users: 1000 },
                      { month: 'Feb', users: 1200 },
                      { month: 'Mar', users: 1400 },
                      { month: 'Apr', users: 1600 },
                      { month: 'May', users: 1800 },
                      { month: 'Jun', users: 2000 },
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="users" stroke="#3b82f6" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Attack Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[
                      { type: 'DDoS', blocked: 400, attempted: 450 },
                      { type: 'SQL Injection', blocked: 300, attempted: 320 },
                      { type: 'XSS', blocked: 200, attempted: 220 },
                      { type: 'Brute Force', blocked: 150, attempted: 180 },
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="type" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="blocked" fill="#22c55e" />
                      <Bar dataKey="attempted" fill="#ef4444" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users" className="mt-6">
          {/* User management content */}
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Username</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userList.users?.map((user: any) => (
                    <TableRow key={user._id}>
                      <TableCell>{user.username}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.phone || "-"}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{formatDate(user.createdAt)}</TableCell>
                      <TableCell>
                        <Button variant="destructive" size="sm" onClick={() => handleDeleteUser(user._id)}>Delete</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-500">
                  Showing {userList.users.length} of {userList.totalUsers} users
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleUserPageChange(userList.currentPage - 1)}
                    disabled={userList.currentPage === 1}
                  >
                    Previous
                  </Button>
                  {Array.from({ length: userList.totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={page === userList.currentPage ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleUserPageChange(page)}
                    >
                      {page}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleUserPageChange(userList.currentPage + 1)}
                    disabled={userList.currentPage === userList.totalPages}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transactions" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Transactions History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                  <Button
                    variant={statusFilter === '' ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleStatusChange('')}
                  >
                    All
                  </Button>
                  <Button
                    variant={statusFilter === 'success' ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleStatusChange('success')}
                  >
                    Success
                  </Button>
                  <Button
                    variant={statusFilter === 'failed' ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleStatusChange('failed')}
                  >
                    Failed
                  </Button>
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.transactions?.map((transaction: any) => (
                    <TableRow key={transaction._id}>
                      <TableCell className="p-4">{transaction._id}</TableCell>
                      <TableCell className="p-4">{transaction.plan?.name || 'N/A'}</TableCell>
                      <TableCell className="p-4">{formatPrice(transaction.plan?.price || 0)}</TableCell>
                      <TableCell className="p-4">{transaction.status}</TableCell>
                      <TableCell className="p-4">{formatDate(transaction.createdAt)}</TableCell>
                    </TableRow>
                  ))}
                  {transactions.transactions.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={5} className="p-4 text-center text-gray-500">
                        No transactions found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-500">
                  Showing {transactions.transactions.length} of {transactions.totalTransactions} transactions
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(transactions.currentPage - 1)}
                    disabled={transactions.currentPage === 1}
                  >
                    Previous
                  </Button>
                  {Array.from({ length: transactions.totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={page === transactions.currentPage ? "default" : "outline"}
                      size="sm"
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(transactions.currentPage + 1)}
                    disabled={transactions.currentPage === transactions.totalPages}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>
    </div>
  );
};

export default AdminDashboardPage; 