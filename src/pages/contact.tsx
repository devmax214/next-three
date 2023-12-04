import React from "react";
import Head from "next/head";
import CustomizeLayout from "@/layouts/customize";
import { ContactView } from "@/sections/shop/common/view";

ContactPage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);

type Props = {};

export default function ContactPage(props: Props) {
  return (
    <>
      <Head>
        <title> Customize | WonderRaw</title>
      </Head>

      <ContactView />
    </>
  );
}
