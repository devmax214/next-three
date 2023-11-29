import { apiHandler } from "@/helpers/api";
import { NextApiRequest, NextApiResponse } from "next";
import { dbConnect, Payment } from "@/helpers/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default apiHandler(handler);

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET": {
      await dbConnect();
      const session = await getServerSession(req, res, authOptions);
      if (!session) throw new Error("");

      const userId = session.user?.id;

      const payments = await Payment.find({ customer: userId });
      res.status(200).json(payments);
      break;
    }
    case "POST": {
      await dbConnect();

      const session = await getServerSession(req, res, authOptions);
      if (!session) throw new Error("");

      const userId = session.user?.id;

      const data = { ...req.body, customer: userId, type: "card" };

      const address = await Payment.create(data);
      res.status(200).json({ success: true, data: address });

      break;
    }
    default:
      break;
  }
}
