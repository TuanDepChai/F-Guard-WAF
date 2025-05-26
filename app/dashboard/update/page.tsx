'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const UpdatePage: React.FC = () => {
  const { userData } = useAuth();
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    // Clear error for this field when user starts typing
    if (errors[id]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.currentPassword) {
      newErrors.currentPassword = 'Current password is required.';
    }
    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required.';
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = 'New password must be at least 6 characters.';
    }
    if (formData.newPassword !== formData.confirmNewPassword) {
      newErrors.confirmNewPassword = 'New passwords do not match.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Assume an API endpoint for updating password exists
    // Replace '/api/user/update-password' with your actual endpoint
    try {
      const response = await fetch('/api/user/update-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include authorization header if your API requires it (e.g., JWT)
          // 'Authorization': `Bearer ${yourAuthToken}`, 
        },
        body: JSON.stringify({
          userId: userData?.id, // Pass user ID to API
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle API errors (e.g., incorrect current password)
        throw new Error(data.message || 'Failed to update password.');
      }

      toast.success('Password updated successfully!');
      // Optionally clear the form or redirect
      setFormData({ currentPassword: '', newPassword: '', confirmNewPassword: '' });

    } catch (error) {
      console.error('Password update error:', error);
      toast.error(error instanceof Error ? error.message : 'An error occurred during password update.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Update Account Information</h1>
      
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input
                id="currentPassword"
                type="password"
                value={formData.currentPassword}
                onChange={handleChange}
                required
                className={errors.currentPassword ? 'border-red-500' : ''}
              />
              {errors.currentPassword && <p className="text-red-500 text-sm">{errors.currentPassword}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                id="newPassword"
                type="password"
                value={formData.newPassword}
                onChange={handleChange}
                required
                className={errors.newPassword ? 'border-red-500' : ''}
              />
               {errors.newPassword && <p className="text-red-500 text-sm">{errors.newPassword}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmNewPassword">Confirm New Password</Label>
              <Input
                id="confirmNewPassword"
                type="password"
                value={formData.confirmNewPassword}
                onChange={handleChange}
                required
                 className={errors.confirmNewPassword ? 'border-red-500' : ''}
              />
              {errors.confirmNewPassword && <p className="text-red-500 text-sm">{errors.confirmNewPassword}</p>}
            </div>
            
            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : (
                "Update Password"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* You can add other update forms here (e.g., for email, name) */}

    </div>
  );
};

export default UpdatePage; 