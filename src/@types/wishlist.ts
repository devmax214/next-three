export type IWishListItem = {
  id: string;
  name: string;
  coverUrl: string;
  price: number;
  priceSale: number;
  subTotal: number;
};

export type IWishListValue = {
  items: IWishListItem[];
  subTotal: number;
  discount: number;
  shipping: number;
  total: number;
};

export type WishListContextProps = IWishListValue & {
  onAddToWishList: (newItem: Omit<IWishListItem, "subTotal">) => void;
  onDeleteWishlist: (itemId: string) => void;
  onDeleteAllWishlist: () => void;
};
