import React from "react";
import Head from "next/head";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import CustomizeLayout from "@/layouts/customize";
import { GalleryListView } from "@/sections/customize/gallery/view";
import { getSession } from "next-auth/react";
import { Customize, dbConnect } from "@/helpers/db";

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  if (session) {
    await dbConnect();
    const res = await Customize.find({ customer: session.user.id });

    return { props: { galleries: JSON.parse(JSON.stringify(res)) } };
  } else {
    return { props: { galleries: [] } };
  }

};
