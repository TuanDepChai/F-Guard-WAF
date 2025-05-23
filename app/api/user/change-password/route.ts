import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { currentPassword, newPassword } = body;

    if (!currentPassword || !newPassword) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: { password: true },
    });

    if (!user?.password) {
      return new NextResponse("User not found", { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordValid) {
      return new NextResponse("Current password is incorrect", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);

    await prisma.user.update({
      where: { email: session.user.email },
      data: { password: hashedPassword },
    });

    // Log the password change
    await prisma.securityLog.create({
      data: {
        userId: user.id,
        action: "PASSWORD_CHANGE",
        details: "Password changed successfully",
      },
    });

    return new NextResponse("Password updated successfully");
  } catch (error) {
    console.error("[CHANGE_PASSWORD]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
} 