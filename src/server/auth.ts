import {
  DefaultSession,
  getServerSession,
  type NextAuthOptions,
} from "next-auth";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db";
import { UserRoles } from "@prisma/client";

import CredentialsProvider from "next-auth/providers/credentials";

import { type Adapter } from "next-auth/adapters";
import { comparePassword } from "@/utils/passwords";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      role: UserRoles;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: PrismaAdapter(db) as Adapter,
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.password || !credentials.email) return null;
        const user = await db.user.findFirst({
          where: {
            email: credentials.email,
          },
        });
        if (!user) return null;
        const validPassword = await comparePassword(
          credentials.password,
          user.password,
        );
        if (!validPassword) return null;
        return user;
      },
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
