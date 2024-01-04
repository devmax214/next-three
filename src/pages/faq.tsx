import Head from "next/head";
import React from "react";
import CustomizeLayout from "@/layouts/customize";
import { FaqsView } from "@/sections/shop/common/view";

FaqPage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);

type Props = {};

export default function FaqPage(props: Props) {
  return (
    <>
      <Head>
        <title> Faq | WonderRaw</title>
      </Head>

      <FaqsView mode="colored" />
    </>
  );
}
