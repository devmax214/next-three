import React from "react";
import Head from "next/head";
import { CommunityView } from "@/sections/shop/community/view";
import CustomizeLayout from "@/layouts/customize";

CommunityPage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);

type Props = {};

export default function CommunityPage(props: Props) {
  return (
    <>
      <Head>
        <title> Community | WonderRaw</title>
      </Head>

      <CommunityView mode="colored" />
    </>
  );
}
