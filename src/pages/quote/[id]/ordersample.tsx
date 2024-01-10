import React, { useEffect, useContext, useRef } from "react";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import CustomizeLayout from "@/layouts/customize";
import { PATH_SHOP } from "@/routers/path";
import ConfigurationCanvas from "@/sections/customize/configurator/configuration-canvas";
import { CustomizeProvider } from "@/components/customize/context";
import { Texture } from "three";
import { setState } from '@/helpers/store';
import { embelRenders } from "@/constant/embelConst";
import { Box, Grid, Stack, Typography, Container } from "@mui/material";
import { secondaryFont } from "@/theme/typography";
import { useCheckoutContext } from "@/components/checkout/context";
import { useRouter } from "next/router";

OrderSamplePage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);

const sample1 = {
  category: {},
  garment: "",
  tag: {
    visible: false,
    edit: true,
    neck: true,
    color: true,
    size: "45x45",
    file: null
  },
  embellishment: [{
    visible: false,
    type: "image",
    size: 0,
    artwork: 0,
    view: 0,
    visibleText: false,
    file: null,
    position: {
      width: 22,
      neck: 22,
      center: 22,
      type: 0
    },
    reqText: "",
    textureText: "",
    font: "Arial"
  }, {
    visible: false,
    type: "text",
    size: 0,
    artwork: 0,
    view: 0,
    visibleText: false,
    file: null,
    position: {
      width: 22,
      neck: 22,
      center: 22,
      type: 0
    },
    reqText: "",
    textureText: "tester test",
    font: "Arial"
  }, {
    visible: false,
    type: "image",
    size: 0,
    artwork: 0,
    view: 0,
    visibleText: false,
    file: null,
    position: {
      width: 22,
      neck: 22,
      center: 22,
      type: 0
    },
    reqText: "",
    textureText: "",
    font: "Arial"
  }, {
    visible: false,
    type: "image",
    size: 0,
    artwork: 0,
    view: 0,
    visibleText: false,
    file: null,
    position: {
      width: 22,
      neck: 22,
      center: 22,
      type: 0
    },
    reqText: "",
    textureText: "",
    font: "Arial"
  }, {
    visible: false,
    type: "image",
    size: 0,
    artwork: 0,
    view: 0,
    visibleText: false,
    file: null,
    position: {
      width: 22,
      neck: 22,
      center: 22,
      type: 0
    },
    reqText: "",
    textureText: "",
    font: "Arial"
  }],
  color: "#5ecbf2",
  pantone: "11-0601 TCX",
  cord: "Cord1",
  cordTip: "mental_end",
  text: "",
  careLabel: 0,
  sizeLabel: 0,
  washing: {},
  material: "",
  lace: "",
  laceTip: "",
  embelIndex: 0,
  cordVisible: false,
}

const sample2 = {
  category: {},
  garment: "",
  tag: {
    visible: false,
    edit: true,
    neck: true,
    color: true,
    size: "45x45",
    file: null
  },
  embellishment: [{
    visible: false,
    type: "image",
    size: 0,
    artwork: 0,
    view: 0,
    visibleText: false,
    file: null,
    position: {
      width: 22,
      neck: 22,
      center: 22,
      type: 0
    },
    reqText: "",
    textureText: "",
    font: "Arial"
  }, {
    visible: false,
    type: "image",
    size: 0,
    artwork: 0,
    view: 0,
    visibleText: false,
    file: null,
    position: {
      width: 22,
      neck: 22,
      center: 22,
      type: 0
    },
    reqText: "",
    textureText: "",
    font: "Arial"
  }, {
    visible: false,
    type: "image",
    size: 0,
    artwork: 0,
    view: 0,
    visibleText: false,
    file: null,
    position: {
      width: 22,
      neck: 22,
      center: 22,
      type: 0
    },
    reqText: "",
    textureText: "",
    font: "Arial"
  }, {
    visible: false,
    type: "image",
    size: 0,
    artwork: 0,
    view: 0,
    visibleText: false,
    file: null,
    position: {
      width: 22,
      neck: 22,
      center: 22,
      type: 0
    },
    reqText: "",
    textureText: "",
    font: "Arial"
  }, {
    visible: false,
    type: "image",
    size: 0,
    artwork: 0,
    view: 0,
    visibleText: false,
    file: null,
    position: {
      width: 22,
      neck: 22,
      center: 22,
      type: 0
    },
    reqText: "",
    textureText: "",
    font: "Arial"
  }],
  color: "#d361f2",
  pantone: "11-0601 TCX",
  cord: "Cord1",
  cordTip: "mental_end",
  text: "",
  careLabel: 0,
  sizeLabel: 0,
  washing: {},
  material: "",
  lace: "",
  laceTip: "",
  embelIndex: 0,
  cordVisible: false,
}

export default function OrderSamplePage(props: any) {
  const router = useRouter();
  const productType = router.query.id
  const checkoutContext = useCheckoutContext();
  const { onAddToCart } = checkoutContext;
  const customProduct1 = { context: { ...sample1 }, product: productType };
  const customProduct2 = { context: { ...sample2 }, product: productType };

  return (
    <>
      <CustomizeProvider passInitState={{}}>
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

            {renderCustomizedProduct(customProduct1, 1)}
            {renderCustomizedProduct(customProduct2, 2)}
          </Container>

        </Box>
      </CustomizeProvider>
    </>
  )
}


function renderCustomizedProduct(customProduct: any, customIndex: number) {
  const context = customProduct.context;
  const dbCtx = context;
  const productType = customProduct.product;
  const { renderPrices, renderMain } = embelRenders(productType, dbCtx);
  const canvasRef = useRef<any>(null)
  const textureRef = useRef<Texture>(null)
  setState({ isMaskAdded: false })

  return (
    <>
      <CustomizeProvider passInitState={context}>
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
          {"customize product - " + customIndex}
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
              id={"myCanvas_" + customIndex}
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
      </CustomizeProvider>
    </>
  );
}