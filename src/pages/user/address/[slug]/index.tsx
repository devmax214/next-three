import React from "react";
import Head from "next/head";
import CustomerLayout from "@/layouts/customer";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { EditAddressView } from "@/sections/customer/address/view";
import { PATH_SHOP } from "@/routers/path";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import { Address, dbConnect } from "@/helpers/db";
import { ParsedUrlQuery } from "querystring";

AddressEditPage.getLayout = (page: React.ReactElement) => (
  <CustomerLayout
    Breadcrumbs={
      <CustomBreadCrumbs
        mode="dark"
        heading="Address"
        links={[
          {
            name: "Home",
            href: PATH_SHOP.home,
          },
          {
            name: "User Dashboard",
            href: PATH_SHOP.customer.root,
          },
          { name: "Address" },
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

export default function AddressEditPage({
  currentAddress,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title> Edit Address | WonderRaw</title>
      </Head>

      <EditAddressView currentAddress={currentAddress} />
    </>
  );
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.params as IParams;

  const session = await getSession(ctx);

  await dbConnect();

  const res = await Address.findById(slug);
  return { props: { currentAddress: JSON.parse(JSON.stringify(res)) } };
};
