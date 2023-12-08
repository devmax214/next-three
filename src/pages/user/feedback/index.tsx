import React from "react";
import CustomerLayout from "@/layouts/customer";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_SHOP } from "@/routers/path";
import Head from "next/head";
import { FeedbackListView } from "@/sections/customer/feedback/view";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { dbConnect, Order, Rate, Product } from "@/helpers/db";

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

export default function FeedbackPage(props: Props) {
  return (
    <>
      <Head>
        <title> Feedback | WonderRaw</title>
      </Head>

      <FeedbackListView {...props} />
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
      
      const rateRes = await Rate.find({ customer: userId });
      const productRes = await Product.find({});
      const rateList = JSON.parse(JSON.stringify(rateRes));
      let rateHash = {};
      rateList.forEach(row => {
        rateHash[row.productId] = row;
      });
      
      return { props: { 
        rateHash: rateHash,
        productList: JSON.parse(JSON.stringify(productRes)),
        orders: JSON.parse(JSON.stringify(orders)),
      } };
    } else {
      return { props: { rateHash: {}, productList: [], orders: [] } };
    }
  } catch (e) {
    return { props: { rateHash: {}, productList: [], orders: [] } };
  }
};
