import React from "react";
import Head from "next/head";
import CustomizeLayout from "@/layouts/customize";
import { CustomizeOrderCompleteView } from "@/sections/customize/checkout/view";

CompletePage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);

type Props = {};

export default function CompletePage(props: Props) {
  return (
    <>
      <Head>
        <title> Payment Complete | WonderRaw</title>
      </Head>

      <CustomizeOrderCompleteView />
    </>
  );
}
