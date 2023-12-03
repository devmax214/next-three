import React from "react";
import Head from "next/head";
import CustomizeLayout from "@/layouts/customize";
import { OrderRefundView } from "@/sections/customer/refund/view";

OrderRefundPage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);

type Props = {};

export default function OrderRefundPage(props: Props) {
  return (
    <>
      <Head>
        <title> Refund | WonderRaw</title>
      </Head>

      <OrderRefundView />
    </>
  );
}
