import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Shield, Lock, Key, Smartphone } from "lucide-react";

export default async function SecurityPage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Security</h1>
        <p className="text-muted-foreground">
          Manage your account security settings
        </p>
      </div>

      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Change Password
            </CardTitle>
            <CardDescription>
              Update your password to keep your account secure
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <Button>Update Password</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-5 w-5" />
              Two-Factor Authentication
            </CardTitle>
            <CardDescription>
              Add an extra layer of security to your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Enable 2FA</Label>
                <p className="text-sm text-muted-foreground">
                  Protect your account with two-factor authentication
                </p>
              </div>
              <Switch />
            </div>
            <div className="space-y-2">
              <Label>Recovery Codes</Label>
              <p className="text-sm text-muted-foreground">
                Generate recovery codes in case you lose access to your 2FA device
              </p>
              <Button variant="outline">Generate Recovery Codes</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              API Keys
            </CardTitle>
            <CardDescription>
              Manage your API keys for external integrations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Active API Keys</Label>
              <div className="rounded-md border p-4">
                <p className="text-sm text-muted-foreground">
                  No active API keys found
                </p>
              </div>
            </div>
            <Button variant="outline">Generate New API Key</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Security Log
            </CardTitle>
            <CardDescription>
              View your recent security activity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Login from Chrome on Windows</p>
                  <p className="text-sm text-muted-foreground">Just now</p>
                </div>
                <Button variant="ghost" size="sm">View Details</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Password changed</p>
                  <p className="text-sm text-muted-foreground">2 days ago</p>
                </div>
                <Button variant="ghost" size="sm">View Details</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 