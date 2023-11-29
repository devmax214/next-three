import { MotionViewport } from "@/components/animate";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_SHOP } from "@/routers/path";
import React from "react";
import { Box, Container } from "@mui/material";
import {
  Section1,
  Section2,
  Section3,
  Section4,
} from "@/sections/shop/common/about";

type Props = { mode?: "colored" | "dark" };

export default function AboutUsView({ mode = "colored" }: Props) {
  return (
    <>
      <Box
        component="div"
        sx={{
          bgcolor: mode === "dark" ? "#fff" : "#F9F5EE",
          position: "relative",
        }}
      >
        <Container
          component={MotionViewport}
          sx={{
            pt: { xs: 10, md: 10 },
            pb: { xs: 10, md: 8 },
          }}
        >
          <CustomBreadCrumbs
            mode={mode}
            heading="ABOUT US"
            links={[
              {
                name: "Home",
                href: PATH_SHOP.home,
              },
              { name: "About Us" },
            ]}
          />
        </Container>
      </Box>

      <Section1 mode={mode} />
      <Section2 mode={mode} />
      <Section3 mode={mode} />
      <Section4 mode={mode} />
    </>
  );
}
