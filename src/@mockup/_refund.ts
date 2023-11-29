import { _mock } from "@/@mockup/_mock";

export const _reasons = [
  {
    id: 1,
    title: "Ordered the wrong product",
  },
  {
    id: 2,
    title: "The merchant shipped the wrong product",
  },
  {
    id: 3,
    title: "The product is damaged or defective",
  },
  {
    id: 4,
    title: "The product arrived too late",
  },
  {
    id: 5,
    title: "The product do not match the description",
  },
];

const ITEMS = [...Array(3)].map((_, index) => ({
  id: _mock.id(index),
  sku: `16H9UR${index}`,
  quantity: index + 1,
  name: _mock.productName(index),
  coverUrl: _mock.image.product(index),
  price: _mock.number.price(index),
}));

export const _refunds = [...Array(20)].map((_, index) => {
  const customer = {
    id: _mock.id(index),
    name: _mock.fullName(index),
    email: _mock.email(index),
    avatarUrl: _mock.image.avatar(index),
    ipAddress: "192.158.1.38",
  };

  return {
    id: _mock.id(index),
    orderNumber: `#601${index}`,
    item: ITEMS[index % ITEMS.length],
    customer,
    createdAt: _mock.time(index),
    status:
      (index % 2 && "accepted") || (index % 3 && "pending") || "processing",
  };
});
