import React, { useCallback, useMemo } from "react";
import { WishListContext } from "./wishlist-content";
import { useLocalStorage } from "@/hooks";
import { _initialWish } from "@/@mockup/_product";
import { IAddressItem, ICheckoutItem } from "@/@types/checkout";
import { IWishListItem, IWishListValue } from "@/@types/wishlist";

const STORAGE_KEY = "wonderraw_wishlist";

const initialState = {
  items: _initialWish,
  subTotal: 0,
  discount: 0,
  shipping: 0,
  total: 0,
};

type Props = {
  children: React.ReactNode;
};

export function WishListProvider({ children }: Props) {
  const [values, setValues] = useLocalStorage(STORAGE_KEY, initialState);

  const setValue = useCallback(
    (name: string, value: number | IAddressItem | IWishListItem[]) => {
      setValues((prevState: IWishListValue) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [setValues]
  );

  const onAddToWishList = useCallback(
    (newItem: IWishListItem) => {
      // const updatedItems: ICheckoutItem[] = values.items.map(
      //   (item: ICheckoutItem) => {
      //     if (item.id === newItem.id) {
      //       return {
      //         ...item,
      //       };
      //     }
      //     return item;
      //   }
      // );

      const updatedItems = values.items.map((item: IWishListItem) => item);

      if (!updatedItems.some((item: ICheckoutItem) => item.id === newItem.id)) {
        updatedItems.push(newItem);
      }

      setValue("items", updatedItems);
    },
    [setValues, values.items]
  );

  const onDeleteWishlist = useCallback(
    (itemId: string) => {
      const updatedItems = values.items.filter(
        (item: ICheckoutItem) => item.id !== itemId
      );

      setValue("items", updatedItems);
    },
    [setValues, values.items]
  );

  const onDeleteAllWishlist = useCallback(() => {
    setValue("items", []);
  }, [setValues, values.items]);

  const memoizedValue = useMemo(
    () => ({
      ...values,
      onAddToWishList,
      onDeleteWishlist,
      onDeleteAllWishlist,
    }),
    [values, onAddToWishList, onDeleteWishlist, onDeleteAllWishlist]
  );

  return (
    <WishListContext.Provider value={memoizedValue}>
      {children}
    </WishListContext.Provider>
  );
}
