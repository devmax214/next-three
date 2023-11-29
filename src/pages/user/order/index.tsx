import React from "react";
import Head from "next/head";
import CustomerLayout from "@/layouts/customer";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_SHOP } from "@/routers/path";
import { OrderListView } from "@/sections/customer/order/view";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import { dbConnect, Order } from "@/helpers/db";

UserOrderPage.getLayout = (page: React.ReactElement) => (
  <CustomerLayout
    Breadcrumbs={
      <CustomBreadCrumbs
        mode="dark"
        heading="ORDERS"
        links={[
          {
            name: "Home",
            href: PATH_SHOP.home,
          },
          {
            name: "User Dashboard",
            href: PATH_SHOP.customer.root,
          },
          { name: "Orders" },
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

export default function UserOrderPage({
  orders,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title> Orders | WonderRaw</title>
      </Head>

      <OrderListView orders={orders} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const session = await getSession(ctx);

    if (session) {
      const userId = session.user?.id;

      await dbConnect();

      const orders = await Order.find({ customer: userId }).populate({
        path: "items",
        populate: { path: "product" },
      });

      return {
        props: {
          orders: JSON.parse(JSON.stringify(orders)),
        },
      };
    } else {
      return { props: { orders: [] } };
    }
  } catch (e) {
    return { props: { orders: [] } };
  }
};
