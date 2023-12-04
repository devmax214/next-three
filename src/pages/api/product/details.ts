import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
  } catch (error) {
    console.error("[Product API]: ", error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
}
