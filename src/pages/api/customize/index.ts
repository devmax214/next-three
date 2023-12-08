import { Customize, dbConnect } from "@/helpers/db";
import { NextApiRequest, NextApiResponse } from "next"; // export default apiHandler(handler);
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import mongoose from "mongoose";

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
      let customizeId = req.body.customizeId;
      if (customizeId) {
        await Customize.updateOne({ _id: new mongoose.Types.ObjectId(customizeId) }, { quoteState: req.body.quoteState });
      } else {
        const customize = await Customize.create({
          ...req.body,
          customer: userId
        })
        customizeId = customize['_id'];
      }

      const UserCustomize = await Customize.find(new mongoose.Types.ObjectId(customizeId))
        .populate({ path: "customer" })
        .exec();
<<<<<<< HEAD

      res.status(200).json(UserCustomize);
      return res.status(200);
=======
      return res.status(200).json(UserCustomize);
>>>>>>> 50d331c13a64f749087dd2ef3539ff39b8937e05

    case "DELETE":
      const result = await Customize.deleteOne({ _id: req.body.id });
      return res.status(200).json({ success: true });
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
