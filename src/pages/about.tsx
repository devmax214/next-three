import React from "react";
import Head from "next/head";
import { AboutUsView } from "@/sections/shop/common/view";
import CustomizeLayout from "@/layouts/customize";

AboutUsPage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);

type Props = {};

export default function AboutUsPage(props: Props) {
  return (
    <>
      <Head>
        <title> About Us | WonderRaw</title>
      </Head>

      <AboutUsView />
    </>
  );
}
