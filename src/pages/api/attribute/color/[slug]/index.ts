import { NextApiRequest, NextApiResponse } from "next";
import { Color, dbConnect } from "@/helpers/db";

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

      const color = await Color.findOneAndUpdate(
        conditions,
        {
          ...req.body,
        },
        { returnDocument: "after" }
      );
      res.status(200).json({ success: true, data: color });
      break;
    case "DELETE":
      break;
    default:
      break;
  }
}
