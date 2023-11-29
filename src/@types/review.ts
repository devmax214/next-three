export type IReviewTableFilterValues = string;

export type IReviewTableFilters = {};

export type IReviewItem = {
  id: string;
  rating: number;
  product: IReviewProductItem;
  customer: IReviewCustomer;
  createdAt: Date;
  comment: string;
};

export type IReviewCustomer = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  ipAddress: string;
};

export type IReviewProductItem = {
  id: string;
  sku: string;
  name: string;
  price: number;
  coverUrl: string;
  quantity: number;
};
