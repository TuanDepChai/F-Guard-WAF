import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { Card, CardContent } from "@/components/ui/card";
import { Bell } from "lucide-react";
import { NotificationCard } from "./notification-card";

interface Notification {
  id: string;
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
  userId: string;
}

export default async function NotificationsPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return null;
  }

  const notifications = await prisma.notification.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Thông báo</h1>
        <p className="text-muted-foreground">
          Xem và quản lý thông báo của bạn
        </p>
      </div>

      <div className="grid gap-4">
        {notifications.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-8">
              <Bell className="h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-lg font-medium">Không có thông báo</p>
              <p className="text-sm text-muted-foreground">
                Bạn sẽ thấy các thông báo mới ở đây
              </p>
            </CardContent>
          </Card>
        ) : (
          notifications.map((notification: Notification) => (
            <NotificationCard key={notification.id} notification={notification} />
          ))
        )}
      </div>
    </div>
  );
} 