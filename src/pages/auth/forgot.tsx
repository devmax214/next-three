import React from "react";
import Head from "next/head";
import { ForgotPasswordView } from "@/sections/shop/auth/view";
import GuestGuard from "@/auth/guest-guard";
import CustomizeLayout from "@/layouts/customize";

ForgotPage.getLayout = (page: React.ReactElement) => (
  <GuestGuard>
    <CustomizeLayout>{page}</CustomizeLayout>
  </GuestGuard>
);

type Props = {};

export default function ForgotPage(props: Props) {
  return (
    <>
      <Head>
        <title> Forgot Password | WonderRaw</title>
      </Head>

      <ForgotPasswordView />
    </>
  );
}
