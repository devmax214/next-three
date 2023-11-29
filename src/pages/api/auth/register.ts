import { NextApiRequest, NextApiResponse } from "next";
import { Customer, dbConnect } from "@/helpers/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      console.log(req.body);
      const customer = await Customer.create({ ...req.body });
      res.status(201).json({ success: true, data: customer });
      break;
    default:
      break;
  }
}
