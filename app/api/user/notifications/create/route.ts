import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { title, message, userId } = body;

    if (!title || !message || !userId) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const notification = await prisma.notification.create({
      data: {
        title,
        message,
        userId,
      },
    });

    return NextResponse.json(notification);
  } catch (error) {
    console.error("[CREATE_NOTIFICATION]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
} 