"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatsChart } from "@/components/dashboard/stats-chart";
import { Activity } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale/vi";

interface DashboardClientProps {
  userId: string;
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

interface ChartData {
  date: string;
  value: number;
}[];

interface DashboardChartData {
  apiCalls: ChartData;
  notifications: ChartData;
  securityEvents: ChartData;
}

export function DashboardClient({
  userId,
  securityLogs,
  notifications,
}: DashboardClientProps) {
  const [chartData, setChartData] = useState<DashboardChartData | null>(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await fetch(
          `/api/user/${userId}/dashboard/charts`
        );
        const data = await response.json();
        setChartData(data);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchChartData();
  }, [userId]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        {chartData?.apiCalls && (
          <StatsChart
            data={chartData.apiCalls}
            title="API Calls"
            description="Số lượng API calls trong 7 ngày qua"
          />
        )}
        {chartData?.notifications && (
          <StatsChart
            data={chartData.notifications}
            title="Thông báo"
            description="Số lượng thông báo trong 7 ngày qua"
          />
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Hoạt động gần đây</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {securityLogs.map((log) => (
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
              {notifications.map((notification) => (
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