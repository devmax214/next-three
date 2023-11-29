import React, { useEffect } from "react";
import { Box, Container, Grid, Stack } from "@mui/material";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/router";

import { MotionViewport } from "@/components/animate";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import FormProvider from "@/components/hook-form";
import { useCheckoutContext } from "@/components/checkout/context";
import OrderSummary from "./common/order-summary";
import Contact from "./contact";
import ShippingAddress from "./shipping-address";
import { PATH_ADMIN_DASHBOARD } from "@/routers/path";
import { IAddressItem } from "@/@types/customer";

const ShippingAddressSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email must be a valid email address"),
  sid: Yup.string(),
  firstname: Yup.string().required("First Name is required"),
  lastname: Yup.string().required("Last Name is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  postal: Yup.string().required("Post Code is required"),
  phone: Yup.string().required("Phone Number is required"),
  coupon: Yup.string(),
});

type Props = {
  addresses: IAddressItem[];
};

export default function CheckoutBillingAddress({ addresses }: Props) {
  const router = useRouter();

  const checkout = useCheckoutContext();

  const { data: session, status } = useSession();

  const defaultValues = {
    email: session?.user.email || "",
    sid: "", // Shipping address id
    country: "",
    firstname: "",
    lastname: "",
    address: "",
    apartment: "",
    city: "",
    postal: "",
    phone: "",
  };

  const methods = useForm({
    resolver: yupResolver(ShippingAddressSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    setValue,
    reset,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    reset(defaultValues);
  }, [session]);

  const setAddresses = (addressId: string) => {
    const address = addresses.find((address) => address._id === addressId);

    if (address) {
      setValue("country", address.country);
      setValue("firstname", address.firstname);
      setValue("lastname", address.lastname);
      setValue("address", address.address);
      setValue("apartment", address.apartment);
      setValue("city", address.city);
      setValue("postal", address.postal);
      setValue("phone", address.phone);
      setValue("sid", address._id);
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      checkout.onCreateBilling(data.email, data);
    } catch (error) { }
  });

  return (
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
              href: PATH_ADMIN_DASHBOARD.root,
            },
            {
              name: "Checkout",
              href: PATH_ADMIN_DASHBOARD.order.root,
            },
            { name: "Shipping" },
          ]}
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        />

        <FormProvider methods={methods} onSubmit={onSubmit}>
          <Grid container spacing={20}>
            <Grid item md={6}>
              <Stack gap={6}>
                <Contact />

                <ShippingAddress
                  addresses={addresses}
                  setAddresses={setAddresses}
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
  );
}
