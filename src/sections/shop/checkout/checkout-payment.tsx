import React, { useCallback } from "react";
import { Box, Container, Grid, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { MotionViewport } from "@/components/animate";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import FormProvider from "@/components/hook-form";
import { useCheckoutContext } from "@/components/checkout/context";

import OrderSummary from "./common/order-summary";
import ContactAndShipping from "./contact-and-shipping";
import ShippingMethod from "./shipping-method";
import PaymentMethod from "./payment-method";
import { PATH_ADMIN_DASHBOARD, PATH_SHOP } from "@/routers/path";
import { IPaymentItem } from "@/@types/customer";
import { createOrder } from "@/services/order";

const CartPaymentSchema = Yup.object().shape({
  payment: Yup.string().required("Payment is required"),
  email: Yup.string(),
  number: Yup.string(),
  holder: Yup.string(),
  year: Yup.number(),
  month: Yup.number(),
  shipping: Yup.number(),
  id: Yup.string(),
});

type Props = {
  payments: IPaymentItem[];
};

export default function CheckoutPayment({ payments }: Props) {
  const checkout = useCheckoutContext();

  const defaultValues = {
    payment: "credit",
    delivery: checkout.shipping,
    email: "",
    number: "",
    holder: "",
    month: 1,
    year: 2023,
    id: "",
  };

  const methods = useForm({
    resolver: yupResolver(CartPaymentSchema),
    defaultValues,
  });

  const {
    watch,
    reset,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  const onChangeMethod = useCallback(
    (newValue: string) => {
      setValue("payment", newValue);
    },
    [setValue]
  );

  const setCreditInfo = useCallback(
    (info: IPaymentItem) => {
      setValue("number", info.number);
      setValue("holder", info.holder);
      setValue("month", info.month);
      setValue("year", info.year);
      setValue("id", info._id);
    },
    [setValue]
  );

  const onSubmit = handleSubmit(async (data) => {
    try {
      const request = {
        email: checkout.email,
        items: checkout.items,
        billing: checkout.billing,
        shipping: checkout.shipping,
        payment: {
          email: data.email,
          number: data.number,
          holder: data.holder,
          month: data.month,
          year: data.year,
          id: data.id,
        },
        totalPrice: checkout.total,
        totalQuality: checkout.totalItems,
      };

      const res = await createOrder(request);

      checkout.setCheckoutResult(res);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <>
      <Box
        component="div"
        sx={{
          bgcolor: "#fff",
          position: "relative",
        }}
      >
        <Container
          component={MotionViewport}
          sx={{
            py: { xs: 10, md: 10 },
          }}
        >
          <CustomBreadCrumbs
            mode="dark"
            heading="CHECKOUT"
            links={[
              {
                name: "Home",
                href: PATH_SHOP.home,
              },
              {
                name: "Checkout",
                href: PATH_SHOP.checkout,
              },
              {
                name: "Shipping"
              },
            ]}
            sx={{
              mb: { xs: 3, md: 5 },
            }}
          />

          <FormProvider methods={methods} onSubmit={onSubmit}>
            <Grid container spacing={20}>
              <Grid item md={6}>
                <Stack gap={5}>
                  <ContactAndShipping />

                  <ShippingMethod />

                  <PaymentMethod
                    payment={values.payment}
                    onChange={onChangeMethod}
                    payments={payments}
                    setCreditInfo={setCreditInfo}
                  />
                </Stack>
              </Grid>

              <Grid item md={6}>
                <OrderSummary />
              </Grid>
            </Grid>
          </FormProvider>
        </Container>
      </Box>
    </>
  );
}
