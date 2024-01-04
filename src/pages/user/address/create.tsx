import React from "react";
import CustomerLayout from "@/layouts/customer";
import Head from "next/head";
import { PATH_SHOP } from "@/routers/path";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { NewAddressView } from "@/sections/customer/address/view";

CreateAddressPage.getLayout = (page: React.ReactElement) => (
  <CustomerLayout
    Breadcrumbs={
      <CustomBreadCrumbs
        mode="dark"
        heading="ADD NEW ADDRESS"
        links={[
          {
            name: "Home",
            href: PATH_SHOP.home,
          },
          {
            name: "User Dashboard",
            href: PATH_SHOP.customer.root,
          },
          { name: "Add new address" },
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

type Props = {};

export default function CreateAddressPage(props: Props) {
  return (
    <>
      <Head>
        <title> Addresses | WonderRaw</title>
      </Head>

      <NewAddressView />
    </>
  );
}
