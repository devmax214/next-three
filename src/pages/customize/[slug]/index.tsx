import React from "react";
import Head from "next/head";
import CustomizeLayout from "@/layouts/customize";
import { ConfigurationView } from "@/sections/customize/configurator/view";
import { useRouter } from "next/router";

ProductCustomizePage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);

type Props = {};

// Customize product
export default function ProductCustomizePage(props: Props) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title> Customize Product | WonderRaw</title>
      </Head>

      <ConfigurationView type={router.query.slug as string} />
    </>
  );
}
