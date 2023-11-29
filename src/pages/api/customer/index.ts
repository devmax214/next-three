import { NextApiRequest, NextApiResponse } from "next";
import { Customer, dbConnect } from "@/helpers/db";

export async function getAllCustomers() {
  return Customer.find({});
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      const jsonData = await getAllCustomers();
      res.status(200).json(jsonData);
      break;
    case "POST":
      const data = { ...req.body };
      const category = await Customer.create(data);
      res.status(200).json({ success: true, data: category });
      break;
    default:
      break;
  }
}
