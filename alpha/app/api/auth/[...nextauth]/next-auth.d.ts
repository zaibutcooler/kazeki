import NextAuth from "next-auth/next";
import { ProfileType } from "@/database/UserProfile";

declare module "next-auth" {
  interface Session {
    user: {
      _id: string;
      email: string;
      password: string;
      profile: ProfileType;
      created: string | Date;
    };
  }
}
