import React from "react";
import Head from "next/head";
import CustomizeLayout from "@/layouts/customize";
import { RequestQuoteView } from "@/sections/customize/quote/view";
import { CustomizeProvider } from "@/components/customize/context";

RequestQuotePage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);

type Props = {};

export default function RequestQuotePage(props: Props) {
  return (
    <>
      <CustomizeProvider passInitState={{}}>
        <Head>
          <title> Request Quote | WonderRaw</title>
        </Head>

        <RequestQuoteView {...props} />
      </CustomizeProvider>
    </>
  );
}