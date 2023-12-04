import React from "react";
import CustomerLayout from "@/layouts/customer";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_SHOP } from "@/routers/path";
import Head from "next/head";
import { FeedbackListView } from "@/sections/customer/feedback/view";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { dbConnect, Order } from "@/helpers/db";

FeedbackPage.getLayout = (page: React.ReactElement) => (
  <CustomerLayout
    Breadcrumbs={
      <CustomBreadCrumbs
        mode="dark"
        heading="Feedback/Rating"
        links={[
          {
            name: "Home",
            href: PATH_SHOP.home,
          },
          {
            name: "User Dashboard",
            href: PATH_SHOP.customer.root,
          },
          { name: "Feedback/Rating" },
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

export default function FeedbackPage({ orders }: Props) {
  return (
    <>
      <Head>
        <title> Feedback | WonderRaw</title>
      </Head>

      <FeedbackListView />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const session = await getSession(ctx);

    if (session) {
      const userId = session.user?.id;

      await dbConnect();

      const orders = await Order.find({ customer: userId });

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
