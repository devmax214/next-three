import React from "react";
import Head from "next/head";
import CustomizeLayout from "@/layouts/customize";

NewsletterPage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);

type Props = {};

export default function NewsletterPage(props: Props) {
  return (
    <>
      <Head>
        <title> Newsletter | WonderRaw</title>
      </Head>
    </>
  );
}
