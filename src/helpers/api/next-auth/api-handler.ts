import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { errorHandler } from "./error-handler";
import { middleware } from "./next-auth-middleware";

export { apiHandler };

function apiHandler(handler: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await middleware(req, res);

      await handler(req, res);
    } catch (err: any) {
      errorHandler(err, res);
    }
  };
}
