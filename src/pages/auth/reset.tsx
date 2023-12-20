import React from "react";
import Head from "next/head";
import { ResetView } from "@/sections/shop/auth/view";
import GuestGuard from "@/auth/guest-guard";
import CustomizeLayout from "@/layouts/customize";

ResetPage.getLayout = (page: React.ReactElement) => (
  <GuestGuard>
    <CustomizeLayout>{page}</CustomizeLayout>
  </GuestGuard>
);

type Props = {};

export default function ResetPage(props: Props) {
  return (
    <>
      <Head>
        <title> Reset Password | WonderRaw</title>
      </Head>

      <ResetView />
    </>
  );
}
