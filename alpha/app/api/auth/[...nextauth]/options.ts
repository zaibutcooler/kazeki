import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import LinkedInProvider from "next-auth/providers/linkedin";
import { connectToDB } from "@/utils/connectDB";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Username:",
          type: "text",
          placeholder: "Your username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "Your password",
        },
      },
      async authorize(credentials, req) {
        connectToDB();

        const user = {
          id: "33",
          email: "zaiyellyintaung@gmail.com",
          password: "123",
        };
        if (
          user
          // credentials?.email === user.email &&
          // credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID as string,
    //   clientSecret: process.env.GITHUB_SECRET as string,
    // }),
    // LinkedInProvider({
    //   clientId: process.env.LINKEDIN_CLIENT_ID as string,
    //   clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
    // }),
  ],
  pages: {
    signIn: "/auth/login",
    //signOut: "/", //after sign out
    // error: "/auth/error",
    // verifyRequest: "/auth/verify-request",
    // newUser: "/", //redirect for new users
  },
};
