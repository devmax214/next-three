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
      const { email } = req.body;

      await dbConnect();

      const user = await Customer.findOne({
        email: email,
      });
      if (!user) throw "User not found";

      await sendEmail({ email, emailType: "RESET", userId: user._id.toString() });
      return res.status(200).json({
        msg: "Password reset link sent to your email",
        success: true,
      });
      break;
    default:
      break;
  }
}
