import { ArrayCamera } from "three";

export type IProductTableFilterValue = string | string[];

export type IProductTableFilters = {
  name: string;
  stock: string[];
  publish: string[];
};

export type IProductReview = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  helpful: number;
  avatarUrl: string;
  isPurchased: boolean;
  attachments?: string[];
  postedAt: Date;
};

export type IProductItem = {
  _id: string;
  name: string;
  coverUrl: string;
  category: string | ICategoryItem;
  available: number;
  inventoryType: string;
  information: string;
  others: string;
  // subDescription: string;
  // description: string;
  sku: string;
  code: string;
  quantity: number;
  images: string[];
  sizes: string[] | ISizeItem[];
  color: string;
  material: string;
  // colors: string[];
  // materials: string[];
  gender: string[];
  price: number;
  priceSale: number | null;
  createdAt: Date;
  publish: string;
  saleLabel: {
    enabled: boolean;
    content: string;
  };
  newLabel: {
    enabled: boolean;
    content: string;
  };
  totalRatings: number;
  totalReviews: number;
  reviews: IProductReview[];
};

export type ICategoryItem = {
  _id: string;
  name: string;
  description: string;
  image: string;
  artworks: {
    name: string;
    price: number;
  }[];
  items: {
    item: number;
    price: number;
  }[];
};

export type ICategoryTableFilters = {};

export type IMaterialItem = {
  _id: string;
  name: string;
  description: string;
};

export type IColorItem = {
  _id: string;
  name: string;
  description: string;
  color: string;
};

export type ISizeItem = {
  _id: string;
  name: string;
  description: string;
};
