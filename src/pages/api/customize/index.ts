import {NextApiRequest, NextApiResponse} from "next"; // export default apiHandler(handler);

// export default apiHandler(handler);

export default handler;

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      const products = [
        {
          name: "T-Shirt white",
          price: 24,
          coverUrl: "/images/customize/products/T-Shirt white.jpg",
        },
        {
          name: "T-Shirt blue",
          price: 23,
          coverUrl: "/images/customize/products/T-Shirt blue.jpg",
        },
        {
          name: "T-Shirt red",
          price: 24,
          coverUrl: "/images/customize/products/T-Shirt red.jpg",
        },
        {
          name: "T-Shirt grey",
          price: 25,
          coverUrl: "/images/customize/products/T-Shirt grey.jpg",
        },
        {
          name: "T-Shirt yellow",
          price: 32,
          coverUrl: "/images/customize/products/T-Shirt yellow.jpg",
        },
        {
          name: "T-Shirt black",
          price: 22,
          coverUrl: "/images/customize/products/T-Shirt black.jpg",
        },
      ];

      return res.status(200).json(products);

    case "POST":
      return res.status(200);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
