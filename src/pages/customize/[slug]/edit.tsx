import React from "react";
import Head from "next/head";
import CustomizeLayout from "@/layouts/customize";
import { ConfigurationEditView } from "@/sections/customize/configurator/view";
import { split } from "lodash";
import axios from "axios";
import { endpoints } from "../../../../global-config";
import { Customize, dbConnect } from "@/helpers/db";
import mongoose from "mongoose"

ProductCustomizeEditPage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);

export async function getServerSideProps({ params }) {
  var isValid = mongoose.Types.ObjectId.isValid(params.slug);

  if (!isValid) {
    return { props: { customProduct: { product: params.slug } } };
  }

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

      <ConfigurationEditView customProduct={customProduct} />
    </>
  );
}
