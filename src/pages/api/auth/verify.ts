import { NextApiRequest, NextApiResponse } from "next";
import { Customer, dbConnect } from "@/helpers/db";
import { sendEmail } from "@/helpers/mailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      const { token } = req.body;

      //Find user in the database and check if token is valid
      const user = await Customer.findOne({
        verifyToken: token,
        verifyTokenExpiry: { $gt: Date.now() },
      });
      if (!user) {
        return res.status(201).json({ error: "Invalid or expired token" });
      }

      //Update user in the database
      user.isVerified = true;
      user.verifyToken = '';
      user.verifyTokenExpiry = '';
      await Customer.updateOne({ _id: user._id }, user);

      res.status(201).json({ success: true, data: user });
      break;
    default:
      break;
  }
}
