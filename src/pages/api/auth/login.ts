import { NextApiRequest, NextApiResponse } from "next";
import { apiHandler } from "@/helpers/api/manual";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../../../../global-config";
import { Customer, dbConnect } from "@/helpers/db";

export default apiHandler(handler);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      await authenticate();
      break;
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function authenticate() {
    const { email, password } = req.body;
    if (!email || !password) throw "Request missing username or password";

    await dbConnect();

    const user = await Customer.findOne({
      email: email,
    }).select("+password");

    if (!user) throw "Username or password is incorrect";

    const pwValid = await user.comparePassword(password);

    if (!pwValid) throw "Username or password is incorrect";

    const session = { id: user.id };
    const accessToken = jwt.sign(session, JWT_SECRET_KEY, {
      expiresIn: "7d",
    });

    return res.status(200).json({
      user: {
        email: "sorinwebdev@outlook.com",
        firstname: "alexander",
        lastname: "feduleev",
      },
      accessToken,
    });
  }
}
