import { NextApiRequest, NextApiResponse } from "next";
import { dbConnect, Customize } from "@/helpers/db";

export async function getCustomizeData(customizeId: string) {
  return await Customize.findById(customizeId)
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
      const jsonData = await getCustomizeData(slug as string);
      res.status(200).json(jsonData);
      break;
    default:
      break;
  }
}
