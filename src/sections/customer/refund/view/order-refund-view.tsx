import React, { useEffect, useState } from "react";
import FormProvider from "@/components/hook-form";
import OrderRefundFirst from "../order-refund-country";
import OrderRefundRegister from "../order-refund-register";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useResponsive } from "@/hooks";

type Props = {};

export default function OrderRefundView(props: Props) {
  const [step, setStep] = useState(0);
  const router = useRouter();
  const smDown = useResponsive("down", "sm");

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
    setFocus,
    formState: { isSubmitting, errors },
  } = methods;

  useEffect(() => {
    const firstError = Object.keys(errors).reduce((field, a) => {
      return !!errors[field] ? field : a;
    }, null);

    if (firstError && smDown) {
      window.scrollTo({
        top: 300,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [errors]);

  const [submited, setSubmited] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    if (step === 0) setStep(1);
    if (step === 1) setSubmited(true);
  });

  return (
    <>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        {step === 0 && <OrderRefundFirst />}

        {step === 1 && <OrderRefundRegister submited={submited} />}
      </FormProvider>
    </>
  );
}
