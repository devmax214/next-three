import React, { useRef, useEffect } from "react";
import { setState } from '@/helpers/store'
import { Box, Button, Typography, Grid, Stack } from "@mui/material";
import { secondaryFont } from "@/theme/typography";
import { PATH_CONFIGURATOR } from "@/routers/path";
import { useRouter } from "next/router"; "@next/router";
import { CustomizeProvider } from "@/components/customize/context";
import ConfigurationCanvas from "../configurator/configuration-canvas";
import { ICustomizeQuoteItem } from "@/@types/customize";
import { embelRenders } from "@/constant/embelConst";
import { Texture } from "three";

export default function ConfirmQuote(props: any) {
  const router = useRouter();
  const context = JSON.parse(localStorage.getItem('context') as string) as ICustomizeQuoteItem;
  const dbCtx = context;
  const productType = localStorage.getItem('productType') as string;
  const { renderMain } = embelRenders(productType, dbCtx);
  const canvasRef = useRef<any>(null)
  const textureRef = useRef<Texture>(null)
  setState({ isMaskAdded: false })

  return (
    <CustomizeProvider passInitState={context}>
      <Box component={"div"} sx={{ textAlign: { xs: "center", md: "start" } }}>
        <Grid container spacing={5}>
          <Grid item md={7} xs={12}>
            <Box component={"div"} sx={{ mt: 2, mb: 2 }}>
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
            </Box>

          </Grid>

          <Grid item md={5} xs={12}>
            <Stack gap={6} sx={{ ml: { md: 8, xs: 0 }, mt: 2 }}>
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#292F3D",
                  fontFamily: secondaryFont.style.fontFamily,
                  textAlign: "start"
                }}
              >
                Please confirm your choice
              </Typography>

              <Typography
                sx={{
                  fontSize: 28,
                  fontWeight: 600,
                  color: "#292F3D",
                  fontFamily: secondaryFont.style.fontFamily,
                  textAlign: "start",
                  lineHeight: '26px',
                  mt: -3
                }}
              >
                {productType}
              </Typography>

              <Grid container>
                <Grid item md={12} xs={12}>
                  {renderMain}
                </Grid>
              </Grid>
              <Grid container>
                <Grid item md={6} xs={6}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      width: "75%", height: 40, ml: 2, bgcolor: "#bfbfbf",
                      "&:hover ": { bgcolor: "#6AB67A" },
                    }}
                    onClick={() => router.push({
                      pathname: PATH_CONFIGURATOR.product.create(productType),
                      query: {
                        isEdit: true,
                        customProduct: JSON.stringify({ context: context })
                      }
                    }, PATH_CONFIGURATOR.product.create(productType))}
                  >
                    <Typography
                      sx={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "#fff",
                        fontFamily: secondaryFont.style.fontFamily,
                      }}
                    >
                      EDIT
                    </Typography>
                  </Button>
                </Grid>
                <Grid item md={6} xs={6}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      width: "75%", height: 40, ml: 2, bgcolor: '#292F3D',
                      "&:hover": { bgcolor: "#6AB67A" },
                    }}
                    onClick={props.onConfirm}
                  >
                    <Typography
                      sx={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "#fff",
                        fontFamily: secondaryFont.style.fontFamily,
                      }}
                    >
                      CONFIRM
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </CustomizeProvider>
  );
}
