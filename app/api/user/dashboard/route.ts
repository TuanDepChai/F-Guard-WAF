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
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Tính toán thống kê
    const stats = {
      apiKeys: {
        total: user.apiKeys.length,
        active: user.apiKeys.length,
      },
      security: {
        twoFactorEnabled: user.twoFactorEnabled,
        recentLogs: user.securityLogs.length,
      },
      notifications: {
        unread: user.notifications.length,
        recent: user.notifications,
      },
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error("[GET_DASHBOARD_STATS]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
} 