import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { login, getMe } from "@/services/auth";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const user = await login({
            email: credentials.email,
            password: credentials.password,
          });

          console.log(user);

          if (user) {
            return {
              id: user.id,
              email: user.email,
              name: user.fullName,
              token: user.token,
            };
          }

          return null;
        } catch (error) {
          console.log(error);
          throw new Error(
            error.response?.data?.message || "Authentication failed"
          );
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.fullName = user.fullName;
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.email = token.email;
      session.user.fullName = token.fullName;
      session.user.id = token.id;
      session.user.accessToken = token.accessToken;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
