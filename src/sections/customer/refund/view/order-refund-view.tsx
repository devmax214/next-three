import React, { useState } from "react";
import FormProvider from "@/components/hook-form";
import OrderRefundFirst from "../order-refund-country";
import OrderRefundRegister from "../order-refund-register";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const RefundSchema = Yup.object().shape({});

const defaultValues = {};

type Props = {};

export default function OrderRefundView(props: Props) {
  const [step, setStep] = useState(0);

  const methods = useForm({
    resolver: yupResolver(RefundSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => { });

  return (
    <>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        {step === 0 && <OrderRefundFirst onNext={() => setStep(1)} />}

        {step === 1 && <OrderRefundRegister />}
      </FormProvider>
    </>
  );
}
