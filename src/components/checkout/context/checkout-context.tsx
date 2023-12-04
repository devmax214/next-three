import { createContext, useContext } from "react";
import { CheckoutContextProps } from "@/@types/checkout";

export const CheckoutContext = createContext({} as CheckoutContextProps);

export const useCheckoutContext = () => {
  const context = useContext(CheckoutContext);

  if (!context)
    throw new Error("useCheckoutContext must be use inside CheckoutProvider");

  return context;
};
