import React from "react";
import CustomerLayout from "@/layouts/customer";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_SHOP } from "@/routers/path";
import Head from "next/head";
import { CustomerDashboardView } from "@/sections/customer/profile/view";

UserDashboardPage.getLayout = (page: React.ReactElement) => (
  <CustomerLayout
    Breadcrumbs={
      <CustomBreadCrumbs
        mode="dark"
        heading="USER DASHBOARD"
        links={[
          {
            name: "Home",
            href: PATH_SHOP.home,
          },
          { name: "User Dashboard" },
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

export default function UserDashboardPage(props: Props) {
  return (
    <>
      <Head>
        <title> Dashboard | WonderRaw</title>
      </Head>

      <CustomerDashboardView />
    </>
  );
}
