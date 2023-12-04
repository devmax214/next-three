import React from "react";
import CustomerLayout from "@/layouts/customer";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_SHOP } from "@/routers/path";
import { PaymentView } from "@/sections/customer/payment/view";
import Head from "next/head";

PaymentPage.getLayout = (page: React.ReactElement) => (
  <CustomerLayout
    Breadcrumbs={
      <CustomBreadCrumbs
        mode="dark"
        heading="PAYMENT METHODS"
        links={[
          {
            name: "Home",
            href: PATH_SHOP.home,
          },
          {
            name: "User Dashboard",
            href: PATH_SHOP.customer.root,
          },
          { name: "Payment methods" },
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

export default function PaymentPage() {
  return (
    <>
      <Head>
        <title> Payment | WonderRaw</title>
      </Head>

      <PaymentView />
    </>
  );
}
