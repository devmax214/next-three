import NextAuth, { DefaultUser, NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT_SECRET_KEY } from "../../../../global-config";
import { Customer, dbConnect } from "@/helpers/db";
import { ICustomerItem } from "@/@types/customer";
import { sendEmail } from "@/helpers/mailer";

declare module "next-auth" {
  interface IUser extends DefaultUser {
    firstname: string;
    lastname: string;
  }

  interface User extends IUser { }

  interface Session {
    accessToken: string;
    user?: User;
  }
}

export const authOptions: NextAuthOptions = {
  secret: JWT_SECRET_KEY,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // !TODO: Admin
        // const path = req.nextUrl.pathname;
        // if (path.startsWith("/admin")) {
        //   return token?.role === "admin";
        // }

        if (credentials) {
          await dbConnect();

          const { email, password } = credentials as {
            email: string;
            password: string;
          };

          const user = await Customer.findOne({
            email: email,
          }).select("+password");

          if (!user) return { error: true, msg: "Username or password is incorrect" };
          if (!user.isVerified) {
            await sendEmail({ email: email, emailType: "VERIFY", userId: user._id.toString() });
            return { error: true, msg: "Please verify email. Verify link sent to your email" };
          }

          const pwValid = await user.comparePassword(password);
          if (!pwValid) return { error: true, msg: "Password is incorrect" };

          return user;
        } else {
          return { error: true, msg: "Credentionals not found" };
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (user?.error) {
        throw new Error(user.msg)
      }
      return user;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }

      return token;
    },
    session: async ({ session, token, user }): Promise<Session> => {
      if (token && session.user) {
        // console.log(token);
        // session.accessToken = token.accessToken as string;
        session.user.id = (token.user as ICustomerItem)._id;
        session.user.firstname = (token.user as ICustomerItem).firstname;
        session.user.lastname = (token.user as ICustomerItem).lastname;
      }

      return Promise.resolve(session);
    },
  },
  pages: {},
};

export default NextAuth(authOptions);
