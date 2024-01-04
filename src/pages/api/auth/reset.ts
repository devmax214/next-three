import { NextApiRequest, NextApiResponse } from "next";
import { Customer, dbConnect } from "@/helpers/db";
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "PUT":
      const { token, password } = req.body;

      const user = await Customer.findOne({
        forgotPasswordToken: token,
        forgotPasswordTokenExpiry: { $gt: Date.now() },
      }).select("+password");

      if (!user) {
        return res.status(200).json({ error: "Invalid or expired token" });
      }

      if (!user) throw "Username or password is incorrect";

      user.password = bcrypt.hashSync(password, 10);
      user.isAdmin = true;
      user.forgotPasswordToken = null;
      user.forgotPasswordTokenExpiry = null;

      await Customer.updateOne({ _id: user._id }, user);
      return res.status(200).json({ success: true, data: user });
      break;
    default:
      break;
  }
}
