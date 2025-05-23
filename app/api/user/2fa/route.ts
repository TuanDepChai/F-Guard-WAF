import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { authenticator } from "otplib";
import QRCode from "qrcode";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { action } = body;

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    if (action === "enable") {
      // Generate new secret
      const secret = authenticator.generateSecret();
      const otpauth = authenticator.keyuri(
        user.email,
        "FGuard",
        secret
      );

      // Generate QR code
      const qrCode = await QRCode.toDataURL(otpauth);

      // Store secret temporarily
      await prisma.user.update({
        where: { email: session.user.email },
        data: { twoFactorSecret: secret },
      });

      return NextResponse.json({ qrCode, secret });
    }

    if (action === "verify") {
      const { token } = body;
      if (!token) {
        return new NextResponse("Token is required", { status: 400 });
      }

      const isValid = authenticator.verify({
        token,
        secret: user.twoFactorSecret || "",
      });

      if (!isValid) {
        return new NextResponse("Invalid token", { status: 400 });
      }

      // Enable 2FA
      await prisma.user.update({
        where: { email: session.user.email },
        data: { twoFactorEnabled: true },
      });

      // Log the 2FA enablement
      await prisma.securityLog.create({
        data: {
          userId: user.id,
          action: "2FA_ENABLED",
          details: "Two-factor authentication enabled",
        },
      });

      return new NextResponse("2FA enabled successfully");
    }

    if (action === "disable") {
      const { token } = body;
      if (!token) {
        return new NextResponse("Token is required", { status: 400 });
      }

      const isValid = authenticator.verify({
        token,
        secret: user.twoFactorSecret || "",
      });

      if (!isValid) {
        return new NextResponse("Invalid token", { status: 400 });
      }

      // Disable 2FA
      await prisma.user.update({
        where: { email: session.user.email },
        data: {
          twoFactorEnabled: false,
          twoFactorSecret: null,
        },
      });

      // Log the 2FA disablement
      await prisma.securityLog.create({
        data: {
          userId: user.id,
          action: "2FA_DISABLED",
          details: "Two-factor authentication disabled",
        },
      });

      return new NextResponse("2FA disabled successfully");
    }

    return new NextResponse("Invalid action", { status: 400 });
  } catch (error) {
    console.error("[2FA]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
} 