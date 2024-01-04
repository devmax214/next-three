import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import Image from "@/components/image";
import { PATH_CONFIGURATOR } from "@/routers/path";
import { secondaryFont } from "@/theme/typography";

type Props = {};

export default function ResponseQuoteView(props: Props) {
  return (
    <>
      {" "}
      <Box
        sx={{
          bgcolor: "#F9F5EE",
          position: "relative",
          pt: { xs: 10, md: 10 },
        }}
      >
        <Container
          sx={{
            pb: { xs: 10, md: 10 },
          }}
        >
          <CustomBreadCrumbs
            heading="Response"
            links={[
              {
                name: "Home",
                href: PATH_CONFIGURATOR.root,
              },
              {
                name: "Request for Quote",
                href: PATH_CONFIGURATOR.root,
              },
              { name: "Response" },
            ]}
            sx={{
              mb: { xs: 3, md: 5 },
            }}
          />

          <Grid container spacing={10}>
            <Grid item md={6} sm={12}>
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 500,
                  fontFamily: secondaryFont.style.fontFamily,
                }}
              >
                Your Request:
              </Typography>
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 600,
                  mt: 0.5,
                  fontFamily: secondaryFont.style.fontFamily,
                }}
              >
                Customize product
              </Typography>

              <Box mt={2}>
                <Image src="/images/customize/quote.jpg" />
              </Box>
            </Grid>
            <Grid item md={6} sm={12}>
              <Typography
                sx={{
                  fontSize: 19,
                  fontWeight: 600,
                  fontFamily: secondaryFont.style.fontFamily,
                }}
              >
                Response:
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
