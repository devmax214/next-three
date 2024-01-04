import React from "react";
import { Box, Container, Grid, Stack } from "@mui/material";
import { m } from "framer-motion";
import { MotionViewport, varFade } from "@/components/animate";

type Props = {
  image: string;
  height: number;
  children: React.ReactNode;
};

export default function RowContainer({ image, height, children }: Props) {
  const renderImg = (
    <>
      <Box
        component={m.img}
        src={image}
        variants={varFade().in}
        sx={{
          height: 1,
          width: 0.5,
          objectFit: "cover",
          position: "absolute",
          left: 0,
        }}
      />
    </>
  );

  const renderDescription = (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ height: 1 }}
    >
      <m.div variants={varFade().inUp}>{children}</m.div>
    </Stack>
  );

  return (
    <Box sx={{ position: "relative" }}>
      <Container component={MotionViewport}>
        <Grid container sx={{ minHeight: height }}>
          <Grid xs={12} md={6}>
            {renderImg}
          </Grid>
          <Grid xs={12} md={6} p={8}>
            {renderDescription}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
