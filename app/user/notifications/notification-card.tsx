"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Trash2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale/vi";

interface Notification {
  id: string;
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
  userId: string;
}

interface NotificationCardProps {
  notification: Notification;
}

export function NotificationCard({ notification }: NotificationCardProps) {
  const handleMarkAsRead = async () => {
    try {
      await fetch("/api/user/notifications", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          notificationId: notification.id,
        }),
      });
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await fetch(`/api/user/notifications?notificationId=${notification.id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error deleting notification:", error);
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            {notification.title}
          </CardTitle>
          <CardDescription>
            {formatDistanceToNow(new Date(notification.createdAt), {
              addSuffix: true,
              locale: vi,
            })}
          </CardDescription>
        </div>
        <div className="flex items-center space-x-2">
          {!notification.read && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={handleMarkAsRead}
            >
              <Check className="h-4 w-4" />
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-destructive"
            onClick={handleDelete}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          {notification.message}
        </p>
      </CardContent>
    </Card>
  );
} 