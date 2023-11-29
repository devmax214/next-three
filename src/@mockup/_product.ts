import { _mock } from "@/@mockup/_mock";

const NEW_LABELS = [...Array(20)].map((_, index) => ({
  enabled: [1, 2, 3].includes(index),
  content: "NEW",
}));

const SALE_LABELS = [...Array(20)].map((_, index) => ({
  enabled: [4, 5].includes(index),
  content: "SALE",
}));

const COLORS = [
  "#00AB55",
  "#000000",
  "#FFFFFF",
  "#FFC0CB",
  "#FF4842",
  "#1890FF",
  "#94D82D",
  "#FFC107",
];

// const SIZES = [
//   "6",
//   "7",
//   "8",
//   "8.5",
//   "9",
//   "9.5",
//   "10",
//   "10.5",
//   "11",
//   "11.5",
//   "12",
//   "13",
// ];

const SIZES = ["XS", "S", "M", "L", "XL"];

export const PRODUCT_COLOR_NAME_OPTIONS = [
  { value: "red", label: "Red" },
  { value: "blue", label: "Blue" },
  { value: "cyan", label: "Cyan" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
  { value: "violet", label: "Violet" },
  { value: "black", label: "Black" },
  { value: "white", label: "White" },
];

export const PRODUCT_SIZE_OPTIONS = [
  { value: "m", label: "M" },
  { value: "xs", label: "XS" },
  { value: "s", label: "S" },
  { value: "l", label: "L" },
  { value: "xs", label: "XL" },
];

export const PRODUCT_CATEGORY_GROUP_OPTIONS = [
  {
    group: "Clothing",
    classify: ["Shirts", "T-shirts", "Jeans", "Leather", "Accessories"],
  },
  {
    group: "Tailored",
    classify: ["Suits", "Blazers", "Trousers", "Waistcoats", "Apparel"],
  },
  {
    group: "Accessories",
    classify: ["Shoes", "Backpacks and bags", "Bracelets", "Face masks"],
  },
];

export const PRODUCT_GENDER_OPTIONS = [
  { label: "Men", value: "Men" },
  { label: "Women", value: "Women" },
];

const ATTACHMENTS = [...Array(20)].map((_, index) =>
  _mock.image.product(index)
);

const REVIEWS = [...Array(8)].map((_, index) => ({
  id: _mock.id(index),
  //
  name: _mock.fullName(index),
  postedAt: _mock.time(index),
  comment: _mock.sentence(index),
  isPurchased: _mock.boolean(index),
  rating: _mock.number.rating(index),
  avatarUrl: _mock.image.avatar(index),
  helpful: _mock.number.nativeL(index),
  attachments:
    (index === 1 && ATTACHMENTS.slice(0, 1)) ||
    (index === 3 && ATTACHMENTS.slice(2, 4)) ||
    (index === 5 && ATTACHMENTS.slice(5, 8)) ||
    [],
}));

const RATINGS = [...Array(5)].map((_, index) => ({
  name: `${index + 1} Star`,
  starCount: _mock.number.nativeL(index),
  reviewCount: _mock.number.nativeL(index + 1),
}));

export const PRODUCT_PUBLISH_OPTIONS = [
  {
    value: "published",
    label: "Published",
  },
  {
    value: "draft",
    label: "Draft",
  },
];

const IMAGES = [...Array(8)].map((_, index) => _mock.image.product(index));

const DESCRIPTION = `
<p>Because it isn’t socially acceptable to walk around topless - yet. Made from 100% Organic cotton, this fitted tee will be your go-to, 100% of the time. Breezy and lightweight, you’ll forget you’re even wearing it.
</p>
<br/>
<ul>
  <li><p>Women's Style</p></li>
  <li><p>100% organic cotton</p></li>
  <li><p>Environmentally Friendly Dye</p></li>
  <li><p>PETA Approved Vegan</p></li>
</ul>
`;

const ADDITIONAL_INFORMATION = `
<p>Male model is 180 cm tall and wearing size MediumFemale model is 171 cm tall and wearing size Extra Small
</p>
<br/>
<p>*This style is unisex - we recommend women to go one size down</p>
`;

export const _products = [...Array(20)].map((_, index) => {
  const publish = index % 3 ? "published" : "draft";

  const category =
    (index % 2 && "Shose") || (index % 3 && "Apparel") || "Accessories";

  const available = (index % 2 && 72) || (index % 3 && 10) || 0;

  const inventoryType =
    (index % 2 && "in stock") || (index % 3 && "low stock") || "out of stock";

  const priceSale = index % 3 ? null : _mock.number.price(index);

  return {
    id: _mock.id(index),
    name: _mock.productName(index),
    subDescription:
      "Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead.",
    coverUrl: _mock.image.product(index),
    ratings: RATINGS,
    images: IMAGES,
    description: DESCRIPTION,
    inventoryType,
    category,
    available,
    quantity: 80,
    createdAt: _mock.time(index),
    price: _mock.number.price(index),
    publish,
    sizes: SIZES,
    newLabel: NEW_LABELS[index],
    saleLabel: SALE_LABELS[index],
    reviews: REVIEWS,
    colors:
      (index === 0 && COLORS.slice(0, 2)) ||
      (index === 1 && COLORS.slice(1, 3)) ||
      (index === 2 && COLORS.slice(2, 4)) ||
      (index === 3 && COLORS.slice(3, 6)) ||
      //
      (index === 4 && COLORS.slice(4, 6)) ||
      (index === 5 && COLORS.slice(5, 6)) ||
      (index === 6 && COLORS.slice(0, 2)) ||
      (index === 7 && COLORS.slice(4, 6)) ||
      //
      (index === 8 && COLORS.slice(2, 4)) ||
      (index === 9 && COLORS.slice(2, 6)) ||
      (index === 10 && COLORS.slice(3, 6)) ||
      (index === 11 && COLORS.slice(2, 6)) ||
      //
      (index === 12 && COLORS.slice(2, 7)) ||
      (index === 13 && COLORS.slice(4, 7)) ||
      (index === 14 && COLORS.slice(0, 2)) ||
      (index === 15 && COLORS.slice(5, 8)) ||
      //
      (index === 16 && COLORS.slice(4, 6)) ||
      (index === 17 && COLORS.slice(5, 6)) ||
      (index === 18 && COLORS.slice(0, 2)) ||
      (index === 19 && COLORS.slice(4, 6)) ||
      COLORS.slice(2, 6),
    totalRatings: _mock.number.rating(index),
    totalReviews: _mock.number.nativeL(index + 1),
    priceSale: priceSale,
    additionalInfo: ADDITIONAL_INFORMATION,
  };
});

export const _bestSellers = [...Array(7)].map((_, index) => {
  return {
    id: _mock.id(index),
    name: _mock.productName(index),
    coverUrl: _mock.image.product(index),
    images: IMAGES,
  };
});

export const _relationProducts = [...Array(7)].map((_, index) => {
  return {
    id: _mock.id(index),
    name: _mock.productName(index),
    coverUrl: _mock.image.product(index),
    images: IMAGES,
  };
});

export const _selections = [
  {
    id: _mock.id(1),
    name: "T-SHIRTS",
    coverUrl: "/images/home/t-shirt.jpg",
    color: "#292F3D",
  },
  {
    id: _mock.id(2),
    name: "SWEATSHIRTS",
    coverUrl: "/images/home/sweat-shirt.jpg",
    color: "#292F3D",
  },
  {
    id: _mock.id(3),
    name: "HOODIES",
    coverUrl: "/images/home/hoody.jpg",
    color: "#292F3D",
  },
  {
    id: _mock.id(3),
    name: "JEANS",
    coverUrl: "/images/home/jeans.jpg",
    color: "#ffffff",
  },
  {
    id: _mock.id(3),
    name: "SHIRTS",
    coverUrl: "/images/home/shirts.jpg",
    color: "#292F3D",
  },
  {
    id: _mock.id(3),
    name: "TOP",
    coverUrl: "/images/home/top.jpg",
    color: "#292F3D",
  },
];

export const _categories = [
  {
    id: _mock.id(1),
    name: "WOMEN",
    coverUrl: "/images/home/woman.jpg",
  },
  {
    id: _mock.id(2),
    name: "MEN",
    coverUrl: "/images/home/man.jpg",
  },
];

export const _initialCarts = [...Array(3)].map((_, index) => {
  return {
    id: _mock.id(index),
    name: _mock.productName(index),
    coverUrl: _mock.image.product(index),
    size: SIZES[index],
    priceSale: index % 3 ? null : _mock.number.price(index) - 4,
    price: _mock.number.price(index),
    quantity: 1,
  };
});

export const _initialWish = [...Array(10)].map((_, index) => {
  return {
    id: _mock.id(index),
    name: _mock.productName(index),
    coverUrl: _mock.image.product(index),
    size: SIZES[index],
    priceSale: index % 3 ? null : _mock.number.price(index) - 4,
    price: _mock.number.price(index),
    quantity: 1,
  };
});
