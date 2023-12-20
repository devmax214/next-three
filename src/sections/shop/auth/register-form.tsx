import { useState } from "react";
import { Alert, Button, Stack, Typography } from "@mui/material";
import FormProvider, { RHFTextField, RHFAutocomplete } from "@/components/hook-form";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingButton from "@mui/lab/LoadingButton";
import { useAuthContext } from "@/auth/useAuthContext";
import { secondaryFont } from "@/theme/typography";
import { endpoints } from "../../../../global-config";
import axios from "@/utils/axios";
import { countries } from "@/@mockup/country";

const RegisterSchema = Yup.object().shape({
  firstname: Yup.string().required("Firstname is required"),
  lastname: Yup.string().required("Lastname is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Email must be a valid email address"),
  phone: Yup.string().required("Phone is required"),
  country: Yup.string().required("Country is required"),
  street: Yup.string().required("Street is required"),
  city: Yup.string().required("City is required"),
  postal: Yup.string().required("Postal code is required."),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum."),
  conformPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords must match"
  ),
});

type Props = {};

export default function RegisterForm(props: Props) {
  const [errorMsg, setErrorMsg] = useState("");

  const { push } = useRouter();

  const { register } = useAuthContext();

  const defaultValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    conformPassword: "",
    phone: "",
    country: "",
    street: "",
    city: "",
    postal: "",
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    // defaultValues,
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await axios.post(endpoints.auth.register, data);

      if (response.data.success) {
        push({
          pathname: "/auth/auth",
          query: {
            state: 1,
            msg: "Account created successfully. Please verify email"
          }
        }, "/auth/auth");
      } else {
        reset();
        setErrorMsg(response.data.msg);
      }
    } catch (error: any) {
      reset();
      setErrorMsg("server error");
    }
  });

  const renderForm = (
    <Stack gap={4}>
      <Stack gap={2}>
        <RHFTextField name="firstname" placeholder="First name" />
        <RHFTextField name="lastname" placeholder="Last name" />
        <RHFTextField name="email" placeholder="Email" />
        <RHFTextField name="phone" placeholder="Phone" />
        <RHFAutocomplete
          name="country"
          size="large"
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
        <RHFTextField name="street" placeholder="Street" />
        <Stack direction="row" gap={2}>
          <RHFTextField name="city" placeholder="City" />
          <RHFTextField name="postal" placeholder="Zip/Postal Code" />
        </Stack>
        <RHFTextField name="password" type="password" placeholder="Password" />
        <RHFTextField
          name="conformPassword"
          type="password"
          placeholder="Confirm password"
        />
      </Stack>

      <Stack
        direction="row"
        gap={3}
        alignItems="center"
        justifyContent="center"
      >
        <LoadingButton
          size="large"
          type="submit"
          variant="contained"
          sx={{
            minWidth: "175px",
            bgcolor: "#292F3D",
            color: "#fff",
            "&:hover": {
              bgcolor: "#550248",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 500,
              color: "#ffffff",
              fontFamily: secondaryFont.style.fontFamily,
            }}
          >
            SIGN UP
          </Typography>
        </LoadingButton>

        <Button
          size="large"
          variant="contained"
          sx={{
            width: 150,
            bgcolor: "#ACB1B8",
            color: "#fff",
            "&:hover": {
              bgcolor: "#6AB67A",
            },
          }}
          onClick={() => {
            reset();
          }}
        >
          CLEAR
        </Button>
      </Stack>
    </Stack>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      {!!errorMsg && <Alert severity="error">{errorMsg}</Alert>}

      {renderForm}
    </FormProvider>
  );
}
