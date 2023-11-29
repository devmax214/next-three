import React from "react";
import {
  Button,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import FormProvider, { RHFTextField } from "@/components/hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RouterLink } from "@/routers/components";
import { PATH_ADMIN_AUTH } from "@/routers/path";
import { useBoolean } from "@/hooks";
import EyeShowIcon from "@/components/icons/customer/icon-eye-show";
import EyeHideIcon from "@/components/icons/customer/icon-eye-hide";
import { secondaryFont } from "@/theme/typography";
import { changePassword } from "@/services/customer";

const NewPasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Old Password is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

const defaultValues = {
  oldPassword: "",
  password: "",
  confirmPassword: "",
};

type Props = {};

export default function ChangePasswordForm(props: Props) {
  const oldPassword = useBoolean();
  const password = useBoolean();
  const confirmPassword = useBoolean();

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(NewPasswordSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await changePassword(data);
    } catch (error) {}
  });

  const renderForm = (
    <>
      <Stack gap={4}>
        <Stack gap={1}>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 500,
              color: "#292F3D",
              fontFamily: secondaryFont.style.fontFamily,
            }}
          >
            Old password
          </Typography>

          <RHFTextField
            name="oldPassword"
            type={oldPassword.value ? "text" : "password"}
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={oldPassword.onToggle} edge="end">
                    {oldPassword.value ? (
                      <EyeShowIcon sx={{ width: 16, height: 13 }} />
                    ) : (
                      <EyeHideIcon sx={{ width: 16, height: 16 }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Link
            component={RouterLink}
            href={PATH_ADMIN_AUTH.forgot}
            color="inherit"
            underline="always"
            sx={{
              alignSelf: "flex-start",
              fontSize: 12,
              fontWeight: 500,
              color: "#292F3D",
              fontFamily: secondaryFont.style.fontFamily,
            }}
          >
            Forgot password?
          </Link>
        </Stack>

        <Stack gap={1}>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 500,
              color: "#292F3D",
              fontFamily: secondaryFont.style.fontFamily,
            }}
          >
            New password
          </Typography>
          <RHFTextField
            name="password"
            size="small"
            type={password.value ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={password.onToggle} edge="end">
                    {password.value ? (
                      <EyeShowIcon sx={{ width: 16, height: 13 }} />
                    ) : (
                      <EyeHideIcon sx={{ width: 16, height: 16 }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Stack gap={1}>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 500,
              color: "#292F3D",
              fontFamily: secondaryFont.style.fontFamily,
            }}
          >
            Confirm new password
          </Typography>
          <RHFTextField
            name="confirmPassword"
            size="small"
            type={confirmPassword.value ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={confirmPassword.onToggle} edge="end">
                    {confirmPassword.value ? (
                      <EyeShowIcon sx={{ width: 16, height: 13 }} />
                    ) : (
                      <EyeHideIcon sx={{ width: 16, height: 16 }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Stack direction="row" gap={4}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ bgcolor: "#292F3D", "&:hover": { bgcolor: "#550248" } }}
          >
            SUBMIT
          </Button>

          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ bgcolor: "#ACB1B8", "&:hover": { bgcolor: "#550248" } }}
          >
            CANCEL
          </Button>
        </Stack>
      </Stack>
    </>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      {renderForm}
    </FormProvider>
  );
}
