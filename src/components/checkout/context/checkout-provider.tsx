import React, { useCallback, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { CheckoutContext } from "./checkout-context";
import { useLocalStorage } from "@/hooks";
import { ICheckoutItem, ICheckoutValue } from "@/@types/checkout";
import { IAddressItem } from "@/@types/customer";
import { IOrderItem } from "@/@types/order";
import { PATH_SHOP } from "@/routers/path";

const STORAGE_KEY = "wonderraw_checkout";

export const PRODUCT_CHECKOUT_STEPS = ["Billing & address", "Payment"];

const initialState = {
  activeStep: 0,
  items: [],
  subTotal: 0,
  discount: 0,
  shipping: 0,
  total: 0,
  totalItems: 0,
  email: "",
  billing: null,
  result: null,
  shippingInclude: true
};

type Props = {
  children: React.ReactNode;
};

export function CheckoutProvider({ children }: Props) {
  const router = useRouter();

  const [values, setValues] = useLocalStorage(STORAGE_KEY, initialState);

  const setValue = useCallback(
    (name: string, value: number | IAddressItem | ICheckoutItem[]) => {
      setValues((prevState: ICheckoutValue) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [setValues]
  );

  const onGetCart = useCallback(() => {
    const totalItems: number = values.items.reduce(
      (total: number, item: ICheckoutItem) => total + item.quantity,
      0
    );

    const subTotal: number = values.items.reduce(
      (total: number, item: ICheckoutItem) =>
        total + item.quantity * item.price,
      0
    );

    const discount: number = values.items.reduce(
      (total: number, item: ICheckoutItem) =>
        total +
        item.quantity * (item.priceSale ? item.price - item.priceSale : 0),
      0
    );

    setValue("billing", values.activeStep === 0 ? null : values.billing);
    setValue("subTotal", subTotal);
    setValue("totalItems", totalItems);
    setValue("discount", discount);
    setValue("total", subTotal - discount + values.shipping);
  }, [values.items, values.activeStep, values.discount, values.shipping]);

  useEffect(() => {
    onGetCart();
  }, [onGetCart]);

  const onAddToCart = useCallback(
    (newItem: ICheckoutItem) => {
      const updatedItems: ICheckoutItem[] = values.items.map(
        (item: ICheckoutItem) => {
          if (item.id === newItem.id) {
            return {
              ...newItem,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }
      );

      if (!updatedItems.some((item: ICheckoutItem) => item.id === newItem.id)) {
        updatedItems.push(newItem);
      }

      setValue("items", updatedItems);
    },
    [setValues, values.items]
  );

  const onDeleteCart = useCallback(
    (itemId: string) => {
      const updatedItems = values.items.filter(
        (item: ICheckoutItem) => item.id !== itemId
      );

      setValue("items", updatedItems);
    },
    [setValues, values.items]
  );

  const onIncreaseQuantity = useCallback(
    (itemId: string) => {
      const updatedItems = values.items.map((item: ICheckoutItem) => {
        if (item.id === itemId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });

      setValue("items", updatedItems);
    },
    [setValues, values.items]
  );

  const onDecreaseQuantity = useCallback(
    (itemId: string) => {
      const updatedItems = values.items.map((item: ICheckoutItem) => {
        if (item.id === itemId) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });

      setValue("items", updatedItems);
    },
    [setValues, values.items]
  );

  const onBackStep = useCallback(() => {
    setValue("activeStep", values.activeStep - 1);
  }, [setValue, values.activeStep]);

  const onNextStep = useCallback(() => {
    setValue("activeStep", values.activeStep + 1);
  }, [setValue, values.activeStep]);

  const onCreateBilling = useCallback(
    (email: string, address: IAddressItem) => {
      setValue("email", email);
      setValue("billing", address);

      onNextStep();
    },
    [onNextStep, setValue]
  );

  const onApplyShipping = useCallback(
    (shipping: number) => {
      setValue("shipping", shipping);
    },
    [setValue]
  );

  const onApplyDiscount = useCallback(
    (discount: number) => {
      setValue("discount", discount);
    },
    [setValue]
  );

  const completed = values.activeStep === PRODUCT_CHECKOUT_STEPS.length;

  const onReset = useCallback(() => {
    if (completed) {
      setValues(initialState);
      router.replace(PATH_SHOP.home);
    }
  }, [completed, router, setValues]);

  const setCheckoutResult = useCallback(
    (order: IOrderItem) => {
      setValue("result", order);

      onNextStep();
    },
    [setValue]
  );

  const onChangeSippingStatus = useCallback(
    (state: boolean) => {
      setValue("shippingInclude", state)
    },
    [setValue]
  )

  const memoizedValue = useMemo(
    () => ({
      ...values,
      completed,
      onAddToCart,
      onDeleteCart,
      onIncreaseQuantity,
      onDecreaseQuantity,

      onCreateBilling,
      onApplyShipping,
      onApplyDiscount,
      onBackStep,
      onNextStep,
      onReset,
      setCheckoutResult,
      onChangeSippingStatus
    }),
    [
      completed,
      onAddToCart,
      onIncreaseQuantity,
      onDecreaseQuantity,
      onCreateBilling,
      onApplyShipping,
      onApplyDiscount,
      onBackStep,
      onNextStep,
      setCheckoutResult,
      onReset,
      onChangeSippingStatus,
      values,
    ]
  );

  return (
    <CheckoutContext.Provider value={memoizedValue}>
      {children}
    </CheckoutContext.Provider>
  );
}
