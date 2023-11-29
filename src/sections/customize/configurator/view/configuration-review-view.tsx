import React from "react";
import { Box, Container, Grid } from "@mui/material";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_CONFIGURATOR } from "@/routers/path";
import OrderDetail from "../order-detail";
import OrderSummary from "../order-summary";

type Props = {};

export default function ConfigurationReviewView(props: Props) {
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
          heading="Review order"
          links={[
            {
              name: "Home",
              href: PATH_CONFIGURATOR.root,
            },
            {
              name: "Product Page",
              href: PATH_CONFIGURATOR.root,
            },
            { name: "Review order" },
          ]}
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        />

        <Grid container spacing={3}>
          <Grid item md={8}>
            <OrderDetail />
          </Grid>
          <Grid item md={4}>
            <OrderSummary />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
