'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Loader2, Copy, CheckCircle, XCircle } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface License {
  _id: string;
  licenseKey: string;
  transaction:{
    _id: string;
    updatedAt: string;
    createdAt: string;
    status: string;
  },
  plan: {
    name: string;
    description: string;
    price: number;
  };
  createdAt: string;
}

export default function LicenseHistoryPage() {
  const [licenses, setLicenses] = useState<License[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { userData } = useAuth();

  console.log(userData)

  useEffect(() => {
    const fetchLicenses = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/licenses/user/${userData?._id}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch licenses');
        }

        const data = await response.json();
        setLicenses(data);
      } catch (error) {
        console.error('Error fetching licenses:', error);
        toast.error('Failed to load license history');
      } finally {
        setIsLoading(false);
      }
    };

    fetchLicenses();
  }, [userData]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('License key copied to clipboard');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-500';
      case 'expired':
        return 'text-red-500';
      case 'cancelled':
        return 'text-gray-500';
      default:
        return 'text-gray-500';
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>License History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>License Key</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {licenses.map((license) => (
                <TableRow key={license._id}>
                  <TableCell className="font-mono">{license.licenseKey}</TableCell>
                  <TableCell>{license.plan.name}</TableCell>
                  <TableCell>
                    <span className={`flex items-center ${getStatusColor(license.transaction.status)}`}>
                      {license.transaction.status === 'active' ? (
                        <CheckCircle className="h-4 w-4 mr-2" />
                      ) : (
                        <XCircle className="h-4 w-4 mr-2" />
                      )}
                      {license.transaction.status.charAt(0).toUpperCase() + license.transaction.status.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell>{formatDate(license.createdAt)}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(license.licenseKey)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {licenses.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                    No license history found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
} 