import React from "react";
import Head from "next/head";
import CustomizeLayout from "@/layouts/customize";
import { ConfigurationEditView } from "@/sections/customize/configurator/view";
import { split } from "lodash";

ProductCustomizeEditPage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);

type Props = {
  type: string,
  price: string
};

export default function ProductCustomizeEditPage(props: Props) {
  let curUrl = window.location.href;
  let splittedUrl = curUrl.split("/");
  let query = splittedUrl[splittedUrl.length-2];

  let splittedQuery = query.split("&");
  let type = splittedQuery[0];
  let startPrice = splittedQuery[1];
  props = {
    type: "",
    price: ""
  };
  props.type = type;
  props.price = startPrice;
  return (
    <>
      <Head>
        <title> Customize | WonderRaw</title>
      </Head>

      <ConfigurationEditView {...props}/>
    </>
  );
}
