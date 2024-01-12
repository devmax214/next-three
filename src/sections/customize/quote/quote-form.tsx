import * as Yup from "yup";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider, { RHFTextField } from "@/components/hook-form";
import { Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useRouter } from "next/router";
import axios from "axios";
import { endpoints, QUOTE_STATE } from "../../../../global-config";
import { CustomizeContext } from "@/components/customize/context/customize-context";
import { redirect } from "next/dist/server/api-utils";
import CommonConfirmModal from '@/components/confirm-modal';
import { loginConfirmContent } from '@/helpers/common';

const QuoteSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email must be a valid email address"),
  name: Yup.string().required("Name is required"),
});

const defaultValues = {
  name: "",
  email: "",
};

type Props = {};

export default function QuoteForm(props: Props) {
  const methods = useForm({
    resolver: yupResolver(QuoteSchema),
    defaultValues,
  });
  const context = JSON.parse(localStorage.getItem('context') as string);
  const productType = localStorage.getItem('productType');

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const { push } = useRouter();
  const [openConfirm, setOpenConfirm] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    // const result = await axios.post(endpoints.customize.list, { context: context, product: productType, name: "customize" + Date.now(), quoteState: QUOTE_STATE.review });
    // try {
    //   if (result.data[0].error && !result.data[0].login) {
    //   setOpenConfirm(true);
    //   return;
    // }
    push('/user/quote');
    // } catch (err) {

    // }

  });

  const renderForm = (
    <Stack gap={6} sx={{ width: 500, alignItems: "center", margin: "auto" }}>
      <Stack gap={2} sx={{ width: 1 }}>
        <RHFTextField size="small" fullWidth name="name" placeholder="Your name" />
        <RHFTextField size="small" fullWidth name="email" placeholder="Enter your email" />
      </Stack>

      <LoadingButton
        type="button"
        onClick={onSubmit}
        variant="contained"
        size="large"
        sx={{ width: 242 }}
      >
        SEND
      </LoadingButton>
    </Stack>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      {renderForm}
      <CommonConfirmModal opened={openConfirm} setOpened={setOpenConfirm} content={loginConfirmContent} />
    </FormProvider>
  );
}
