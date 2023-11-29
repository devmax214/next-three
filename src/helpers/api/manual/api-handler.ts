import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { errorHandler } from "./error-handler";
import { jwtMiddleware } from "./jwt-middleware";

export { apiHandler };

function apiHandler(handler: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await jwtMiddleware(req, res);

      await handler(req, res);
    } catch (err: any) {
      errorHandler(err, res);
    }
  };
}
