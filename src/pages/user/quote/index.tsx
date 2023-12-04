import React from "react";
import CustomerLayout from "@/layouts/customer";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_SHOP } from "@/routers/path";
import Head from "next/head";
import { QuoteListView } from "@/sections/customer/quote/view";

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

export default function QuotePage(props: Props) {
  return (
    <>
      <Head>
        <title> Quote Requests | WonderRaw</title>
      </Head>

      <QuoteListView />
    </>
  );
}
