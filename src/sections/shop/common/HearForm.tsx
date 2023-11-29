import * as Yup from "yup";
import { MenuItem, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider, { RhfSelect } from "@/components/hook-form";
import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";

const HearSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
});

const defaultValues = {
  name: "",
};

type Props = {};

export default function HearForm(props: Props) {
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
    <Stack gap={2}>
      <Typography sx={{ fontSize: 19, fontWeight: 600, color: "#292F3D" }}>
        Your response is invaluable to us.
      </Typography>
      <Typography sx={{ fontSize: 14, fontWeight: 500, color: "#5C6166" }}>
        We're thrilled that you've taken an interest in our products/services.
        Your feedback helps us understand how we're reaching our audience and
        how we can continue to improve our outreach efforts. Kindly take a
        moment to let us know how you discovered us.
      </Typography>
    </Stack>
  );

  const renderForm = (
    <>
      <RhfSelect name="name" placeholder="Response">
        <MenuItem>AAAAAAAAAA</MenuItem>
      </RhfSelect>

      <Stack alignItems="start">
        <LoadingButton variant="contained" size="large" sx={{ width: 180 }}>
          Send
        </LoadingButton>
      </Stack>
    </>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack gap={5}>
        {renderHead}

        {renderForm}
      </Stack>
    </FormProvider>
  );
}
