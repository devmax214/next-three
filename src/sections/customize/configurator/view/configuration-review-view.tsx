import React from "react";
import { Box, Container, Grid } from "@mui/material";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_CONFIGURATOR } from "@/routers/path";
import OrderDetail from "../order-detail";
import OrderSummary from "../order-summary";

export default function ConfigurationReviewView(props: any) {
  const { type, quoteNumber, id } = props;
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
          heading={type == '1' ? `Quote Request - ${quoteNumber}` : `Review order`}
          links={type == '2' ? [
            {
              name: "Home",
              href: PATH_CONFIGURATOR.root,
            },
            {
              name: "Product Page",
              href: PATH_CONFIGURATOR.root,
            },
            { name: 'Review order' },
          ] : [
            {
              name: "Home",
              href: PATH_CONFIGURATOR.root,
            },
            {
              name: "Quote Requests",
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
            <OrderDetail {...props} />
          </Grid>
          <Grid item md={4} xs={12}>
            <OrderSummary {...props} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
