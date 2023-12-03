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
      // const products = [
      //   {
      //     name: "T-Shirt white",
      //     price: 24,
      //     coverUrl: "/images/customize/products/T-Shirt white.jpg",
      //   },
      //   {
      //     name: "T-Shirt blue",
      //     price: 23,
      //     coverUrl: "/images/customize/products/T-Shirt blue.jpg",
      //   },
      //   {
      //     name: "T-Shirt red",
      //     price: 24,
      //     coverUrl: "/images/customize/products/T-Shirt red.jpg",
      //   },
      //   {
      //     name: "T-Shirt grey",
      //     price: 25,
      //     coverUrl: "/images/customize/products/T-Shirt grey.jpg",
      //   },
      //   {
      //     name: "T-Shirt yellow",
      //     price: 32,
      //     coverUrl: "/images/customize/products/T-Shirt yellow.jpg",
      //   },
      //   {
      //     name: "T-Shirt black",
      //     price: 22,
      //     coverUrl: "/images/customize/products/T-Shirt black.jpg",
      //   },
      // ];
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
      res.status(200).json(UserCustomize);
      return res.status(200);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
