import React from "react";
import Head from "next/head";
import CustomizeLayout from "@/layouts/customize";
import { PrivacyPolicyView } from "@/sections/shop/home/view";

PrivacyPage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);

type Props = {};

export default function PrivacyPage(props: Props) {
  return (
    <>
      <Head>
        <title> Privacy Policy | WonderRaw</title>
      </Head>

      <PrivacyPolicyView />
    </>
  );
}
