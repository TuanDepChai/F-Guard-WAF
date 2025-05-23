import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { userId: string; notificationId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
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

    const body = await req.json();
    const { read } = body;

    const notification = await prisma.notification.update({
      where: {
        id: params.notificationId,
        userId: user.id,
      },
      data: {
        read,
      },
    });

    return NextResponse.json(notification);
  } catch (error) {
    console.error("[PATCH_NOTIFICATION]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { userId: string; notificationId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
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

    await prisma.notification.delete({
      where: {
        id: params.notificationId,
        userId: user.id,
      },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("[DELETE_NOTIFICATION]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
} 