import React from "react";
import CustomerLayout from "@/layouts/customer";
import Head from "next/head";
import { PATH_SHOP } from "@/routers/path";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { AddressListView } from "@/sections/customer/address/view";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Address, dbConnect } from "@/helpers/db";
import { getSession } from "next-auth/react";

AddressPage.getLayout = (page: React.ReactElement) => (
  <CustomerLayout
    Breadcrumbs={
      <CustomBreadCrumbs
        mode="dark"
        heading="ADDRESSES"
        links={[
          {
            name: "Home",
            href: PATH_SHOP.home,
          },
          {
            name: "User Dashboard",
            href: PATH_SHOP.customer.root,
          },
          { name: "Addresses" },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
    }
  >
    {page}
  </CustomerLayout>
);

export default function AddressPage({
  addresses,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title> Addresses | WonderRaw</title>
      </Head>

      <AddressListView addresses={addresses} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const session = await getSession(ctx);

    if (session) {
      const userId = session.user?.id;

      console.log(userId);

      await dbConnect();

      const res = await Address.find({ customer: userId });
      return { props: { addresses: JSON.parse(JSON.stringify(res)) } };
    } else {
      return { props: { addresses: [] } };
    }
  } catch (err) {
    return { props: { addresses: [] } };
  }
};
