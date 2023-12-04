export type ICouponItem = {
  _id: string;
  code: string;
  isPercent: boolean;
  amount: number;
  expireDate: string;
  isActive: boolean;
  status: string;
};

export type ICouponTableFilters = {
  code: string;
  status: string;
  startDate: Date | null;
  endDate: Date | null;
};

export type ICouponTableFilterValue = string | Date | null;
