import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { authenticator } from "otplib";

const enableTwoFactorSchema = z.object({
  token: z.string().min(6, { message: "Invalid token" }).max(6, { message: "Invalid token" }),
});

const disableTwoFactorSchema = z.object({
  token: z.string().min(6, { message: "Invalid token" }).max(6, { message: "Invalid token" }),
});

// GET: Generate a new 2FA secret and return it (and the QR code URL)
export async function GET(
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

    // If user already has a secret, return it
    if (user.twoFactorSecret) {
      const otpAuthUrl = authenticator.keyuri(user.email, "FGuard", user.twoFactorSecret);
      return NextResponse.json({ secret: user.twoFactorSecret, otpAuthUrl });
    }

    // Generate a new secret
    const secret = authenticator.generateSecret();
    const otpAuthUrl = authenticator.keyuri(user.email, "FGuard", secret);

    // Store the secret temporarily (or save to user and confirm later)
    // For simplicity, we will save it directly here. In a real app, might need a staging area.
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        twoFactorSecret: secret,
      },
    });
    
    // Log the secret generation
    await prisma.securityLog.create({
      data: {
        userId: user.id,
        action: "2FA Secret Generated",
        details: "User generated a new 2FA secret",
      },
    });

    return NextResponse.json({ secret, otpAuthUrl });
  } catch (error) {
    console.error("Generate 2FA secret error:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

// PATCH: Enable or Disable 2FA
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

    if (body.enable) {
      // Enable 2FA
      const validatedData = enableTwoFactorSchema.parse(body);

      if (!user.twoFactorSecret || !authenticator.verify({
        token: validatedData.token,
        secret: user.twoFactorSecret
      })) {
        return new NextResponse("Invalid token", { status: 400 });
      }

      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          twoFactorEnabled: true,
        },
      });

      // Log 2FA enabled
      await prisma.securityLog.create({
        data: {
          userId: user.id,
          action: "2FA Enabled",
          details: "User successfully enabled two-factor authentication",
        },
      });

      return new NextResponse("Two-factor authentication enabled", { status: 200 });

    } else if (body.disable) {
      // Disable 2FA
       const validatedData = disableTwoFactorSchema.parse(body);

       if (!user.twoFactorSecret || !authenticator.verify({
         token: validatedData.token,
         secret: user.twoFactorSecret
       })) {
         return new NextResponse("Invalid token", { status: 400 });
       }

      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          twoFactorEnabled: false,
          twoFactorSecret: null, // Remove secret on disable
        },
      });

      // Log 2FA disabled
      await prisma.securityLog.create({
        data: {
          userId: user.id,
          action: "2FA Disabled",
          details: "User successfully disabled two-factor authentication",
        },
      });

      return new NextResponse("Two-factor authentication disabled", { status: 200 });

    } else {
      return new NextResponse("Invalid request body", { status: 400 });
    }

  } catch (error) {
     if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify(error.errors), { status: 400 });
    }

    console.error("Manage 2FA error:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
} 