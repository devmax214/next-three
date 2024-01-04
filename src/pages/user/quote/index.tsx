import React from "react";
import CustomerLayout from "@/layouts/customer";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_SHOP } from "@/routers/path";
import Head from "next/head";
import { QuoteListView } from "@/sections/customer/quote/view";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import { dbConnect, Customize } from "@/helpers/db";

QuotePage.getLayout = (page: React.ReactElement) => (
  <CustomerLayout
    Breadcrumbs={
      <CustomBreadCrumbs
        mode="dark"
        heading="QUOTE REQUESTS"
        links={[
          {
            name: "Home",
            href: PATH_SHOP.home,
          },
          {
            name: "User Dashboard",
            href: PATH_SHOP.customer.root,
          },

          { name: "Quote Requests" },
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
export default function QuotePage({
  quotes,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title> Quote Requests | WonderRaw</title>
      </Head>

      <QuoteListView quotes={quotes} />
    </>
  );
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const session = await getSession(ctx);

    if (session) {
      const userId = session.user?.id;

      await dbConnect();

      const quotes = await Customize.find({ customer: userId, quoteState: { $ne: 0 } });

      return {
        props: {
          quotes: JSON.parse(JSON.stringify(quotes)),
        },
      };
    } else {
      return { props: { quotes: [] } };
    }
  } catch (e) {
    return { props: { quotes: [] } };
  }
};