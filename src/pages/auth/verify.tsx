import React from "react";
import Head from "next/head";
import { VerifyEmailView } from "@/sections/shop/auth/view";
import GuestGuard from "@/auth/guest-guard";
import CustomizeLayout from "@/layouts/customize";

VerifyEmailPage.getLayout = (page: React.ReactElement) => (
  <GuestGuard>
    <CustomizeLayout>{page}</CustomizeLayout>
  </GuestGuard>
);

type Props = {};

export default function VerifyEmailPage(props: Props) {
  return (
    <>
      <Head>
        <title> Verify Email | WonderRaw</title>
      </Head>

      <VerifyEmailView />
    </>
  );
}
