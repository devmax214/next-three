export type IRefundRequestTableFilterValue = string | Date | null;

export type IRefundRequestTableFilters = {
  name: string;
  status: string;
  startDate: Date | null;
  endDate: Date | null;
};

export type IRefundRequestItem = {
  id: string;
  orderNumber: string;
  status: string;
  customer: IOrderCustomer;
  createdAt: Date;
  // subTotal: number;
  item: {
    id: string;
    coverUrl: string;
    name: string;
    sku: string;
    quantity: number;
    price: number;
  };
};

export type IOrderCustomer = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  ipAddress: string;
};
