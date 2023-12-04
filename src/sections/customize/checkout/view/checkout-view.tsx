import React from "react";
import { IAddressItem, IPaymentItem } from "@/@types/customer";
import { useCheckoutContext } from "@/components/checkout/context";

import CheckoutBillingAddress from "../checkout-billling-address";
import CheckoutPayment from "../checkout-payment";
import CheckoutOrderComplete from "../checkout-order-complete";

type Props = {
  addresses: IAddressItem[];
  payments: IPaymentItem[];
};

export default function CheckoutView({ addresses, payments }: Props) {
  const checkout = useCheckoutContext();

  return (
    <>
      {checkout.completed ? (
        <CheckoutOrderComplete />
      ) : (
        <>
          {checkout.activeStep === 0 && (
            <CheckoutBillingAddress addresses={addresses} />
          )}

          {checkout.activeStep === 1 && <CheckoutPayment payments={payments} />}
        </>
      )}
    </>
  );
}
