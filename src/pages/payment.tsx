import React from "react";
import CustomizeLayout from "@/layouts/customize";
import Head from "next/head";
import { CustomizePaymentView } from "@/sections/customize/checkout/view";

PaymentPage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);

type Props = {};

export default function PaymentPage(props: Props) {
  return (
    <>
      <Head>
        <title> Payment | WonderRaw</title>
      </Head>

      <CustomizePaymentView />
    </>
  );
}
