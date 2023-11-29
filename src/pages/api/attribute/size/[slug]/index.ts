import { NextApiRequest, NextApiResponse } from "next";
import { dbConnect, Size } from "@/helpers/db";

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

      const size = await Size.findOneAndUpdate(
        conditions,
        {
          ...req.body,
        },
        { returnDocument: "after" }
      );

      res.status(200).json({ success: true, data: size });
      break;
    case "DELETE":
      break;
    default:
      break;
  }
}
