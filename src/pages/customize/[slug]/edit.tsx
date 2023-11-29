import React from "react";
import Head from "next/head";
import CustomizeLayout from "@/layouts/customize";
import { ConfigurationEditView } from "@/sections/customize/configurator/view";

ProductCustomizeEditPage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);

type Props = {
  type: string
};

export default function ProductCustomizeEditPage(props: Props) {
  return (
    <>
      <Head>
        <title> Customize | WonderRaw</title>
      </Head>

      <ConfigurationEditView {...props} />
    </>
  );
}
