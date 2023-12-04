import { NextApiRequest, NextApiResponse } from "next";
import { dbConnect, Product } from "@/helpers/db";

export async function getAllProducts() {
  return Product.find({}).populate("category").populate("sizes");
}

class APIFeatures {
  constructor(public query: any, private queryString: any) {}

  filtering() {
    const queryObj = { ...this.queryString };

    this.query.find({ name: { $regex: queryObj.search } });

    this.query.find();

    return this;
  }

  sorting() {
    return this;
  }

  paginating() {
    return this;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      // const jsonData = await getAllProducts();
      // res.status(200).json(jsonData);

      const features = new APIFeatures(Product.find(), req.query)
        .filtering()
        .sorting()
        .paginating();

      const products = await features.query;
      res.status(200).json(products);
      break;
    default:
      break;
  }
}
