import React from "react";
import Head from "next/head";
import CustomizeLayout from "@/layouts/customize";
import { ConfigurationEditView } from "@/sections/customize/configurator/view";
import { split } from "lodash";
import axios from "axios";
import { endpoints } from "../../../../global-config";
import { Customize, dbConnect } from "@/helpers/db";

ProductCustomizeEditPage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);

export async function getServerSideProps({params}) {
  await dbConnect();
  const res = await Customize.findById(params.slug);

  return { props: { customProduct: JSON.parse(JSON.stringify(res)) } };
}

export default function ProductCustomizeEditPage({ customProduct }) {
  
  return (
    <>
      <Head>
        <title> Customize | WonderRaw</title>
      </Head>

      <ConfigurationEditView customProduct={customProduct}/>
    </>
  );
}
