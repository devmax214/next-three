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

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email must be a valid email address"),
  password: Yup.string().required("Password is required"),
});

const defaultValues = {
  email: "sorinwebdev1@outlook.com",
  password: "test1234",
};

export default function LoginForm() {
  const { login } = useAuthContext();

  const [errorMsg, setErrorMsg] = useState("");

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    // defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      // await login(data.email, data.password);
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      console.log(result);
    } catch (error: any) {
      setErrorMsg(typeof error === "string" ? error : error.message);
    }
  });

  const renderForm = (
    <Stack gap={4}>
      {!!errorMsg && <Alert severity="error">{errorMsg}</Alert>}

      <Stack gap={2}>
        <RHFTextField name="email" placeholder="Enter your email" />

        <RHFTextField
          name="password"
          type="password"
          placeholder="Enter your password"
        />
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

        <Link
          component={RouterLink}
          href={PATH_SHOP.forgot}
          variant="subtitle2"
          color="inherit"
          underline="always"
          sx={{
            fontFamily: secondaryFont.style.fontFamily,
            fontSize: 14,
            color: "#292F3D",
            textAlign: "center"
          }}
        >
          Forgot your password?
        </Link>
      </Stack>
    </Stack>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      {renderForm}
    </FormProvider>
  );
}
