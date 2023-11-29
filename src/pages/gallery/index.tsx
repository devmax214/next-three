import React from "react";
import Head from "next/head";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import CustomizeLayout from "@/layouts/customize";
import { GalleryListView } from "@/sections/customize/gallery/view";
import { getAllProduct } from "@/services/configuration/product";

GalleryPage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);

type Props = {};

export default function GalleryPage({
  galleries,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title> Product Gallery | WonderRaw</title>
      </Head>

      <GalleryListView galleries={galleries} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await getAllProduct();

  return { props: { galleries: res } };
};
