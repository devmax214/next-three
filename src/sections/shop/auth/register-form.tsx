import { useState } from "react";
import { Alert, Button, Stack, Typography } from "@mui/material";
import FormProvider, { RHFTextField } from "@/components/hook-form";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingButton from "@mui/lab/LoadingButton";
import { useAuthContext } from "@/auth/useAuthContext";
import { secondaryFont } from "@/theme/typography";

const RegisterSchema = Yup.object().shape({
  firstname: Yup.string().required("Firstname is required"),
  lastname: Yup.string().required("Lastname is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Email must be a valid email address"),
  password: Yup.string().required("Password is required"),
  phone: Yup.string().required("Phone is required"),
  country: Yup.string().required("Country is required"),
  street: Yup.string().required("Street is required"),
  city: Yup.string().required("City is required"),
  postal: Yup.string().required("Postal code is required"),
});

type Props = {};

export default function RegisterForm(props: Props) {
  const [errorMsg, setErrorMsg] = useState("");

  const { push } = useRouter();

  const { register } = useAuthContext();

  const defaultValues = {
    firstname: "Alexander",
    lastname: "Feduleev",
    email: "sorinwebdev1@outlook.com",
    password: "test1234",
    phone: "38328238328",
    country: "Russia",
    street: "Moscow",
    city: "Moscow",
    postal: "2332423",
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
      await register(
        data.firstname,
        data.lastname,
        data.email,
        data.password,
        data.phone,
        data.country,
        data.street,
        data.city,
        data.postal
      );

      // push(returnTo || PATH_AFTER_LOGIN);
      push("/auth/auth");
    } catch (error: any) {
      reset();

      setErrorMsg(typeof error === "string" ? error : error.message);
    }
  });

  const renderForm = (
    <Stack gap={4}>
      <Stack gap={2}>
        <RHFTextField name="firstname" placeholder="First name" />
        <RHFTextField name="lastname" placeholder="Last name" />
        <RHFTextField name="email" placeholder="Email" />
        <RHFTextField name="phone" placeholder="Phone" />
        <RHFTextField name="country" placeholder="Country" />
        <RHFTextField name="street" placeholder="Street" />
        <Stack direction="row" gap={2}>
          <RHFTextField name="city" placeholder="City" />
          <RHFTextField name="postal" placeholder="Zip/Postal Code" />
        </Stack>
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
