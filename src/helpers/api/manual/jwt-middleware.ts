import { NextApiRequest, NextApiResponse } from "next";
import { expressjwt } from "express-jwt";
import util from "util";
import { JWT_SECRET_KEY } from "../../../../global-config";

export { jwtMiddleware };

function jwtMiddleware(req: NextApiRequest, res: NextApiResponse) {
  const middleware = expressjwt({
    secret: JWT_SECRET_KEY,
    algorithms: ["HS256"],
  }).unless({
    path: [
      // public routes that don't require authentication
      "/api/auth/login",
      "/api/auth/register",
      "/api/contact",
    ],
  });

  return util.promisify(middleware)(req, res);
}
