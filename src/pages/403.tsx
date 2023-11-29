import React from "react";
import { m } from "framer-motion";
import Head from "next/head";
import { Typography } from "@mui/material";
import CompactLayout from "@/layouts/compact";
import MotionContainer from "../components/animate/motion-container";
import { varBounce } from "@/components/animate/variants";

Page403.getLayout = (page: React.ReactElement) => (
  <CompactLayout>{page}</CompactLayout>
);

export default function Page403() {
  return (
    <>
      <Head>
        <title> 403 Forbidden | WonderRaw</title>
      </Head>

      <MotionContainer>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" paragraph>
            No permission
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: "text.secondary" }}>
            The page you&apos;re trying access has restricted access.
            <br />
            Please refer to your system administrator
          </Typography>
        </m.div>
      </MotionContainer>
    </>
  );
}
