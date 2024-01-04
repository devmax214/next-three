import { NextApiRequest, NextApiResponse } from "next";
import { dbConnect, Product } from "@/helpers/db";

export async function getProductData(productId: string) {
  return await Product.findById(productId)
    .populate("sizes")
    .populate("category");
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { slug },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      const jsonData = await getProductData(slug as string);
      res.status(200).json(jsonData);
      break;
    default:
      break;
  }
}
