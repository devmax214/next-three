import React from "react";
import { m } from "framer-motion";
import Head from "next/head";
import { Typography } from "@mui/material";
import CompactLayout from "@/layouts/compact";
import MotionContainer from "../components/animate/motion-container";
import { varBounce } from "@/components/animate/variants";

Page500.getLayout = (page: React.ReactElement) => (
  <CompactLayout>{page}</CompactLayout>
);

export default function Page500() {
  return (
    <>
      <Head>
        <title> 500 Internal Server Error | WonderRaw</title>
      </Head>

      <MotionContainer>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" paragraph>
            500 Internal Server Error
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: "text.secondary" }}>
            There was an error, please try again later.
          </Typography>
        </m.div>
      </MotionContainer>
    </>
  );
}
