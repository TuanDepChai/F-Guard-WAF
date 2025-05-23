import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Bell, Key, Activity } from "lucide-react";
import { notFound } from "next/navigation";
import { DashboardClient } from "./dashboard-client";

interface UserWithRelations {
  id: string;
  name: string | null;
  email: string;
  twoFactorEnabled: boolean;
  apiKeys: { id: string }[];
  securityLogs: {
    id: string;
    action: string;
    details: string;
    createdAt: Date;
  }[];
  notifications: {
    id: string;
    title: string;
    message: string;
    createdAt: Date;
  }[];
}

interface DashboardPageProps {
  params: {
    userId: string;
  };
}

export default async function DashboardPage({ params }: DashboardPageProps) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: { 
      id: params.userId,
      email: session.user.email 
    },
    include: {
      apiKeys: true,
      securityLogs: {
        take: 5,
        orderBy: { createdAt: "desc" },
      },
      notifications: {
        where: { read: false },
        take: 5,
        orderBy: { createdAt: "desc" },
      },
    },
  }) as UserWithRelations | null;

  if (!user) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, {user.name || "User"}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              API Keys
            </CardTitle>
            <Key className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{user.apiKeys.length}</div>
            <p className="text-xs text-muted-foreground">
              Active API keys count
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Unread Notifications
            </CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{user.notifications.length}</div>
            <p className="text-xs text-muted-foreground">
              New notifications to review
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Security Status
            </CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {user.twoFactorEnabled ? "Enabled" : "Disabled"}
            </div>
            <p className="text-xs text-muted-foreground">
              Two-factor authentication
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Recent Activity
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{user.securityLogs.length}</div>
            <p className="text-xs text-muted-foreground">
              Recent security events
            </p>
          </CardContent>
        </Card>
      </div>

      <DashboardClient 
        userId={user.id}
        securityLogs={user.securityLogs}
        notifications={user.notifications}
      />
    </div>
  );
} 