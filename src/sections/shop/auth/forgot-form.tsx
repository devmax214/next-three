import { useState } from "react";
import { signIn } from "next-auth/react";
import FormProvider, { RHFTextField } from "@/components/hook-form";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Link, Stack, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { RouterLink } from "@/routers/components";
import { PATH_SHOP } from "@/routers/path";
import { secondaryFont } from "@/theme/typography";
import { useAuthContext } from "@/auth/useAuthContext";
import axios from "@/utils/axios";
import { useRouter } from "next/router";

const ForgotSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email must be a valid email address"),
});

export default function ForgotForm() {

  const { push } = useRouter();
  const [errorMsg, setErrorMsg] = useState("");

  const methods = useForm({
    resolver: yupResolver(ForgotSchema),
    // defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await axios.post('/api/auth/forgot', { ...data });
      console.log(response)
      if (response.data.success) {
        push({
          pathname: "/auth/auth",
          query: {
            state: 1,
            msg: "Password reset link sent to your email."
          }
        }, "/auth/auth");
      } else {
        setErrorMsg(response.data.msg);
      }
    } catch (error: any) {
      setErrorMsg(typeof error === "string" ? error : error.message);
    }
  });

  const renderForm = (
    <Stack gap={4}>
      {!!errorMsg && <Alert severity="error">{errorMsg}</Alert>}

      <Stack gap={2}>
        <RHFTextField sx={{ width: { md: 0.6, xs: 1 }, margin: "0 auto" }} name="email" placeholder="Enter your email" />

      </Stack>

      <Stack gap={3} alignItems="center">
        <LoadingButton
          type="submit"
          size="large"
          variant="contained"
          sx={{
            minWidth: "239px",
            bgcolor: "#292F3D",
            color: "#fff",
            "&:hover": {
              bgcolor: "#550248",
            },
          }}
          loading={isSubmitting}
        >
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 500,
              color: "#ffffff",
              fontFamily: secondaryFont.style.fontFamily,
            }}
          >
            LOGIN
          </Typography>
        </LoadingButton>
      </Stack>
    </Stack>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      {renderForm}
    </FormProvider>
  );
}
