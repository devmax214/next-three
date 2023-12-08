import { Customize, dbConnect } from "@/helpers/db";
import { NextApiRequest, NextApiResponse } from "next"; // export default apiHandler(handler);
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

// export default apiHandler(handler);

export default handler;

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  await dbConnect();

  const session = await getServerSession(req, res, authOptions);

  if (!session) throw new Error("");

  const userId = session.user?.id as string;

  switch (method) {
    case "GET":
      const customizeProducts = await Customize.find({ customer: userId });
      return res.status(200).json(customizeProducts);

    case "POST":
      const customize = await Customize.create({
        ...req.body,
        customer: userId
      })

      const UserCustomize = await Customize.find(customize._id)
        .populate({ path: "customer" })
        .exec();
      return res.status(200).json(UserCustomize);

    case "DELETE":
      const result = await Customize.deleteOne({ _id: req.body.id });
      return res.status(200).json({ success: true });
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
