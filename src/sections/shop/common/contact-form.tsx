import { Link, Stack, Typography } from "@mui/material";
import * as Yup from "yup";
import FormProvider, { RHFTextField } from "@/components/hook-form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RouterLink from "../../../routers/components/RouterLink";
import { PATH_SHOP } from "@/routers/path";
import LoadingButton from "@mui/lab/LoadingButton";
import { secondaryFont } from "@/theme/typography";
import { sendContact } from "@/services/contact";

const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email must be a valid email address"),
  name: Yup.string().required("Name is required"),
  subject: Yup.string().required("Name is required"),
  message: Yup.string().required("Name is required"),
});

const defaultValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

type Props = { mode: "colored" | "dark" };

export default function ContactForm({ mode }: Props) {
  const methods = useForm({
    resolver: yupResolver(ContactSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await sendContact(data);
    } catch (error) {}
  });

  const renderHead = (
    <>
      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 500,
          color: "#5C6166",
          fontFamily: secondaryFont.style.fontFamily,
        }}
      >
        By entering your email, you agree to our{" "}
        <Link
          component={RouterLink}
          href={PATH_SHOP.privacy}
          sx={{ color: mode === "dark" ? "#858585" : "#F05A4A" }}
        >
          Terms & Conditions and Privacy Policy.
        </Link>
      </Typography>
    </>
  );

  const renderForm = (
    <Stack gap={2}>
      <RHFTextField name="name" placeholder="name" size="small" />

      <RHFTextField name="email" placeholder="email" size="small" />

      <RHFTextField name="subject" placeholder="subject" size="small" />

      <RHFTextField
        name="message"
        placeholder="message"
        multiline
        rows={5}
        size="small"
      />

      <Stack justifyContent="center" alignItems="center" mt={3}>
        <LoadingButton
          type="submit"
          variant="contained"
          size="large"
          sx={{
            width: 180,
            bgcolor: "#000000",
            color: "#fff",
            "&:hover": {
              color: "#000000",
              bgcolor: "#E6E6E6",
            },
          }}
        >
          Send
        </LoadingButton>
      </Stack>
    </Stack>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack gap={3}>
        {renderHead}

        {renderForm}
      </Stack>
    </FormProvider>
  );
}
