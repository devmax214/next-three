import { _mock } from "@/@mockup/_mock";

const ITEMS = [...Array(3)].map((_, index) => ({
  id: _mock.id(index),
  sku: `16H9UR${index}`,
  quantity: index + 1,
  name: _mock.productName(index),
  coverUrl: _mock.image.product(index),
  price: _mock.number.price(index),
}));

export const _orders = [...Array(20)].map((_, index) => {
  const items =
    (index % 2 && ITEMS.slice(0, 1)) ||
    (index % 3 && ITEMS.slice(1, 3)) ||
    ITEMS;

  const shipping = 10;

  const discount = 10;

  const taxes = 10;

  const totalQuantity = items.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );

  const subTotal = items.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );

  const totalAmount = subTotal - shipping - discount + taxes;

  const customer = {
    id: _mock.id(index),
    name: _mock.fullName(index),
    email: _mock.email(index),
    avatarUrl: _mock.image.avatar(index),
    ipAddress: "192.158.1.38",
  };

  const delivery = {
    shipBy: "DHL",
    speedy: "Standard",
    trackingNumber: "SPX037739199373",
  };

  return {
    id: _mock.id(index),
    orderNumber: `#601${index}`,
    createdAt: _mock.time(index),
    items,
    shipping,
    discount,
    taxes,
    totalQuantity,
    totalAmount,
    subTotal,
    customer,
    delivery,
    shippingAddress: {
      fullAddress: "19034 Verna Unions Apt. 164 - Honolulu, RI / 87535",
      phoneNumber: "365-374-4961",
    },
    payment: {
      cardType: "mastercard",
      cardNumber: "**** **** **** 5678",
    },
    status:
      (index % 2 && "completed") ||
      (index % 3 && "pending") ||
      (index % 4 && "cancelled") ||
      "refunded",
  };
});
