import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider, { RHFTextField, RHFAutocomplete } from "@/components/hook-form";
import { countries } from "@/@mockup/country";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { styled } from "@mui/material/styles";
import { secondaryFont } from "@/theme/typography";
import { addAddress } from "@/services/customer";
import { PATH_SHOP } from "@/routers/path";
import { PhoneInput } from 'react-international-phone';
import Iconify from "@/components/iconify";
import 'react-international-phone/style.css';
import { useState } from "react";

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 500,
  color: "#292F3D",
  fontFamily: secondaryFont.style.fontFamily,
  [theme.breakpoints.down("md")]: { fontSize: "13px" },
}));

const AddressSchema = Yup.object().shape({
  firstname: Yup.string().required("First Name is required"),
  lastname: Yup.string().required("Last Name is required"),
  company: Yup.string().required("Address is required"),
  country: Yup.string().required("Address is required"),
  address: Yup.string().required("Address is required"),
  apartment: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  postal: Yup.string().required("Post Code is required"),
  phone: Yup.string().required("Phone Number is required"),
});

type Props = {};

export default function AddressForm(props: any) {
  const { push } = useRouter();

  const defaultValues = {
    firstname: props.firstname,
    lastname: props.lastname,
    company: props.company,
    country: props.country,
    address: props.address,
    apartment: props.apartment,
    city: props.city,
    postal: props.postal,
    phone: props.phone,
  };

  const [phone, setPhone] = useState(props.phone);

  const methods = useForm({
    resolver: yupResolver(AddressSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      data.phone = phone;
      await addAddress(data);
      push(PATH_SHOP.customer.address.list);
    } catch (error) { }
  });

  const renderForm = (
    <>
      <Grid container spacing={{ xs: 2, md: 5 }}>
        <Grid item xs={6} md={6}>
          <Box component="div">
            <StyledTypography>First name</StyledTypography>
            <RHFTextField name="firstname" size="small" />
          </Box>
        </Grid>
        <Grid item xs={6} md={6}>
          <Box component="div">
            <StyledTypography>Last name</StyledTypography>
            <RHFTextField name="lastname" size="small" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box component="div">
            <StyledTypography>Company</StyledTypography>
            <RHFTextField name="company" size="small" />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}></Grid>

        <Grid item xs={12} md={6}>
          <Box component="div">
            <StyledTypography>Address</StyledTypography>
            <RHFTextField name="address" size="small" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box component="div">
            <StyledTypography>Apartment, suite, etc.</StyledTypography>
            <RHFTextField name="apartment" size="small" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <StyledTypography>City</StyledTypography>
            <RHFTextField name="city" size="small" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <StyledTypography>Country/Region</StyledTypography>
            <RHFAutocomplete
              name="country"
              placeholder="Country"
              options={countries.map((country) => country.label)}
              getOptionLabel={(option) => option}
              renderOption={(props, option) => {
                const { code, label, phone } = countries.filter(
                  (country) => country.label === option
                )[0];

                if (!label) {
                  return null;
                }

                return (
                  <li {...props} key={label}>
                    {label} ({code})
                  </li>
                );
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <StyledTypography>Postal/Zip Code</StyledTypography>
            <RHFTextField name="postal" size="small" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <StyledTypography>Phone</StyledTypography>
            <PhoneInput
              defaultCountry="pr"
              value={phone}
              onChange={(phone) => setPhone(phone)}
              name="phone"
              style={{ width: '100%' }}
              inputStyle={{ width: '100%' }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );

  const renderAction = (
    <>
      <Stack
        direction="row"
        gap={3}
        alignItems="center"
        justifyContent="center"
      >
        <LoadingButton
          type="submit"
          variant="contained"
          size="large"
          sx={{
            width: 200,
            bgcolor: "#292F3D",
            "&:hover": { bgcolor: "#550248" },
          }}
        >
          SUBMIT
        </LoadingButton>

        <Button
          variant="contained"
          size="large"
          sx={{
            width: 200,
            bgcolor: "#ACB1B8",
            "&:hover": { bgcolor: "#550248" },
          }}
          onClick={() => {
            push(PATH_SHOP.customer.address.list);
          }}
        >
          CANCEL
        </Button>
      </Stack>
    </>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack gap={5}>
        {renderForm}

        {renderAction}
      </Stack>
    </FormProvider>
  );
}
