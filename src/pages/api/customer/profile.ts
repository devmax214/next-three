import { apiHandler } from "@/helpers/api";
import { NextApiRequest, NextApiResponse } from "next";
import { Customer, dbConnect } from "@/helpers/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default apiHandler(handler);

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET": {
      const session = await getServerSession(req, res, authOptions);
      if (!session) throw new Error("");

      await dbConnect();

      const userId = session.user?.id;

      const customer = await Customer.findById(userId);
      res.status(200).json(customer);
      break;
    }
    case "POST": {
      const session = await getServerSession(req, res, authOptions);
      if (!session) throw new Error("");

      await dbConnect();
      const userId = session.user?.id;

      const filter = {
        _id: userId,
      };

      const update = {
        ...req.body,
      };

      const customer = await Customer.findOneAndUpdate(filter, update, {
        new: true,
      });
      res.status(200).json(customer);
      break;
    }
    default:
      break;
  }
}
