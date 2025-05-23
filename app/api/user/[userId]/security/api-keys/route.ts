import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { generateApiKey } from "generate-api-key";

const createApiKeySchema = z.object({
  name: z.string().min(1, { message: "API key name is required" }).max(50),
});

// GET: Get all API keys for the user
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
      include: {
        apiKeys: true,
      },
    });

    if (!user) {
      return new NextResponse("Not found", { status: 404 });
    }

    return NextResponse.json(user.apiKeys);
  } catch (error) {
    console.error("Get API keys error:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

// POST: Create a new API key for the user
export async function POST(
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
    const validatedData = createApiKeySchema.parse(body);

    // Generate a unique API key
    const apiKey = generateApiKey({
      method: "uuidv4",
      prefix: user.id.substring(0, 8), // Optional: use a prefix based on user ID
    });

    const newApiKey = await prisma.apiKey.create({
      data: {
        userId: user.id,
        name: validatedData.name,
        key: apiKey as string,
      },
    });

    // Log API key creation
    await prisma.securityLog.create({
      data: {
        userId: user.id,
        action: "API Key Created",
        details: `New API key created: ${validatedData.name}`,
      },
    });

    // IMPORTANT: In a real application, you might only return the key once upon creation.
    // Returning it here for simplicity in development.
    return NextResponse.json(newApiKey);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify(error.errors), { status: 400 });
    }

    console.error("Create API key error:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

// DELETE: Revoke (delete) an API key
export async function DELETE(
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
    const { apiKeyId } = z.object({ apiKeyId: z.string() }).parse(body);

    // Verify that the API key belongs to the user
    const apiKeyToDelete = await prisma.apiKey.findUnique({
      where: {
        id: apiKeyId,
        userId: user.id,
      },
    });

    if (!apiKeyToDelete) {
      return new NextResponse("API key not found or does not belong to user", { status: 404 });
    }

    await prisma.apiKey.delete({
      where: {
        id: apiKeyId,
      },
    });

     // Log API key deletion
    await prisma.securityLog.create({
      data: {
        userId: user.id,
        action: "API Key Deleted",
        details: `API key deleted: ${apiKeyToDelete.name}`,
      },
    });

    return new NextResponse("API key revoked successfully", { status: 200 });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify(error.errors), { status: 400 });
    }

    console.error("Revoke API key error:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
} 