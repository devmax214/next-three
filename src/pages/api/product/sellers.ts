import { NextApiRequest, NextApiResponse } from "next";
import { dbConnect, Product } from "@/helpers/db";

export async function getBestSellers() {
  return Product.find({}).populate("sizes");
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      const jsonData = await getBestSellers();
      res.status(200).json(jsonData);
      break;
    default:
      break;
  }
}
