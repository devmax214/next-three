import React, { useEffect, useContext, useRef } from "react";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import CustomizeLayout from "@/layouts/customize";
import { PATH_SHOP } from "@/routers/path";
import ConfigurationCanvas from "@/sections/customize/configurator/configuration-canvas";
import { CustomizeProvider } from "@/components/customize/context";
import { setState } from '@/helpers/store';
import { Box, Grid, Stack, Typography, Container, Button } from "@mui/material";
import { secondaryFont } from "@/theme/typography";
import { useCheckoutContext } from "@/components/checkout/context";
import { useRouter } from "next/router";
import { ICustomizeQuoteItem } from "@/@types/customize";
import { embelRenders } from "@/constant/embelConst";
import { Texture } from "three";
import { Customize, dbConnect } from "@/helpers/db";

OrderSamplePage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);

export default function OrderSamplePage({ customProduct }: any) {
  const { push } = useRouter();
  const context = customProduct.context;
  const dbCtx = context;
  const productType = customProduct.product;
  const { renderMain } = embelRenders(productType, dbCtx);
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
                <Stack gap={6} sx={{ mt: 0, textAlign: 'center' }}>
                  {"For samples we allow a maximum quantity of two sample per customization"}
                  <Button
                    size="large"
                    fullWidth
                    variant="contained"
                    sx={{
                      bgcolor: "#292F3D",
                      width: 337,
                      height: 40,
                      margin: "0 auto",
                      "&:hover": { bgcolor: "#550248" }
                    }}
                    onClick={() => push(`/customize/${customProduct._id}/review`)}
                  >
                    <Typography sx={{ fontSize: 14, fontWeight: 500, fontFamily: secondaryFont.style.fontFamily }}>
                      ORDER PRODUCTS
                    </Typography>
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>

        </Box>
      </CustomizeProvider>
    </>
  )
}

export async function getServerSideProps({ params }) {
  await dbConnect();
  const res = await Customize.findById(params.id);
  return { props: { customProduct: JSON.parse(JSON.stringify(res)) } };
}