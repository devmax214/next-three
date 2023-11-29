import React from "react";
import { Box, Container, Grid } from "@mui/material";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_CONFIGURATOR } from "@/routers/path";
import ConfigurationCanvas from "../configuration-canvas";
import ConfigurationDetails from "@/sections/customize/configurator/configuration-details";
import { CustomizeProvider } from "@/components/customize/context";

type Props = {
  type: string;
};

export default function ConfigurationEditView(props: Props) {
  return (
    <>
      <CustomizeProvider>
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
              heading="T-Shirt"
              links={[
                {
                  name: "Home",
                  href: PATH_CONFIGURATOR.root,
                },
                {
                  name: "Product Page",
                  href: PATH_CONFIGURATOR.root,
                },
                { name: "T-Shirt" },
              ]}
              sx={{
                mb: { xs: 3, md: 5 },
              }}
            />

            <Grid container spacing={5}>
              <Grid item md={8}>
                <ConfigurationCanvas {...props} />
              </Grid>
              <Grid item md={4}>
                <ConfigurationDetails {...props} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </CustomizeProvider>
    </>
  );
}
