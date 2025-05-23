import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Bell, Key, Activity } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale/vi";
import { StatsChart } from "@/components/dashboard/stats-chart";

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

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
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
    return null;
  }

  // Lấy dữ liệu cho biểu đồ
  const chartData = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/user/dashboard/charts`, {
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Tổng quan</h1>
        <p className="text-muted-foreground">
          Chào mừng trở lại, {user.name || "Người dùng"}
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
              Số lượng API keys đang hoạt động
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Thông báo chưa đọc
            </CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{user.notifications.length}</div>
            <p className="text-xs text-muted-foreground">
              Thông báo mới cần xem
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Bảo mật
            </CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {user.twoFactorEnabled ? "Đã bật" : "Chưa bật"}
            </div>
            <p className="text-xs text-muted-foreground">
              Xác thực hai yếu tố
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Hoạt động gần đây
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{user.securityLogs.length}</div>
            <p className="text-xs text-muted-foreground">
              Sự kiện bảo mật gần đây
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <StatsChart
          data={chartData.apiCalls}
          title="API Calls"
          description="Số lượng API calls trong 7 ngày qua"
        />
        <StatsChart
          data={chartData.notifications}
          title="Thông báo"
          description="Số lượng thông báo trong 7 ngày qua"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Hoạt động gần đây</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {user.securityLogs.map((log) => (
                <div key={log.id} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{log.action}</p>
                    <p className="text-xs text-muted-foreground">
                      {log.details}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {formatDistanceToNow(new Date(log.createdAt), {
                      addSuffix: true,
                      locale: vi,
                    })}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Thông báo mới</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {user.notifications.map((notification) => (
                <div key={notification.id} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{notification.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {notification.message}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {formatDistanceToNow(new Date(notification.createdAt), {
                      addSuffix: true,
                      locale: vi,
                    })}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 