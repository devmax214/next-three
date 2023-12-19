import React, { useEffect, useState } from "react";
import FormProvider from "@/components/hook-form";
import OrderRefundFirst from "../order-refund-country";
import OrderRefundRegister from "../order-refund-register";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/router";

type Props = {};

export default function OrderRefundView(props: Props) {
  const [step, setStep] = useState(0);
  const router = useRouter();

  const [RefundSchema, setRefundSchema] = useState(Yup.object().shape({
    country: Yup.string()
      .required("Country is required")
  }));

  const defaultValues = {
    country: "",
    ordernumber: "",
    email: "",
    postcode: "",
  };

  useEffect(() => {
    step === 0 ? setRefundSchema(Yup.object().shape({
      country: Yup.string()
        .required("Country is required")
    })) : setRefundSchema(Yup.object().shape({
      ordernumber: Yup.string()
        .required("order number is required"),
      email: Yup.string()
        .required("Email is required")
        .email("Email must be a valid email address"),
      postcode: Yup.string()
        .required("Postcode/Zip code is required"),
    }))
  }, [step])

  const methods = useForm({
    resolver: yupResolver(RefundSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    step === 0 ? setStep(1) : router.push('/')
  });

  return (
    <>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        {step === 0 && <OrderRefundFirst />}

        {step === 1 && <OrderRefundRegister />}
      </FormProvider>
    </>
  );
}
