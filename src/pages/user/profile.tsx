import React from "react";
import Head from "next/head";
import CustomerLayout from "@/layouts/customer";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { CustomerProfileView } from "@/sections/customer/profile/view";
import { PATH_SHOP } from "@/routers/path";

ProfilePage.getLayout = (page: React.ReactElement) => (
  <CustomerLayout
    Breadcrumbs={
      <CustomBreadCrumbs
        mode="dark"
        heading="MY PROFILE"
        links={[
          {
            name: "Home",
            href: PATH_SHOP.home,
          },
          {
            name: "User Dashboard",
            href: PATH_SHOP.customer.root,
          },
          { name: "My Profile" },
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

export default function ProfilePage(props: Props) {
  return (
    <>
      <Head>
        <title> Profile | WonderRaw</title>
      </Head>

      <CustomerProfileView />
    </>
  );
}
