import React from "react";
import { Box, Container } from "@mui/material";
import { MotionViewport } from "@/components/animate";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_SHOP } from "@/routers/path";
import RowContainer from "@/sections/shop/common/RowContainer";
import HearForm from "../HearForm";

type Props = {};

export default function HowHearView(props: Props) {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#F9F5EE",
          position: "relative",
          py: { xs: 10, md: 10 },
        }}
      >
        <Container component={MotionViewport}>
          <CustomBreadCrumbs
            heading="HOW DID YOU HEAR ABOUT US"
            links={[
              {
                name: "Home",
                href: PATH_SHOP.home,
              },
              { name: "How did you hear about us" },
            ]}
            sx={{
              mb: { xs: 3, md: 5 },
            }}
          />
        </Container>

        <RowContainer image="/images/hear.jpg" height={500}>
          <HearForm />
        </RowContainer>
      </Box>
    </>
  );
}
