import React, { useEffect, useContext, useRef } from "react";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import CustomizeLayout from "@/layouts/customize";
import { PATH_SHOP } from "@/routers/path";
import ConfigurationCanvas from "@/sections/customize/configurator/configuration-canvas";
import { CustomizeProvider } from "@/components/customize/context";
import { setState } from '@/helpers/store';
import { Box, Grid, Stack, Typography, Container } from "@mui/material";
import { secondaryFont } from "@/theme/typography";
import { useCheckoutContext } from "@/components/checkout/context";
import { useRouter } from "next/router";
import { ICustomizeQuoteItem } from "@/@types/customize";
import { embelRenders } from "@/constant/embelConst";
import { Texture } from "three";

OrderSamplePage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);

export default function OrderSamplePage(props: any) {
  const router = useRouter();
  const context = JSON.parse(localStorage.getItem('context') as string) as ICustomizeQuoteItem;
  const dbCtx = context;
  const productType = localStorage.getItem('productType') as string;
  const { renderPrices, renderMain } = embelRenders(productType, dbCtx);
  const canvasRef = useRef<any>(null)
  const textureRef = useRef<Texture>(null)
  setState({ isMaskAdded: false })

  return (
    <>
      <CustomizeProvider passInitState={context}>
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
              heading="Order Sample"
              links={[
                {
                  name: "Home",
                  href: PATH_SHOP.home,
                },
                { name: "Order Sample" },
              ]}
              sx={{
                mb: { xs: 3, md: 5 },
              }}
            />

            <Typography
              sx={{
                flexGrow: 1,
                color: "#5C6166",
                fontSize: 16,
                fontweight: 500,
                fontFamily: secondaryFont.style.fontFamily
              }}>
              Your Request:
            </Typography>
            <Typography
              sx={{
                flexGrow: 1,
                color: "#292F3D",
                fontSize: 16,
                fontweight: 700,
                fontFamily: secondaryFont.style.fontFamily
              }}>
              {"customize product"}
            </Typography>
            <Grid container sx={{ mb: 10 }} spacing={6}>
              <Grid item md={6} xs={12}>
                <ConfigurationCanvas
                  canvasRef={canvasRef}
                  textureRef={textureRef}
                  page="customize-edit-view"
                  ctx={context}
                  arrowLeftCount={0}
                  arrowRightCount={0}
                  id="myCanvas"
                  {...props}
                  type={productType}
                />
                <Typography
                  sx={{
                    flexGrow: 1,
                    color: "#292F3D",
                    fontSize: 26,
                    fontWeight: 700,
                    mt: 5
                  }}>
                  Product Info:
                </Typography>
                {renderMain}
              </Grid>
              <Grid item md={1}></Grid>
              <Grid item md={5}>
                <Stack gap={6} sx={{ mt: 0 }}>
                  {renderPrices}
                </Stack>
              </Grid>
            </Grid>
          </Container>

        </Box>
      </CustomizeProvider>
    </>
  )
}