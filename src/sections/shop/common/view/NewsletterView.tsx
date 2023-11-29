import React from "react";
import { Box, Container } from "@mui/material";
import { MotionViewport } from "@/components/animate";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_SHOP } from "@/routers/path";
import RowContainer from "../RowContainer";
import NewsletterForm from "../NewsletterForm";

type Props = {};

export default function NewsletterView(props: Props) {
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
            heading="NEWSLETTER/BLOGS"
            links={[
              {
                name: "Home",
                href: PATH_SHOP.home,
              },
              { name: "Newsletter / Blogs" },
            ]}
            sx={{
              mb: { xs: 3, md: 5 },
            }}
          />
        </Container>

        <RowContainer image="/images/newsletter.jpg" height={500}>
          <NewsletterForm />
        </RowContainer>
      </Box>
    </>
  );
}
