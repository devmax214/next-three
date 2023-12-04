import React from "react";
import Head from "next/head";
import { ConfigurationReviewView } from "@/sections/customize/configurator/view";
import CustomizeLayout from "@/layouts/customize";

OrderReviewPage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);

type Props = {};

export default function OrderReviewPage(props: Props) {
  return (
    <>
      <Head>
        <title> Review Order | WonderRaw</title>
      </Head>

      <ConfigurationReviewView />
    </>
  );
}
