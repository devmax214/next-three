import React from "react";
import Head from "next/head";
import { ShopLoginView } from "@/sections/shop/auth/view";
import GuestGuard from "@/auth/guest-guard";
import CustomizeLayout from "@/layouts/customize";

LoginPage.getLayout = (page: React.ReactElement) => (
  <GuestGuard>
    <CustomizeLayout>{page}</CustomizeLayout>
  </GuestGuard>
);

type Props = {};

export default function LoginPage(props: Props) {
  return (
    <>
      <Head>
        <title> Login | WonderRaw</title>
      </Head>

      <ShopLoginView />
    </>
  );
}
