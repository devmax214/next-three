import React from "react";
import Head from "next/head";
import CustomizeLayout from "@/layouts/customize";
import { TermsOfUseView } from "@/sections/shop/common/view";

TermsOfUsePage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);

type Props = {};

export default function TermsOfUsePage(props: Props) {
  return (
    <>
      <Head>
        <title> Terms Of Use | WonderRaw</title>
      </Head>

      <TermsOfUseView />
    </>
  );
}
