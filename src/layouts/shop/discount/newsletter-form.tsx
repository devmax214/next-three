import FormProvider, { RHFTextField } from "@/components/hook-form";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Stack, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { secondaryFont } from "@/theme/typography";

const NewsletterSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email must be a valid email address"),
  name: Yup.string().required("Name is required"),
});

const defaultValues = {
  name: "",
  email: "",
};

type Props = {
  onSuccess: VoidFunction;
};

export default function NewsletterForm({ onSuccess }: Props) {
  const methods = useForm({
    resolver: yupResolver(NewsletterSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    onSuccess();
  });

  const renderHead = (
    <Stack spacing={1}>
      <Typography
        textAlign="center"
        sx={{
          fontSize: { xs: 19, md: 19 },
          fontWeight: 500,
          color: "#292F3D",
          fontFamily: secondaryFont.style.fontFamily,
        }}
      >
        Subscribe to our newsletter to get <br />
        <strong>10% DISCOUNT</strong>
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: 16, md: 16 },
          fontWeight: 500,
          color: "#292F3D",
          fontFamily: secondaryFont.style.fontFamily,
          textAlign: "center",
        }}
      >
        Enter your name and email below
      </Typography>
    </Stack>
  );

  const renderForm = (
    <Stack spacing={3} alignItems="center">
      <RHFTextField name="name" label="First name" />

      <RHFTextField name="email" label="Email address" />

      <LoadingButton
        type="submit"
        variant="contained"
        size="large"
        sx={{
          width: 159,
          fontSize: 16,
          fontFamily: secondaryFont.style.fontFamily,
        }}
      >
        Subscribe
      </LoadingButton>
    </Stack>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={4}>
        {renderHead}
        {renderForm}
      </Stack>
    </FormProvider>
  );
}
