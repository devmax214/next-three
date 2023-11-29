import React from "react";
import Head from "next/head";
import CustomizeLayout from "@/layouts/customize";
import { ResponseQuoteView } from "@/sections/customize/quote/view";

ResponseQuotePage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);

export default function ResponseQuotePage() {
  return (
    <>
      <Head>
        <title> Response Quote | WonderRaw</title>
      </Head>

      <ResponseQuoteView />
    </>
  );
}
