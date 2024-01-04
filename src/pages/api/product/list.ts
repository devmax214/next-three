import { NextApiRequest, NextApiResponse } from "next";
import { _products } from "@/@mockup/_product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  try {
    switch (method) {
      case "GET":
        res.status(200).json({
          products: _products,
        });
        break;
      default:
        break;
    }
  } catch (error) {
    console.error("[Product API]: ", error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
}
