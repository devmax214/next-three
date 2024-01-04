import { IAddressItem, ICustomerItem } from "@/@types/customer";
import { IProductItem } from "@/@types/product";

export type IOrderTableFilterValue = string | Date | null;

export type IOrderTableFilters = {
  name: string;
  status: string;
  startDate: Date | null;
  endDate: Date | null;
};

export type IOrderProductItem = {
  // id: string;
  // coverUrl: string;
  // name: string;
  // sku: string;
  // quantity: number;
  // price: number;
  _id: string;
  product: IProductItem;
  quantity: number;
  price: number;
};

export type IOrderItem = {
  _id: string;
  orderNumber: string;
  createdAt: Date;
  totalQuantity: number;
  subTotal: number;
  status: string;
  items: IOrderProductItem[];
  customer: ICustomerItem;
  address: IAddressItem;
  taxes: number;
  shipping: number;
  discount: number;
  totalPrice: number;
};

// export type IOrderCustomer = {
//   id: string;
//   name: string;
//   email: string;
//   avatarUrl: string;
//   ipAddress: string;
// };

export type IOrderDelivery = {
  shipBy: string;
  speedy: string;
  trackingNumber: string;
};

export type IOrderShippingAddress = {
  fullAddress: string;
  phoneNumber: string;
};

export type IOrderPayment = {
  cardType: string;
  cardNumber: string;
};
