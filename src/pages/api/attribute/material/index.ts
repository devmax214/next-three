import { NextApiRequest, NextApiResponse } from "next";
import { dbConnect, Material } from "@/helpers/db";

export async function getAllMaterialData() {
  return Material.find({});
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      const jsonData = await getAllMaterialData();
      res.status(200).json(jsonData);
      break;
    case "POST":
      const data = { ...req.body };
      const material = await Material.create(data);
      res.status(200).json({ success: true, data: material });
      break;
    default:
      break;
  }
}
