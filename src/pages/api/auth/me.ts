import { NextApiRequest, NextApiResponse } from "next";
import { apiHandler } from "@/helpers/api/manual";
import { JWT_SECRET_KEY } from "../../../../global-config";
import { verify } from "jsonwebtoken";

export default apiHandler(handler);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({
      message: "Authorization token missing",
    });
    return;
  }

  const accessToken = `${authorization}`.split(" ")[1];

  const data = verify(accessToken, JWT_SECRET_KEY);

  const userId = typeof data === "object" ? data?.id : "";

  res.status(200).json({
    user: {
      email: "sorinwebdev@outlook.com",
      firstname: "alexander",
      lastname: "feduleev",
    },
  });
}
