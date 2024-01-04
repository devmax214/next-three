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
    default:
      break;
  }
}
