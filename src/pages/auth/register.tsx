import React from "react";
import GuestGuard from "@/auth/guest-guard";
import CustomizeLayout from "@/layouts/customize";
import Head from "next/head";
import { ShopRegisterView } from "@/sections/shop/auth/view";

RegisterPage.getLayout = (page: React.ReactElement) => (
  <GuestGuard>
    <CustomizeLayout>{page}</CustomizeLayout>
  </GuestGuard>
);

type Props = {};

export default function RegisterPage(props: Props) {
  return (
    <>
      <Head>
        <title> Register | WonderRaw</title>
      </Head>

      <ShopRegisterView />
    </>
  );
}
