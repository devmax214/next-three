import React from "react";
import Head from "next/head";
import CustomerLayout from "@/layouts/customer";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_SHOP } from "@/routers/path";
import { ChangePasswordView } from "@/sections/customer/password/view";

ChangePasswordPage.getLayout = (page: React.ReactElement) => (
  <CustomerLayout
    Breadcrumbs={
      <CustomBreadCrumbs
        mode="dark"
        heading="Change Password"
        links={[
          {
            name: "Home",
            href: PATH_SHOP.home,
          },
          {
            name: "User Dashboard",
            href: PATH_SHOP.customer.root,
          },
          { name: "Change Password" },
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

export default function ChangePasswordPage(props: Props) {
  return (
    <>
      <Head>
        <title> Password | WonderRaw</title>
      </Head>

      <ChangePasswordView />
    </>
  );
}
