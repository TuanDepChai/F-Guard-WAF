import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Import client components
import { ChangePasswordForm } from "./change-password-form";
import { TwoFactorAuthSettings } from "./two-factor-auth-settings";
import { ApiKeysSettings } from "./api-keys-settings";
import { SecurityLogView } from "./security-log-view";

interface SecurityPageProps {
  params: {
    userId: string;
  };
}

export default async function SecurityPage({ params }: SecurityPageProps) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return null; // Or redirect to login
  }

  const user = await prisma.user.findUnique({
    where: { 
      id: params.userId,
      email: session.user.email 
    },
    select: { // Select only necessary fields
      id: true,
      twoFactorEnabled: true,
      securityLogs: {
        take: 10, // Limit logs for performance
        orderBy: { createdAt: "desc" },
      },
    },
  });

  if (!user) {
    notFound(); // User not found or does not match session user ID
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Security Settings</h1>
        <p className="text-muted-foreground">
          Manage your account's security settings
        </p>
      </div>

      <Tabs defaultValue="password" className="space-y-4">
        <TabsList>
          <TabsTrigger value="password">Change Password</TabsTrigger>
          <TabsTrigger value="two-factor">Two-Factor Authentication</TabsTrigger>
          <TabsTrigger value="api-keys">API Keys</TabsTrigger>
          <TabsTrigger value="security-log">Security Log</TabsTrigger>
        </TabsList>

        <TabsContent value="password" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>
                Update your account password
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChangePasswordForm userId={user.id} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="two-factor" className="space-y-4">
           {/* Pass initial 2FA enabled status to client component */}
          <TwoFactorAuthSettings userId={user.id} initialTwoFactorEnabled={user.twoFactorEnabled} />
        </TabsContent>

        <TabsContent value="api-keys" className="space-y-4">
           {/* API keys will be fetched client-side within ApiKeysSettings */}
           <ApiKeysSettings userId={user.id} />
        </TabsContent>

        <TabsContent value="security-log" className="space-y-4">
           {/* Pass fetched security logs to client component */}
           <SecurityLogView securityLogs={user.securityLogs} />
        </TabsContent>
      </Tabs>
    </div>
  );
} 