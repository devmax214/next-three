import React, { useCallback } from "react";
import { Box, Container, Grid, Stack } from "@mui/material";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MotionViewport } from "@/components/animate";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import OrderSummary from "../order-summary";
import ContactAndShipping from "../contact-and-shipping";
import ShippingMethod from "../shipping-method";
import PaymentMethod from "../payment-method";
import FormProvider from "@/components/hook-form";
import { PATH_SHOP } from "@/routers/path";

const CartPaymentSchema = Yup.object().shape({
  payment: Yup.string().required(""),
});

const defaultValues = {
  payment: "credit",
};

type Props = {};

export default function PaymentView(props: Props) {
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

  const onSubmit = handleSubmit(async (data) => { });

  return (
    <>
      <Box
        component="div"
        sx={{
          bgcolor: "#F9F5EE",
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
                name: "Shipping",
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
