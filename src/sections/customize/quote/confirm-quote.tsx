import React from "react";
import { Box, Button, Typography, Grid, TableCell, TableRow, TableContainer, Table, TableBody, Stack } from "@mui/material";
import Image from "@/components/image";
import { secondaryFont } from "@/theme/typography";
import { Canvas } from "@react-three/fiber";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { TShartMan, HoodyMan, PantMan, ShortMan, SWEATMAN, OversizeMan } from "@/sections/customize/configurator/models";

type Props = {
  onConfirm: VoidFunction;
};
const SIZES = ["XS", "S", "M", "L", "XL"];
export default function ConfirmQuote({ onConfirm, query, customize }: Props) {

  let customProductInfo = {
    'img': 'img',
    'color': 'color',
    'size': 'size',
    'material': 'material',
    'lace': 'lace',
    'lace-tip': 'laceTip',
    'type': 'T-Shirts'
  }
  try {
    customProductInfo = JSON.parse(localStorage.getItem('product-info'));
    customProductInfo.size = SIZES[customProductInfo.size];
  } catch (e) { }

  return (
    <Box component={"div"} sx={{ textAlign: {xs: "center", md: "start"}}}>
      <Grid container spacing={5}>
        <Grid item md={7} xs={12}>
          <Box component={"div"} sx={{ mt: 2, mb: 2 }}>
            <Image src={`${customProductInfo['img']}`} sx={{width: {xs: "70%"}, margin: "auto"}}/>
          </Box>
        </Grid>

        <Grid item md={4} xs={12}>
          <Stack gap={6} sx={{ mt: 2 }}>
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
              {customProductInfo['type']}
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
                        {customProductInfo['size']}
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
                        {customProductInfo['material']}
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
                        {customProductInfo['color']}
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
                        {customProductInfo['lace']}
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
                        {customProductInfo['lace-tip']}
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
                  onClick={onConfirm}
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
                  onClick={onConfirm}
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
  );
}
