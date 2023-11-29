import { NextApiRequest, NextApiResponse } from "next";
import { dbConnect, Product } from "@/helpers/db";

export async function getAllProducts() {
  return Product.find({}).populate("category");
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      const jsonData = await getAllProducts();
      res.status(200).json(jsonData);
      break;
    case "POST":
      const data = { ...req.body };
      const product = await Product.create(data);
      res.status(200).json({ success: true, data: product });
      break;
    default:
      break;
  }
}
