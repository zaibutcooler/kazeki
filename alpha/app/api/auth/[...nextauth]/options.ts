import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import GithubProvider from "next-auth/providers/github";

export const options: NextAuthOptions = {
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID as string,
    //   clientSecret: process.env.APPLE_SECRET as string,
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
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
      async authorize(credentials) {
        // connect with db
        const user = { id: "33", name: "Zai", password: "123" };
        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {},
};
