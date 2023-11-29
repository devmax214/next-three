import { NextApiRequest, NextApiResponse } from "next";
import { Category } from "@/helpers/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { slug },
  } = req;

  switch (method) {
    case "GET":
      const category = await Category.findById(slug).exec();
      res.status(200).json(category);
      break;
    case "POST":
      const conditions = {
        _id: slug,
      };

      const product = await Category.findOneAndUpdate(conditions, {
        ...req.body,
      });

      res.status(200).json(product);
      break;
    default:
      break;
  }
}
