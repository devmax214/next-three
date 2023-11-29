import { createContext, useContext } from "react";
import { WishListContextProps } from "@/@types/wishlist";

export const WishListContext = createContext({} as WishListContextProps);

export const useWishListContext = () => {
  const context = useContext(WishListContext);

  if (!context)
    throw new Error("useCheckoutContext must be use inside WishListProvider");

  return context;
};
