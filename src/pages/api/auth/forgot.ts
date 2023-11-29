import { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "@/helpers/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      break;
    default:
      break;
  }
}
