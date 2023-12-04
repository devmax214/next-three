import React from "react";
import CustomizeLayout from "@/layouts/customize";
import Head from "next/head";
import { CustomizeCheckoutView } from "@/sections/customize/checkout/view";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import { Address, dbConnect } from "@/helpers/db";

CheckoutPage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);

export default function CheckoutPage({
  addresses,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title> Checkout | WonderRaw</title>
      </Head>

      <CustomizeCheckoutView addresses={addresses} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  if (session) {
    await dbConnect();
    const res = await Address.find({ customer: session.user.id });

    return { props: { addresses: JSON.parse(JSON.stringify(res)) } };
  } else {
    return { props: { addresses: [] } };
  }
};
