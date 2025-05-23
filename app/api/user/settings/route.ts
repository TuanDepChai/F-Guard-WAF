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
      include: { settings: true },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Create default settings if not exists
    if (!user.settings) {
      const settings = await prisma.userSettings.create({
        data: {
          userId: user.id,
        },
      });
      return NextResponse.json(settings);
    }

    return NextResponse.json(user.settings);
  } catch (error) {
    console.error("[GET_SETTINGS]", error);
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
    const {
      emailNotifications,
      securityAlerts,
      systemUpdates,
      profileVisibility,
      activityStatus,
      dataCollection,
      theme,
      fontSize,
    } = body;

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { settings: true },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Create settings if not exists
    if (!user.settings) {
      const settings = await prisma.userSettings.create({
        data: {
          userId: user.id,
          emailNotifications,
          securityAlerts,
          systemUpdates,
          profileVisibility,
          activityStatus,
          dataCollection,
          theme,
          fontSize,
        },
      });
      return NextResponse.json(settings);
    }

    // Update existing settings
    const settings = await prisma.userSettings.update({
      where: { userId: user.id },
      data: {
        emailNotifications,
        securityAlerts,
        systemUpdates,
        profileVisibility,
        activityStatus,
        dataCollection,
        theme,
        fontSize,
      },
    });

    return NextResponse.json(settings);
  } catch (error) {
    console.error("[UPDATE_SETTINGS]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
} 