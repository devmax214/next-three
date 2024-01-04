import { apiHandler } from "@/helpers/api";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Customer, dbConnect } from "@/helpers/db";

export default apiHandler(handler);

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "POST": {
      const session = await getServerSession(req, res, authOptions);
      if (!session) throw new Error("");

      await dbConnect();

      const userId = session.user?.id;

      const customer = await Customer.findById(userId).select("+password");
      if (!customer) throw new Error("");

      const pwValid = await customer.comparePassword(req.body.oldPassword);
      if (!pwValid) throw "Username or password is incorrect";

      const matchValid = req.body.confirmPassword === req.body.password;
      if (!matchValid) throw "Password is not matched incorrect";

      customer.password = req.body.confirmPassword;

      customer.save();

      res.status(200).json({ status: true });
      break;
    }
    default:
      break;
  }
}
