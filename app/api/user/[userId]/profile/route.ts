import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const updateProfileSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  email: z
    .string()
    .min(1, { message: "This field is required" })
    .email("This is not a valid email"),
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
    const validatedData = updateProfileSchema.parse(body);

    // Check if email is already taken by another user
    if (validatedData.email !== user.email) {
      const existingUser = await prisma.user.findUnique({
        where: {
          email: validatedData.email,
        },
      });

      if (existingUser) {
        return new NextResponse("Email already taken", { status: 400 });
      }
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: params.userId,
      },
      data: {
        name: validatedData.name,
        email: validatedData.email,
      },
    });

    // Log the profile update
    await prisma.securityLog.create({
      data: {
        userId: user.id,
        action: "Profile Update",
        details: "User updated their profile information",
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify(error.errors), { status: 400 });
    }

    return new NextResponse("Internal error", { status: 500 });
  }
} 