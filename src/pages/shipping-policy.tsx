import React from "react";
import Head from "next/head";
import CustomizeLayout from "@/layouts/customize";
import { ShippingPolicyView } from "@/sections/shop/common/view";

ShippingPolicyPage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);

type Props = {};

export default function ShippingPolicyPage(props: Props) {
  return (
    <>
      <Head>
        <title> Shipping Policy | WonderRaw</title>
      </Head>

      <ShippingPolicyView  />
    </>
  );
}
