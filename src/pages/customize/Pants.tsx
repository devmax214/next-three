import React from "react";
import Head from "next/head";
import CustomizeLayout from "@/layouts/customize";
import { ConfigurationView } from "@/sections/customize/configurator/view";

ProductCustomizePage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);

type Props = {};

// Customize product
export default function ProductCustomizePage(props: Props) {
  return (
    <>
      <Head>
        <title> Customize Product | WonderRaw</title>
      </Head>

      <ConfigurationView type="pants" />
    </>
  );
}
