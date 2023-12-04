import React from "react";
import Head from "next/head";
import CustomizeLayout from "@/layouts/customize";
import { CustomerHomeView } from "@/sections/customize/home/view";

HomePage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);

type Props = {};

export default function HomePage(props: Props) {
  return (
    <>
      <Head>
        <title> Customize | WonderRaw</title>
      </Head>

      <CustomerHomeView />
    </>
  );
}
