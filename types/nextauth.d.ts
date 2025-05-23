import NextAuth, { DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role?: string | null; // Thêm role vào kiểu user
    } & DefaultSession['user'];
  }
}

declare module "next-auth/jwt" {
  interface DefaultJWT extends DefaultJWT {
    id: string;
    role?: string | null; // Thêm role vào kiểu JWT
  }
} 