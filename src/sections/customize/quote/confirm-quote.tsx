import React from "react";
import { Box, Button, Typography, Grid, TableCell, TableRow, TableContainer, Table, TableBody, Stack } from "@mui/material";
import Image from "@/components/image";
import { secondaryFont } from "@/theme/typography";
import { Canvas } from "@react-three/fiber";
import { PATH_CONFIGURATOR } from "@/routers/path";
import { useRouter } from "next/router"; "@next/router";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { TShartMan, HoodyMan, PantMan, ShortMan, SWEATMAN, OversizeMan } from "@/sections/customize/configurator/models";
import { CustomizeProvider } from "@/components/customize/context";
import ConfigurationCanvas from "../configurator/configuration-canvas";

const SIZES = ["XS", "S", "M", "L", "XL"];
export default function ConfirmQuote(props: any) {
  const router = useRouter();
  const customProduct = props.customProduct;
  return (
    <CustomizeProvider passInitState={customProduct.context}>
      <Box component={"div"} sx={{ textAlign: { xs: "center", md: "start" } }}>
        <Grid container spacing={5}>
          <Grid item md={7} xs={12}>
            <Box component={"div"} sx={{ mt: 2, mb: 2 }}>
              <ConfigurationCanvas page="customize-edit-view" ctx={typeof customProduct.context === 'object' ? customProduct.context : {}} arrowLeftCount={0} arrowRightCount={0} id="myCanvas" {...props} />
            </Box>

          </Grid>

          <Grid item md={4} xs={12}>
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
                  fontSize: 19,
                  fontWeight: 600,
                  color: "#292F3D",
                  fontFamily: secondaryFont.style.fontFamily,
                  textAlign: "start",
                  lineHeight: '26px',
                  mt: -3
                }}
              >
                {customProduct['type']}
              </Typography>

              <TableContainer sx={{ mt: -5 }}>
                <Table>
                  <TableBody>
                    <TableRow sx={{ borderBottom: "1px solid #ACB1B8" }}>
                      <TableCell sx={{ pl: 0, pb: 0.7 }}>
                        <Typography
                          sx={{
                            fontSize: 14,
                            fontWeight: 500,
                            color: "#ACB1B8",
                            fontFamily: secondaryFont.style.fontFamily,
                          }}
                        >
                          Size
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ pb: 0.7 }}>
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontWeight: 500,
                            color: "#292F3D",
                            fontFamily: secondaryFont.style.fontFamily,
                          }}
                        >
                          {customProduct['size']}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ borderBottom: "1px solid #ACB1B8" }}>
                      <TableCell sx={{ pl: 0, pb: 0.7, pt: 0.7 }}>
                        <Typography
                          sx={{
                            fontSize: 14,
                            fontWeight: 500,
                            color: "#ACB1B8",
                            fontFamily: secondaryFont.style.fontFamily,
                          }}
                        >
                          Material
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ pb: 0.7, pt: 0.7 }}>
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontWeight: 500,
                            color: "#292F3D",
                            fontFamily: secondaryFont.style.fontFamily,
                          }}
                        >
                          {customProduct['material']}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ borderBottom: "1px solid #ACB1B8" }}>
                      <TableCell sx={{ pl: 0, pb: 0.7, pt: 0.7 }}>
                        <Typography
                          sx={{
                            fontSize: 14,
                            fontWeight: 500,
                            color: "#ACB1B8",
                            fontFamily: secondaryFont.style.fontFamily,
                          }}
                        >
                          Color
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ pb: 0.7, pt: 0.7 }}>
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontWeight: 500,
                            color: "#292F3D",
                            fontFamily: secondaryFont.style.fontFamily,
                          }}
                        >
                          {customProduct['color']}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ borderBottom: "1px solid #ACB1B8" }}>
                      <TableCell sx={{ pl: 0, pb: 0.7, pt: 0.7 }}>
                        <Typography
                          sx={{
                            fontSize: 14,
                            fontWeight: 500,
                            color: "#ACB1B8",
                            fontFamily: secondaryFont.style.fontFamily,
                          }}
                        >
                          Lace
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ pb: 0.7, pt: 0.7 }}>
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontWeight: 500,
                            color: "#292F3D",
                            fontFamily: secondaryFont.style.fontFamily,
                          }}
                        >
                          {customProduct['lace']}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ borderBottom: "1px solid #ACB1B8" }}>
                      <TableCell sx={{ pl: 0, pb: 0.7, pt: 0.7 }}>
                        <Typography
                          sx={{
                            fontSize: 14,
                            fontWeight: 500,
                            color: "#ACB1B8",
                            fontFamily: secondaryFont.style.fontFamily,
                          }}
                        >
                          Tip
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ pb: 0.7, pt: 0.7 }}>
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontWeight: 500,
                            color: "#292F3D",
                            fontFamily: secondaryFont.style.fontFamily,
                          }}
                        >
                          {customProduct['lace-tip']}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ borderBottom: "1px solid #ACB1B8" }}>
                      <TableCell sx={{ pl: 0, pb: 0.7, pt: 0.7 }}>
                        <Typography
                          sx={{
                            fontSize: 14,
                            fontWeight: 500,
                            color: "#ACB1B8",
                            fontFamily: secondaryFont.style.fontFamily,
                          }}
                        >
                          Text
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ pb: 0.7, pt: 0.7 }}>
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontWeight: 500,
                            color: "#292F3D",
                            fontFamily: secondaryFont.style.fontFamily,
                          }}
                        >
                          I'm the coolest man in the world
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ borderBottom: "1px solid #ACB1B8" }}>
                      <TableCell sx={{ pl: 0, pb: 0.7, pt: 0.7 }}>
                        <Typography
                          sx={{
                            fontSize: 14,
                            fontWeight: 500,
                            color: "#ACB1B8",
                            fontFamily: secondaryFont.style.fontFamily,
                          }}
                        >
                          Tag
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ pb: 0.7, pt: 0.7 }}>
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontWeight: 500,
                            color: "#292F3D",
                            fontFamily: secondaryFont.style.fontFamily,
                          }}
                        >
                          <Image src="/models/decor_img.jpg" width={25} height={20} mb={0.5} /> Image
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow >
                      <TableCell sx={{ pl: 0, pb: 0.7, pt: 0.7 }}>
                        <Typography
                          sx={{
                            fontSize: 14,
                            fontWeight: 500,
                            color: "#ACB1B8",
                            fontFamily: secondaryFont.style.fontFamily,
                          }}
                        >
                          Image
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ pb: 0.7, pt: 0.7 }}>
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontWeight: 500,
                            color: "#292F3D",
                            fontFamily: secondaryFont.style.fontFamily,
                          }}
                        >
                          <Image src="/models/decor_img.jpg" width={25} height={20} mb={0.5} /> Image
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer >

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
                      pathname: PATH_CONFIGURATOR.product.create(props.customProduct.type),
                      query: {
                        isEdit: true,
                        customProduct: JSON.stringify(props.customProduct)
                      }
                    }, PATH_CONFIGURATOR.product.create(props.customProduct.type))}
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
