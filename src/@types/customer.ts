export type ICustomerTableFilterValue = string | string[];

export type ICustomerTableFilters = {
  name: string;
  role: string[];
  status: string;
};

export type ICustomerItem = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  avatarUrl: string;
  phone: string;
  postal: string;
  createdAt: Date;
  status: string;
  country: string;
  gender: string;
  birthday: string;
  accept: boolean;
  password: string;
  
  comparePassword(candidatePassword: string): boolean;
};

export type IAddressItem = {
  _id: string;
  firstname: string;
  lastname: string;
  address: string;
  apartment: string;
  city: string;
  country: string;
  postal: string;
  phone: string;
};

export type IPaymentItem = {
  _id: string;
  number: string;
  holder: string;
  year: number;
  month: number;
};
