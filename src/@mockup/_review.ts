import { _mock } from "@/@mockup/_mock";

const ITEMS = [...Array(3)].map((_, index) => ({
  id: _mock.id(index),
  sku: `16H9UR${index}`,
  quantity: index + 1,
  name: _mock.productName(index),
  coverUrl: _mock.image.product(index),
  price: _mock.number.price(index),
}));

export const _review = [...Array(20)].map((_, index) => {
  const product = ITEMS[index % 3];

  const customer = {
    id: _mock.id(index),
    name: _mock.fullName(index),
    email: _mock.email(index),
    avatarUrl: _mock.image.avatar(index),
    ipAddress: "192.158.1.38",
  };

  return {
    id: _mock.id(index),
    rating: Math.random() * 5,
    product,
    customer,
    createdAt: _mock.time(index),
    comment: "“But I must explain to you how all this of denouncing pleasure.”",
  };
});
