import { apiHandler } from "@/helpers/api";
import { NextApiRequest, NextApiResponse } from "next";
import { Address, dbConnect, Order, OrderItem, Payment } from "@/helpers/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default apiHandler(handler);

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "POST":
      await dbConnect();

      const session = await getServerSession(req, res, authOptions);
      if (!session) throw new Error("");

      const userId = session.user?.id as string;

      const order = await createOrder(userId, req.body);

      const newOrder = await Order.findById(order._id)
        .populate({ path: "items", populate: "product" })
        .populate({ path: "address" })
        .exec();
      res.status(200).json(newOrder);
      break;
    default:
      break;
  }
}

async function createOrder(userId: string, data: any) {
  const promises = [];

  // Address Processing
  let address;
  if (data.billing.sid) {
    address = await Address.findById(data.billing.sid).exec();
  } else {
    address = new Address({
      ...data.billing,
    });
  }

  let payment;
  if (data.payment.id) {
    payment = await Payment.findById(data.payment.id).exec();
  } else {
    payment = new Payment({ ...data.payment });
  }

  const order = new Order({
    email: data.email,
    shipping: data.shipping,
    customer: userId,
    address: address,
    payment: payment,
    status: "pending",
    totalPrice: data.totalPrice,
    totalQuality: data.totalQuality,
  });

  const cartItems = data.items;
  cartItems.forEach((data, index) => {
    let orderItem = new OrderItem({
      product: data.id,
      size: data.size,
      order: order,
      price: data.price,
      quantity: data.quantity,
      customer: userId,
    });

    promises.push(orderItem.save());
    order.items.push(orderItem);
  });

  promises.push(order.save());

  await Promise.all(promises);
  return order;
}
