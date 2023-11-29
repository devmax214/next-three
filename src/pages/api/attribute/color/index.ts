import { NextApiRequest, NextApiResponse } from "next";
import { Color, dbConnect } from "@/helpers/db";

export async function getAllColorData() {
  return Color.find({});
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      const jsonData = await getAllColorData();
      res.status(200).json(jsonData);
      break;
    case "POST":
      const data = { ...req.body };
      const color = await Color.create(data);
      res.status(200).json({ success: true, data: color });
      break;
    default:
      break;
  }
}
