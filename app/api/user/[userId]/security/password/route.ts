import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { compareSync, hash } from "bcryptjs";

const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, { message: "Current password is required" }),
  newPassword: z.string().min(8, { message: "New password must be at least 8 characters long" }),
});

export async function PATCH(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: params.userId,
        email: session.user.email,
      },
    });

    if (!user) {
      return new NextResponse("Not found", { status: 404 });
    }

    const body = await request.json();
    const validatedData = changePasswordSchema.parse(body);

    // Verify current password
    if (!user.hashedPassword || !compareSync(validatedData.currentPassword, user.hashedPassword)) {
      return new NextResponse("Invalid current password", { status: 400 });
    }

    // Hash the new password
    const hashedNewPassword = await hash(validatedData.newPassword, 10);

    // Update the password in the database
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        hashedPassword: hashedNewPassword,
      },
    });

    // Log the password change
    await prisma.securityLog.create({
      data: {
        userId: user.id,
        action: "Password Change",
        details: "User successfully changed their password",
      },
    });

    return new NextResponse("Password updated successfully", { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify(error.errors), { status: 400 });
    }

    console.error("Change password error:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
} 