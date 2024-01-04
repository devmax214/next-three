import { apiHandler } from "@/helpers/api/manual";
import { NextApiRequest, NextApiResponse } from "next";

export default apiHandler(handler);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      return res.status(200);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
