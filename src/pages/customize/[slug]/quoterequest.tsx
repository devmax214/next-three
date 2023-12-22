import React from "react";
import Head from "next/head";
import { ConfigurationReviewView } from "@/sections/customize/configurator/view";
import CustomizeLayout from "@/layouts/customize";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ParsedUrlQuery } from "querystring";

QuoteRequestPage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);

export default function QuoteRequestPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title> Quote Request | WonderRaw</title>
      </Head>

      <ConfigurationReviewView {...props} type="1" />
    </>
  );
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.params as IParams;

  return { props: { id: slug, quoteNumber: slug.slice(0, 8).toUpperCase() } };
};
