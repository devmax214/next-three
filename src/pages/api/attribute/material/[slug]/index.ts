import { NextApiRequest, NextApiResponse } from "next";
import { dbConnect, Material } from "@/helpers/db";

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
    case "POST":
      const conditions = {
        _id: slug,
      };

      const material = await Material.findOneAndUpdate(
        conditions,
        {
          ...req.body,
        },
        { returnDocument: "after" }
      );

      res.status(200).json({ success: true, data: material });

      break;
    case "DELETE":
      break;
    default:
      break;
  }
}
