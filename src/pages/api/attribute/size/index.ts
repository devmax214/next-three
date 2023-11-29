import { NextApiRequest, NextApiResponse } from "next";
import { dbConnect, Size } from "@/helpers/db";

export async function getAllSizeData() {
  return Size.find({});
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      const jsonData = await getAllSizeData();
      res.status(200).json(jsonData);
      break;
    case "POST":
      const data = { ...req.body };
      const color = await Size.create(data);
      res.status(200).json({ success: true, data: color });
      break;
    default:
      break;
  }
}
