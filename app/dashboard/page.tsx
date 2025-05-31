'use client';

import React, { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import UserDashboard from '@/components/dashboard/UserDashboard';

const DashboardPage: React.FC = () => {
  const { userData } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect admin users to admin dashboard
    if (userData?.role === 'admin') {
      router.push('/dashboard/admin');
    }
  }, [userData, router]);

  return <UserDashboard />;
};

export default DashboardPage;
