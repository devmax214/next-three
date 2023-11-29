import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider, { RHFTextField } from "@/components/hook-form";

const HearSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
});

const defaultValues = {
  email: "",
};

type Props = {};

export default function NewsletterForm(props: Props) {
  const methods = useForm({
    resolver: yupResolver(HearSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {});

  const renderHead = (
    <>
      <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#5C6166" }}>
        Sign up for our newsletter and get the exclusive inside scoop!
      </Typography>
    </>
  );

  const renderForm = (
    <>
      <Stack gap={1}>
        <Typography sx={{ fontSize: 16, fontWeight: 600, color: "#292F3D" }}>
          Email Address
        </Typography>
        <RHFTextField name="email" placeholder="Your email" />
      </Stack>

      <Stack justifyContent="center" alignItems="center" sx={{ mt: 3 }}>
        <Button variant="contained" size="large" sx={{ width: 200 }}>
          SUBSCRIBE
        </Button>
      </Stack>
    </>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack gap={2}>
        {renderHead}

        {renderForm}
      </Stack>
    </FormProvider>
  );
}
