import { NextApiResponse } from "next";

export { errorHandler };

function errorHandler(err: any, res: NextApiResponse) {
  if (typeof err === "string") {
    return res.status(400).json({ message: err });
  }

  if (err.name === "UnauthorizedError") {
    return res.status(401).json({ message: "Invalid Token" });
  }

  return res.status(500).json({ message: err.message });
}
