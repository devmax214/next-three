import React from "react";
import { Box, Container, Grid } from "@mui/material";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_CONFIGURATOR } from "@/routers/path";
import { ProductCard5 } from "@/components/proudct-cards";
import { ICustomizationProduct } from "@/@types/configuration";

type Props = {
  galleries: ICustomizationProduct[];
};

export default function GalleryListView({ galleries }: Props) {

  return (
    <>
      <Box
        component={"div"}
        sx={{
          bgcolor: "#F9F5EE",
          position: "relative",
          pt: { xs: 10, md: 10 },
          height: '100%'
        }}
      >
        <Container
          sx={{
            pb: { xs: 10, md: 10 },
          }}
        >
          <CustomBreadCrumbs
            heading="CUSTOMIZED PRODUCT GALLERY"
            links={[
              {
                name: "Home",
                href: PATH_CONFIGURATOR.root,
              },
              { name: "Customized Product Gallery" },
            ]}
            sx={{
              mb: { xs: 3, md: 5 },
            }}
          />

          <Grid container spacing={3}>
            {galleries.map((gallery) => (
              <Grid item md={3} xs={6}>
                <ProductCard5 product={gallery} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
