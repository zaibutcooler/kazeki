import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import LinkedInProvider from "next-auth/providers/linkedin";

import User, { UserType } from "@/database/User";
import bcrypt from "bcrypt";
import connectDB from "@/utils/connectDB";
import UserProfile from "@/database/UserProfile";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        await connectDB();
        const user = await User.findOne({ email: credentials?.email });

        if (user.userProfile) {
          const userProfile = await UserProfile.findById(user.userProfile);
          if (userProfile) {
            user.userProfile = userProfile;
          }
        }
        if (!credentials?.password || !user) {
          return null;
        }
        const validPassword = await bcrypt.compare(
          credentials?.password,
          user.password
        );
        if (user && validPassword) {
          return user;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID as string,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token._doc as UserType;
      console.log(session.user);
      return { ...session };
    },
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/",
    // error: "/auth/error",
    // verifyRequest: "/auth/verify-request",
    // newUser: "/", //redirect for new users
  },
  secret: process.env.NEXTAUTH_SECRET,
};
