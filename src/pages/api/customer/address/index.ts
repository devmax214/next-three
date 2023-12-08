import { NextApiRequest, NextApiResponse } from "next";
import { Address, dbConnect } from "@/helpers/db";
import { apiHandler } from "@/helpers/api";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const getAllAddress = async () => {
  return [];
};

export default apiHandler(handler);

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  const session = await getServerSession(req, res, authOptions);

  const userId = session.user.id;

  await dbConnect();

  switch (method) {
    case "GET":
      const jsonData = await getAllAddress();
      res.status(200).json(jsonData);
      break;
    case "POST":
      const data = { ...req.body, customer: userId };
      console.log(data);
      const address = await Address.create(data);
      res.status(200).json({ success: true, data: address });
      break;
    case "DELETE":
      const id = req.body.id;

      const result = await Address.deleteOne({ _id: id });
      res.status(200).json({ success: true, data: result });
      break;
    default:
      break;
  }
}
