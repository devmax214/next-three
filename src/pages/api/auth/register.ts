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
      const count = await Customer.count({ email: req.body.email });
      if (count > 0) {
        res.status(201).json({ success: false, msg: "email duplicated!" });
        return;
      }
      const customer = await Customer.create({ ...req.body });
      res.status(201).json({ success: true, data: customer });
      break;
    default:
      break;
  }
}
