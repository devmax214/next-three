import React from "react";
import { Box, Container, Grid } from "@mui/material";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_CONFIGURATOR } from "@/routers/path";
import OrderDetail from "../order-detail";
import OrderSummary from "../order-summary";

export default function ConfigurationReviewView({ type, quoteNumber, id }) {
  return (
    <Box
      component="div"
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
          heading={`Quote Request - ${quoteNumber}`}
          links={[
            {
              name: "Home",
              href: PATH_CONFIGURATOR.root,
            },
            {
              name: "Quote Request",
              href: '/user/quote',
            },
            { name: quoteNumber },
          ]}
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        />

        <Grid container spacing={5}>
          <Grid item md={8} xs={12}>
            <OrderDetail />
          </Grid>
          <Grid item md={4} xs={12}>
            <OrderSummary />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
