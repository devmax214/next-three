import { useState, useEffect } from "react";
import { Alert, Button, Stack, Typography } from "@mui/material";
import FormProvider, { RHFTextField, RHFAutocomplete } from "@/components/hook-form";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingButton from "@mui/lab/LoadingButton";
import { secondaryFont } from "@/theme/typography";
import { endpoints } from "../../../../global-config";
import axios from "@/utils/axios";

const ResetSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum."),
  conformPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords must match"
  ),
});

type Props = {};

export default function ResetForm(props: Props) {
  const [errorMsg, setErrorMsg] = useState("");

  const { push } = useRouter();

  const defaultValues = {
    password: "",
    conformPassword: "",
  };

  const methods = useForm({
    resolver: yupResolver(ResetSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  const [token, setToken] = useState("");

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await axios.put('/api/auth/reset', { ...data, token });
      console.log(response)
      if (response.data.success) {
        push({
          pathname: "/auth/auth",
          query: {
            state: 1,
            msg: "Password reset successfully!"
          }
        }, "/auth/auth");
      } else {
        reset();
        setErrorMsg(response.data.error);
      }
    } catch (error: any) {
      reset();
      setErrorMsg("server error");
    }
  });

  useEffect(() => {
    const url = window.location.search;
    const urltoken = url.split("=")[1];
    setToken(urltoken || "");
  }, []);

  const renderForm = (
    <Stack gap={4}>
      <Stack gap={2}>
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
            RESET
          </Typography>
        </LoadingButton>
      </Stack>
    </Stack>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      {!!errorMsg && <Alert severity="error" style={{ marginBottom: 20 }}>{errorMsg}</Alert>}

      {renderForm}
    </FormProvider>
  );
}
