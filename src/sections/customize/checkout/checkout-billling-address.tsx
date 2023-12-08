import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Stack, Modal, Card, IconButton, Typography } from "@mui/material";
import Iconify from "@/components/iconify";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/router";

import { MotionViewport } from "@/components/animate";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import FormProvider from "@/components/hook-form";
import { useCheckoutContext } from "@/components/checkout/context";
import OrderSummary from "./order-summary";
import Contact from "./contact";
import ShippingAddress from "./shipping-address";
import { PATH_ADMIN_DASHBOARD } from "@/routers/path";
import { IAddressItem } from "@/@types/customer";
import Icon2 from '@/components/icons/auth/icon2';
import Icon3 from '@/components/icons/auth/icon3';
import ModalFootIcon from '@/components/icons/footer/modal';
import { styled } from "@mui/material/styles";
import { primaryFont, secondaryFont } from "@/theme/typography";
import { addAddress } from "@/services/customer";

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

const Wrapper = styled(Box)<{}>(({ theme }) => ({
  position: "absolute",
  left: "50%",
  top: 100,
  transform: "translateX(-50%)",
  width: "40%",
  outline: "none",
}));

type Props = {
  addresses: IAddressItem[];
};

export default function CheckoutBilllingAddress({ addresses }: Props) {
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

  const [addrSaved, setAddrSaved] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      checkout.onCreateBilling(data.email, data);
    } catch (error) { }
  });

  const onNewAddrSubmit = handleSubmit(async (data) => {
    try {
      await addAddress({ ...data, company: "company" });
      setAddrSaved(true);
      return;
    } catch (error) { }
  });

  const renderModal = (
    <>
      <Modal open={addrSaved}>
        <Wrapper>
          <Card sx={{ px: 5, py: 18 }}>
            <Box
              component="div"
              sx={{
                position: "absolute",
                left: 20,
                top: 20,
                width: { xs: 93, md: "20px" },
                height: { xs: 68.55, md: "20px" },
              }}
            >
              <Icon3 />
            </Box>
            <Box
              component="div"
              sx={{
                position: "absolute",
                left: 67,
                top: 35,
                width: { xs: 93, md: "12px" },
                height: { xs: 68.55, md: "12px" },
              }}
            >
              <Icon2 />
            </Box>
            <Box
              component="div"
              sx={{
                position: "absolute",
                right: 0,
                bottom: 0,
                width: { xs: 93, md: "60px" },
                height: { xs: 68.55, md: "65px" },
              }}
            >
              <ModalFootIcon />
            </Box>
            <Stack alignItems="end">
              <IconButton
                onClick={() => {
                  setAddrSaved(false)
                }}
                sx={{ fontWeight: 300, position: "absolute", top: 5, right: 5 }}
              >
                <Iconify
                  icon="material-symbols:close"
                  width={{ xs: 24, md: 42 }}
                  color="#5C6166"
                  fontWeight={300}
                />
              </IconButton>
            </Stack>
            <Typography
              sx={{
                flexGrow: 1,
                fontSize: 22,
                fontweight: 500,
                textAlign: "center",
                fontFamily: secondaryFont.style.fontFamily
              }}>
              Address Saved
            </Typography>
          </Card>
        </Wrapper>
      </Modal>
    </>
  );

  return (
    <Box
      component="div"
      sx={{
        bgcolor: "#F9F5EE",
        position: "relative",
        pl: 4
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

        <FormProvider methods={methods}>
          <Grid container spacing={35} >
            <Grid item md={6}>
              <Stack gap={4} sx={{ pl: 2.5 }}>
                <Contact />

                <ShippingAddress
                  addresses={addresses}
                  renderModal={renderModal}
                  onNewAddrSubmit={onNewAddrSubmit}
                  onSubmit={onSubmit}
                  setAddresses={setAddresses}
                />
              </Stack>
            </Grid>
            <Grid item md={5.8} sx={{ ml: -17 }} >
              <OrderSummary />
            </Grid>
          </Grid>
        </FormProvider>
      </Container>
    </Box>
  );
}
