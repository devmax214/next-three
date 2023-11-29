import React from "react";
import Head from "next/head";
import CustomerLayout from "@/layouts/customer";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_SHOP } from "@/routers/path";
import { OrderTrackingView } from "@/sections/customer/order/view";

TrackPage.getLayout = (page: React.ReactElement) => (
  <CustomerLayout
    Breadcrumbs={
      <CustomBreadCrumbs
        mode="dark"
        heading="ORDER TRACKING"
        links={[
          {
            name: "Home",
            href: PATH_SHOP.home,
          },
          {
            name: "User Dashboard",
            href: PATH_SHOP.customer.root,
          },
          {
            name: "Orders",
            href: PATH_SHOP.customer.order.list,
          },
          { name: "Order Tracking" },
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

export default function TrackPage(props: Props) {
  return (
    <>
      <Head>
        <title> Tracking | WonderRaw</title>
      </Head>

      <OrderTrackingView />
    </>
  );
}
