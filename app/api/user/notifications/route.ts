import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { notifications: true },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    return NextResponse.json(user.notifications);
  } catch (error) {
    console.error("[GET_NOTIFICATIONS]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { notificationId } = body;

    if (!notificationId) {
      return new NextResponse("Notification ID is required", { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { notifications: true },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const notification = user.notifications.find(
      (n) => n.id === notificationId
    );

    if (!notification) {
      return new NextResponse("Notification not found", { status: 404 });
    }

    const updatedNotification = await prisma.notification.update({
      where: { id: notificationId },
      data: { read: true },
    });

    return NextResponse.json(updatedNotification);
  } catch (error) {
    console.error("[UPDATE_NOTIFICATION]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const notificationId = searchParams.get("notificationId");

    if (!notificationId) {
      return new NextResponse("Notification ID is required", { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { notifications: true },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const notification = user.notifications.find(
      (n) => n.id === notificationId
    );

    if (!notification) {
      return new NextResponse("Notification not found", { status: 404 });
    }

    await prisma.notification.delete({
      where: { id: notificationId },
    });

    return new NextResponse("Notification deleted successfully");
  } catch (error) {
    console.error("[DELETE_NOTIFICATION]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
} 