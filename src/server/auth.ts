import { DefaultSession, type NextAuthOptions } from "next-auth";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db";

import CredentialsProvider from "next-auth/providers/credentials";

import { type Adapter } from "next-auth/adapters";



declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
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
    providers:[
      CredentialsProvider({
        name:"credentials",
        credentials:{
          email:{
            label:"Email",
            type:"email",
            placeholder:"Enter your email",
          },
          password:{
            label:"Password",
            type:"password",
            placeholder:"password"
          }
        },
        async authorize(credentials,req){
          return null
        }

      })
    ]
};
