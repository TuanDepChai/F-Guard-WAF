import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { randomBytes } from "crypto";

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { apiKeys: true },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    return NextResponse.json(user.apiKeys);
  } catch (error) {
    console.error("[GET_API_KEYS]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { name } = body;

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Generate API key
    const key = `fg_${randomBytes(32).toString("hex")}`;

    const apiKey = await prisma.apiKey.create({
      data: {
        name,
        key,
        userId: user.id,
      },
    });

    // Log the API key creation
    await prisma.securityLog.create({
      data: {
        userId: user.id,
        action: "API_KEY_CREATED",
        details: `API key "${name}" created`,
      },
    });

    return NextResponse.json(apiKey);
  } catch (error) {
    console.error("[CREATE_API_KEY]", error);
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
    const keyId = searchParams.get("keyId");

    if (!keyId) {
      return new NextResponse("Key ID is required", { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { apiKeys: true },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const apiKey = user.apiKeys.find((key) => key.id === keyId);
    if (!apiKey) {
      return new NextResponse("API key not found", { status: 404 });
    }

    await prisma.apiKey.delete({
      where: { id: keyId },
    });

    // Log the API key deletion
    await prisma.securityLog.create({
      data: {
        userId: user.id,
        action: "API_KEY_DELETED",
        details: `API key "${apiKey.name}" deleted`,
      },
    });

    return new NextResponse("API key deleted successfully");
  } catch (error) {
    console.error("[DELETE_API_KEY]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
} 