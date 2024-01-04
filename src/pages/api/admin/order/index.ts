import { NextApiRequest, NextApiResponse } from "next";
import { _orders } from "@/@mockup/_order";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json({
        orders: _orders,
      });
      break;
    default:
      break;
  }
}
