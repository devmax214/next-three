import { IAddressItem } from "@/@types/customer";
import { IOrderItem } from "@/@types/order";

export type ICheckoutItem = {
  id: string;
  name: string;
  coverUrl: string;
  available: number;
  price: number;
  priceSale: number;
  size: string;
  quantity: number;
  subTotal: number;
};

export type ICheckoutValue = {
  items: ICheckoutItem[];
  subTotal: number;
  discount: number;
  shipping: number;
  total: number;
  totalItems: number;
  email: string;
  billing: IAddressItem | null;
  activeStep: number;
  completed: boolean;
  result: IOrderItem | null;
  shippingInclude: boolean;
};

export type CheckoutContextProps = ICheckoutValue & {
  onAddToCart: (newItem: Omit<ICheckoutItem, "subTotal">) => void;
  onDeleteCart: (itemId: string) => void;

  onIncreaseQuantity: (itemId: string) => void;
  onDecreaseQuantity: (itemId: string) => void;

  onReset: VoidFunction;
  onBackStep: VoidFunction;
  onNextStep: VoidFunction;
  onApplyDiscount: (discount: number) => void;
  onApplyShipping: (method: number) => void;
  onCreateBilling: (email: string, address: IAddressItem) => void;
  setCheckoutResult: (order: IOrderItem) => void;

  onChangeSippingStatus: (state: boolean) => void;
};

// export type IAddressItem = {
//   id?: string;
//   name: string;
//   company?: string;
//   primary?: boolean;
//   fullAddress: string;
//   phoneNumber?: string;
//   addressType?: string;
//   country: string;
// };
