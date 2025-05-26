'use client';

import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const ProfilePage: React.FC = () => {
  const { userData } = useAuth();
  const router = useRouter();

  if (!userData) {
    // Handle case where user data is not available (shouldn't happen with middleware, but good practice)
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold">Error</h1>
        <p className="mt-4">User data not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">User Profile</h1>
        <Button onClick={() => router.push('/dashboard/update')} variant="outline">
          Edit Profile
        </Button>
      </div>

      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Name</p>
            <p className="text-lg font-semibold">{userData.name || 'Not specified'}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
            <p className="text-lg font-semibold">{userData.email}</p>
          </div>
          {/* Add more sections for other profile information */}
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">User ID</p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">{userData.id}</p>
          </div>
          {/* Example: Add a section for creation date if available in userData */}
          {/* {userData.createdAt && (
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Member Since</p>
              <p className="text-lg font-semibold">{new Date(userData.createdAt).toLocaleDateString()}</p>
            </div>
          )} */}
        </CardContent>
      </Card>

    </div>
  );
};

export default ProfilePage; 