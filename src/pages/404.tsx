import React from "react";
import { m } from "framer-motion";
import Head from "next/head";
import { Typography } from "@mui/material";
import CompactLayout from "@/layouts/compact";
import MotionContainer from "../components/animate/motion-container";
import { varBounce } from "@/components/animate/variants";

Page404.getLayout = (page: React.ReactElement) => (
  <CompactLayout>{page}</CompactLayout>
);

export default function Page404() {
  return (
    <>
      <Head>
        <title> 404 Page Not Found! | WonderRaw</title>
      </Head>

      <MotionContainer>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" paragraph>
            Sorry, Page Not Found!
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: "text.secondary" }}>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
            mistyped the URL? Be sure to check your spelling.
          </Typography>
        </m.div>
      </MotionContainer>
    </>
  );
}
