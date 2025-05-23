import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { subDays, format } from "date-fns";

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const session = await getServerSession();
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { 
        id: params.userId,
        email: session.user.email 
      },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Lấy dữ liệu 7 ngày gần nhất
    const days = Array.from({ length: 7 }, (_, i) => {
      const date = subDays(new Date(), i);
      return format(date, "yyyy-MM-dd");
    }).reverse();

    // Lấy số lượng API calls theo ngày
    const apiCalls = await Promise.all(
      days.map(async (date) => {
        const count = await prisma.securityLog.count({
          where: {
            userId: user.id,
            action: "API_CALL",
            createdAt: {
              gte: new Date(date),
              lt: new Date(date + "T23:59:59"),
            },
          },
        });
        return { date, value: count };
      })
    );

    // Lấy số lượng thông báo theo ngày
    const notifications = await Promise.all(
      days.map(async (date) => {
        const count = await prisma.notification.count({
          where: {
            userId: user.id,
            createdAt: {
              gte: new Date(date),
              lt: new Date(date + "T23:59:59"),
            },
          },
        });
        return { date, value: count };
      })
    );

    // Lấy số lượng sự kiện bảo mật theo ngày
    const securityEvents = await Promise.all(
      days.map(async (date) => {
        const count = await prisma.securityLog.count({
          where: {
            userId: user.id,
            action: {
              not: "API_CALL",
            },
            createdAt: {
              gte: new Date(date),
              lt: new Date(date + "T23:59:59"),
            },
          },
        });
        return { date, value: count };
      })
    );

    return NextResponse.json({
      apiCalls,
      notifications,
      securityEvents,
    });
  } catch (error) {
    console.error("[GET_CHART_DATA]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
} 