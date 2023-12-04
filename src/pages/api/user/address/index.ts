import { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "@/helpers/db";
import { apiHandler } from "@/helpers/api/manual";

export default apiHandler(handler);

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      res.status(200).json([]);
      break;
    default:
      break;
  }
}
