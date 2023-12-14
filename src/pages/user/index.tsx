import React from "react";
import CustomerLayout from "@/layouts/customer";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_SHOP } from "@/routers/path";
import Head from "next/head";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { CustomerDashboardView } from "@/sections/customer/profile/view";
import { Address, Order, dbConnect } from "@/helpers/db";
import { getSession } from "next-auth/react";
import address from "@/helpers/db/models/address";

UserDashboardPage.getLayout = (page: React.ReactElement) => (
  <CustomerLayout
    Breadcrumbs={
      <CustomBreadCrumbs
        mode="dark"
        heading="User Dashboard"
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

export default function UserDashboardPage({
  addressCnt, orderCnt
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title> Dashboard | WonderRaw</title>
      </Head>

      <CustomerDashboardView addressCnt={addressCnt} orderCnt={orderCnt} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const session = await getSession(ctx);
    if (session) {
      const userId = session.user?.id;

      await dbConnect();

      const addressCnt = (await Address.find({ customer: userId })).length;
      const orderCnt = (await Order.find({ customer: userId })).length;

      return { props: { addressCnt: addressCnt, orderCnt: orderCnt } };
    } else {
      return { props: { addressCnt: 0, orderCnt: 0 } };
    }
  } catch (err) {
    return { props: { addressCnt: 0, orderCnt: 0 } };
  }
};
