import NextAuth, { DefaultUser, NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT_SECRET_KEY } from "../../../../global-config";
import { Customer, dbConnect } from "@/helpers/db";
import { ICustomerItem } from "@/@types/customer";

declare module "next-auth" {
  interface IUser extends DefaultUser {
    firstname: string;
    lastname: string;
  }

  interface User extends IUser {}

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

          if (!user) throw "Username or password is incorrect";

          const pwValid = await user.comparePassword(password);

          if (!pwValid) throw "Username or password is incorrect";

          return user;
        } else {
          throw new Error("Credentionals not found");
        }
      },
    }),
  ],
  callbacks: {
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
