import React from "react";
import CustomerLayout from "@/layouts/customer";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_SHOP } from "@/routers/path";
import Head from "next/head";
import { FeedbackView } from "@/sections/customer/feedback/view";
import { useRouter } from 'next/router'

GiveFeedbackPage.getLayout = (page: React.ReactElement) => (
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

export default function GiveFeedbackPage(props: Props) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title> Feedback | WonderRaw</title>
      </Head>

      <FeedbackView productId={router.query.id} />
    </>
  );
}
